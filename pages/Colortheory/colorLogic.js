quoteContainer = document.getElementById("quote-section")
//get button

//onclick 
const normalColorBtn = document.getElementById("normal-color-btn")
const imageButton = document.getElementById("oversaturation-img")
const demoWrapper = document.getElementById("demo-wrapper")
imageButton.addEventListener("click", ()=> {
    changeAllElements(demoWrapper)
    normalColorBtn.style.display = "block"
    document.getElementById("event-text").style.display = 'block';
})

normalColorBtn.addEventListener("click",()=>{
    removeAllRandomEffects(demoWrapper)
})

function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}
function randomNumber (min, max){
    return Math.random() * (max-min) + min
}
function changeToRandomSat(target){
    target.style.filter = "saturate(4)";
}
function changeToRandomHue(target){
    target.style.filter = "hue-rotate("+randomNumber(0,360)+"deg)";
}
function changeToRandomColor(target){
    target.style.background = generateRandomColor()
    target.style.color = generateRandomColor()
    console.log("colorchanged")
}
function getStyle(el, styleQuery = "background-color"){
    return document.defaultView.getComputedStyle(el,null).getPropertyValue(styleQuery)
}

function changeAllElements(target){
    let targets = target.getElementsByTagName("*")
    changeToRandomHue(target)
    Array.from(targets).forEach(element => {
        changeToRandomColor(target)
        changeToRandomHue(element)
    });
}
function removeAllRandomEffects(target){
    let targets = target.getElementsByTagName("*")
    target.style.filter = "hue-rotate(0deg)";
    Array.from(targets).forEach(element => {
        element.style.filter = "hue-rotate(0deg)";
        target.style.background = "     "
        target.style.color = ""
    })
}
