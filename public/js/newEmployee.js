const signupFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector('#name-signup').value.trim();
  const lastName = document.querySelector('#lastName-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const role = document.querySelector('#role').value;
  let isAdmin = document.querySelector('#cmn-toggle-1').value;

  if (isAdmin === 'on') {
    isAdmin = true;
  } else {
    isAdmin = false;
  }

  if (firstName && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, email, password, role, isAdmin }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/new-employee');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

$(document).ready(function () {
  $(".toggle-password").click(function () {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
});