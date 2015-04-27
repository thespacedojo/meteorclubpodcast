Template.newEpisode.events({
  "submit form": function(e, t) {
    e.preventDefault();
    data = SimpleForm.processForm(e.target);

    ep = Episodes.upsert({episodeId: data.episodeId},
        {$set: data},
        function(error, id) {
          if (!error) {
            CoffeeAlerts.success("Changes to " + data.title + " have been saved.");
            Router.go("/");
          } else {
            CoffeeAlerts.warning("We had trouble saving the episode.");
            console.log(error);
          }
        });
  }
});

