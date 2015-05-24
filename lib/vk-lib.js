var request = require('request');
var helpers = require('./helpers');
var extend = require('util')._extend;
var apiExtend = require('./api_extend');

var API_ROOT = 'https://api.vk.com/method/';

function VK(){
	apiExtend.extend(this);
}

VK.prototype = {

	setAccessToken: function(token){
		this.at = token;
	},

	setToken: function(token){
		this.at = token;
	},

	apiReq: function(method, opt, cb){
		if(typeof method === 'undefined'){
			throw new Error('undefined is not a valid api method or options object.');
		}
		if(typeof opt === 'function'){
			cb = opt; opt = {};
		}
		opt.access_token = opt.access_token || this.at;
		var uri = API_ROOT + method;
		request({uri: uri, qs:opt}, function(err, res, data){
			if(err) return cb(err);
			if(res.statusCode != 200) return cb('wrong status code: ' + res.statusCode);
			if(!data) return cb('api response data is empty');
			try{
				data = JSON.parse(data);
				if(data.error) return cb(data.error);
				if(data.response) return cb(null, data.response);
				return cb('wrong api response');
			}catch(err){
				return cb('parsing api response body error');
			}
		})
	}
}

module.exports = VK;