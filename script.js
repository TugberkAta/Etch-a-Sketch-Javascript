let height = 15
let width = 15


const body = document.body;
const mainBody = document.createElement("div")
const playField = document.createElement("div");
const container = document.createElement("div");
const  button = document.createElement("button")
body.append(mainBody)
mainBody.append(playField);
playField.append(container);
mainBody.append(button);
container.className="container";
playField.className="playField";
mainBody.className="mainBody";

for(var i = 0; i<= height; i++){
    var xAxis=document.createElement("div");
    container.appendChild(xAxis);
    xAxis.className="xAxis";
    for(var j = 0; j<= width; j++){
        var block=document.createElement("div");
        xAxis.appendChild(block);
        block.className="block";

        block.addEventListener("mouseover",(e) => {
            e.target.style.opacity = 0.5;
        });
     }
 }




