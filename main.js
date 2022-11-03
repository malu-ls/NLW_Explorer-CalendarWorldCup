// Função que cria a listagem de jogos conforme os paramentros passados
function createGame(group, player1, hour, player2) {
  return `
      <li>
        <img src="./assets/${group}/icon-${player1}.svg" alt="${player1}" />
        <strong>${hour}</strong>
        <img src="./assets/${group}/icon-${player2}.svg" alt="${player2}" />
      </li>
  `
}

let delay = -0.3

// Função que criar os cards com a listagem de jogos dentro dele
function createCard(date, day, games) {
  delay = delay + 0.3
  return `
        <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
        </div>
  `
}

// Função que injeta o HTML no seletor mencionado #app, como tenho uma div de id App o HTML abaixo é injetado dentro dessa div.
document.querySelector("#cards").innerHTML =
  createCard(
    "21/11",
    "Segunda",
    createGame("groupA", "senegal", "07:00", "netherlands") +
      createGame("groupB", "england", "10:00", "iran") +
      createGame("groupA", "qatar", "13:00", "ecuador") +
      createGame("groupB", "usa", "16:00", "wales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("groupC", "argentina", "07:00", "saudiArabia") +
      createGame("groupD", "denmark", "10:00", "tunisia") +
      createGame("groupC", "mexico", "13:00", "poland") +
      createGame("groupD", "france", "16:00", "australia")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("groupF", "morocco", "07:00", "croatia") +
      createGame("groupE", "germany", "10:00", "japan") +
      createGame("groupE", "spain", "13:00", "costaRica") +
      createGame("groupF", "belgium", "16:00", "canada")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("groupG", "switzerland", "07:00", "cameroon") +
      createGame("groupH", "uruguay", "10:00", "koreaRepublic") +
      createGame("groupH", "portugal", "13:00", "ghana") +
      createGame("groupG", "brazil", "16:00", "serbia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("groupB", "wales", "07:00", "iran") +
      createGame("groupA", "qatar", "10:00", "senegal") +
      createGame("groupA", "netherlands", "13:00", "ecuador") +
      createGame("groupB", "england", "16:00", "usa")
  ) +
  createCard(
    "26/11",
    "Sábado",
    createGame("groupD", "tunisia", "07:00", "australia") +
      createGame("groupC", "poland", "10:00", "saudiArabia") +
      createGame("groupD", "france", "13:00", "denmark") +
      createGame("groupC", "argentina", "16:00", "mexico")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("groupE", "japan", "07:00", "costaRica") +
      createGame("groupF", "belgium", "10:00", "morocco") +
      createGame("groupF", "croatia", "13:00", "canada") +
      createGame("groupE", "spain", "16:00", "germany")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("groupG", "cameroon", "07:00", "serbia") +
      createGame("groupH", "koreaRepublic", "10:00", "ghana") +
      createGame("groupG", "brazil", "13:00", "switzerland") +
      createGame("groupH", "portugal", "16:00", "uruguay")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("groupA", "netherlands", "12:00", "qatar") +
      createGame("groupA", "ecuador", "12:00", "senegal") +
      createGame("groupB", "wales", "16:00", "england") +
      createGame("groupB", "iran", "16:00", "usa")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("groupD", "tunisia", "12:00", "france") +
      createGame("groupD", "australia", "12:00", "denmark") +
      createGame("groupC", "poland", "16:00", "argentina") +
      createGame("groupC", "saudiArabia", "16:00", "mexico")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("groupF", "croatia", "12:00", "belgium") +
      createGame("groupF", "canada", "12:00", "morocco") +
      createGame("groupE", "japan", "16:00", "spain") +
      createGame("groupE", "costaRica", "16:00", "germany")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("groupH", "koreaRepublic", "12:00", "portugal") +
      createGame("groupH", "ghana", "12:00", "uruguay") +
      createGame("groupG", "cameroon", "16:00", "brazil") +
      createGame("groupG", "serbia", "16:00", "switzerland")
  )
