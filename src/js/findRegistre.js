let cardPass = document.getElementById('cardPass');

const newUserPrint = () => {
  cardPass.innerHTML =
    `<div id="cardPass" class="card publication">
      <div  class="card-body">
        <p>${name}</p>
        <p>${date}</p>
        <p>${time}f</p>
        <p>${keyVisit}</p>
        <p>${companyName}</p>
      </div>
    </div>`;
};