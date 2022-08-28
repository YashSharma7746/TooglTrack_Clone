let form = document.querySelector("form");
let signupLS = JSON.parse(localStorage.getItem("signup")) || [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (signupLS.length === 0) {
    alert("User Not Found");
    return;
  }

  let obj = {
    email: form.email.value,
    password: form.password.value,
  };

  let flag = false;
  signupLS.forEach(function (ele) {
    if (ele.email === obj.email && ele.password === obj.password) {
      flag = true;
      localStorage.setItem("signin", JSON.stringify(ele));
      alert("Sign In Sucessfull");
      window.location = "../HTML/timer.html";
    }
  });

  if (flag === false) {
    alert("Email and Password does Not Exist please signup");
    window.location = "../HTML/signup.html";
  }
});
