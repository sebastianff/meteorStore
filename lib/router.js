Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  //waitOn: function() { return Meteor.subscribe('items','Shirt'); }
  waitOn: function() { return Meteor.subscribe('items'); }
});

Router.route('/', {name: 'itemList'});
Router.route('/about', {name: 'about'});
Router.route('/contact', {name: 'contact'});
Router.route('/addItem', {name: 'addItem'});
Router.route('/items/:_id', {
  name: 'singleItemPage',
data: function() { return Items.findOne(this.params._id); } });

var requireLogin = function() { if (! Meteor.user()) {
	if (Meteor.loggingIn()) { this.render(this.loadingTemplate);
		} else { this.render('accessDenied');
		}
		} else {
	this.next(); }
}

Router.onBeforeAction(requireLogin, {only: 'addItem'});