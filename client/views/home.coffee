Template.home.events
  'submit form': (e, t) ->
    e.preventDefault()
    subscriberInfo = SimpleForm.processForm(e.target)
    Meteor.call 'subscribe', subscriberInfo, () ->
      SimpleForm.resetForm(e.target)
