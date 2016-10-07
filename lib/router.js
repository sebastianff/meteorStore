Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('items','Shirt'); }
});
Router.route('/', {name: 'itemList'});
Router.route('/about', {name: 'about'});
Router.route('/contact', {name: 'contact'});