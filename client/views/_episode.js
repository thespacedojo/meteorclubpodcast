Template.episode.onCreated(function() {
    var instance = this;
    var selectedEpisode = Router.current().params.slug;

    console.log(selectedEpisode);
});

Template.episode.events({
  "click .episode, touchend .episode": function(e, t) {
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
