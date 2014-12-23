Template.home.helpers
  episodes: ->
    Episodes.find({}, {limit: 5})
  featured: ->
  	Episodes.findOne(Session.get('spotlightID'))
 

Template.home.rendered = ->
  # set the seeded 
  Session.set "spotlightID", Episodes.findOne(spotlight: 1)._id
  
  # set dragging variable
  Session.set "dragging", false
  
  $(".podcast-play").affix offset:
    top: ->
      #$(".podcast-hero").height() + 80
      $('.holder').offset().top
  
  setFeature = ->
  	$(".featured-video").html "<iframe src=\"" + Media.findOne(_id: Session.get("spotlightID")).embedUrl
  	return

  $(document).scroll ->
	  scrollPosition = undefined
	  scrollPosition = document.body.scrollTop
	  console.log scrollPosition
	  return

Template.home.events 
  # JOSH: why aren't touch events working? 
  "touchmove body": (e) ->
    Session.set "dragging", true
  
  "click .episode, touchend .episode": (e) ->
    if Session.get "dragging"
      e.preventDefault()
      return
    else
      e.preventDefault()
      newID = e.currentTarget.id
      Session.set "spotlightID", newID

      $("html, body").animate
        scrollTop: $(".holder").offset().top
      , 700
      return

  "touchstart body": (e) ->
    Session.set "dragging", false