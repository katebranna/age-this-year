function age() {
let birthYear = prompt("What year were you born?");
let currentTime = new Date();
let thisYear = currentTime.getFullYear();
let age = (thisYear - birthYear);
let h1 = document.createElement('h1');
let textAnswer = document.createTextNode("You are turning " + age + "  this year");
h1.setAttribute('id', 'age');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
  document.getElementById('age').remove();
}
