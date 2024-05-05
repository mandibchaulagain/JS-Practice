const clickMeButton = document.getElementById('clickMeButton');
const arrayColor = ["red","blue","yellow"];

var currentColor = -1;
var arrayValue;


//for the two divs
const selectableDivs = document.querySelectorAll('.colorDiv');

function handleDivClick(event){
    
    switch(event.currentTarget.id) {
        case 'colorFlipper1':
            fixArr();
            break;
        case 'colorFlipper2':
            infiniteHex();
            break;
        default:
            break;
    }
}


selectableDivs.forEach(div => {
    div.addEventListener('click', handleDivClick);
});

function fixArr(){
    function clicksWork(){
        do{
            arrayValue = Math.floor(Math.random()*arrayColor.length);
        }while(currentColor=== arrayValue);
        document.querySelector("#cf1.colorFlipper").style.backgroundColor = arrayColor[arrayValue];
        document.getElementById("bg1").innerHTML = arrayColor[arrayValue];
        currentColor = arrayValue;
    }
    clickMeButton.addEventListener('click',clicksWork);
}