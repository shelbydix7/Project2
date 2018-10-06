
  var matchData = require("../config/match.js");
  var review = require("../config/reviews.js");
 


module.exports = function(app, passport) {
    app.get('/', function(req, res){
     res.render('index');
    });
   
    app.get('/login', function(req, res){
     res.render('login', {message:req.flash('loginMessage')});
    });
   
    app.post('/login', passport.authenticate('local-login', {
     successRedirect: 'api/review',
    // sucessRedirect: 'profile',
     failureRedirect: '/login',
     failureFlash: true
    }),
     function(req, res){
      if(req.body.remember){
       req.session.cookie.maxAge = 1000 * 60 * 3;
      }else{
       req.session.cookie.expires = false;
      }
      res.redirect('/');
     });
   
    app.get('/signup', function(req, res){
     res.render('signup', {message: req.flash('signupMessage')});
    });
   
    app.post('/signup', passport.authenticate('local-signup', {
     successRedirect: '/survey',
     failureRedirect: '/signup',
     failureFlash: true
    }));
   
    app.get('/profile', isLoggedIn, function(req, res){
     res.render('profile', {
      user:req.user
     });
    });
   
    app.get('/logout', function(req,res){
     req.logout();
     res.redirect('/');
    })
   


   app.get("/survey", function(req, res) {
        //console.log(data);
        res.render("survey");
      });

    // matching cherno


    app.get("/api/match", function (req, res) {
      res.json(matchData);
    });
 
      app.get("/api/review", function (req, res) {
        res.json(review);
   
   });
 
    app.post("/api/match", function (req, res) {
 
        var userInput = req.body;
        var diff = 50;
        var match = 0;
 
        for (i = 0; i < matchData.length; i++) {
 
            var difference = 0;
            console.log("==================");
              console.log(matchData[i]);
              console.log(userInput);
 
              
            for (j = 0; j < userInput.score.length; j++) {
 
                difference += Math.abs(matchData[i].score[j] - userInput.score[j]);
    
            }
 
             if (difference < diff){
                 match = i;
                 diff = difference;
              //cherno
               
             }
        }
        //review cherno
        review.push(userInput.name);
 
        matchData.push(userInput);
        res.json(matchData[match]);
 
      
        //res.json(friendData);
    });


    };
    
   
   function isLoggedIn(req, res, next){
    if(req.isAuthenticated())
     return next();
   
    res.redirect('/');
   }

