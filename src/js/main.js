const nameVisitDom = document.getElementById('name-Visit');
const emailVisitDom = document.getElementById('email-Visit');
const companyVisitDom = document.getElementById('company-Visit');
const optionNameCompanyDom = document.getElementById('optionNameCompany');
const optionNameEmployeeDom = document.getElementById('optionNameEmployee');
const btnSend = document.getElementById('btn-Send');

database.ref('company').on('value', function(snapshot) {
  let data = Object.keys(snapshot.val());
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    optionNameCompanyDom.innerHTML += `
    <option value="${data[i]}">${data[i]}</option>`;
    console.log(data[i]);
  }
});

optionNameCompany.addEventListener('change', element => {
  let nameCompany = optionNameCompany.value;
  console.log(nameCompany)
  employer(nameCompany);
});

// Función para traer data de la empresa
const employer = (company) => {
  console.log(company);
  database.ref(`company/${company}`).on('child_added', function(snapshot) {
    console.log(snapshot);
    snapshot.forEach(function(element) {
      let data = element.val();
      optionNameEmployeeDom.innerHTML += `
      <option value="${data.employee}">${data.employee}</option>`;
    });
  });
};