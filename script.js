//TODO create loading screen


import { numbers } from './list.js'

const date = new Date();

const time = document.getElementById('time')
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');

let hourNum = date.getHours();
let hourMessage = ''

let minuteNum = date.getMinutes();
let minuteMessage = ''

let sunCycle = ''

function setCycle(cycle) {
  sunCycle = cycle;
  time.className = cycle;
};

if (hourNum > 2 && hourNum < 9) {
  setCycle('sunrise')
} else if (hourNum > 8 && hourNum < 15) {
  setCycle('noon')
} else if (hourNum > 14 && hourNum < 21) {
  setCycle('sunset')
} else {
  setCycle('night')
}

document.body.style.backgroundImage = "url(./images/" + sunCycle + ".jpeg)";

if (hourNum > 12) {
  hourNum -= 12;
} else if (hourNum == 0) {
  hourNum = 12;
}

let hourWord = numbers[hourNum - 1]
let minuteWord = numbers[minuteNum - 1]


hourMessage = hourWord;
if (minuteNum == 0) {
  minuteMessage = " O' Clock";
} else if (minuteNum < 10) {
  minuteMessage = " O' " + minuteWord;
} else {
  minuteMessage = minuteWord;
}


hourMessage = hourMessage;
hour.innerHTML = hourMessage;

minuteMessage = minuteMessage + '!';
minute.innerHTML = minuteMessage;