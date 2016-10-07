Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('items','Shirt'); }
});
Router.route('/', {name: 'itemList'});
Router.route('/about', {name: 'about'});
Router.route('/contact', {name: 'contact'});
Router.route('/items/:_id', {
  name: 'singleItemPage',
data: function() { return Items.findOne(this.params._id); } });