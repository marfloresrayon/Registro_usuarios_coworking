const nameCompanyDom = document.getElementById('name-Company');
const nameEmployeeDom = document.getElementById('name-Employee');
const btnRegistry = document.getElementById('btn-Registry');
const emailEmployeeDom = document.getElementById('email-Employee');

// Función para obtener nombre de la empresa para registro de la administración
const nameCompany = () => {
  let company = nameCompanyDom.value;
  console.log(company);
  return company;
};
  
// Función para obtener nombre del empleado
const nameEmployee = () => {
  let employee = nameEmployeeDom.value;
  console.log(employee);
  return employee;
};
 
// Función para obtener email del empleado
const emailEmployee = () => {
  let emailEmployee = emailEmployeeDom.value;
  return emailEmployee;
};

// Registro de Empleados en la base de datos
btnRegistry.addEventListener('click', element => {
  let company = nameCompany();
  firebase.database().ref('company').push();
  let employeeNew = firebase.database().ref(`company/${company}/employee`).push();
  console.log(employeeNew);
  let keyEmployee = employeeNew.getKey();
  firebase.database().ref(`company/${company}/employee/${keyEmployee}`).set({
    employee: nameEmployee(),
    email: emailEmployee()
  });
});

// Eliminar registro de empleado (en construcción)
const deletePost = (keyEmployee) => {
  if (confirm('¿Quere eliminar este registro?')) {
    database.ref('company').child(keyEmployee).remove();
  } else {
    return false;
  }  
};