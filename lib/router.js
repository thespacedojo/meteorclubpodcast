Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
  waitOn: function() {
    return Meteor.subscribe('episodes');
  },
  data: function() {
    return {
      // TODO: Add skip support for pagination
      episodes: Episodes.find({}, {limit: 10, sort: {date: 1}})
    };
  }
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('episode', {path: '/episode'});
  this.route('newEpisode', {
    path: '/episode/new',

    onBeforeAction: function() {
      user = Meteor.user();
      if(!Roles.userIsInRole(user, ['admin'])) {
        this.redirect('home');
        this.stop();
        CoffeeAlerts.error("Must be an admin to access that page!");
      }
      this.next();
      return true;
    }
  });
});

// default reset scroll
Router._filters = {
  resetScroll: function () {
    var scrollTo = window.currentScroll || 0;
    $('body').scrollTop(scrollTo);
    $('body').css("min-height", 0);
  }
};

Router.plugin('ensureSignedIn', {
  only: ['newEpisode']
});

var filters = Router._filters;

if(Meteor.isClient) {
  Router.onAfterAction(filters.resetScroll); // for all pages
}

// turn on the loading template before the route completes
Router.onBeforeAction('loading');
