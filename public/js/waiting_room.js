
if (localStorage.hasOwnProperty("user")) {
    var user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
}
else {
    localStorage.setItem("user","-1"); 
}
// console.log(id)

var id = user.id;

function getUser(id) {
    
    console.log(id);
    $.get("/user/" + id, function(data) {
      console.log("Posts", data);
      posts = data;
      if (!posts || !posts.length) {
        console.log("Nothing to Render");
      } else {
          if (data === "audience") {
            console.log("stay");
          } else {
            location.href = "/"+data;
          }
      } 
    });
}

getUser(id);

