# array for video archive details
videoDetails = [
  {
    month: "Episode 41: The Polymer discussions"
    url: "/episode"
    description: "Join Josh Owens and Ry Walker for all the meteor.js news fit to talk about this week."
  }
  {
    month: "Episode 40: Worldwide Meteor Day"
    url: "/episode"
    description: "Join Josh and Greg as they talk about all the Meteor.js news that happen over the last *two weeks* since travel and Meteor Day got in the way of our regular episode."
  }
  {
    month: "Episode 39: Meteor 1.0!"
    url: "/episode"
    description: "Join Josh Owens and Ry Walker as they talk about all the Meteor.js news going on."
  }
  {
    month: "Episode 38: Lorem ipsum dolor"
    url: "/episode"
    description: "Join Josh Owens and special guest-host Gerard Sychay as they talk about all the latest Meteor.js new this week."
  }
]
Template.home.helpers
  videos: videoDetails

Template.home.events
  'submit form': (e, t) ->
    e.preventDefault()
    subscriberInfo = SimpleForm.processForm(e.target)
    Meteor.call 'subscribe', subscriberInfo, () ->
      SimpleForm.resetForm(e.target)