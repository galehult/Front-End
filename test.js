//Real Time Counter
// const textArea = document.getElementById("text-input");
// const counter = document.getElementById("char-count");

// textArea.addEventListener('input', (event) => {
//   if (textArea.value.length > 50) {
//     textArea.value = textArea.value.slice(0, 50);
//   }

//   counter.textContent = `Character Count: ${textArea.value.length}/50`;

//   if (textArea.value.length >= 50) {
//     counter.style.color = "red";
//   } else {
//     counter.style.color = "black";
//   }
// });
 
// Lightbox Gallery
// const galleryItem = document.querySelectorAll(".gallery-item");


// galleryItem.forEach(gallery => {
//   gallery.addEventListener("click", (event) => {
//     const selectedImage = document.getElementById("lightbox-image");
//     const lightbox = document.querySelector(".lightbox");

//     lightbox.style.display = "flex";

//     selectedImage.src = event.target.src.replace("-thumbnail", "");
//     selectedImage.style.maxHeight = "90%";
//     selectedImage.style.maxWidth = "80%";
//     selectedImage.style.margin = "0 auto";
//   });
// });

// const closeBtn = document.getElementById("close-btn");

// closeBtn.addEventListener("click", (event) => {
//   const lightbox = document.querySelector(".lightbox");
//     lightbox.style.display = "none";
// });

// const lightbox = document.querySelector(".lightbox");

// lightbox.addEventListener("click", (event) => {
//   if (event.target === lightbox) {
//     lightbox.style.display = "none";
//   }
// })

// Rock, Paper, Scissors Game
// const options = ["Rock", "Paper", "Scissors"];

// function getRandomComputerResult() {
//   const randomOption = options[Math.floor(Math.random() * options.length)];

//   return randomOption;
// }

// function hasPlayerWonTheRound(playerChoice, computerChoice) {
//   return (
//     (playerChoice === "Rock" && computerChoice === "Scissors") ||
//     (playerChoice === "Scissors" && computerChoice === "Paper") ||
//     (playerChoice === "Paper" && computerChoice === "Rock")
//   );
// }

// let playerScore = 0;
// let computerScore = 0;

// function getRoundResults(userOption) {
//   const computerResult = getRandomComputerResult();

//   if (hasPlayerWonTheRound(userOption, computerResult)) {
//     playerScore++;
//     return `Player wins! ${userOption} beats ${computerResult}`;
//   } else if (userOption === computerResult) {
//     return `It's a tie! Both chose ${userOption}`;
//   } else {
//     computer++;
//     return `Computer wins! ${computerResult} beats ${userOption}`;
//   }
// }

// const playerScoreSpanElement = document.getElementById("player-score");
// const computerScoreSpanElement = document.getElementById("computer-score");
// const roundResultsMsg = document.getElementById("results-msg");

// function showResults(userOption) {
//   roundResultsMsg.innerText = getRoundResults(userOption);
//   playerScoreSpanElement.innerText = playerScore;
//   computerScoreSpanElement.innerText = computerScore;

//   if (playerScore === 3) {
//     winnerMsgElement.textContent = "Player has won the game!";
//     resetGameBtn.style.display = "block";
//     optionsContainer.style.display = "none";
//   } else if (computerScore === 3) {
//     winnerMsgElement.textContent = "Computer has won the game!";
//     resetGameBtn.style.display = "block";
//     optionsContainer.style.display = "none"
//   }
// }

// function resetGame() {
//   playerScore = 0;
//   computerScore = 0;
//   playerScoreSpanElement.innerText = playerScore;
//   computerScoreSpanElement.innerText = computerScore;
//   resetGameBtn.style.display = "none";
//   optionsContainer.style.display = "block";
//   winnerMsgElement.textContent = "";
//   roundResultsMsg.textContent = "";
// }

// resetGameBtn.addEventListener("click", resetGame);

// const rockBtn = document.getElementById("rock-btn");
// const paperBtn = document.getElementById("paper-btn");
// const scissorsBtn = document.getElementById("scissors-btn");

// rockBtn.addEventListener("click", (event) => {
//   showResults("Rock");
// });

// paperBtn.addEventListener("click",() => {
//   showResults("Paper");
// });

// scissorsBtn.addEventListener("click", () => {
//   showResults("Scissors");
// });

// const winnerMsgElement = document.getElementById("winner-msg");
// const optionsContainer = document.querySelector(".options-container");
// const resetGameBtn = document.getElementById("reset-game-btn");

// Set of Football Team Cards
// const footballTeam = {
//   team: "Tennis Players",
//   year: 2026,
//   headCoach: "ATP",
//   players: [
//     {name: "Jannik Sinner", position:  "forward", isCaptain: true},
//     {name:  "Carlos Alcaraz", position:  "midfielder", isCaptain: false},
//     {name:  "Alexander Zverev", position:  "defender", isCaptain: false},
//     {name:  "Novak Djokovic", position:  "goalkeeper", isCaptain: false},
//     {name:  "Ben Shelton", position:  "forward", isCaptain: false},
//     {name:  "Felix Auger-Aliassime", position:  "midfielder", isCaptain: false},
//     {name:  "Alex de Minaur", position:  "defender", isCaptain: false},
//     {name:  "Daniil Medvedev", position:  "goalkeeper", isCaptain: false},
//     {name:  "Taylor Fritz", position:  "forward", isCaptain: false},
//     {name:  "Alexander Bublik", position:  "midfielder", isCaptain: false},
//     {name:  "Lorenzo Musetti", position:  "defender", isCaptain: false},
//     {name:  "Jiri Lehecka", position:  "goalkeeper", isCaptain: false},
//     {name:  "Andrey Rublev", position:  "forward", isCaptain: false},
//     {name:  "Flavio Cobolli", position:  "midfielder", isCaptain: false},
//     {name:  "Karen Khachanov", position:  "defender", isCaptain: false},
//     {name:  "Casper Ruud", position:  "goalkeeper", isCaptain: false},
//     {name:  "Luciano Darderi", position:  "forward", isCaptain: false},
//     {name:  "Learner Tien", position:  "midfielder", isCaptain: false},
//     {name:  "Valentin Vacherot", position:  "defender", isCaptain: false},
//     {name:  "Arthur Fils", position:  "goalkeeper", isCaptain: false},
//     {name:  "Tommy Paul", position:  "forward", isCaptain: false},
//     {name:  "Frances Tiafoe", position:  "midfielder", isCaptain: false}]
// };
// const headCoach = document.getElementById("head-coach");
// const team = document.getElementById("team");
// const year = document.getElementById("year");

// headCoach.textContent = footballTeam.headCoach;
// team.textContent = footballTeam.team;
// year.textContent = footballTeam.year;

// footballTeam.players.forEach((players) => {
//   const playerCards = document.getElementById("player-cards");
//   const newDiv = document.createElement("div");
//   newDiv.classList.add("player-card")
  
//   const newH2 = document.createElement("h2");
//   const newP = document.createElement("p");

//   playerCards.appendChild(newDiv);
//   newDiv.appendChild(newH2);
//   newDiv.appendChild(newP);

//   if (players.isCaptain === true) {
//     newH2.textContent = `(Captain) ${players.name}`;
//     newP.textContent = `Position: ${players.position}`;

//   } else {
//     newH2.textContent = `${players.name}`;
//     newP.textContent = `Position: ${players.position}`;
//   }
// });

// const selectPlayers = document.getElementById("players");
// const playerCards = document.getElementById("player-cards");

// function playerSelector(playerPosition) {
//   const players = 
//     playerPosition === "all"
//       ? footballTeam.players
//       : footballTeam.players.filter(
//         ({ position }) => position === playerPosition );

//   return players.map(({name, position, isCaptain}) => {
//     return `<div class="player-card"><h2>${isCaptain ? "(Captain) " : ""}${name}</h2><p>Position: ${position}</p></div>`;
//   }).join("");
// }

// selectPlayers.addEventListener("change", (event) => {
//   playerCards.innerHTML = playerSelector(event.target.value);
// });