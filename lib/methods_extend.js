var tmp = require('./tmp.js');
var upload = require('./upload.js');
var helpers = require('./helpers');
var validUrl = require('valid-url');
var async = require('async');
var fs = require('fs');

exports.extend = function(self){

	/*============ Post to wall ============*/

	self.wall.post = function(opt, cb){
		if(!opt.attachments) return self.apiReq('wall.post', opt, cb);
		opt.attachments = formatAttachments(opt.attachments);
		if(!opt.attachments) return callback("wrong attachments format");
	}

	var uploadAttachments = function(attachments, opt, cb){
		async.mapSeries(attachments, function(att, cb){
			uploadSingleAttachment(att, opt, cb);
		}, function(err, att_array){
			if(err) return cb(err);
			var att_str = composeAttachmentStr(att_array);
			return cb(null, att_str);
		});
	}

	var uploadSingleAttachment = function(att_str, opt, cb){
		if(helpers.isVkMediaLink(att_str)) return cb(null, attStr);
		if(helpers.isYoutubeLink(att_str)) return uploadYoutubeVideo(att_str, opt, cb);
		if(helpers.isWebLink(attStr)){
			urlContentType(attStr, function(err, contentType){
				if(isContentTypeImage(contentType)){
					options = cloneObj(options);
					options.group_id = removeMinus(options.owner_id);
					delete options.owner_id;
					return photosUploadPhotoFromURLToWall(attStr, options, function(err, photoArr){
						if(err) return callback(err);
						var photo = photoArr[0];
						callback(null, photo.id);
					});
				}
				if(isContentTypeText(contentType)) return callback(null, attStr);
				return callback("unknow attachment format");
			});
		}else{
			return cb("unknow attachment format: " + att_str);
		}
	}

	var formatAttachments = function(att){
		if(att == null) return null; 
		if(helpers.typeOf(att) == "string") return att.split(',');
		if(helpers.typeOf(att) == "array") return att;
	}

	var composeAttachmentStr = function(arr){
		return _.reduce(arr, function(memo, att){
			return memo + ',' + att;
		});
	}

	/*============ Upload photo to wall ============*/

	self.photos.uploadToWall = function(file_path, opt, cb){
		if(validUrl.isUri(file_path)) self.photos.uploadFromURLToWall(file_path, opt, cb);
		else self.photos.uploadFromFileToWall(file_path, opt, cb);
	}

	self.photos.uploadFromURLToWall = function(uri, opt, cb){
		tmp.downloadFile(uri, function(err, file_path){
			if(err) return cb(err);
			self.photos.uploadFromFileToWall(file_path, opt, function(err, upload_data){
				if(err) return cb(err);
				tmp.removeFile(file_path, function(err){
					if(err) return cb(err);
					cb(null, upload_data);
				});
			});
		});
	}

	self.photos.uploadFromFileToWall = function(file_name, opt, cb){
		if(opt.user_id) opt.user_id = opt.user_id.toString().replace("-", "");
		if(opt.group_id) opt.group_id = opt.group_id.toString().replace("-", "");
		fs.exists(file_name, function(exists){
			if(!exists) return cb("file not found");
			self.photos.getWallUploadServer(opt, function(err, upload_data){
				if(err) return cb(err);
				upload.photoToLink(file_name, upload_data.upload_url, function(err, upload_file_data){
					if(err) return cb(err);
					opt.photo = upload_file_data.photo;
					opt.server = upload_file_data.server;
					opt.hash = upload_file_data.hash;
					self.photos.saveWallPhoto(opt, function(err, upload_data){
						if(err) return cb(err);
						//if returned array contain only one element
						//return this element
						if(upload_data.length == 1) upload_data = upload_data[0];
						//if more than one - return array
						cb(null, upload_data);
					});
				});
			});
		});
	}
}