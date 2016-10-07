Router.configure({
  layoutTemplate: 'layout'
});
Router.route('/', {name: 'itemList'});
Router.route('/about', {name: 'about'});