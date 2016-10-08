Items = new Mongo.Collection('items');

Items.allow({
insert: function(userId, doc) {
	return !! userId; }
});