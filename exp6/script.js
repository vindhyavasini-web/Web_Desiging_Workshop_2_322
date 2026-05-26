let heading = document.getElementById("heading");
let input = document.getElementById("inputText");
let para= document.getElementById("para");

document.getElementById("changeTextBtn").onclick = 
function() {
    heading.innerText = input.value;
};

input.onchange = function() {
    console.log("Input changed: " , input.value);
};

document.getElementById("bgColorBtn").
addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
});


document.getElementById("fontSizeBtn").
addEventListener("click", function() {
    heading.style.fontSize = "40px";
});

let isVisible = true;
document.getElementById("toggleParaBtn").onclick = function() {
    if (isVisible) {
        para.style.display = "none";
        isVisible = false;
    } else {
        para.style.display = "block";
        isVisible = true;
    }
};

    document.getElementById("resetBtn").onclick = function() {
        location.reload();
    };

    heading.onmouseover = function() {
        heading.style.color = "red";
    };