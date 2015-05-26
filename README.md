# NodeJS modue for VK API

**vk-lib** is a nodejs module that provides easy access to the [VK API methods](https://vk.com/dev/methods) ([vk.com](vk.com)).

## Installation

Installation via npm:

```
$ npm install vk-lib --save
```

## Initialization

```javascript
var VK = require('vk-lib');

var vk = new VK();
```

## Authorization

VK suport three types of authorization.

### [Sites Authorization](https://vk.com/dev/auth_sites)

With this type of authorization firs of all you need to receive special code and than exchange it for access token.

```javascript
var VK = require('vk-lib');

var opt = {
	"client_id": "%APP_ID%",  
	"scope": ["friends", "photos", "audio"],
	"redirect_uri": "%REDIRECT_URI%"
}

var link = VK.siteAuthLink(opt);
```

After successful application authorization, user's browser will be redirected to REDIRECT_URI URL specified when the authorization dialog box was opened. With that, code to receive **code** access key will be passed in GET parameter to the specified URL:

```
http://REDIRECT_URI?code=7a6fa4dff77a228eeda56603b8f53806c883f011c40b72630bb50df056f6479e52a
```
**code** parameter can be used within 1 hour to receive **access_token** key for API from your server.

To receive code you need to exchange it for access token:

```javascript
var opt = {
	"client_id": "%APP_ID%",  
	"client_secret": "%APP_SECRET%",  
	"code": "7a6fa4dff77a228eeda56603b8f53806c883f011c40b72630bb50df056f6479e52a"
	"redirect_uri": "%REDIRECT_URI%"
}

VK.codeToAccessToken(opt, function(err, access_token_data){
	if(err) throw new Error(err);
	console.log(JSON.stringify(access_token_data));
})
```

### [Client Application Authorization](https://vk.com/dev/auth_mobile)

With client authorization you will receive **access_token** to the right to the **redirect URL** ([https://oauth.vk.com/blank.html](https://oauth.vk.com/blank.html) by default). Parameter **display** specify to **page** by default. For generating auth link you need next code:

```javascript
var opt = {
	"client_id": "%APP_ID%",
	"scope": ["friends", "photos", "audio"]
}

var link = VK.clientAppAuthLink(opt);
```

### [Application Server Authorization](https://vk.com/dev/auth_server)

To access API administrative methods that do not require user authentication you need to get a special access key — **access_token**. To do this you need next code:

```javascript
var opt = {
	"client_id": "%CLIENT_ID%",
	"client_secret": "%CLIENT_SECRET%"
}

VK.serverAuth(opt, function(err, access_token_data){
	if(err) throw new Error(err);
	console.log(JSON.stringify(access_token_data));
});
```

## Setting access token

You can set access token in three ways. At the initialization:

```javascript
var vk = new VK({access_token: "%my_access_token%"});
```

Using method:


```javascript
vk.setToken("%my_access_token%");
```

Direct in API's call:


```javascript
vk.users.get({uids: "snipter", access_token: "%my_access_token%"}, function(err, users_data){
	if(err) throw new Error(err);
	console.log(JSON.stringify(users_data));
});
```

You can also check acces token (using [secure.checkToken](https://vk.com/dev/secure.checkToken) method):

```javascript
var opt = {
	client_id: '%app_id%', 
	client_secret:'%app_secret%', 
	access_token: '%access_token%'
}

VK.checkToken(opt, function(err, check_result){
	if(err) throw new Error(err);
	console.log(JSON.stringify(check_result));
});
```

## Calling methods

With this module you can call [VK API methods](https://vk.com/dev/methods) in two ways. First:

```javascript
var vk = new VK();
vk.setToken('%my_access_token%');
vk.users.get({uids: "snipter"}, function(err, users_data){
	if(err) throw new Error(err);
	console.log(JSON.stringify(users_data));
});
```

Second:

```javascript
var vk = new VK();
vk.setToken('%my_access_token%');
vk.apiReq("users.get", {uids: "snipter"}, function(err, users_data){
	if(err) throw new Error(err);
	console.log(JSON.stringify(users_data));
});
```

You can find full list of VK API methods [here](https://vk.com/dev/methods).

## Captcha handler

You can set captcha's handler function. This function will handle all [captcha errors](https://vk.com/dev/captcha_error) and module will repeat the same api request but with **captcha_key** param:

```javascript
vk.setCaptchaHandler(function(captcha_img_link, cb){
	console.log(captcha_img_link);
	// here is going magick where you enter
	// code from captcha image
	cb(code);
});
```

## Aditional methods

Get all group members:

```javascript
vk.groups.getMembers({group_id: 'kgtv.kremen', count: 'all'}, function(err, ids){
	if(err) throw new Error(err);
	console.log(JSON.stringify(ids));
})
```

## TODO

- Upload attachments;

## Contacts

Jaroslav Khorishchenko<br/>
websnipter@gmail.com