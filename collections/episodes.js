// Create episodes collection
Episodes = new Mongo.Collection('episodes');

Episodes.allow({
  insert: function(userId, doc) {
    return userId;
  },
  update: function(userId, doc, fields, modifier) {
    return userId;
  },
  remove: function(userId, doc) {
    return userId;
  }
})
