Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading'
});

// map some routes motherfucker
Router.map(function() {
  this.route('home', {path: '/'});
  this.route('episode', {path: '/episode'});
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
