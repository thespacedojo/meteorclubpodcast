Meteor.methods({
  getPodcast : function() {
    return Meteor.http.call('get',
        'https://api.simplecast.fm/v1/podcasts.json?api_key=' +
        Meteor.settings.simplecastKey).data;
  },

  getEpisodes: function(podcastId) {
    return Meteor.http.call('get', 'https://api.simplecast.fm/v1/podcasts/' +
        podcastId + '/episodes.json?api_key=' + Meteor.settings.simplecastKey).data;
  },

  getEmbed: function(podcastId, episodeId) {
    return Meteor.http.call('get', 'https://api.simplecast.fm/v1/podcasts/' +
        podcastId + '/episodes/' + episodeId + '/embed.json?api_key=' +
        Meteor.settings.simplecastKey).data.html.dark;
  },

  fetchAndInsertEpisodes: function() {
    var podcastId = Meteor.settings.podcastId || Meteor.call('getPodcast')[0].id;
    var episodes = Meteor.call('getEpisodes', podcastId);

    _.each(episodes, function(episode) {

      Episodes.upsert({episodeId: episode.id}, {$set: {
        episodeId: episode.id,
        title: episode.title,
        date: episode.published_at,
        description: episode.description,
        player: Meteor.call('getEmbed', podcastId, episode.id),
        download: episode.audio_url,
        showNotes: episode.long_description,
        slug: getSlug(episode.title),
      }});
    });
  }
});

////////////////////////////////////////////////////////////////////
// Startup
//

Meteor.startup(function () {
  Meteor.call('fetchAndInsertEpisodes');

  SyncedCron.add({
    name: 'Check for new episodes',
    schedule: function(parser) { return parser.text('every 1 hour'); },
    job: function() { Meteor.call('fetchAndInsertEpisodes'); }
  });

  SyncedCron.start();

});
