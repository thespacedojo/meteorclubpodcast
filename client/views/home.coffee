Template.home.helpers
  episodes: ->
    Episodes.find({}, {limit: 5})
  featured: ->
  	Episodes.findOne(Session.get('spotlightID'))
 

Template.home.rendered = ->
  # set the seeded 
  Session.set "spotlightID", Episodes.findOne(spotlight: 1)._id

  $(".podcast-play").affix offset:
    top: 503
  setFeature = ->
  	$(".featured-video").html "<iframe src=\"" + Media.findOne(_id: Session.get("spotlightID")).embedUrl
  	return

Template.home.events "click .episode": (e) ->
  e.preventDefault()
  newID = e.currentTarget.id
  Session.set "spotlightID", newID
  return