Template.dashboard.events
  'click button': ->
    Meteor.call('sendEmail', @_id)

Template.dashboard.helpers

  contacted: ->
    @sentEmailAt
