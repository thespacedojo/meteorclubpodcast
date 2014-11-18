Template.learn.rendered = () ->
  $('input#referrer').val(decodeURI(document.referrer))
  Tracker.autorun ->
    perc = Session.get("scrollPercentage")
    ga('send', 'event', 'Training', 'Scroll', perc)
    if $(".slide-content").css('height') is "0px" and perc > 74
      $(".slide-content").animate height: "120px"

Template.learn.events
  'submit form': (e, t) ->
    e.preventDefault()
    signupInfo = SimpleForm.processForm(e.target)
    Meteor.call 'apply', signupInfo, () ->
      ga('send', 'event', 'Training', 'Apply', 'Mastering Meteor')
      SimpleForm.resetForm(e.target)
      Router.go('/apply/thanks')

  'click .footerbutton': (e) ->
    e.preventDefault()
    if $(".slide-content").css('height') is "0px"
      $(".slide-content").animate height: "120px"
    else
      $(".slide-content").animate height: "0px"
