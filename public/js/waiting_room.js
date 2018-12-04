
if (localStorage.hasOwnProperty("user")) {
    id = localStorage.getItem("user")
}
else {
    id = localStorage.setItem("user","-1") 
}
// console.log(id)

function getUser(id) {
    console.log("called");
    $.get("/" + id, function(data) {
      console.log("Posts", data);
      posts = data;
      if (!posts || !posts.length) {
        console.log("Nothing to Render");
      }
    });
}

getUser(id);

