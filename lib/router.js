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


// default reset scroll
Router._filters = {
  resetScroll: function () {
    var scrollTo = window.currentScroll || 0;
    $('body').scrollTop(scrollTo);
    $('body').css("min-height", 0);
  }
};

var filters = Router._filters;

if(Meteor.isClient) {
  Router.onAfterAction(filters.resetScroll); // for all pages
}

// turn on the loading template before the route completes
Router.onBeforeAction('loading');
