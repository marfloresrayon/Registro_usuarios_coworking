let cardPass = document.getElementById('cardPass');

firebase.database().ref('visit')
  .on('child_added', (newUser)=>{
    cardPass.innerHTML =
    `<div id="cardPass" class="card publication">
      <div  class="card-body">
        <h4>Información del visitante</h4>
        <p>Nombre: ${newUser.val().name}</p>
        <p>Empresa de origen: ${newUser.val().company}</p>
        <p>Empresa que visita: ${newUser.val().companyVisit}</p>
        <p>Persona que visita: ${newUser.val().employee}</p>
        <p>Fecha: ${newUser.val().date}</p>
        <p>Hora: ${newUser.val().time}</p>
        <p>Clave unica: ${newUser.val().keyVisit}</p>
      </div>
    </div>`;
  });
