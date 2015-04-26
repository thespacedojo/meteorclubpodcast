;(function () {

  Meteor.methods({
    getPodcast : function() {
      return Meteor.http.call('get',
          'https://api.simplecast.fm/v1/podcasts.json?api_key=' +
          Meteor.settings.simplecastKey);
    },

    getEpisodes: function(podcastId) {
      return Meteor.http.call('get', 'https://api.simplecast.fm/v1/podcasts/' +
          podcastId + '/episodes.json?api_key=' + Meteor.settings.simplecastKey);
    },

    getEmbed: function(podcastId, episodeId) {
      return Meteor.http.call('get', 'https://api.simplecast.fm/v1/podcasts/' +
          podcastId + '/episodes/' + episodeId + '/embed.json?api_key=' +
          Meteor.settings.simplecastKey);
    }
  });

  ////////////////////////////////////////////////////////////////////
  // Startup
  //

  Meteor.startup(function () {

    SyncedCron.add({
      name: 'Check for new episodes',

      schedule: function(parser) {
        return parser.text('every 1 hour');
      },

      job: function() {
        var podcastData;
        var episodeData;
        var embedData;

        Meteor.call('getPodcast', function(err, res) {
          podcastData = res.data[0];

          Meteor.call('getEpisodes', podcastData.id, function(err, res) {
            episodeData = res.data[res.data.length-1];
            if (Episodes.findOne({episodeId: episodeData.id})) {
              return false;
            }

            Meteor.call('getEmbed', podcastData.id, episodeData.id, function(err, res) {
              embedData = res.data.html.dark;

              var data = {
                title: episodeData.title,
                date: episodeData.published_at,
                description: episodeData.description,
                player: embedData,
                download: episodeData.audio_url,
                showNotes: episodeData.long_description,
                episodeId: episodeData.id
              };

              Episodes.insert(data);
            });
          });
        });
      }
    });

    SyncedCron.start();

    ////////////////////////////////////////////////////////////////////
    // Create Test Users
    //

    if (Meteor.users.find().fetch().length === 0) {

      console.log('Creating users: ');

      var users = [
      {name:"Normal User",email:"normal@example.com",roles:[]},
      {name:"Admin User",email:"admin@example.com",roles:['admin']}
      ];

      _.each(users, function (userData) {
        var id,
        user;

        console.log(userData);

        id = Accounts.createUser({
          email: userData.email,
          password: "apple1",
          profile: { name: userData.name }
        });

        // email verification
        Meteor.users.update({_id: id}, {$set:{'emails.0.verified': true}});

        Roles.addUsersToRoles(id, userData.roles);
      });
    }
  });
}());
