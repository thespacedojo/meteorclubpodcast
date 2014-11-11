Meteor.methods sendEmail: (signupId) ->
  check signupId, String

  signup = Signups.findOne({_id: signupId})
  # Let other method calls from the same client start running,
  # without waiting for the email sending to complete.
  @unblock()
  to = signup.name + "<" + signup.email + ">"
  from = "Josh Owens <joshua.owens@gmail.com>"
  subject = "Mastering Meteor.js class"
  text = "Hey #{signup.name},\r\n\r\n"
  text += "I was looking over my applications wanted to find out your level of javascript knowledge. How comfortable are you with javascript?\r\n\r\n

    Let me know if you would be interested in taking the 2-day class, which takes place on the two dates below.\r\n

    * Saturday, December 6th at 10am - 2pm EST\r\n
    * Saturday, December 13th at 10am - 2pm EST\r\n\r\n

    Let me know soon because the last class sold out pretty quick. The price is $499."

  console.log(signup)
  console.log("Sending email to: #{to} about #{subject}")
  Email.send
    to: to
    from: from
    subject: subject
    text: text
  Signups.update(signupId, {$set: {sentEmailAt: new Date()}})
