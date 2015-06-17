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

  Tracker.autorun ->
    Session.get('spotlightID')
    Tracker.afterFlush ->
      speeds = [ 1, 1.5, 2, 2.5, 3 ]
      speed = $('.pcast-speed')[0]
      currentSpeedIdx = 0
      audio = $('#audio-player')[0]
      speed.addEventListener 'click', (->
        currentSpeedIdx = if currentSpeedIdx + 1 < speeds.length then currentSpeedIdx + 1 else 0
        audio.playbackRate = speeds[currentSpeedIdx]
        @textContent = speeds[currentSpeedIdx] + 'x'
        true
      ), false



Template.home.events
  # JOSH: why aren't touch events working?
  "touchmove body": (e) ->
    Session.set "dragging", true


  "touchstart body": (e) ->
    Session.set "dragging", false


