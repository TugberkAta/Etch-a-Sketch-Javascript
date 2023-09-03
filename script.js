let height = 15
let width = 15
let mode = true;
let darkMode = true;
let mouseIsPressed = false;

const randomRgbColor = () => {
    let r = Math.floor(Math.random() * 256); 
    let g = Math.floor(Math.random() * 256); 
    let b = Math.floor(Math.random() * 256); 
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  };

const body = document.body;
const mainBody = document.createElement("div")
const playField = document.createElement("div");
const container = document.createElement("div");
const buttonContainer = document.createElement("div")

const buttonCreate = document.createElement("button")
const buttonReset = document.createElement("button")
const buttonRainbow = document.createElement("button")
const buttonDarkMode = document.createElement("button")

const buttonCreateText = document.createElement("p")
const buttonResetText = document.createElement("p")
const buttonRainbowText = document.createElement("p")
const buttonDarkModeText = document.createElement("p")

body.append(mainBody);
mainBody.append(buttonContainer);
mainBody.append(playField);
playField.append(container);

buttonContainer.append(buttonCreate);
buttonContainer.append(buttonReset);
buttonContainer.append(buttonRainbow);
buttonContainer.append(buttonDarkMode);

buttonCreate.append(buttonCreateText);
buttonReset.append(buttonResetText);
buttonRainbow.append(buttonRainbowText);
buttonDarkMode.append(buttonDarkModeText);

buttonCreateText.textContent="Click Here To Resize";
buttonResetText.textContent="Click Here To Reset";
buttonRainbowText.textContent="Change Mode";
buttonDarkModeText.textContent="Dark Mode";

container.className="container";
playField.className="playField";
mainBody.className="mainBody";
buttonContainer.className = "buttonContainer"
buttonCreate.className = "button";
buttonReset.className = "button";
buttonRainbow.className = "button"
buttonDarkMode.className = "button"
body.style.backgroundColor= "gainsboro"
buttonDarkMode.style.backgroundColor ="#1F2937"
buttonDarkModeText.style.color = "white"


function createGrid(height, width){
for(let i = 0; i< width; i++){
    let yAxis=document.createElement("div");
    container.appendChild(yAxis);
    yAxis.className="yAxis";
    for(let j = 0; j< height; j++){
        let block=document.createElement("div");
        yAxis.appendChild(block);
        block.className="block";
        container.addEventListener("mousemove", (e) => {
                if (mouseIsPressed) {
                        const block = e.target;
                    if (mode === true) {
                        block.style.backgroundColor = "gainsboro";
                    } else {
                        block.style.backgroundColor = randomRgbColor();
                    }
                }
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
            container.innerHTML= "";
            createGrid(height, width)
     });
 });

 buttonRainbow.addEventListener("click", (e) => {
    mode = !mode;
    container.innerHTML= "";
    createGrid(height, width)
  });

  buttonDarkMode.addEventListener("click", (e) => {
    darkMode = !darkMode;

    if(darkMode === true){
        body.style.backgroundColor= "gainsboro"
        buttonDarkMode.style.backgroundColor ="#1F2937"
        buttonDarkModeText.style.color = "white"
        buttonDarkModeText.textContent="Dark Mode";
    }
    else{
        body.style.backgroundColor= "#1F2937"
        buttonDarkMode.style.backgroundColor="white"
        buttonDarkModeText.style.color = "black"
        buttonDarkModeText.textContent="Light Mode";
    }
  });

  container.addEventListener("mousedown", () => {
    mouseIsPressed = true;
});

container.addEventListener("mouseup", () => {
    mouseIsPressed = false;
});