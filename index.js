const express = require('express');
const app = express();

// An api endpoint that returns a short list of items
app.get('/api/getList', (req, res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
});

// AUTHENTICATION
const passport = require("passport");
const session = require("express-session");
const LocalStrategy = require("passport-local").Strategy;

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.post("/login",
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/"
    })
);

// Run the server
const port = process.env.PORT || 5000;
app.listen(port);
console.log('Express backend is listening on port ' + port);

