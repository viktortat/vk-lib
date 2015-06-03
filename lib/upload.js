var fs = require('fs');
var mime = require('mime-types');
var rest = require('restler');
var path = require('path');

var uploadPhotoToLink = function(file_path, url, cb){
	var stats = fs.statSync(file_path);
	var content_length = stats["size"];
	var content_type = mime.contentType(path.extname(file_path))
	rest.post(url, {
		multipart: true,
		data: {'photo': rest.file(file_path, null, content_length, null, 'image/jpeg')}
	}).on('complete', function(result){
		if (result instanceof Error) return cb(result.message);
		try{
			var data = JSON.parse(result);
			return cb(null, data);
		}catch(e){
			return cb("data parsing error");
		}
	});
}

exports.photoToLink = uploadPhotoToLink;