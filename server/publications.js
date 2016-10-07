Meteor.publish('items', function(item) { 
	return Items.find({title: item});
});