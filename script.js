// Initialize Firebase
var config = {
    apiKey: "AIzaSyCK4P7ppVHPX4_in9tPjTQYSqYC7D45zDA",
    authDomain: "solvinghin.firebaseapp.com",
    databaseURL: "https://solvinghin.firebaseio.com",
    projectId: "solvinghin",
    storageBucket: "",
    messagingSenderId: "925204784810"
};

firebase.initializeApp(config);

firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
});
