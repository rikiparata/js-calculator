document.addEventListener('DOMContentLoaded', start)

function start() {
    addEventListeners()
}
function addEventListeners() {

    var buttons = document.getElementsByClassName("buttons")
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", calculate)
     }
    }
    var temp = '';
    var entries = []; 

    function calculate (evt) {
        var val = evt.target.id 

  if (val === 'AC') {
    temp = '';
    entries = [];
    document.getElementById("answer").innerHTML = temp;
  }
  else if (val === 'C') {
    temp = temp.slice(0, - 1);
    document.getElementById("answer").innerHTML = temp;
  }
  else if (val === '=') {
    var answer = eval(entries.join(''));
    var compute = answer;
    document.getElementById("answer").innerHTML = compute;
    temp = compute;

  } else {
    temp += val;
    entries.push(val);
    document.getElementById("answer").innerHTML = temp;
  }
}