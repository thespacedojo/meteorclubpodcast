Template.newEpisode.events({
  "submit form": function(e, t) {
    e.preventDefault();
    data = SimpleForm.processForm(e.target);
    ep = Episodes.insert(data, function(error, id) {
      if (!error) {
        CoffeeAlerts.success("The episode was added.");
        Router.go("/");
      } else {
        CoffeeAlerts.warning("We had trouble saving the episode.");
        console.log(error);
      }
    });
  }
});
