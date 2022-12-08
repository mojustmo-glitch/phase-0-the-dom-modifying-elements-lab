const element = document.getElementById("main");
element.remove();

//let newHeader = document.getElementById("victory");

const newHeader = document.createElement("h1");
newHeader.id = "victory";

newHeader.textContent = "YOUR-NAME is the champion"