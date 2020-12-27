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

function matchmaking() {
	//THIS IS WHERE I NEED HELP
	let random = Math.floor(Math.random() * teams.length);
	let used = [];
	let bracket = document.createElement("div");
	bracket.setAttribute("id", "bracket");
}

//ABOVE CODE IS FOR CREATING MATCHMAKING ^^^
