Template.episode.events({
  "click .episode, touchend .episode": function(e, t) {
    if (Session.get("dragging")) {
      e.preventDefault();
      return;
    } else {
      e.preventDefault();
      Session.set("spotlightID", t.data._id);
      $("html, body").animate({scrollTop: $(".holder").offset().top}, 700);
      return;
    }
  }
});
