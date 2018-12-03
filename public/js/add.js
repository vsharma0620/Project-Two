// The code in add.js handles what happens when the user clicks the "submit" button.
// When user clicks submit-btn
$(function() {
var category;

// function submitNewUser () {
if (category !== null) {

  $("#Login").on("submit", function (event) {
    event.preventDefault();
    console.log("button has been clicked");

    var presBool = ($("#presenter").find(':checked').val() === "presenter");

    // Make a new user object
    var newUser = {
      username: $("#username").val().trim(),
      category: $(this).find(':selected').val(),
      presenter: presBool,
      status: 0
    };

    console.log(newUser);

    //Send an AJAX POST-request with jQuery
    $.post("/api/newUser", newUser)
      // On success, run the following code
      .then(function (data) {
        // Log the data we found
        console.log(data);
        localStorage.setItem('user', JSON.stringify(newUser));
     });

    // Empty each input box by replacing the value with an empty string
    $("#usernamesername").val("");
    $("#category").val("");
    $("#presenter").val("");
  });
};
});
