Template.featuredEpisode.events({
  'click #play-episode': function (e, tmpl) {
    e.preventDefault();
    var player = $('#audio-player')[0];

    if(player.paused) {
      player.play();
    } else {
      player.pause();
    }
  }
});
