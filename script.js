import { numbers } from './list.js'

const date = new Date();

let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let hourNum = date.getHours();
let hourMessage = ''
let minuteNum = date.getMinutes();
let minuteMessage = ''
let sunCycle = ''

if (hourNum > 2 && hourNum < 9) {
  sunCycle = 'sunrise'
  document.getElementById('time').className = 'sunrise'
} else if (hourNum > 8 && hourNum < 15) {
  sunCycle = 'noon'
  document.getElementById('time').className = 'noon'
} else if (hourNum > 14 && hourNum < 21) {
  sunCycle = 'sunset'
  document.getElementById('time').className = 'sunset'
} else {
  sunCycle = 'night'
  document.getElementById('time').className = 'night'
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