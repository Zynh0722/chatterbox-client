// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: null,

  assign: function(data) {
    //loop through messages
    //compile an array

    Rooms._data = {};

    for (let message of data) {
      if (message.roomname) {
        Rooms._data[message.roomname.replace(/</, '&#60')] = true;
      }
    }
  },

  addRoom: function(value) {
    Rooms._data[value] = true;
  }

  // TODO: No room option

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  // assign, parse out rooms from new messages, and assign them to list

};