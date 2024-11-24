// calling and storing the th database to new array
// -----------------------------------------
var usersData = JSON.parse(localStorage.getItem("user"));
// -----------------------------------------

function signIn() {
  // getting the data from login user
  // -----------------------------------------
  var exampleInputEmail1 = document.getElementById("exampleInputEmail1").value;
  var exampleInputPassword1 = document.getElementById(
    "exampleInputPassword1"
  ).value;
  // -----------------------------------------

  // getting alerts--------------------
  var signinUsernameAlert = document.getElementById("signinUsernameAlert");
  var signinPasswordAlert = document.getElementById("signinPasswordAlert");
  // ---------------------------------

  usersData.find(function (cur) {
    // first checking the username matches or not
    // -----------------------

    if (cur.username !== exampleInputEmail1) {
      signinUsernameAlert.style.display = "block";
      return;
    } else if (cur.password2 !== exampleInputPassword1) {
      signinPasswordAlert.style.display = "block";
      return;
    } else {
      if (
        cur.username == exampleInputEmail1 &&
        cur.password2 == exampleInputPassword1
      ) {
        logInSuccessAlert();
        function logInSuccessAlert() {
          Swal.fire("Good job!", "Youv'e Sucessfully Logged In!", "success");
        }
        window.location.href = "./dashboard/dashboard.html";
      }
    }
  });
}
