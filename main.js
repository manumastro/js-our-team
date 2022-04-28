/*
Viene fornito un layout di base in cui è presente **una card di esempio** inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e **dovrà quindi essere rimossa dall’html**.
Aggiungere un file js in cui definire **un array di oggetti** che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: **Nome, Ruolo e Foto**.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.

Utilizzare gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team: cliccando sul pulsante “add” viene creato un **nuovo oggetto**, il quale viene **inserito nell’array iniziale** e viene stampata una nuova card con tutte le informazioni inserite dall’utente.

*/

const teamContainer = document.querySelector('.team-container');
console.log(teamContainer);
const teamArray = 

[
  {
    name: 'Wayne Barnett',
    role: 'Founder CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
    
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg'
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg'
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg'
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg'
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg'
  }
]

createCards();


document.getElementById('addMemberButton').addEventListener('click', function(){

  const teamArrayAdded = [];

  let newMember = {
    name: document.getElementById('name').value,
    role: document.getElementById('role').value,
    image: document.getElementById('image').value
  }
  console.log(newMember);
  teamArrayAdded.push(newMember);

  createCardsAdded(teamArrayAdded);
})

function createCards(){
  for(let i in teamArray){
    console.log(teamArray[i]);
  
    const team = teamArray[i];
  
    const output = 
    `
    <div class="team-card">
              <div class="card-image">
                <img
                  src="img/${team.image}""
                  alt="${team.name}"
                />
              </div>
              <div class="card-text">
                <h3>${team.name}</h3>
                <p>${team.role}</p>
              </div>
            </div>
    `;
  
    teamContainer.innerHTML += output;
  }
}

function createCardsAdded(teamArrayAdded){
  for(let i in teamArrayAdded){
    console.log(teamArrayAdded[i]);
  
    const team = teamArrayAdded[i];
  
    const output = 
    `
    <div class="team-card">
              <div class="card-image">
                <img
                  src="img/${team.image}""
                  alt="${team.name}"
                />
              </div>
              <div class="card-text">
                <h3>${team.name}</h3>
                <p>${team.role}</p>
              </div>
            </div>
    `;
  
    teamContainer.innerHTML += output;
  }
}


