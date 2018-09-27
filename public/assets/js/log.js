
// sign in page 

var signIn = true;
$(".sign").show();

var signInPage = function(event){
    event.preventDefault();
   if(signIn === true) {
       $('.sign').hide();
   }
   else{
       $('.sign').show();

   }
}


var authentication = function(event){
    event.preventDefault();

    var user = $("#email").val().trim();
    var password = $("#password").val().trim();

    var userCredentials = {
        user: user,
        password: password
    };


    // send user credentials to login route

    //cherno
    $.post("/api/login", userCredentials).then(function(res){
        //cherno
        if(res.status !== 200) {
            console.log("Email or password does not match");

        }
        else{
            window.location.replace("/landing");
        }
    });

}
