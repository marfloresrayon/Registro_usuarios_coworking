let cardPass = document.getElementById('cardPass');

firebase.database().ref('visit')
  .on('child_added', (newUser)=>{
    cardPass.innerHTML =
    `<div id="cardPass" class="card publication">
      <div  class="card-body">
        <p>${newUser.val().name}</p>
        <p>${newUser.val().companyVisit}</p>
        <p>${newUser.val().date}</p>
        <p>${newUser.val().time}</p>
      </div>
    </div>`;
  });
