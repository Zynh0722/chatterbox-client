// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // TODO: update message list when message is sent
    let message = FormView.$form.children('#message').val(); //get and store the data in the form

    if (message) {
      Parse.create(message, (data) => { console.log('it worked! ' + JSON.stringify(data)); }); //send the data to Parse.create with data as the message argument.
    }

    FormView.$form.children('#message').val('');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};