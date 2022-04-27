/*
Viene fornito un layout di base in cui è presente **una card di esempio** inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e **dovrà quindi essere rimossa dall’html**.
Aggiungere un file js in cui definire **un array di oggetti** che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: **Nome, Ruolo e Foto**.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.
*/

const teamContainer = document.querySelector('.team-container');
console.log(teamContainer);
const teamArray = 

[
  {
    name: 'Wayne Barnett',
    role: 'Founder CEO',
    image: '',
    
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: ''
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: ''
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: ''
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: ''
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: ''
  }
]

for(let i in teamArray){
  const team = teamArray[i];
  team.image = team.name.split(' ').join('-').toLowerCase() + '-' + team.role.split(' ').join('-').toLowerCase() + '.jpg';

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


