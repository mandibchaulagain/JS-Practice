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

function infiniteHex(){
    function generateRandomColor() {
        // Generate random values for red, green, and blue
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);

        // Construct the CSS RGB color value
        var randomColor = "rgb(" + red + ", " + green + ", " + blue + ")";

        // Apply the random color to the background
        document.querySelector("#cf1.colorFlipper").style.backgroundColor = randomColor;
        document.getElementById("bg1").innerHTML = randomColor;
    }
    clickMeButton.addEventListener('click',generateRandomColor);
}