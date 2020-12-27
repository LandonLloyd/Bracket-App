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
	entered.innerHTML = `Teams Entered: ${teams}`;
	input.value = "";

	console.log(teams);
}

//ABOVE CODE IS FOR ENTERING TEAMS ^^^

//THIS IS FOR CREATING MATCHMAKING

let matchmaker = document.getElementById("createMatchup");

matchmaker.addEventListener("click", matchmaking);
let matchesText = document.getElementById("matches");
let used = [];
let used2 = [];

function matchmaking() {
	//THIS IS WHERE I NEED HELP
	let random = Math.floor(Math.random() * teams.length);
	let random2 = Math.floor(Math.random() * teams.length);

	let match = document.createTextNode(
		`${teams[random]} VS. ${teams[random2]}`
	);
	let lineBreak = document.createElement("br");
	used.push(random);
	console.log(used);
	used2.push(random2);
	console.log(used2);
	matchesText.appendChild(match);
	matchesText.appendChild(lineBreak);
	if (used.length === teams.length) {
		return;
	}
}

//ABOVE CODE IS FOR CREATING MATCHMAKING ^^^
