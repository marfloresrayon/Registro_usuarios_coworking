const nameVisitDom = document.getElementById('name-Visit');
const emailVisitDom = document.getElementById('email-Visit');
const companyVisitDom = document.getElementById('company-Visit');
const optionNameCompanyDom = document.getElementById('optionNameCompany');
const optionNameEmployeeDom = document.getElementById('optionNameEmployee');
const optionEmailEmployeeDom = document.getElementById('optionEmailEmployee');
const btnSend = document.getElementById('btn-Send');

database.ref('company').on('value', function(snapshot) {
  let data = Object.keys(snapshot.val());
  for (let i = 0; i < data.length; i++) {
    optionNameCompanyDom.innerHTML += `
    <option value="${data[i]}">${data[i]}</option>`;
  }
});

optionNameCompanyDom.addEventListener('change', element => {
  let nameCompany = optionNameCompanyDom.value;
  employer(nameCompany);
});

// Función para traer data de la empresa
const employer = (company) => {
  database.ref(`company/${company}`).on('value', function(snapshot) {
    snapshot.forEach(function(element) {
      let data = element.val();
      optionNameEmployeeDom.innerHTML += `
      <option value="${data.employee}">${data.employee}</option>`;
    });
  });
};

optionNameEmployeeDom.addEventListener('change', element => {
  let nameCompany = optionNameCompanyDom.value;
  let nameEmployee = optionNameEmployeeDom.value;
  emailEmployer(nameCompany, nameEmployee);
});

// Función para traer email del empleado
const emailEmployer = (company, nameEmployee) => {
  database.ref(`company/${company}`).on('value', function(snapshot) {
    snapshot.forEach(function(element) {
      let data = element.val();
      console.log(data);
      optionEmailEmployeeDom.innerHTML += `
      <option value="${data.email}">${data.email}</option>`;
    });
  });
};
