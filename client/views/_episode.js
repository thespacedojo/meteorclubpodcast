Template.episode.events({
  "click .episode, touchend .episode": function(e, t) {
    Router.go("episode", {slug: this.slug});
    if (Session.get("dragging")) {
      e.preventDefault();
      return;
    } else {
      e.preventDefault();
      // stop the player
      var audio = $('#audio-player')[0];
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
      Session.set("spotlightID", t.data._id);
      $("html, body").animate({scrollTop: $(".holder").offset().top}, 700);
      return;
    }
  }
});
