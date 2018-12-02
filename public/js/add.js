// The code in add.js handles what happens when the user clicks the "submit" button.

// When user clicks submit-btn
$("#submit-btn").on("click", function(event) {
  event.preventDefault();

  // Make a new user object
  var newUser = {
    username: $("#inputUsername").val().trim(),
    category: $("#category").val().trim(),
    presenter: $("#presenter").val().trim(),
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/newUser", newUser)
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      console.log(data);
      localStorage.setItem('user', JSON.stringify(newUser.id));
    });


  // Empty each input box by replacing the value with an empty string
  $("#inputUsername").val("");
  $("#category").val("");
  $("#presenter").val("");
});
