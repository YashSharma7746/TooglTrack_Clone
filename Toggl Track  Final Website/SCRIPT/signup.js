let form = document.querySelector("form");

let signupLS = JSON.parse(localStorage.getItem("signup")) || [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    email: form.email.value,
    password: form.pw.value,
  };

  if (obj.name == "") {
    alert("filled all input");
    return;
  }

  alert("sugnup sucessfull");
  signupLS.push(obj);
  localStorage.setItem("signup", JSON.stringify(signupLS));
  window.location = "../HTML/login.html";
});
