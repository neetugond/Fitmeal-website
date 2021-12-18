    document.querySelector("#signin").addEventListener("click", signIn);
    var regUsers = JSON.parse(localStorage.getItem("userData"));
  
    function signIn() {
      var email = document.querySelector("#email").value;
      var password = document.querySelector("#password").value;
  // console.log(regUsers)
      for (var i = 0; i < regUsers.length; i++)
      {
        if (regUsers[i].emailAddress == email && regUsers[i].passWord == password) {
         
          alert("login successful")
         window.location.href = "fitmeals.html";
        } else {
          alert("Invalid username or password")
        }
    }
}
    
