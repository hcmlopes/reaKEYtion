// Select H1 and place a random character
var min = 33; //lowest char in ascii table
var max = 126; //highest char in ascii table
var rightScore = 0;
var wrongScore = 0;
var streak = 0;
var char = document.querySelector("#char");
var rightScoreDisp = document.querySelector("#right");
var wrongScoreDisp = document.querySelector("#wrong");
var streakDisp = document.querySelector("#streak")

//add event listener to window and compares is key pressed is same as char displayed
window.addEventListener('keypress', function (e) {
	if (e.key === char.textContent) {
		rightScore++
		rightScoreDisp.textContent = rightScore;
		streak++
	}  else {
		wrongScore++
		wrongScoreDisp.textContent = wrongScore;
		streak = 0;
	}
	streakDisp.textContent = streak;
	randKey()
});

function randKey() {
	// generate random int between the min and max nums including the min and max
	var num = Math.floor(Math.random() * (max - min + 1) + min);
	//set h1 as the char corresponding the random number in the ascii table
	char.textContent = String.fromCharCode(num);
};