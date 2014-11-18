Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading'
});

// map some routes motherfucker
Router.map(function() {
  this.route('home', {path: '/'});
  this.route('about', {path: '/about'});
  this.route('learn', {path: '/learn'});
  this.route('testing', {path: '/testing-meteorjs'});
  this.route('questions', {path: '/questions'});
  this.route('transcript', {path: '/transcript'});
  this.route('opensource', {path: '/shareit'});
  this.route('thank', {path: '/apply/thanks'});
  this.route('dashboard', {
    path: '/dashboard',
    waitOn: function() {
      Meteor.subscribe('signups');
    },
    data: function() {
      return {
        signups: Signups.find()
      }
    }
  });
});

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
