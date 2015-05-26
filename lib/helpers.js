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

function getJSON(opt, cb){
	request(opt, function(err, res, data){
		if(err) return cb(err);
		if(res.statusCode != 200) return cb('wrong status code: ' + res.statusCode);
		if(!data) return cb("request response body is empty");
		try{
			if(typeof data === "string") data = JSON.parse(data);
			return cb(null, data);
		}catch(e){
			return cb("data parsing error: " + JSON.stringify(e));
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