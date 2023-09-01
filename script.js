

const body = document.body;
const container = document.createElement("div");
body.append(container);
container.className="container"

for(var i = 0; i<= 15; i++){
    var xAxis=document.createElement("div");
    container.appendChild(xAxis);
    xAxis.className="xAxis";
    for(var j = 0; j<= 15; j++){
     var block=document.createElement("div");
     xAxis.appendChild(block);
     block.className="block";
    }
 }


