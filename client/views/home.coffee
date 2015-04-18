Template.home.helpers
  featured: ->
    Episodes.findOne(Session.get('spotlightID'))


Template.home.onRendered ->
  # set the seeded
  Session.set "spotlightID", Episodes.findOne({}, {sort: {date: -1}})._id

  # set dragging variable
  Session.set "dragging", false

  $(".podcast-play").affix offset:
    top: ->
      #$(".podcast-hero").height() + 80
      $('.holder').offset().top


Template.home.events
  # JOSH: why aren't touch events working?
  "touchmove body": (e) ->
    Session.set "dragging", true


  "touchstart body": (e) ->
    Session.set "dragging", false


