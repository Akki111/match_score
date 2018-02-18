var p1B = document.querySelector("#p1");
var p2B = document.getElementById("p2");
var resetB = document.getElementById("reset");
var p1Disp = document.querySelector("#p1Display");
var p2Disp = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScoreDisp = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;


p1B.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			p1Disp.classList.add("winner");
			gameOver = true;
		}
		p1Disp.textContent = p1Score;
	}
});

p2B.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Disp.classList.add("winner");
			gameOver = true;
		}
		p2Disp.textContent = p2Score;
	}
});

resetB.addEventListener("click", function(){
	reset();
});


function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Disp.textContent = 0;
	p2Disp.textContent = 0;
	p1Disp.classList.remove("winner");
	p2Disp.classList.remove("winner");
	gameOver = false;
}

numInput.addEventListener("change", function(){
	winningScoreDisp.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});
