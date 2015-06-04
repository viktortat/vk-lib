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

function isVideoLink(link){
	if(isYoutubeLink(link)) return true;
	if(isVimeoLink(link)) return true;
	return false;
}

function isYoutubeLink(link){
	if(youtubeVideoID(link)) return true;
	else return false;
}

function youtubeVideoID(link){
    var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    return (link.match(p)) ? RegExp.$1 : false;
}

function isVimeoLink(link){
	if(vimeoVideoID(link)) return true;
	return false;
}

function vimeoVideoID(link){
	var regExp = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;
	var match = regExp.exec(link);
	if(!match) return null;
	return match[5];
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

function ownerToUserOrGroup(opt){
	opt = cloneObj(opt);
	if(opt.owner_id){
		if(isGroupID(opt.owner_id)){
			opt.group_id = removeMinus(opt.owner_id);
		}else{
			opt.user_id = opt.owner_id;
		}
		delete opt.owner_id;
	}
	return opt;
}

function saveVideoReq(upload_url, cb){
	request.post({url: upload_url}, function(err, response, body){
	  if(err) return cb(err);
	  if(!body) return cb("save video request: body is empty");
	  try{
	  	body = JSON.parse(body);
	  	if(!body.response) return cb("save video request: response code not set");
		if(!(body.response == 1)) return cb("save video request: wrong body response code");
		return cb(null);
	  }catch(e){
	  	return cb("save video request: body parsing error");
	  }
	});
}

exports.isFunc = isFunc;
exports.isArr = isArr;

exports.arrToStr = arrToStr;
exports.typeOf = typeOf;
exports.cloneObj = cloneObj;

exports.composeUrl = composeUrl;
exports.getJSON = getJSON;
exports.saveVideoReq = saveVideoReq;

exports.isWebLink = isWebLink;
exports.isVkMediaLink = isVkMediaLink;

exports.isVideoLink = isVideoLink;
exports.isYoutubeLink = isYoutubeLink;
exports.youtubeVideoID = youtubeVideoID;
exports.isVimeoLink = isVimeoLink;
exports.vimeoVideoID = vimeoVideoID;

exports.urlContentType = urlContentType;
exports.mimeToType = mimeToType;

exports.isGroupID = isGroupID;
exports.removeMinus = removeMinus;
exports.ownerToUserOrGroup = ownerToUserOrGroup;