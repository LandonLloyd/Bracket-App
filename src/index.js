let button = document.getElementById("addTeams");
let entered = document.getElementById("teamsEntered");

let input = document.getElementById("add");
let teams = [];

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
