// Función para obtener fecha
const dateRegistry = () => {
  let dateFormat = new Date();
  let day = dateFormat.getUTCDate();
  let month = dateFormat.getMonth() + 1;
  let year = dateFormat.getFullYear();
  return day = day + '/' + month + '/' + year;
};

// Función para obtener hora
const timeRegistry = () => {
  let timeFormat = new Date();
  let hours = timeFormat.getHours();
  let minutes = timeFormat.getMinutes();
  return hours + ':' + minutes;
};

// Función para obtener nombre del visitante
const nameVisit = () => {
  let name = nameVisitDom.value;
  return name;
};

// Función para obtener email del visitante
const emailVisit = () => {
  let email = emailVisitDom.value;
  return email;
};

// Función para obtener el nombre de la empresa de procedencia
const company = () => {
  let companyName = optionNameCompanyDom.value;
  return companyName;
};

// Función para obtener nombre de la empresa que visita
const companyVisit = () => {
  let company = companyVisitDom.value;
  return company;
};

// Función para obtener el nombre de la persona que visita
const personVisit = () => {
  let personVisit = optionNameEmployeeDom;
  return personVisit;
};

// Registro de Visitantes en la base de datos
btnSend.addEventListener('click', element => {
  let name = nameVisitDom.value;
  let email = emailVisitDom.value;
  let companyName = companyVisitDom.value;
  let companyVisite = optionNameCompanyDom.value;
  let employee = optionNameEmployeeDom.value;
  let emailEmployee = optionEmailEmployeeDom.value;
  if (name === '' & email === '' & companyName === '' & companyVisite === 'Empresa...'
  & employee === 'Empleado...' & emailEmployee === '') {
    alert('Todos los campos deben estar llenos');
  } else {
    firebase.database().ref('visit').push();
    let visitNew = firebase.database().ref('visit').push();
    let keyVisit = visitNew.getKey();
    firebase.database().ref(`visit/${keyVisit}`).set({
      name: name,
      email: email,
      company: companyName,
      companyVisit: companyVisite,
      employee: employee,
      date: dateRegistry(),
      time: timeRegistry(),
      keyVisit: keyVisit
    })
      .then(function() {
        window.location.assign('../views/camera.html');
      })
      .catch(function(error) {
        console.log(error);
      });
  }
});
// Función para enviar correo
(function() {
  emailjs.init('user_8MQ7b82AeEEAsfkQ5PPUt');
})();
const vue = new Vue({
  el: '#app',
  data() {
    return {
      from_name: '',
      to_email: '',
      subject: 'Olá, en recepción te esperan',
    };
  },
  methods: {
    enviar() {
      let data = {
        from_name: this.from_name,
        to_email: this.to_email,
        subject: this.subject,
      };

      emailjs.send('gmail', 'solicitud_de_confirmacion', data)
        .then(function(response) {
          if (response.text === 'OK') {
            alert('El correo se ha enviado de forma exitosa');
          }
          console.log('SUCCESS. status=%d, text=%s', response.status, response.text);
        }, function(err) {
          alert('Ocurrió un problema al enviar el correo');
          console.log('FAILED. error=', err);
        });
    }
  }
});
