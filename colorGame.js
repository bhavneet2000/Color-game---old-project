var numSquares = 6;

var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();

var messageDisplay = document.getElementById("message");

var h1 = document.querySelector("h1");

var resetButton = document.querySelector("#reset");

var easyBtn = document.getElementById("easyBtn");

var hardBtn = document.getElementById("hardBtn");


easyBtn.addEventListener("click", function(){
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
});


hardBtn.addEventListener("click", function(){
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
    
});

resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numSquares);
    h1.style.backgroundColor = "steelblue";
    pickedColor = pickColor();
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    colorDisplay.textContent = pickedColor;
    
    for(var i=0; i <= squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }

});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < colors.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;

        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!"
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}



function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
	
    var arr = [];
    for(var i = 0; i < num; i++){
        generateRandomColors();
        arr.push(randomColors());
    }
    return arr;

}

function randomColors(){
    //for red
    var r = Math.floor(Math.random() * 256);
    //for green
    var g = Math.floor(Math.random() * 256);
    //for blue
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b +")"
}


