const clickMeButton = document.getElementById('clickMeButton');

const arrayColor = ["red","blue","yellow"];
const arrayValue = Math.floor(Math.random()*arrayColor.length);
function clicksWork(){
    document.querySelector("#cf1.colorFlipper").style.backgroundColor = arrayColor[arrayValue];
}
clickMeButton.addEventListener('click',clicksWork);