
$(function() {

 
    console.log("I'm running");
    $("#submit").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newCat = {
        name:$("#name").val().trim(),
        
      };
      console.log("New Cat", newCat);
      // Send the POST request.
      $.ajax("/api/friends", {
        type: "POST",
        data: newCat
      }).then(
        function() {
          console.log("created new cat");
        
        }
      );
    });
  });
  