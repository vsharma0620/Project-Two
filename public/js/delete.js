$.ajax({ 
    url:"/api/delete", 
    type: "DELETE"
})
.then(function(response){
    console.log("user deleted");
    console.log(response);
})

