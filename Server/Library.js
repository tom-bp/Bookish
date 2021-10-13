//Server Side for library
const express = require("express");
const app = express();
const pgp = require('pg-promise')();
const passport = require("passport");
const passportJwt = require("passport-jwt");
const jwt = require("jsonwebtoken");
const secret = "hush this is a secret";
const db = pgp('postgres://postgres:#Programmer1@localhost:5432/books');
// const secret = "hush this is a secret";

// Do some passport configuration
configurePassport();

app.use(passport.initialize());

app.get("login", (req, res) => {
    const username = request.query.username;
    const password = request.query.password;
    if (/*username and password are legit*/ 1) {
        res.send({
            message: `Hello, ${username}!`,
            token: createTokenForUser(user),
        });
    } else {
        res.status(400).send({
            errors: "Nope your username and password are wrong",
        });
    }
});

app.get("/books", passport.authenticate("jwt", { session: false }), (req, res) => {
  db.any("SELECT * FROM books", [true])
    .then((data) => {
      const books = [];
      for (let i = 0; i < data.length; i++) {
        const id = data[i].id;
        const title = data[i].title;
        const ISBN = data[i].ISBN;
        const copies = data[i].copies;
        const author_id = data[i].authorid;

        books.push(new Book(id, title, author_id, ISBN, copies));
      }
      res.send(books);
    })
    .catch(function (error) {
      console.error(error);
    });
});


app.listen(3000, function () {
  console.log("Webiste Created");
});

function configurePassport() {
    const jwtOptions = {
        jwtFromRequest: passportJwt.ExtractJwt.fromHeader("x-access-token"),
        secretOrKey: secret,
    };
    passport.use(
        new passportJwt.Strategy(jwtOptions, (decodedJwt, next) => {
            // Check whether the decodedJwt.username exists
        })
    );
}

function createTokenForUser(username) {
    return jwt.sign({ username: username }, secret);
}

app.get("/account", function (req, res) {

});



// app.use(express.static("index"));




