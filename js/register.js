let loginForm = document.getElementById("registerForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("nama");
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  if (name.value == "" || email.value == "" || password.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a email of ${email.value} and name of ${name.value}`
    );

    username.value = "";
    password.value = "";
  }
});
