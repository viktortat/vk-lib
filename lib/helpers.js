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


function composeUrl(protocol, path, qs){
	var u = {};
	u.protocol = protocol;
	u.host = path;
	if(qs) u.query = qs;
	return url.format(u);
}

function getJSON(opt, cb){
	console.log(JSON.stringify(opt));
	request(opt, function(err, res, data){
		if(err) return cb(err);
		if(!data) return cb("response body is empty");
		try{
			if(typeof data === "string") data = JSON.parse(data);
			return cb(null, data);
		}catch(err){
			return cb("data parsing error: " + err);
		}
	});
}


function isYoutubeLink(link){
	if(youtubeVideoID(link)) return true;
	else return false;
}

function youtubeVideoID(link){
    var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    return (link.match(p)) ? RegExp.$1 : false;
}

exports.isFunc = isFunc;
exports.isArr = isArr;

exports.arrToStr = arrToStr;

exports.composeUrl = composeUrl;
exports.getJSON = getJSON;

exports.isYoutubeLink = isYoutubeLink;
exports.youtubeVideoID = youtubeVideoID;