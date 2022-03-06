// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    App.update();

    setInterval(App.update, 10 * 1000);

    //set event listener for clicking on a username
    $('body').on('click', '.username', function() {
      Friends.toggle($(this).text());
      App.update();
    });

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },

  update: function () {
    App.startSpinner();
    App.fetch(function() {
      App.stopSpinner();
      MessagesView.render();
      RoomsView.render(RoomsView.getRoom());
    });
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
      // console.log(data);
      Messages.assign(data);

      // send data to rooms;
      Rooms.assign(data);

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};


//set an event listener on the body for click on class '.chat'
//set an event handler that adds the element's username to friend storage
//on render, add class 'friend' to the messages
//css styling kinda stuff using .friend selector
