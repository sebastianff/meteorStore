Router.configure({
  layoutTemplate: 'layout'
});
Router.route('/', {name: 'itemList'});
Router.route('/about', {name: 'about'});
Router.route('/contact', {name: 'contact'});