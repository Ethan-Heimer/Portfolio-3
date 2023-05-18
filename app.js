const portrateText = document.getElementById("portrate-text");

const cards = document.getElementsByClassName("card-holder");
for(var i = 0; i< cards.length; i++){
    formatCard(cards[i]);
}


function formatCard(cardHolder){
    cardHolder.addEventListener("mousemove", (e) => bendCard(e, cardHolder));
    cardHolder.addEventListener("mouseleave", () => cardHolder.children[0].style.transform = "rotate(0)")
}

function bendCard(e, cardHolder){
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top;  //y position within the element.
   
    let xVal = ((x - rect.left/4)/10);
    let yVal = ((y - rect.top/4)/10);

    cardHolder.children[0].style.transform = `rotate(${yVal}deg)`;

    console.log(yVal);
}


const text = ["Web Designer", "Game Developer", "Artist"];

var SelectedText = 0; 

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

    portrateText.style.backgroundColor = 'rgb(108, 108, 108)';

    await sleep(1000);

    portrateText.style.backgroundColor = '#00000000';

}

setInterval(IncrementText, 4000);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }