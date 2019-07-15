function boardCreate(e) {
    const flexCont = document.querySelector("#boardContainer");

    for (let i = 0; i < e * e; i++) {
        const div = document.createElement('div');
        div.classList.add("pixelSquare");
        div.style.cssText = `width: ${700 / e - 1}px; height: ${500 / e - 1}px;`
        flexCont.appendChild(div);
    }
}

function resetBoard() {
    const boardItem = document.querySelectorAll(".pixelSquare");

    boardItem.forEach((boardItem) => {
        boardItem.style.backgroundColor = "white";
    })
}

function changeBoardSize(e) {
    const boardItem = document.querySelector("#boardContainer");
    let counter = 0;

    let child = boardItem.lastElementChild;

    while (child) {
        counter = counter + 1;
        boardItem.removeChild(child);
        child = boardItem.lastElementChild;
    }
    
    boardCreate(e);
    
}

function blackPixel(e){
    e.target.style.backgroundColor = "black";
}

function randPixel(e){
    e.target.style.backgroundColor = getRandomColor();
}

function bProgPixel(e){

}
boardCreate(16);

const pixels = document.querySelectorAll(".pixelSquare");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

pixels.forEach((pixels) => {
    pixels.addEventListener("mouseover", blackPixel);
});

const resetBut = document.querySelector("#reset");
const changeBut = document.querySelector("#gridChange");

resetBut.addEventListener("click", resetBoard);

changeBut.addEventListener("click", function () {
    let size = prompt("Enter the number of squares on one side (1 - 200)");
    
    changeBoardSize(size)
    
    
   


    const pixels = document.querySelectorAll(".pixelSquare");
    let valueStyle = document.getElementById("colorStyle").value;

    pixels.forEach((pixels) => {
        if(valueStyle == "bw"){
            pixels.addEventListener("mouseover", blackPixel)
        }
        else if(valueStyle =="randColors"){
            pixels.addEventListener("mouseover", randPixel)
        }
        else{
            pixels.addEventListener("mouseover", bProgPixel)
        }
    });
});

const styleBut = document.querySelector("#colorStyle");

styleBut.addEventListener("change", function(){
    let valueStyle = document.getElementById("colorStyle").value;
    const pixels = document.querySelectorAll(".pixelSquare");

    removeAllListeners();

    if(valueStyle == "bw"){
        pixels.forEach((pixels) => {
            pixels.addEventListener("mouseover", blackPixel);
        });
    }
    else if(valueStyle == "randColors"){
        pixels.forEach((pixels) => {
            pixels.addEventListener("mouseover", randPixel);
        });
    }
    else{
        pixels.forEach((pixels) => {
            pixels.addEventListener("mouseover", bProgPixel);
        });
    }

});


function removeAllListeners(){
    const pixels = document.querySelectorAll(".pixelSquare");
    pixels.forEach((pixels) => {
        pixels.removeEventListener("mouseover", blackPixel);
        pixels.removeEventListener("mouseover", randPixel);
        //pixels.removeEventListener("mouseover", progBlack);
    });
}