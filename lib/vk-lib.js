var request = require('request');
var async = require('async');
var helpers = require('./helpers');
var apiExtend = require('./api_extend');
var url = require('url');

var API_ROOT = 'https://api.vk.com/method/';
var API_VERSION = '5.33';
var MAX_COUNT = 1000;

function VK(opt){
	apiExtend.extend(this);
	if(opt && opt.access_token) this.access_token = opt.access_token;
}

// https://vk.com/dev/auth_server
VK.serverAuth = function(opt, cb){
	if(!opt) throw new Error('options is required');
	opt.grant_type = 'client_credentials';
	VK.requestAccessToken(opt, cb);
}

// https://vk.com/dev/auth_sites
VK.siteAuthLink = function(opt){
	if(!opt) throw new Error('options is required');
	opt.response_type = 'code';
	return this.authLink(opt);
}

//convert code to access token
VK.codeToAccessToken = function(opt, cb){
	if(!opt) throw new Error('options is required');
	if(!opt.code) throw new Error('code not set');
	VK.requestAccessToken(opt, cb);
}

//https://vk.com/dev/auth_mobile
VK.clientAppAuthLink = function(opt){
	if(!opt) throw new Error('options is required');
	opt.response_type = 'access_token';
	if(!opt.display) opt.display = "page";
	if(!opt.redirect_uri) opt.redirect_uri = "https://oauth.vk.com/blank.html";
	return this.authLink(opt);
}


VK.authLink = function(opt){
	if(!opt.client_id) throw new Error('client_id not set');
	opt.v = API_VERSION;
	if(opt.scope && helpers.isArr(opt.scope)) opt.scope = helpers.arrToStr(opt.scope);
	return helpers.composeUrl('https://oauth.vk.com/authorize', opt);
}

VK.requestAccessToken = function(opt, cb){
	if(!opt) throw new Error('options is required');
	if(!opt.client_id) throw new Error('client_id not set');
	if(!opt.client_secret) throw new Error('client_secret not set');

	var url = 'https://oauth.vk.com/access_token';
	opt.v = API_VERSION;

	helpers.getJSON({url: url, qs: opt}, function(err, data){
		if(err) return cb(err);
		if(data.error) return cb(data.error);
		cb(null, data);
	})
}

VK.prototype = {
	serverAuth: function(opt, cb){VK.serverAuth(opt,cb);},
	siteAuthLink: function(opt){return VK.siteAuthLink(opt);},
	codeToAccessToken: function(opt, cb){VK.codeToAccessToken(opt, cb);},
	clientAppAuthLink: function(opt, cb){return VK.clientAppAuthLink(opt);},
	authLink: function(opt, cb){return VK.authLink(opt);},

	setToken: function(token){
		this.setAccessToken(token);
	},

	setAccessToken: function(token){
		this.access_token = token;
	},

	apiReq: function(method, opt, cb){
		if(typeof method === 'undefined'){throw new Error('undefined is not a valid api method');}
		if(typeof opt === 'function'){cb = opt; opt = {};}
		opt.access_token = opt.access_token || this.access_token;

		if((method == "groups.getMembers")&&(opt.count == 'all')) return this.getAllGroupMembers(opt, cb);

		var uri = API_ROOT + method;
		helpers.getJSON({url: uri, qs: opt}, function(err, data){
			if(err) return cb(err);
			if(data.error) return cb(data.error);
			if(data.response) return cb(null, data.response);
			return cb('wrong api response');
		});
	},

	getAllGroupMembers: function(opt, cb){
		var self = this;
		if(opt.count == 'all') delete opt.count;
		var max_count = 1000;
		var iteration = 0;
		var last = false;
		var users = [];
		async.whilst(
			function(){return !last},
			function(cb){
				opt.count = max_count;
				opt.offset = (iteration * max_count);
				iteration++;
				self.groups.getMembers(opt, function(err, data){
					//process 'to many request per second' error
					if(err && (err.error_code == 6)){iteration--; return setTimeout(cb, 1000)}
					if(err) return cb(err);
					users = users.concat(data.users);
					if(data.users.length < 1000) last = true;
					cb();
				})
			},
			function(err){return cb(err, users);}
		);
	}
}

module.exports = VK;