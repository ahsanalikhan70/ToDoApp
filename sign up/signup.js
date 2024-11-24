// setting an array for the user data to be pushed in form of objects

var user = [];

// storing user data in global also
// ----------------------------
var username = document.getElementById("username").value;
var email = document.getElementById("email").value;
var password1 = document.getElementById("password1").value;
var password2 = document.getElementById("password2").value;
// -----------------------------

// --------------------------------------------------------------------
// ------------------------------------------------------
// signup function Start---------------------
function signUp() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password1 = document.getElementById("password1").value;
  var password2 = document.getElementById("password2").value;

  // adding alerts
  // -----------------------------
  var usernameAlert = document.getElementById("usernameAlert");
  // ------------------------------

  // ------------------------------
  var emailAlert = document.getElementById("emailAlert");
  // ------------------------------

  // ------------------------------
  var password1Alert = document.getElementById("password1Alert");
  // ------------------------------

  // ------------------------------
  var password2Alert = document.getElementById("password2Alert");
  // ------------------------------

  // form validations
  // -------------------------------------------------------------------------

  // username validation -----------------------
  if (username == "" || username.length <= 5 ) {
    if (username == "") {
      usernameAlert.style.display = "block";
    }

    else if (username.length <= 5) {
      usernameAlert.style.display = "block";
    }

    else {
      var includeNumber = /\d/;
      var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
      if (!specialChars.test(username)) {
        usernameAlert.style.display = "block";
      }
      else if (!includeNumber.test(username)) {
        usernameAlert.style.display = "block";
      }
    }
  }
  // ------------------------

  // email validation -----------------------
  else if (email == "" || email.length <= 6 ) {
    if (email == "") {
      emailAlert.style.display = "block";
    }

    else if (email.length <= 6) {
      emailAlert.style.display = "block";
    }

    else {
      var specialChars = /@/;
      if (!specialChars.test(email)) {
        emailAlert.style.display = "block";
      }
    }
  }
    // ----------------------

    // passwords validation -----------------------
    else if (password1 == "" || password1.length <= 6 ) {
      if (password1 == "") {
        password1Alert.style.display = "block";
      }

      else if (password1.length <= 6) {
        password1Alert.style.display = "block";
      }

      else if (password1.length > 6) {
        var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        var capitalAlphabet = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]+/;
        var includeNumber = /\d/;

        if (!specialChars.test(password1)) {
          password1Alert.style.display = "block";
        }
         else if (!capitalAlphabet.test(password1)) {
          password1Alert.style.display = "block";
        }

        else if (!includeNumber.test(password1)) {
          password1Alert.style.display = "block";
        }
      }
    }
      else if (password1 !== password2) {
        password2Alert.style.display = "block";
      }
    
      // ------------------------

else{
      // adding the data to an array of objects
      // -----------------------
      user.push({
        username,
        email,
        password1,
        password2,
      });
      localStorage.setItem("user", JSON.stringify(user));


        console.log("done");
        successFireSweetAlert();
        window.location.href="../index.html"
      
      

      function successFireSweetAlert() {
        Swal.fire(
          "Good job!",
          "Your Account Sucessfully Registered!",
          "success"
        );
      
    }
    }
  }

// sign up function end --------------------------
// ---------------------------------------------------------
// -------------------------------------------------------------------

