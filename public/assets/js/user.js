


$(function() {

//// finding compatibility 

  $("#submit").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var matcher = {
      name: $("#name").val().trim(),
      photo: $("#photo").val().trim(),
      scores: 
          $("#question1").val(),
       
  };

    console.log("New User", matcher);
    // Send the POST request.
    $.ajax("/api/match", {
      type: "POST",
      data: matcher
    }).then(
      function(data) {
        $("#bestMatch").text(data.name);
         $("#matchPhoto").attr("src", data.photo);
        $("#bestFriend").modal("toggle");
         // window.location.replace("/survey");
      }
    );
  });


//  currently working here 
});








