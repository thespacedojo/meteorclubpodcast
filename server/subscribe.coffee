Meteor.methods

  'subscribe': (options) ->
    mailingList = new MailChimp()
    mailchimpCall = Meteor.wrapAsync(_.bind(mailingList.call, mailingList))
    try
      console.log(options)
      result = mailchimpCall "lists", "subscribe", {id: Meteor.settings.MailChimpOptions.listId, email: {email: options.email}, merge_vars: {FNAME: options.fullName, MMERGE3: options.optionsRadio}, double_optin: true}
      email = Subscribers.insert(email: email, shareId: result.euid)
    catch error
      throw new Meteor.Error(500, error.message)
    result
