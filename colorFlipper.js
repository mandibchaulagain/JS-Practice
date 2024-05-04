const clickMeButton = document.getElementById('clickMeButton');

const arrayColor = ["red","blue","yellow"];

var currentColor = -1;
var arrayValue;
function clicksWork(){
    do{
        arrayValue = Math.floor(Math.random()*arrayColor.length);
    }while(currentColor=== arrayValue);
    document.querySelector("#cf1.colorFlipper").style.backgroundColor = arrayColor[arrayValue];
    currentColor = arrayValue;
}
clickMeButton.addEventListener('click',clicksWork);