function createGame(group, player1, hour, player2) {
  return `
      <li>
        <img src="./assets/${group}/icon-${player1}.svg" alt="${player1}" />
        <strong>${hour}</strong>
        <img src="./assets/${group}/icon-${player2}.svg" alt="${player2}" />
      </li>
  `
};

function createCard(date, day, games){
  return `
        <div class="card">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
        </div>
  `
}

document.querySelector('#app').innerHTML = `
      <header>
        <img src="./assets/logo.svg" alt="Logo NWL Copa" />
      </header>
      <main id="cards">
        ${createCard("21/11", "Segunda", createGame("groupA", "senegal", "07:00" ,"netherlands"))}
        ${createCard()}
      </main>
`