let header = document.getElementById("header");
let button = document.getElementById("dark-mode");

function goToDarkMode(e) {
	console.log(e.target);
	document.body.classList.toggle("dark");
	if (document.body.classList.contains("dark")) {
		e.target.textContent = "White mode";
	} else {
		e.target.textContent = "Dark mode";
	}
}

button.addEventListener("click", goToDarkMode);

//
