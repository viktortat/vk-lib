var url = require('url');
var _ = require('underscore');
var request = require('request');

function isFunc(value) {
  return typeof value === 'function'
}

function isArr(obj){
	return Object.prototype.toString.call( obj ) === '[object Array]';
}

function arrToStr(arr){
	return _.reduce(arr, function(memo, el){return memo + ',' + el});
}


function composeUrl(link, qs){
	var u = url.parse(link, true);
	if(qs) u.query = qs;
	return url.format(u);
}

function typeOf(value) {
    var s = typeof value;
    if (s === 'object') {
        if (value) {
            if (Object.prototype.toString.call(value) == '[object Array]') s = 'array';
        } else {
            s = 'null';
        }
    }
    return s;
}

function cloneObj(obj) {
    if(obj == null || typeof(obj) != 'object') return obj;
    var temp = obj.constructor(); // changed
    for(var key in obj) {
        if(obj.hasOwnProperty(key)) {
            temp[key] = cloneObj(obj[key]);
        }
    }
    return temp;
}

function getJSON(opt, cb){
	opt.timeout = 8000;
	request(opt, function(err, res, data){
		if(err) return cb(err);
		if(res.statusCode != 200) return cb('wrong status code: ' + res.statusCode);
		if(!data) return cb("request response body is empty");
		try{
			if(typeof data === "string") data = JSON.parse(data);
			return cb(null, data);
		}catch(e){
			return cb("data parsing error: " + e);
		}
	});
}

function isWebLink(url){
	var regexp = /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
	if(regexp.test(url)) return true;
	else return false;
}

function isVkMediaLink(link){
	var regexp = /[A-z]+[\d-]+_\d+/g;
	if(regexp.test(url)) return true;
	else return false;
}

function isYoutubeLink(link){
	if(youtubeVideoID(link)) return true;
	else return false;
}

function youtubeVideoID(link){
    var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    return (link.match(p)) ? RegExp.$1 : false;
}

function urlContentType(url, cb){
	request.head(url, function(err, res, body){
		if(err) return cb(err);
		cb(null, res.headers['content-type']);
	});
}

function mimeToType(content_type){
	content_type = content_type.toLowerCase();
	if(content_type.indexOf("text/html") >= 0) return "text";
	if(content_type.indexOf("image/gif") >= 0) return "image";
	if(content_type.indexOf("image/jpeg") >= 0) return "image";
	if(content_type.indexOf("image/pjpeg") >= 0) return "image";
	if(content_type.indexOf("image/png") >= 0) return "image";
	if(content_type.indexOf("image/svg+xml") >= 0) return "image";
	return null;
}

function isGroupID(id){
	if(parseInt(id) < 0) return true;
	else return false;
}

function removeMinus(str){
	return str.replace("-", "");
}

exports.isFunc = isFunc;
exports.isArr = isArr;

exports.arrToStr = arrToStr;
exports.typeOf = typeOf;
exports.cloneObj = cloneObj;

exports.composeUrl = composeUrl;
exports.getJSON = getJSON;

exports.isWebLink = isWebLink;
exports.isVkMediaLink = isVkMediaLink;
exports.isYoutubeLink = isYoutubeLink;
exports.youtubeVideoID = youtubeVideoID;

exports.urlContentType = urlContentType;
exports.mimeToType = mimeToType;

exports.isGroupID = isGroupID;
exports.removeMinus = removeMinus;