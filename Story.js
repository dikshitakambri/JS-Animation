//Setup website here
let hero = document.querySelector("#hero");
let villain = document.querySelector("#villain");
let lightning = document.querySelector("#lightning");

//Setup animation code here

var lightningStart = {"left":"290px"};
var lightningEnd = {"left":"900px"};
var option = {"duration": 1000}

//Run animation code here

lightning.animate([lightningStart,lightningEnd],option)