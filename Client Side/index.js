// Client Side for library system
const express = require("express");
const { request } = require("http");
const pgp = require('pg-promise')();
const db = pgp(connection);
const passport = require("passport");
const passportJwt = require("passport-jwt");
const jwt = require("jsonwebtoken");
const secret = "hush this is a secret";
const app = express();


configurePassport();

app.use(passport.initialize());  

app.get("login", (req, res) => {
    const username = request.query.username;
    const password = request.query.password;

    if (true/*username and password are legit*/) {
        res.send({
            message: `Hello, ${username}!`,
            token: createTokenForUser(user)
        });
        res.status(400).send({
            errors: "Nope that is wrong"
        });
    }
})

app.get("/books", passport.authenticate("jwt", {session: false}), (req, res)  => {
    return[];
});

app.listen(3000, () =>{
    console.log("Bookish is listening to port 3000");
})

function configurePassport(){
    const jwtOptions = {
        jwtFromRequest: passportJwt.ExtractJwt.fromHeader("x-access-token"),
        secretOrKey: secret,
    };
    passport.use(new passportJwt.Strategy(jwtOptions, (decodedJwt, next)=>{
          //check whether decodedJwt.username exists
    }));

}

function createTokenForUSer(username){
    return jwt.sign({username: username }, secret);

}


window.onload = function () {
    fetch("/account")
      .then((response)=> response.json())
  
      .then((object) => {
        sites = object;
      });
  };