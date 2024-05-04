const clickMeButton = document.getElementById('clickMeButton');

const arrayColor = ["red","blue","yellow"];

function clicksWork(){
    const arrayValue = Math.floor(Math.random()*arrayColor.length);
    document.querySelector("#cf1.colorFlipper").style.backgroundColor = arrayColor[arrayValue];
    clickMeButton.addEventListener('click',clicksWork);
}
clickMeButton.addEventListener('click',clicksWork);