// Create episodes collection
Episodes = new Mongo.Collection('episodes');

Episodes.helpers({
  statelessDownload: function() {
    return this.download.replace(/http:/, '');
  }
});

Episodes.allow({
  insert: function(userId, doc) {
    return Roles.userIsInRole(userId, 'admin');
  },
  update: function(userId, doc, fields, modifier) {
    return Roles.userIsInRole(userId, 'admin');
  },
  remove: function(userId, doc) {
    return Roles.userIsInRole(userId, 'admin');
  }
})
