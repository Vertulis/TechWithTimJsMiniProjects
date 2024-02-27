//All code has been derived from the Tech With Tim Youtube channel.
const body = document.getElementsByTagName("body")[0];

function setColour(name){
    body.style.backgroundColor = name;
}

function setRandomColour(){
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    const colour = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = colour;
}