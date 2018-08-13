// Funcion de inicio de sesion de administrador
let emailLogin = document.getElementById('email-login');
let passwordLogin = document.getElementById('password-login');
let login = document.getElementById('login');
let logout = document.getElementById('logout');

// funcion para iniciar sesion con correo y contrasena ya registrados
login.addEventListener('click', loginfunction = () => {
  const email = emailLogin.value;
  const password = passwordLogin.value;
  console.log(email);
  console.log(password);
  const inicio = firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function() {
      window.location.assign('../views/task.html');
    })
    .catch(function(error) {
    // Mensaje en consola si existe error de inicio de sesion
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      alert('Usuario o contraseña incorrectos');
    });
});
