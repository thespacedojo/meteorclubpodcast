Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
  waitOn: function() {
    return Meteor.subscribe('episodes');
  },
  data: function() {
    return {
      // TODO: Add skip support for pagination
      episodes: Episodes.find({}, {limit: 5, sort: {date: -1}})
    };
  }
});

Router.route('/', function () {
  this.layout('layout');
  this.render('home');
}, {
  name: 'home'
});

Router.route('/episode/:slug', function () {
  this.layout('layout');
  this.render('home');
}, {
  name: 'episode'
});
