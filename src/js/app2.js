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
  console.log(keyEmployee);
  firebase.database().ref(`company/${company}/employee/${keyEmployee}`).set({
    employee: nameEmployee(),
    email: emailEmployee(),
    keyEmployee: keyEmployee
  });
});

// Eliminar registro de empleado (en construcción)
const deleteEmployee = (keyEmployee) => {
  if (confirm('¿Quere eliminar este registro?')) {
    database.ref('company').on('value', function(snapshot) {
      let data = Object.keys(snapshot.val());
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        database.ref(`company/${data[i]}/employee`).child(keyEmployee).remove();
      }
    });
  } else {
    return false;
  }
};
