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
  console.log(name);
  return name;
};

// Función para obtener email del visitante
const emailVisit = () => {
  let email = emailVisitDom.value;
  console.log(email);
  return email;
};

// Función para obtener el nombre de la empresa de procedencia
const company = () => {
  let companyName = optionNameCompanyDom.value;
  console.log(companyName);
  return companyName;
};

// Función para obtener nombre de la empresa que visita
const companyVisit = () => {
  let company = companyVisitDom.value;
  console.log(company);
  return company;
};

// Función para obtener el nombre de la persona que visita
const personVisit = () => {
  let personVisit = optionNameEmployeeDom;
  console.log(personVisit);
  return personVisit;
};

// Registro de Visitantes en la base de datos
btnSend.addEventListener('click', element => {
  firebase.database().ref('visit').push();
  let visitNew = firebase.database().ref('visit').push();
  console.log(visitNew);
  let keyVisit = visitNew.getKey();
  console.log(keyVisit);
  firebase.database().ref(`visit/${keyVisit}`).set({
    name: nameVisit(),
    email: emailVisit(),
    company: companyVisit(),
    companyVisit: company(),
    employee: personVisit(),
    date: dateRegistry(),
    time: timeRegistry()
  })
    .then(function() {
      window.location.assign('camera.html');
    })
    .catch(function(error) {
      console.log(error);
    });
});
