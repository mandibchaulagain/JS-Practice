const clickMeButton = document.getElementById('clickMeButton');


function clicksWork(){
    document.querySelector("#cf1.colorFlipper").style.backgroundColor = "red";
}
clickMeButton.addEventListener('click',clicksWork);