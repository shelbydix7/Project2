
$(function() {

  console.log("I'm running");
  $("#submit").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newUser = {
      name:$("#name").val().trim(),
      email:$("#email").val().trim(),
      gender:$("#gender").val().trim(),
      password:$("#password").val().trim(),  
    };
    console.log("New Cat", newUser);
    // Send the POST request.
    $.ajax("/api/friends", {
      type: "POST",
      data: newUser
    }).then(
      function() {
          window.location.replace("/survey");
      }
    );
  });


//// finding compatibility 

  $("#suvey").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var matcher = {
      score:$("#q").val().trim(), 
    };
    console.log("New Cat", matcher);
    // Send the POST request.
    $.ajax("/api/match", {
      type: "POST",
      data: matcher
    }).then(
      function() {
         // window.location.replace("/survey");
      }
    );
  });




});






