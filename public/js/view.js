
//after 5second the signup page will be shown 
$(document).ready(function(){
  setTimeout(() => {
    $(location).attr("href", window.location.href + "signup")
  }, 5000);
  
});



// $(document).ready(function() {

//   $('a[href$= view/signup]').click(function() {
    

//     window.location.href= 'http://sample.com/products.php/#shoes';

//   });
// });