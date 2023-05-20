const portrateText = document.getElementById("portrate-text");
const contactButton = document.getElementById("contact-button");
const contactModle = document.getElementById("contact-modle");

const text = ["Web Designer", "Game Developer", "Artist"];
var SelectedText = 0; 

var isContactUp = false;

contactButton.addEventListener("click", toggleContact);

window.scrollTo({ top: 0, behavior: 'smooth'});
pauseScroll();

function toggleContact(){
    console.log("run");
    isContactUp = !isContactUp;
    contactModle.style.opacity = isContactUp ? 1 : 0;
    contactModle.style.pointerEvents = isContactUp ? 'auto' : 'none';
}

async function IncrementText(){
    SelectedText++;
    if(SelectedText > text.length-1){
        SelectedText=0;
    }

    var characters = Array.from(text[SelectedText]);
    var currentString = "";

    portrateText.textContent = currentString;

    await sleep(1000)
   
    for(var i = 0; i < characters.length; i++){
        currentString += characters[i];
        portrateText.textContent = currentString;
        
        await sleep(1000/characters.length);     
    }

    await sleep(1000);

    portrateText.style.backgroundColor = '#ffffff55';
    await sleep(1000);

    portrateText.style.backgroundColor = '#00000000';

}

setInterval(IncrementText, 4000);
setInterval(dottedBgAnimation, 50);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let x = 0;
let y = 0;
function dottedBgAnimation(){
    document.documentElement.style.setProperty('--dotted-background-xoffset', `${++x}px`);
    document.documentElement.style.setProperty('--dotted-background-yoffset', `${++y}px`);
}

async function pauseScroll(){
    document.getElementsByTagName('body')[0].style.overflow= "hidden";
    await sleep(3500);
    document.getElementsByTagName('body')[0].style.overflowY= "scroll";
}

