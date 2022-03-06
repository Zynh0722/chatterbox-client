// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // must render
    MessagesView.render();
  },

  render: function(room = null) {
    // TODO: Render _all_ the messages.
    // iterate over Message._data array calling renderMessage each time.
    MessagesView.$chats.html('');

    if (Messages._data) {
      for (let i = 0; i < Messages._data.length; i++) {
        if (Messages._data[i].username
            && Messages._data[i].text
            && (room === null ||
            Messages._data[i].roomname === room ||
            room === 'all')) {
          // console.log(Messages._data[i]);
          MessagesView.renderMessage(Messages._data[i]);
        }
      }
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    let $message = $(MessageView.render(message));
    if (Friends._data[message['username']]) {
      $message.addClass('friend');
    }
    MessagesView.$chats.append($message);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};