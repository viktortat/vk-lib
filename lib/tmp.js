var request = require("request");
var fs = require("fs");
var mime = require('mime-types');
var temp = require("temp").track();

var TEMP_PREFIX = 'vk-lib';


var downloadFile = function(uri, cb){
	request.head(uri, function(err, res, body){
		var content_type = res.headers['content-type'];
		var content_length = res.headers['content-length'];
		var content_ext = "." + contentTypeToExt(content_type);
		temp.open({prefix: TEMP_PREFIX, suffix: content_ext}, function(err, file_info){
			if(err) return cb(err);
			request(uri).pipe(fs.createWriteStream(file_info.path)).on('close', function(err){
				if(err) return cb(err);
				cb(null, file_info.path);
			});
		});
	});
}

var removeFile = function(file_path, cb){
	fs.unlink(file_path, function(err){
		if(err) return cb(err);
		cb();
	});
}

function contentTypeToExt(content_type){
	content_type = content_type.toLowerCase();
	return mime.extension(content_type);
}

/*============ Exports ============*/

exports.downloadFile = downloadFile;
exports.removeFile = removeFile;