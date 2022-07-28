console.log('check');
// const monsterList = {
//     dragon:  'imgs/dragon.webp',
//     worm: 'imgs/dragon.webp',
//     demon:'imgs/demon.jpeg',
// }

// const MONSTERS = [
//     "dragon",
//     "worm",
//     "demon",
// ];
const dungeon = 'imgs/cage.jpeg';

const monsterList = {
    dragon: {
        imageUrl: 'imgs/dragon.webp'
    },
    worm: {
        imageUrl: 'imgs/dragon.webp'
    },
    demon: {
        imageUrl: 'imgs/demon.jpeg'
    }
}

//[
//  "imgs/dragon.webp",
//  "imgs/Regenwurm1.jpeg",
//  "imgs/demon.jpeg"
// ];
// const cage = (css/imgs/cage.jpeg);

let randomMonster; // will pick a random monster from MONSTERS constant
let score; // score against monster
let winner; // depleting health bar wins
let start;

const scoreEls = {
    player: document.querySelector('#score'),
}
const startEl = {
    imgEl: document.querySelector('#dungeon > img')
}
// cache DOM elements
const healthBar = document.querySelector('#health');
const dungeonEl = document.querySelector('#dungeon');
const commandBtns = document.querySelector('#commands');
const startBtn = document.querySelector('#start');
const replayBtn = document.querySelector('#replay');


// dungeonEl.setAttribute("img",'imgs/demon.jpeg' )
// startBtn.addEventListener('click', startGame);
commandBtns.addEventListener('click', attack);

replayBtn.addEventListener('click', init);

init()

function init(){
    // console.log(e.target, e.target.tagName)
    // if(e.target.tagname === 'start') return

    //not actually what i wanted here
    const randomIndex = Math.floor(Math.random() * monsterList.length);
   randomMonster = monsterList[randomIndex]

score = {
    player: 0,
}

start = {
    dungeon: 'cage'
}

render()
 }

function attack(e){
    console.log(e.target, e.target.tagName)

    if(e.target.tagName === 'section') return; // testing buttons

    score = {
        player: 0,
    }


    render()
}

function render(){
    scoreEls.player.innerText = score.player;

    // let starty = startEl[start].imgEl.src = monsterList[start[starty]].imageUrl
} 

