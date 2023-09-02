let height = 15
let width = 15

const body = document.body;
const mainBody = document.createElement("div")
const playField = document.createElement("div");
const container = document.createElement("div");
const buttonContainer = document.createElement("div")
const buttonCreate = document.createElement("button")
const buttonReset = document.createElement("button")
const buttonCreateText = document.createElement("p")
const buttonResetText = document.createElement("p")

body.append(mainBody);
mainBody.append(buttonContainer)
buttonContainer.append(buttonCreate);
buttonContainer.append(buttonReset);
mainBody.append(playField);
playField.append(container);
buttonCreate.append(buttonCreateText);
buttonReset.append(buttonResetText)

buttonCreateText.textContent="Click Here To Resize";
buttonResetText.textContent="Click Here To Reset"

container.className="container";
playField.className="playField";
mainBody.className="mainBody";
buttonCreate.className = "button";
buttonReset.className = "button";
buttonContainer.className = "buttonContainer"


function createGrid(height, width){
for(let i = 0; i< width; i++){
    let yAxis=document.createElement("div");
    container.appendChild(yAxis);
    yAxis.className="yAxis";
    for(let j = 0; j< height; j++){
        let block=document.createElement("div");
        yAxis.appendChild(block);
        block.className="block";

        block.addEventListener("mouseover",(e) => {
            e.target.style.opacity = 0.5;
        });

     }
}
}

createGrid(height, width)

buttonCreate.addEventListener("click", (e)=>{
    container.innerHTML= "";
    do{
        height = Number(prompt("Max 30\nHeight:"))
    }while(height>=31 || height < 0)
    do{
        width = Number(prompt("Max 30\nWidth: "))
    }while(width>=31 || height < 0)

    createGrid(height, width)
});

buttonReset.addEventListener("click", (e)=>{
            let blocks = document.querySelectorAll(".block")
            blocks.forEach(block =>{
                block.style.opacity = 1;
            });
        });




