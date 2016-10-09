Items = new Mongo.Collection('items');//Create the collection to be filled with items for the store

Items.allow({//Only allow entering items for logged in users
insert: function(userId, doc) {
	return !! userId; },
update: function(userId, doc) {
	return !! userId; },
remove: function(userId, doc) {
	return !! userId; }
});

Meteor.methods({//The method for inserting items in the store
	addItem: function(itemInfo) {
	    check(Meteor.userId(), String);
	    check(itemInfo, {
	      title: String,
	      designer: String,
	      price: String,
	      url: String,//Doing a check for all of the info entered for the items
	    });
	var user = Meteor.user();//Adding a user, time of post etc
	var item = _.extend(itemInfo, {
	userId: user._id, author: user.username, added: new Date()
	});
	var itemId = Items.insert(item);
	return {
	_id: itemInfo
	}; }
});