const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())

// DATABASE CONNECTION
// Firebase App (the core Firebase SDK) is always required and must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/firestore");
require("firebase/auth");

const firebaseConfig = {
    apiKey: "AIzaSyADHsTe60Lg8Bq87-kRO55Ari8jcIZqnNc",
    authDomain: "corvus-74302.firebaseapp.com",
    databaseURL: "https://corvus-74302.firebaseio.com",
    projectId: "corvus-74302",
    storageBucket: "corvus-74302.appspot.com",
    messagingSenderId: "59563198527",
    appId: "1:59563198527:web:a58ca5ff4048ce7dfa108a",
    measurementId: "G-J01ZCEKNPM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// AUTHENTICATION Routes
app.use(express.urlencoded({ extended: false }));

// Register the user
app.post("/register", (req, res, next) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        // Are any fields blank?
        res.send("Some fields were missing! <a href='/'>Go back?</a>")
    } else if (password !== confirmPassword) {
        // Do the passwords match?
        res.send("Passwords don't match! <a href='/'>Go back?</a>");
    } else {
        // Everything look's good, create the user in auth and the DB...
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                // Handle Errors here.
                var errorCode = err.code;
                var errorMessage = err.message;
                res.send("Something went wrong... <a href='/'>Go back?</a>");
            });

        let docRef = db.collection('users').doc(email);

        docRef.set({
            firstName: firstName,
            lastName: lastName,
            email: email
        });
        res.redirect("/");
    }
});

// Login the user with firebase auth
app.post("/login", (req, res, next) => {
    firebase.auth()
        .signInWithEmailAndPassword(req.body.email, req.body.password)
        .then(() => {
            res.redirect("/");
        })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            res.send("Username or password is incorrect! <a href='/login'>Go back?</a>");
        });
});

// Logout the user with firebase auth
app.post("/logout", (req, res, next) => {
    console.log("Logout API called!");
    if (firebase.auth().currentUser) {
        firebase.auth()
        .signOut()
        .then(() => {
            res.send("Successfully logged out!");
        }).catch(err => {
            res.send("Something went wrong.");
        });
    } else {
        res.send("You aren't logged in in the first place!");
    }
});

// Returns the user auth token
app.get("/api/token", (req, res, next) => {
    console.log("API Called! Currently " + (firebase.auth().currentUser ? "logged_in" : "logged_out"));
    res.send(firebase.auth().currentUser ? "logged_in" : "logged_out");
})

// Run the server
const port = process.env.PORT || 5000;
app.listen(port);
console.log('Backend is listening on port ' + port + ' and frontend is listening on port 3000');