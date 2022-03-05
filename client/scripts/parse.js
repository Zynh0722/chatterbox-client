// The Parse object represents your connection to outside world!
// Or... just the Parse API. Populate this object with methods
// which send requests to the RESTful Parse API.

var Parse = {

  server: `https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/${window.CAMPUS}`,

  create: function(message, successCB, errorCB = null) {
    // TODO: send a request to the Parse API to save the message

    let newMessage = {
      username: App.username,
      text: message,
      roomname: RoomsView.getRoom()
    };

    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(newMessage),
      contentType: 'application/json',
      success: successCB, // invoked with the inputted message object as its argument
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to post message', error);
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB, // invoked with array of message objects as its argument
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};