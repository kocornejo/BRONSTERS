//
//Constants for buttons
const petBtn = document.querySelector("#action-pet");
const feedBtn = document.querySelector("#action-feed");
const trainBtn = document.querySelector("#action-train");
const startBtn = document.querySelector("#action-menu-start-game");
const replayBtn = document.querySelector("#action-replay");

//music/sound effects
const music=new Audio('js/music/cave_theme_2.wav');
// music.play();
music.loop =true;
music.playbackRate = 2;
music.pause();
music.volume=0.2;

const click_sound=new Audio('js/music/Blip_select 67.wav');
click_sound.volume=0.1;

const victory=new Audio('js/music/Fanfare_1.wav');
victory.volume=0.1;

const gameOver=new Audio('js/music/Game_Over_2.wav');
gameOver.volume=0.1;

//Constants for main bar
const happinessHp = document.querySelector("#happiness-hp");
const hungerHp = document.querySelector("#hunger-hp");
const disciplineHp = document.querySelector("#discipline-hp");
const daysBar = document.querySelector("#days");

//Game settings
const maxHappiness = 300;
const maxHunger = 300;
const maxDiscipline = 300;
//Game speed
let day = 20;

//New object
function Monster() {
  this.happiness = maxHappiness;
  this.hunger = maxHunger;
  this.discipline = maxDiscipline;
}

//Abilities
Monster.prototype.actionPet = function() {
    this.happiness+=40 / (day * 2)
};

Monster.prototype.actionEat = function() {
	this.hunger+=120 / (day * 2)
};

Monster.prototype.actionTrain = function() {
	this.discipline+=80 / (day * 2)
};

Monster.prototype.tick = function() {
    this.happiness--;
    this.hunger-=8;
    this.discipline-=8;
};

let mnstr = new Monster();
let happinessHpCount;
let hungerHpCount;
let disciplineHpCount;
let days = 0;

//Controllers
petBtn.addEventListener("click", function() {
	mnstr.actionPet(), click_sound.play();
});

feedBtn.addEventListener("click", function() {
	mnstr.actionEat(), click_sound.play();
});

trainBtn.addEventListener("click", function() {
	mnstr.actionTrain(), click_sound.play();
});

replayBtn.addEventListener("click", function() {
    startGame(), click_sound.play();
});

startBtn.addEventListener("click", function() {
	startGame(), click_sound.play(), music.play();
});





//Togglers for buttons
document.querySelector(".game-screen").classList.toggle("hide");

function MainMenu() {
	document.querySelector(".main-menu-screen").classList.toggle("hide");
}


function startGame() {
	document.querySelector(".game-screen").classList.toggle("hide");
	document.querySelector(".main-menu-screen").classList.toggle("hide");


	//Start game
	core();
	let coreUpdate = setInterval(core, 100 * day);

	//Main function of monster
	function core() {
		//console.log(mnstr);
		happinessHpCount = (mnstr.happiness / maxHappiness * 100).toFixed(2);
		hungerHpCount = (mnstr.hunger / maxHunger * 100).toFixed(2);
		disciplineHpCount = (mnstr.discipline / maxDiscipline * 100).toFixed(2);

		//Scores
		days++;
		daysBar.innerHTML = days;

		//Death ability
		if ((disciplineHpCount <= 0) || (happinessHpCount <= 0) || (hungerHpCount <= 0)) {
			playHpCount = 0;
			happinessHpCount = 0;
			disciplineHpCount = 0;
			clearInterval(coreUpdate);
			alert("Days: " + days + "\n  DON'T TALK TO ME OR MY SON EVER AGAIN! ");
            music.pause();
            gameOver.play();
		}

		//Max health percentage (for player)
		if ((mnstr.happiness / maxHappiness * 100) > 100) {
			happinessHpCount = 100;
		}
		if ((mnstr.hunger / maxHunger * 100) > 100) {
			hungerHpCount = 100;
		}
		if ((mnstr.discipline / maxDiscipline * 100) > 100) {
			disciplineHpCount = 100;
		}
        if (days === 50){
            music.pause();
            victory.play();
            alert("Days survived:" + days + "\n You'll be rewarded greatly");
        }

		//Show HP on screen
		happinessHp.innerHTML = happinessHpCount;
		hungerHp.innerHTML = hungerHpCount;
		disciplineHp.innerHTML = disciplineHpCount;

		//Remove HP every tick
		mnstr.tick();


	}
}