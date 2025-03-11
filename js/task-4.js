const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', handleSubmit);
//---------------------------
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === '' || password === '') {
    return alert('Please fill in all the fields!');
  }
  const userData = {
    email: email,
    password: password,
  };
  console.log(userData);
  form.reset();
}
//--------------------------
