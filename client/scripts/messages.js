// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: null,

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  assign: function(data) {
    Messages._data = data;

    for (let i = 0; i < Messages._data.length; i++) {
      if (Messages._data[i].username
        && Messages._data[i].text) {
        Messages._data[i].username = Messages._data[i].username.replace(/</, '&#60');
        Messages._data[i].text = Messages._data[i].text.replace(/</, '&#60');
      }
    }

    // console.log('finished!');
  }

};