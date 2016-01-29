Template.home.onCreated(function() {
  if (Router.current().params.slug) {
    Session.set("spotlightID", Episodes.findOne({slug: Router.current().params["slug"]}, {sort: {date: -1}})._id);
  } else {
    Session.set("spotlightID", Episodes.findOne({}, {sort: { date: -1 }})._id);
  }
});

Template.home.helpers({
  featured: function() {
    return Episodes.findOne(Session.get('spotlightID'));
  }
});

Template.home.onRendered(function() {
  Session.set("dragging", false);

  $(".podcast-play").affix({
    offset: {
      top: function() {
        return $('.holder').offset().top;
      }
    }
  });
  return Tracker.autorun(function() {
    Session.get('spotlightID');
    return Tracker.afterFlush(function() {
      var audio, currentSpeedIdx, speed, speeds;
      speeds = [1, 1.5, 2, 2.5, 3];
      speed = $('.pcast-speed')[0];
      currentSpeedIdx = 0;
      audio = $('#audio-player')[0];
      return speed.addEventListener('click', (function() {
        currentSpeedIdx = currentSpeedIdx + 1 < speeds.length ? currentSpeedIdx + 1 : 0;
        audio.playbackRate = speeds[currentSpeedIdx];
        this.textContent = speeds[currentSpeedIdx] + 'x';
        return true;
      }), false);
    });
  });
});

Template.home.events({
  "touchmove body": function(e) {
    return Session.set("dragging", true);
  },
  "touchstart body": function(e) {
    return Session.set("dragging", false);
  }
});
