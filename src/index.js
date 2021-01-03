//THIS IS FOR ENTERING TEAMS

let button = document.getElementById("addTeams");

let entered = document.getElementById("teamsEntered");

let clearTeams = document.getElementById("clearTeams");

let input = document.getElementById("add");

let teams = [];

clearTeams.addEventListener("click", function () {
	teams = [];
	console.log(teams);
	entered.innerHTML = "Teams Entered: ";
	matchesText.innerHTML = "";
});

document.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		addTeamNames();
	}
});

button.addEventListener("click", addTeamNames);
function addTeamNames() {
	if (input.value === "") {
		return;
	}
	teams.push(input.value);
	console.log(teams);
	entered.innerHTML = `Teams Entered: ${teams}`;
	input.value = "";
}
//THIS IS FOR CREATING MATCHMAKING

let matchmaker = document.getElementById("createMatchup");

matchmaker.addEventListener("click", matchmaking);

let matchesText = document.getElementById("matches");

function matchmaking() {
	let random = Math.floor(Math.random() * teams.length);
	let firstTeam = teams.splice(random, 1);

	let random2 = Math.floor(Math.random() * teams.length);
	let secondTeam = teams.splice(random2, 1);

	let match = document.createTextNode(`${firstTeam} VS. ${secondTeam}`);

	let lineBreak = document.createElement("br");
	let winnerButton = document.createElement("button");
	let randButton = document.createElement("button");
	let buttonWinText = document.createTextNode("Select Winner");
	let buttonRandText = document.createTextNode("Random Winner");
	matchesText.appendChild(match);
	matchesText.appendChild(winnerButton);
	winnerButton.appendChild(buttonWinText);
	matchesText.appendChild(randButton);
	randButton.appendChild(buttonRandText);
	matchesText.appendChild(lineBreak);

	//let counter = teams.length / 2;
	//Make it so that the you don't make more matchups than teams. Find teams that get a bye and make the button functionality!
}
