// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.change(RoomsView.handleChange);
  },

  render: function(currentRoom = null) {
    RoomsView.$select.html('');

    RoomsView.$select.append($(RoomsView.renderRoom({roomname: 'all', roomtitle: 'All Messages'})));

    for (let room in Rooms._data) {
      RoomsView.$select.append($(RoomsView.renderRoom({roomname: room, roomtitle: room})));
    }

    if (currentRoom) {
      RoomsView.$select.val(currentRoom);
      MessagesView.render(RoomsView.$select.val());
    }
  },

  renderRoom: _.template(`
    <option value=<%= roomname %>><%= roomtitle %></option>
    `),

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    MessagesView.render(RoomsView.$select.val());
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.\
    let newRoom = prompt('Name of Room?');
    Rooms.addRoom(newRoom);
    RoomsView.render(newRoom);
  },

  getRoom: function () {
    return RoomsView.$select.val();
  }
};
