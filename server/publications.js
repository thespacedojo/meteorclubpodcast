Meteor.publish('episodes', function() {
  return Episodes.find({}, {sort: {date: -1}});
});
