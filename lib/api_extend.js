exports.extend = function(self){
	self.users = {
		get: function(opt, cb){self.apiReq('users.get', opt, cb);},
		search: function(opt, cb){self.apiReq('users.search', opt, cb);},
		isAppUser: function(opt, cb){self.apiReq('users.isAppUser', opt, cb);},
		getSubscriptions: function(opt, cb){self.apiReq('users.getSubscriptions', opt, cb);},
		getFollowers: function(opt, cb){self.apiReq('users.getFollowers', opt, cb);},
		report: function(opt, cb){self.apiReq('users.report', opt, cb);},
		getNearby: function(opt, cb){self.apiReq('users.getNearby', opt, cb);}
	}
	self.auth = {
		checkPhone: function(opt, cb){self.apiReq('auth.checkPhone', opt, cb);},
		signup: function(opt, cb){self.apiReq('auth.signup', opt, cb);},
		confirm: function(opt, cb){self.apiReq('auth.confirm', opt, cb);},
		restore: function(opt, cb){self.apiReq('auth.restore', opt, cb);}
	}
	self.wall = {
		get: function(opt, cb){self.apiReq('wall.get', opt, cb);},
		search: function(opt, cb){self.apiReq('wall.search', opt, cb);},
		getById: function(opt, cb){self.apiReq('wall.getById', opt, cb);},
		post: function(opt, cb){self.apiReq('wall.post', opt, cb);},
		repost: function(opt, cb){self.apiReq('wall.repost', opt, cb);},
		getReposts: function(opt, cb){self.apiReq('wall.getReposts', opt, cb);},
		edit: function(opt, cb){self.apiReq('wall.edit', opt, cb);},
		delete: function(opt, cb){self.apiReq('wall.delete', opt, cb);},
		restore: function(opt, cb){self.apiReq('wall.restore', opt, cb);},
		pin: function(opt, cb){self.apiReq('wall.pin', opt, cb);},
		unpin: function(opt, cb){self.apiReq('wall.unpin', opt, cb);},
		getComments: function(opt, cb){self.apiReq('wall.getComments', opt, cb);},
		addComment: function(opt, cb){self.apiReq('wall.addComment', opt, cb);},
		editComment: function(opt, cb){self.apiReq('wall.editComment', opt, cb);},
		deleteComment: function(opt, cb){self.apiReq('wall.deleteComment', opt, cb);},
		restoreComment: function(opt, cb){self.apiReq('wall.restoreComment', opt, cb);},
		reportPost: function(opt, cb){self.apiReq('wall.reportPost', opt, cb);},
		reportComment: function(opt, cb){self.apiReq('wall.reportComment', opt, cb);}
	}
	self.photos = {
		createAlbum: function(opt, cb){self.apiReq('photos.createAlbum', opt, cb);},
		editAlbum: function(opt, cb){self.apiReq('photos.editAlbum', opt, cb);},
		getAlbums: function(opt, cb){self.apiReq('photos.getAlbums', opt, cb);},
		get: function(opt, cb){self.apiReq('photos.get', opt, cb);},
		getAlbumsCount: function(opt, cb){self.apiReq('photos.getAlbumsCount', opt, cb);},
		getById: function(opt, cb){self.apiReq('photos.getById', opt, cb);},
		getUploadServer: function(opt, cb){self.apiReq('photos.getUploadServer', opt, cb);},
		getOwnerPhotoUploadServer: function(opt, cb){self.apiReq('photos.getOwnerPhotoUploadServer', opt, cb);},
		getChatUploadServer: function(opt, cb){self.apiReq('photos.getChatUploadServer', opt, cb);},
		saveOwnerPhoto: function(opt, cb){self.apiReq('photos.saveOwnerPhoto', opt, cb);},
		saveWallPhoto: function(opt, cb){self.apiReq('photos.saveWallPhoto', opt, cb);},
		getWallUploadServer: function(opt, cb){self.apiReq('photos.getWallUploadServer', opt, cb);},
		getMessagesUploadServer: function(opt, cb){self.apiReq('photos.getMessagesUploadServer', opt, cb);},
		saveMessagesPhoto: function(opt, cb){self.apiReq('photos.saveMessagesPhoto', opt, cb);},
		report: function(opt, cb){self.apiReq('photos.report', opt, cb);},
		reportComment: function(opt, cb){self.apiReq('photos.reportComment', opt, cb);},
		search: function(opt, cb){self.apiReq('photos.search', opt, cb);},
		save: function(opt, cb){self.apiReq('photos.save', opt, cb);},
		copy: function(opt, cb){self.apiReq('photos.copy', opt, cb);},
		edit: function(opt, cb){self.apiReq('photos.edit', opt, cb);},
		move: function(opt, cb){self.apiReq('photos.move', opt, cb);},
		makeCover: function(opt, cb){self.apiReq('photos.makeCover', opt, cb);},
		reorderAlbums: function(opt, cb){self.apiReq('photos.reorderAlbums', opt, cb);},
		reorderPhotos: function(opt, cb){self.apiReq('photos.reorderPhotos', opt, cb);},
		getAll: function(opt, cb){self.apiReq('photos.getAll', opt, cb);},
		getUserPhotos: function(opt, cb){self.apiReq('photos.getUserPhotos', opt, cb);},
		deleteAlbum: function(opt, cb){self.apiReq('photos.deleteAlbum', opt, cb);},
		delete: function(opt, cb){self.apiReq('photos.delete', opt, cb);},
		restore: function(opt, cb){self.apiReq('photos.restore', opt, cb);},
		confirmTag: function(opt, cb){self.apiReq('photos.confirmTag', opt, cb);},
		getComments: function(opt, cb){self.apiReq('photos.getComments', opt, cb);},
		getAllComments: function(opt, cb){self.apiReq('photos.getAllComments', opt, cb);},
		createComment: function(opt, cb){self.apiReq('photos.createComment', opt, cb);},
		deleteComment: function(opt, cb){self.apiReq('photos.deleteComment', opt, cb);},
		restoreComment: function(opt, cb){self.apiReq('photos.restoreComment', opt, cb);},
		editComment: function(opt, cb){self.apiReq('photos.editComment', opt, cb);},
		getTags: function(opt, cb){self.apiReq('photos.getTags', opt, cb);},
		putTag: function(opt, cb){self.apiReq('photos.putTag', opt, cb);},
		removeTag: function(opt, cb){self.apiReq('photos.removeTag', opt, cb);},
		getNewTags: function(opt, cb){self.apiReq('photos.getNewTags', opt, cb);}
	}
	self.friends = {
		get: function(opt, cb){self.apiReq('friends.get', opt, cb);},
		getOnline: function(opt, cb){self.apiReq('friends.getOnline', opt, cb);},
		getMutual: function(opt, cb){self.apiReq('friends.getMutual', opt, cb);},
		getRecent: function(opt, cb){self.apiReq('friends.getRecent', opt, cb);},
		getRequests: function(opt, cb){self.apiReq('friends.getRequests', opt, cb);},
		add: function(opt, cb){self.apiReq('friends.add', opt, cb);},
		edit: function(opt, cb){self.apiReq('friends.edit', opt, cb);},
		delete: function(opt, cb){self.apiReq('friends.delete', opt, cb);},
		getLists: function(opt, cb){self.apiReq('friends.getLists', opt, cb);},
		addList: function(opt, cb){self.apiReq('friends.addList', opt, cb);},
		editList: function(opt, cb){self.apiReq('friends.editList', opt, cb);},
		deleteList: function(opt, cb){self.apiReq('friends.deleteList', opt, cb);},
		getAppUsers: function(opt, cb){self.apiReq('friends.getAppUsers', opt, cb);},
		getByPhones: function(opt, cb){self.apiReq('friends.getByPhones', opt, cb);},
		deleteAllRequests: function(opt, cb){self.apiReq('friends.deleteAllRequests', opt, cb);},
		getSuggestions: function(opt, cb){self.apiReq('friends.getSuggestions', opt, cb);},
		areFriends: function(opt, cb){self.apiReq('friends.areFriends', opt, cb);},
		getAvailableForCall: function(opt, cb){self.apiReq('friends.getAvailableForCall', opt, cb);},
		search: function(opt, cb){self.apiReq('friends.search', opt, cb);}
	}
	self.widgets = {
		getComments: function(opt, cb){self.apiReq('widgets.getComments', opt, cb);},
		getPages: function(opt, cb){self.apiReq('widgets.getPages', opt, cb);}
	}
	self.storage = {
		get: function(opt, cb){self.apiReq('storage.get', opt, cb);},
		set: function(opt, cb){self.apiReq('storage.set', opt, cb);},
		getKeys: function(opt, cb){self.apiReq('storage.getKeys', opt, cb);}
	}
	self.status = {
		get: function(opt, cb){self.apiReq('status.get', opt, cb);},
		set: function(opt, cb){self.apiReq('status.set', opt, cb);}
	}
	self.audio = {
		get: function(opt, cb){self.apiReq('audio.get', opt, cb);},
		getById: function(opt, cb){self.apiReq('audio.getById', opt, cb);},
		getLyrics: function(opt, cb){self.apiReq('audio.getLyrics', opt, cb);},
		search: function(opt, cb){self.apiReq('audio.search', opt, cb);},
		getUploadServer: function(opt, cb){self.apiReq('audio.getUploadServer', opt, cb);},
		save: function(opt, cb){self.apiReq('audio.save', opt, cb);},
		add: function(opt, cb){self.apiReq('audio.add', opt, cb);},
		delete: function(opt, cb){self.apiReq('audio.delete', opt, cb);},
		edit: function(opt, cb){self.apiReq('audio.edit', opt, cb);},
		reorder: function(opt, cb){self.apiReq('audio.reorder', opt, cb);},
		restore: function(opt, cb){self.apiReq('audio.restore', opt, cb);},
		getAlbums: function(opt, cb){self.apiReq('audio.getAlbums', opt, cb);},
		addAlbum: function(opt, cb){self.apiReq('audio.addAlbum', opt, cb);},
		editAlbum: function(opt, cb){self.apiReq('audio.editAlbum', opt, cb);},
		deleteAlbum: function(opt, cb){self.apiReq('audio.deleteAlbum', opt, cb);},
		moveToAlbum: function(opt, cb){self.apiReq('audio.moveToAlbum', opt, cb);},
		setBroadcast: function(opt, cb){self.apiReq('audio.setBroadcast', opt, cb);},
		getBroadcastList: function(opt, cb){self.apiReq('audio.getBroadcastList', opt, cb);},
		getRecommendations: function(opt, cb){self.apiReq('audio.getRecommendations', opt, cb);},
		getPopular: function(opt, cb){self.apiReq('audio.getPopular', opt, cb);},
		getCount: function(opt, cb){self.apiReq('audio.getCount', opt, cb);}
	}
	self.pages = {
		get: function(opt, cb){self.apiReq('pages.get', opt, cb);},
		save: function(opt, cb){self.apiReq('pages.save', opt, cb);},
		saveAccess: function(opt, cb){self.apiReq('pages.saveAccess', opt, cb);},
		getHistory: function(opt, cb){self.apiReq('pages.getHistory', opt, cb);},
		getTitles: function(opt, cb){self.apiReq('pages.getTitles', opt, cb);},
		getVersion: function(opt, cb){self.apiReq('pages.getVersion', opt, cb);},
		parseWiki: function(opt, cb){self.apiReq('pages.parseWiki', opt, cb);},
		clearCache: function(opt, cb){self.apiReq('pages.clearCache', opt, cb);}
	}
	self.groups = {
		isMember: function(opt, cb){self.apiReq('groups.isMember', opt, cb);},
		getById: function(opt, cb){self.apiReq('groups.getById', opt, cb);},
		get: function(opt, cb){self.apiReq('groups.get', opt, cb);},
		getMembers: function(opt, cb){self.apiReq('groups.getMembers', opt, cb);},
		join: function(opt, cb){self.apiReq('groups.join', opt, cb);},
		leave: function(opt, cb){self.apiReq('groups.leave', opt, cb);},
		search: function(opt, cb){self.apiReq('groups.search', opt, cb);},
		getInvites: function(opt, cb){self.apiReq('groups.getInvites', opt, cb);},
		getInvitedUsers: function(opt, cb){self.apiReq('groups.getInvitedUsers', opt, cb);},
		banUser: function(opt, cb){self.apiReq('groups.banUser', opt, cb);},
		unbanUser: function(opt, cb){self.apiReq('groups.unbanUser', opt, cb);},
		getBanned: function(opt, cb){self.apiReq('groups.getBanned', opt, cb);},
		create: function(opt, cb){self.apiReq('groups.create', opt, cb);},
		edit: function(opt, cb){self.apiReq('groups.edit', opt, cb);},
		editPlace: function(opt, cb){self.apiReq('groups.editPlace', opt, cb);},
		getSettings: function(opt, cb){self.apiReq('groups.getSettings', opt, cb);},
		getRequests: function(opt, cb){self.apiReq('groups.getRequests', opt, cb);},
		editManager: function(opt, cb){self.apiReq('groups.editManager', opt, cb);},
		invite: function(opt, cb){self.apiReq('groups.invite', opt, cb);},
		addLink: function(opt, cb){self.apiReq('groups.addLink', opt, cb);},
		deleteLink: function(opt, cb){self.apiReq('groups.deleteLink', opt, cb);},
		editLink: function(opt, cb){self.apiReq('groups.editLink', opt, cb);},
		reorderLink: function(opt, cb){self.apiReq('groups.reorderLink', opt, cb);},
		removeUser: function(opt, cb){self.apiReq('groups.removeUser', opt, cb);},
		approveRequest: function(opt, cb){self.apiReq('groups.approveRequest', opt, cb);}
	}
	self.board = {
		getTopics: function(opt, cb){self.apiReq('board.getTopics', opt, cb);},
		getComments: function(opt, cb){self.apiReq('board.getComments', opt, cb);},
		addTopic: function(opt, cb){self.apiReq('board.addTopic', opt, cb);},
		addComment: function(opt, cb){self.apiReq('board.addComment', opt, cb);},
		deleteTopic: function(opt, cb){self.apiReq('board.deleteTopic', opt, cb);},
		editTopic: function(opt, cb){self.apiReq('board.editTopic', opt, cb);},
		editComment: function(opt, cb){self.apiReq('board.editComment', opt, cb);},
		restoreComment: function(opt, cb){self.apiReq('board.restoreComment', opt, cb);},
		deleteComment: function(opt, cb){self.apiReq('board.deleteComment', opt, cb);},
		openTopic: function(opt, cb){self.apiReq('board.openTopic', opt, cb);},
		closeTopic: function(opt, cb){self.apiReq('board.closeTopic', opt, cb);},
		fixTopic: function(opt, cb){self.apiReq('board.fixTopic', opt, cb);},
		unfixTopic: function(opt, cb){self.apiReq('board.unfixTopic', opt, cb);}
	}
	self.video = {
		get: function(opt, cb){self.apiReq('video.get', opt, cb);},
		edit: function(opt, cb){self.apiReq('video.edit', opt, cb);},
		add: function(opt, cb){self.apiReq('video.add', opt, cb);},
		save: function(opt, cb){self.apiReq('video.save', opt, cb);},
		delete: function(opt, cb){self.apiReq('video.delete', opt, cb);},
		restore: function(opt, cb){self.apiReq('video.restore', opt, cb);},
		search: function(opt, cb){self.apiReq('video.search', opt, cb);},
		getUserVideos: function(opt, cb){self.apiReq('video.getUserVideos', opt, cb);},
		getAlbums: function(opt, cb){self.apiReq('video.getAlbums', opt, cb);},
		getAlbumById: function(opt, cb){self.apiReq('video.getAlbumById', opt, cb);},
		addAlbum: function(opt, cb){self.apiReq('video.addAlbum', opt, cb);},
		editAlbum: function(opt, cb){self.apiReq('video.editAlbum', opt, cb);},
		deleteAlbum: function(opt, cb){self.apiReq('video.deleteAlbum', opt, cb);},
		reorderAlbums: function(opt, cb){self.apiReq('video.reorderAlbums', opt, cb);},
		addToAlbum: function(opt, cb){self.apiReq('video.addToAlbum', opt, cb);},
		removeFromAlbum: function(opt, cb){self.apiReq('video.removeFromAlbum', opt, cb);},
		getAlbumsByVideo: function(opt, cb){self.apiReq('video.getAlbumsByVideo', opt, cb);},
		getComments: function(opt, cb){self.apiReq('video.getComments', opt, cb);},
		createComment: function(opt, cb){self.apiReq('video.createComment', opt, cb);},
		deleteComment: function(opt, cb){self.apiReq('video.deleteComment', opt, cb);},
		restoreComment: function(opt, cb){self.apiReq('video.restoreComment', opt, cb);},
		editComment: function(opt, cb){self.apiReq('video.editComment', opt, cb);},
		getTags: function(opt, cb){self.apiReq('video.getTags', opt, cb);},
		putTag: function(opt, cb){self.apiReq('video.putTag', opt, cb);},
		removeTag: function(opt, cb){self.apiReq('video.removeTag', opt, cb);},
		getNewTags: function(opt, cb){self.apiReq('video.getNewTags', opt, cb);},
		report: function(opt, cb){self.apiReq('video.report', opt, cb);},
		reportComment: function(opt, cb){self.apiReq('video.reportComment', opt, cb);}
	}
	self.notes = {
		get: function(opt, cb){self.apiReq('notes.get', opt, cb);},
		getById: function(opt, cb){self.apiReq('notes.getById', opt, cb);},
		getFriendsNotes: function(opt, cb){self.apiReq('notes.getFriendsNotes', opt, cb);},
		add: function(opt, cb){self.apiReq('notes.add', opt, cb);},
		edit: function(opt, cb){self.apiReq('notes.edit', opt, cb);},
		delete: function(opt, cb){self.apiReq('notes.delete', opt, cb);},
		getComments: function(opt, cb){self.apiReq('notes.getComments', opt, cb);},
		createComment: function(opt, cb){self.apiReq('notes.createComment', opt, cb);},
		editComment: function(opt, cb){self.apiReq('notes.editComment', opt, cb);},
		deleteComment: function(opt, cb){self.apiReq('notes.deleteComment', opt, cb);},
		restoreComment: function(opt, cb){self.apiReq('notes.restoreComment', opt, cb);}
	}
	self.places = {
		add: function(opt, cb){self.apiReq('places.add', opt, cb);},
		getById: function(opt, cb){self.apiReq('places.getById', opt, cb);},
		search: function(opt, cb){self.apiReq('places.search', opt, cb);},
		checkin: function(opt, cb){self.apiReq('places.checkin', opt, cb);},
		getCheckins: function(opt, cb){self.apiReq('places.getCheckins', opt, cb);},
		getTypes: function(opt, cb){self.apiReq('places.getTypes', opt, cb);}
	}
	self.account = {
		getCounters: function(opt, cb){self.apiReq('account.getCounters', opt, cb);},
		setNameInMenu: function(opt, cb){self.apiReq('account.setNameInMenu', opt, cb);},
		setOnline: function(opt, cb){self.apiReq('account.setOnline', opt, cb);},
		setOffline: function(opt, cb){self.apiReq('account.setOffline', opt, cb);},
		lookupContacts: function(opt, cb){self.apiReq('account.lookupContacts', opt, cb);},
		registerDevice: function(opt, cb){self.apiReq('account.registerDevice', opt, cb);},
		unregisterDevice: function(opt, cb){self.apiReq('account.unregisterDevice', opt, cb);},
		setSilenceMode: function(opt, cb){self.apiReq('account.setSilenceMode', opt, cb);},
		getPushSettings: function(opt, cb){self.apiReq('account.getPushSettings', opt, cb);},
		setPushSettings: function(opt, cb){self.apiReq('account.setPushSettings', opt, cb);},
		getAppPermissions: function(opt, cb){self.apiReq('account.getAppPermissions', opt, cb);},
		getActiveOffers: function(opt, cb){self.apiReq('account.getActiveOffers', opt, cb);},
		banUser: function(opt, cb){self.apiReq('account.banUser', opt, cb);},
		unbanUser: function(opt, cb){self.apiReq('account.unbanUser', opt, cb);},
		getBanned: function(opt, cb){self.apiReq('account.getBanned', opt, cb);},
		getInfo: function(opt, cb){self.apiReq('account.getInfo', opt, cb);},
		setInfo: function(opt, cb){self.apiReq('account.setInfo', opt, cb);},
		changePassword: function(opt, cb){self.apiReq('account.changePassword', opt, cb);},
		getProfileInfo: function(opt, cb){self.apiReq('account.getProfileInfo', opt, cb);},
		saveProfileInfo: function(opt, cb){self.apiReq('account.saveProfileInfo', opt, cb);}
	}
	self.messages = {
		get: function(opt, cb){self.apiReq('messages.get', opt, cb);},
		getDialogs: function(opt, cb){self.apiReq('messages.getDialogs', opt, cb);},
		getById: function(opt, cb){self.apiReq('messages.getById', opt, cb);},
		search: function(opt, cb){self.apiReq('messages.search', opt, cb);},
		getHistory: function(opt, cb){self.apiReq('messages.getHistory', opt, cb);},
		send: function(opt, cb){self.apiReq('messages.send', opt, cb);},
		delete: function(opt, cb){self.apiReq('messages.delete', opt, cb);},
		deleteDialog: function(opt, cb){self.apiReq('messages.deleteDialog', opt, cb);},
		restore: function(opt, cb){self.apiReq('messages.restore', opt, cb);},
		markAsRead: function(opt, cb){self.apiReq('messages.markAsRead', opt, cb);},
		markAsImportant: function(opt, cb){self.apiReq('messages.markAsImportant', opt, cb);},
		getLongPollServer: function(opt, cb){self.apiReq('messages.getLongPollServer', opt, cb);},
		getLongPollHistory: function(opt, cb){self.apiReq('messages.getLongPollHistory', opt, cb);},
		getChat: function(opt, cb){self.apiReq('messages.getChat', opt, cb);},
		createChat: function(opt, cb){self.apiReq('messages.createChat', opt, cb);},
		editChat: function(opt, cb){self.apiReq('messages.editChat', opt, cb);},
		getChatUsers: function(opt, cb){self.apiReq('messages.getChatUsers', opt, cb);},
		setActivity: function(opt, cb){self.apiReq('messages.setActivity', opt, cb);},
		searchDialogs: function(opt, cb){self.apiReq('messages.searchDialogs', opt, cb);},
		addChatUser: function(opt, cb){self.apiReq('messages.addChatUser', opt, cb);},
		removeChatUser: function(opt, cb){self.apiReq('messages.removeChatUser', opt, cb);},
		getLastActivity: function(opt, cb){self.apiReq('messages.getLastActivity', opt, cb);},
		setChatPhoto: function(opt, cb){self.apiReq('messages.setChatPhoto', opt, cb);},
		deleteChatPhoto: function(opt, cb){self.apiReq('messages.deleteChatPhoto', opt, cb);}
	}
	self.newsfeed = {
		get: function(opt, cb){self.apiReq('newsfeed.get', opt, cb);},
		getRecommended: function(opt, cb){self.apiReq('newsfeed.getRecommended', opt, cb);},
		getComments: function(opt, cb){self.apiReq('newsfeed.getComments', opt, cb);},
		getMentions: function(opt, cb){self.apiReq('newsfeed.getMentions', opt, cb);},
		getBanned: function(opt, cb){self.apiReq('newsfeed.getBanned', opt, cb);},
		addBan: function(opt, cb){self.apiReq('newsfeed.addBan', opt, cb);},
		deleteBan: function(opt, cb){self.apiReq('newsfeed.deleteBan', opt, cb);},
		ignoreItem: function(opt, cb){self.apiReq('newsfeed.ignoreItem', opt, cb);},
		unignoreItem: function(opt, cb){self.apiReq('newsfeed.unignoreItem', opt, cb);},
		search: function(opt, cb){self.apiReq('newsfeed.search', opt, cb);},
		getLists: function(opt, cb){self.apiReq('newsfeed.getLists', opt, cb);},
		saveList: function(opt, cb){self.apiReq('newsfeed.saveList', opt, cb);},
		deleteList: function(opt, cb){self.apiReq('newsfeed.deleteList', opt, cb);},
		unsubscribe: function(opt, cb){self.apiReq('newsfeed.unsubscribe', opt, cb);},
		getSuggestedSources: function(opt, cb){self.apiReq('newsfeed.getSuggestedSources', opt, cb);}
	}
	self.likes = {
		getList: function(opt, cb){self.apiReq('likes.getList', opt, cb);},
		add: function(opt, cb){self.apiReq('likes.add', opt, cb);},
		delete: function(opt, cb){self.apiReq('likes.delete', opt, cb);},
		isLiked: function(opt, cb){self.apiReq('likes.isLiked', opt, cb);}
	}
	self.polls = {
		getById: function(opt, cb){self.apiReq('polls.getById', opt, cb);},
		addVote: function(opt, cb){self.apiReq('polls.addVote', opt, cb);},
		deleteVote: function(opt, cb){self.apiReq('polls.deleteVote', opt, cb);},
		getVoters: function(opt, cb){self.apiReq('polls.getVoters', opt, cb);},
		create: function(opt, cb){self.apiReq('polls.create', opt, cb);},
		edit: function(opt, cb){self.apiReq('polls.edit', opt, cb);}
	}
	self.docs = {
		get: function(opt, cb){self.apiReq('docs.get', opt, cb);},
		getById: function(opt, cb){self.apiReq('docs.getById', opt, cb);},
		getUploadServer: function(opt, cb){self.apiReq('docs.getUploadServer', opt, cb);},
		getWallUploadServer: function(opt, cb){self.apiReq('docs.getWallUploadServer', opt, cb);},
		save: function(opt, cb){self.apiReq('docs.save', opt, cb);},
		delete: function(opt, cb){self.apiReq('docs.delete', opt, cb);},
		add: function(opt, cb){self.apiReq('docs.add', opt, cb);}
	}
	self.fave = {
		getUsers: function(opt, cb){self.apiReq('fave.getUsers', opt, cb);},
		getPhotos: function(opt, cb){self.apiReq('fave.getPhotos', opt, cb);},
		getPosts: function(opt, cb){self.apiReq('fave.getPosts', opt, cb);},
		getVideos: function(opt, cb){self.apiReq('fave.getVideos', opt, cb);},
		getLinks: function(opt, cb){self.apiReq('fave.getLinks', opt, cb);},
		addUser: function(opt, cb){self.apiReq('fave.addUser', opt, cb);},
		removeUser: function(opt, cb){self.apiReq('fave.removeUser', opt, cb);},
		addGroup: function(opt, cb){self.apiReq('fave.addGroup', opt, cb);},
		removeGroup: function(opt, cb){self.apiReq('fave.removeGroup', opt, cb);},
		addLink: function(opt, cb){self.apiReq('fave.addLink', opt, cb);},
		removeLink: function(opt, cb){self.apiReq('fave.removeLink', opt, cb);}
	}
	self.notifications = {
		get: function(opt, cb){self.apiReq('notifications.get', opt, cb);},
		markAsViewed: function(opt, cb){self.apiReq('notifications.markAsViewed', opt, cb);}
	}
	self.stats = {
		get: function(opt, cb){self.apiReq('stats.get', opt, cb);},
		trackVisitor: function(opt, cb){self.apiReq('stats.trackVisitor', opt, cb);}
	}
	self.search = {
		getHints: function(opt, cb){self.apiReq('search.getHints', opt, cb);}
	}
	self.apps = {
		getCatalog: function(opt, cb){self.apiReq('apps.getCatalog', opt, cb);},
		get: function(opt, cb){self.apiReq('apps.get', opt, cb);},
		sendRequest: function(opt, cb){self.apiReq('apps.sendRequest', opt, cb);},
		deleteAppRequests: function(opt, cb){self.apiReq('apps.deleteAppRequests', opt, cb);},
		getFriendsList: function(opt, cb){self.apiReq('apps.getFriendsList', opt, cb);}
	}
	self.utils = {
		checkLink: function(opt, cb){self.apiReq('utils.checkLink', opt, cb);},
		resolveScreenName: function(opt, cb){self.apiReq('utils.resolveScreenName', opt, cb);},
		getServerTime: function(opt, cb){self.apiReq('utils.getServerTime', opt, cb);}
	}
	self.database = {
		getCountries: function(opt, cb){self.apiReq('database.getCountries', opt, cb);},
		getRegions: function(opt, cb){self.apiReq('database.getRegions', opt, cb);},
		getStreetsById: function(opt, cb){self.apiReq('database.getStreetsById', opt, cb);},
		getCountriesById: function(opt, cb){self.apiReq('database.getCountriesById', opt, cb);},
		getCities: function(opt, cb){self.apiReq('database.getCities', opt, cb);},
		getCitiesById: function(opt, cb){self.apiReq('database.getCitiesById', opt, cb);},
		getUniversities: function(opt, cb){self.apiReq('database.getUniversities', opt, cb);},
		getSchools: function(opt, cb){self.apiReq('database.getSchools', opt, cb);},
		getSchoolClasses: function(opt, cb){self.apiReq('database.getSchoolClasses', opt, cb);},
		getFaculties: function(opt, cb){self.apiReq('database.getFaculties', opt, cb);},
		getChairs: function(opt, cb){self.apiReq('database.getChairs', opt, cb);}
	}
	self.gifts = {
		get: function(opt, cb){self.apiReq('gifts.get', opt, cb);}
	}
	self.secure = {
		getAppBalance: function(opt, cb){self.apiReq('secure.getAppBalance', opt, cb);},
		getTransactionsHistory: function(opt, cb){self.apiReq('secure.getTransactionsHistory', opt, cb);},
		getSMSHistory: function(opt, cb){self.apiReq('secure.getSMSHistory', opt, cb);},
		sendSMSNotification: function(opt, cb){self.apiReq('secure.sendSMSNotification', opt, cb);},
		sendNotification: function(opt, cb){self.apiReq('secure.sendNotification', opt, cb);},
		setCounter: function(opt, cb){self.apiReq('secure.setCounter', opt, cb);},
		setUserLevel: function(opt, cb){self.apiReq('secure.setUserLevel', opt, cb);},
		getUserLevel: function(opt, cb){self.apiReq('secure.getUserLevel', opt, cb);},
		checkToken: function(opt, cb){self.apiReq('secure.checkToken', opt, cb);},
	}
	self.ads = {
		getAccounts: function(opt, cb){self.apiReq('ads.getAccounts', opt, cb);},
		getClients: function(opt, cb){self.apiReq('ads.getClients', opt, cb);},
		createClients: function(opt, cb){self.apiReq('ads.createClients', opt, cb);},
		updateClients: function(opt, cb){self.apiReq('ads.updateClients', opt, cb);},
		deleteClients: function(opt, cb){self.apiReq('ads.deleteClients', opt, cb);},
		getCampaigns: function(opt, cb){self.apiReq('ads.getCampaigns', opt, cb);},
		createCampaigns: function(opt, cb){self.apiReq('ads.createCampaigns', opt, cb);},
		updateCampaigns: function(opt, cb){self.apiReq('ads.updateCampaigns', opt, cb);},
		deleteCampaigns: function(opt, cb){self.apiReq('ads.deleteCampaigns', opt, cb);},
		getAds: function(opt, cb){self.apiReq('ads.getAds', opt, cb);},
		getAdsLayout: function(opt, cb){self.apiReq('ads.getAdsLayout', opt, cb);},
		getAdsTargeting: function(opt, cb){self.apiReq('ads.getAdsTargeting', opt, cb);},
		createAds: function(opt, cb){self.apiReq('ads.createAds', opt, cb);},
		updateAds: function(opt, cb){self.apiReq('ads.updateAds', opt, cb);},
		deleteAds: function(opt, cb){self.apiReq('ads.deleteAds', opt, cb);},
		getStatistics: function(opt, cb){self.apiReq('ads.getStatistics', opt, cb);},
		getDemographics: function(opt, cb){self.apiReq('ads.getDemographics', opt, cb);},
		getBudget: function(opt, cb){self.apiReq('ads.getBudget', opt, cb);},
		getOfficeUsers: function(opt, cb){self.apiReq('ads.getOfficeUsers', opt, cb);},
		addOfficeUsers: function(opt, cb){self.apiReq('ads.addOfficeUsers', opt, cb);},
		removeOfficeUsers: function(opt, cb){self.apiReq('ads.removeOfficeUsers', opt, cb);},
		getTargetingStats: function(opt, cb){self.apiReq('ads.getTargetingStats', opt, cb);},
		getSuggestions: function(opt, cb){self.apiReq('ads.getSuggestions', opt, cb);},
		getCategories: function(opt, cb){self.apiReq('ads.getCategories', opt, cb);},
		getUploadURL: function(opt, cb){self.apiReq('ads.getUploadURL', opt, cb);},
		getVideoUploadURL: function(opt, cb){self.apiReq('ads.getVideoUploadURL', opt, cb);},
		getFloodStats: function(opt, cb){self.apiReq('ads.getFloodStats', opt, cb);},
		getRejectionReason: function(opt, cb){self.apiReq('ads.getRejectionReason', opt, cb);},
		createTargetGroup: function(opt, cb){self.apiReq('ads.createTargetGroup', opt, cb);},
		updateTargetGroup: function(opt, cb){self.apiReq('ads.updateTargetGroup', opt, cb);},
		deleteTargetGroup: function(opt, cb){self.apiReq('ads.deleteTargetGroup', opt, cb);},
		getTargetGroups: function(opt, cb){self.apiReq('ads.getTargetGroups', opt, cb);},
		importTargetContacts: function(opt, cb){self.apiReq('ads.importTargetContacts', opt, cb);},
	}
}