const signInForm = document.querySelector("#signin-form");

if (signInForm) {
  signInForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const message = document.querySelector("#form-message");
    message.textContent =
      "This demo form is ready, but sign-in needs a secure authentication service.";
  });
}