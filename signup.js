document.querySelector("#creatAc").addEventListener("click", signUp);
var userArr = JSON.parse(localStorage.getItem("userData")) || [];

//   localStorage.clear()
  function signUp() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var userCredentials = {
      firstName: name,
      lastName: surname,
      emailAddress: email,
      passWord: password,
    };
   if (name != "" && surname != "" && email != "" && password != "") {
      userArr.push(userCredentials);
          localStorage.setItem("userData", JSON.stringify(userArr));
          alert("Signup Success!");
          window.location.href = "login.html";
      }
     else {
      alert("Please fill all the required field");
    }

}