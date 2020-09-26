function age() {
var birthYear = prompt("What year were you born?");
var currentTime = new Date();
var thisYear = currentTime.getFullYear();
var age = (thisYear - birthYear);
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode("You are turning " + age + "  this year");
h1.setAttribute('id', 'age');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
  document.getElementById('age').remove();
}
