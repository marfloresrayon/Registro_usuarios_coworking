const infoVisit = document.getElementById('info-Visit');
const infoCompany = document.getElementById('info-Company');

// Traer información de los visitantes
database.ref('visit').on('child_added', function(snapshot) {
  let data = snapshot.val();
  infoVisit.innerHTML += `
  <tr>
  <th scope="row">${data.name}</th>
  <td>${data.company}</td>
  <td>${data.date}</td>
  <td>${data.time}</td>
  <td> <a href="#" class="danger-text" id="${data.keyVisit}" onclick= "editStatus('${data.keyVisit}')">
  <i class="fas fa-sign-out-alt"></i>   ${data.status}</td>
</tr>
`;
});

// Traer información de las empresas
database.ref('company').on('value', function(snapshot) {
  infoCompany.innerHTML = '';
  let data = Object.keys(snapshot.val());
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    database.ref(`company/${data[i]}`).on('child_added', function(val) {
      let dataCompany = val.val();
      infoCompany.innerHTML += `
      <tr>
        <th scope="row">${data[i]}</th>
        <td>${dataCompany.employee}</td>
        <td>${dataCompany.email}</td>
        <td> <a href="#" class="danger-text" onclick= "deleteKey('${dataCompany.company}','${dataCompany.keyEmployee}')">
        <i class="far fa-trash-alt fa-xs icon"></i> Borrar</a>
        </td>
        <td></td>
      </tr>
      `;
    });
  }
});


// Eliminar registro de empleado (en construcción)
const deleteKey = (company, key) => {
  console.log(company, key);
  if (confirm('¿Quere eliminar este registro?')) {
    database.ref(`company/${company}`).child(key).remove();
  } else {
    return false;
  }
};

const editStatus = (keyPost) => {
  let status = document.getElementById(keyPost);
  status.innerHTML = timeRegistry();
  let ref = database.ref('visit').child(keyPost);
  return ref.update({
    status: timeRegistry()
  });
}; 