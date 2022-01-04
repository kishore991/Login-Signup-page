const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signBtn1 = document.getElementById("signUpButton1")
const signBtn2 = document.getElementById("signUpButton2")
signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

signBtn1.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});
signBtn2.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});


const SigninSubmit = (e) => {
// e.preventDefault()
  let signmail = document.getElementById("signmail");
  if (signmail.value) {
    if (signpass.value) {
      document.getElementById("err2").innerHTML = "";
      if (signpass.value.length >= 8) {
        document.getElementById("form_submit1").innerHTML = "You Are Login";
      } else {
        document.getElementById("err2").innerHTML = "Password min 8 character";
      }
    } else {
      document.getElementById("err2").innerHTML = "Password Is Empty";
      }
  } else {
    document.getElementById("err3").innerHTML = "Please Enter Your Email";
  }
  console.log(signmail);
  console.log("function is working");
};

const SignupSubmit = (e) => {

  let error1 = document.getElementById("error");
  let fname = document.getElementById("fname");

  if (fname.value) {
    error1.innerHTML = "";
    if (email.value) {
      document.getElementById("error2").innerHTML = "";
      if (pass.value) {
        document.getElementById("error3").innerHTML = "";
        if (pass.value.length >= 8) {
          document.getElementById("form_submit").innerHTML =
            "Account is created";
        } else {
          console.log(
            (document.getElementById("error3").innerHTML =
              "Min 8 charecter passowrd allow")
          );
        }
      } else {
        document.getElementById("error3").innerHTML = "password must ";
      }
    } else {
      document.getElementById("error2").innerHTML = "Please enter valid email";
    }
  } else {
    error1.innerHTML = "please enter your name";
  }

  console.log("function is working");
}; 