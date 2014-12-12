Meteor.publish('episodes', function() {
  return Episodes.find();
});