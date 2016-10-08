Router.configure({//Basic routing, setting the main layout and default templates for loading, 404 etc...
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  //waitOn: function() { return Meteor.subscribe('items','Shirt'); }//This is a bit more detailed subs
  waitOn: function() { return Meteor.subscribe('items'); }//Here we have a subscription for the collection
});

Router.route('/', {name: 'itemList'});
Router.route('/about', {name: 'about'});
Router.route('/contact', {name: 'contact'});
Router.route('/addItem', {name: 'addItem'});//Basic routes for the links in the top nav
Router.route('/items/:_id', {
  name: 'singleItemPage',
data: function() { return Items.findOne(this.params._id); } });

var requireLogin = function() { if (! Meteor.user()) {//This function is true if the current user is logged in
	if (Meteor.loggingIn()) { this.render(this.loadingTemplate);
		} else { this.render('accessDenied');
		}
		} else {
	this.next(); }
}

Router.onBeforeAction(requireLogin, {only: 'addItem'});//This requires a log in for accessing the add item functionality