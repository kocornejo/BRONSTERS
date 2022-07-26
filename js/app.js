(function() {
    "use strict";
        
     document.addEventListener('DOMContentLoaded',function(){
/*----- constants -----*/

// const monsterGallery = {
//     redDragon: {
//         redBabyDragon: {
//             imageUrl
//         }
//         redAdultDragon: {
//             imageUrl
//         }
//     }
//     worm: {
//         babyWorm: {
//             imageUrl
//         }
//         adultWorm: {
//             imageUrl
//         }
    
//     }
//     demonEye: {
//         babyDemonEye: {
//             imageUrl
//         }
//         adultDemonEye: {
//             imageUrl
//         }
//     }
//     demon: {
//         babyDemon: {
//             imageUrl
//         }
//         adultDemon: {
//             imageUrl
//         }
//     }
//     goldDragon: {
//         goldBabyDragon: {
//             imageUrl
//         }
//         goldAdultDragon: {

//         }
//     }

// }
// const deaths_gameover = 1;


/*----- app's state (variables) -----*/
// there's a hunger meter, a trouble meter and a cleanliness meter that feed into the happiness meter
// score is added after each successful session

let happiness = 100;
let hunger = 50;
let trouble = 50;
let cleanliness = 50;

// the meters
let happMtr = happiness;
let hungMtr = hunger;
let troMtr = trouble;
let cleanMtr = cleanliness;

// the meters slide

let happMtrSld = 1000;
let hungMtrSld = 2000;
let troMtrSld = 2000;
let cleanMtrSld = 2000;
let limits = happiness * 0.5;
let points = 2;
let widther = 4;


let score;



/*----- cached element references -----*/

// in the html body
const happyMeterEl = document.querySelector('#happyMeter');
const dungeonEl = document.querySelector('#dungeon');
const hungerMeterEl = document.querySelector('#hungerMeter');
const trainingMeterEl = document.querySelector('#trainingMeter');
const cleanlinessMeterEl = document.querySelector('#cleanlinessMeter');
const commandBtns = document.querySelector('#commands');
const replayBtn = document.querySelector('#replay');
const retry = document.getElementById('#retry');

// meter attributes
let happMtrAtt = document.getElementById('happMtr');
let hungMtrAtt = document.getElementById('hungMtr');
let trainMtrAtt = document.getElementById('trainMtr');
let cleanMtrAtt = document.getElementById('cleanMtr');

let happLook = happMtrAtt.style;
let hungLook = hungMtrAtt.style;
let trainLook = trainMtrAtt.style;
let cleanLook = cleanMtrAtt.style;

let happBar = happMtr.style;
let hungBar = hungMtr.style;
let trainBar = trainMtr.style;
let cleanBar = cleanMtr.style;
let meterOutline = "1px solid";

let happMtrColor = "green";
let hungMtrColor = "brown";
let trainMtrColor = "red";
let cleanMtrColor = "yellow";




/*----- event listeners -----*/

commandBtns.addEventListener('click', doCommands);

replayBtn.addEventListener('click', init);

/*----- functions -----*/

//should be the default screen 

init()

function init() {



}

    // getting buttons 

    const feedBtnEl = document.getElementById('feedBtn');
    const trainBtnEl = document.getElementById('trainBtn');
    const cleanBtnEl = document.getElementById('cleanBtn');
    const replayEl = document.getElementById('replay');


// meters decreasing and increasing

// setting intervals for meters

// hunger, trouble, cleanliness meter
setInterval(function(){
    if(alive == true){
        gainHung();
    }
},hungMtrSld);

setInterval(function(){
    if(alive == true){
        gainTrouble();
    }
},troMtrSld);

setInterval(function(){
    if(alive == true){
        loseClean();
    }
}, cleanMtrSld);

// happiness meter
setInterval(function(){
    healthWidth();
})

// function happMtrSld(){    ---
//     if(happMtr < 0){
//     alive = false;
//     }                         causing errors
//     if(alive == false)
//     {
//         gameover();
//     }                     ---
// }

//    ** not gonna work **
// function doCommands(e){
//     console.log(e.target, e.target.tagName)
//     if(e.target.tagName === 'section') return;

//     const commandUsed = e.target.innerText;
//     console.log(commandUsed)

// }

commandBtns.addEventListener('click', function(){
    if(hungMtr + points <= hunger)
    {
        hungMtr = hungMtr + points;
        if(happMtr + points < happiness)
        {
            happMtr = happMtr + points;
        }
        meterWidth();
    }})

    function meterWidth(){
        hapBar.width = happMtr * widther + "px";
        hungBar.width = hungMtr * widther + "px";
        trainBar.width = trainMtr * widther + "px";
        cleanBar.width = cleanMtr * widther + "px";
}

function loseHung(){
    hungMtr = hungMtr - points;
}
function loseTrain(){
    troMtr = troMtr - points;
}
function loseClean(){
    cleanMtr = cleanMtr;
}
function loseHapp(){
    happMtr = happMtr - points;
}

function end(){
    retry.display = 'block';
}})})