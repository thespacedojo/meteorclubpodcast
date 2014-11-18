@Signups = new Mongo.Collection('signups')

Signups.helpers
  contacted: ->
    @sentEmailAt

Meteor.methods
  'apply': (info) ->
    if Meteor.isServer
      Signups.insert({name: info.fullName, email: info.email, referrer: info.referrer, classType: info.classType})
