const hoverElement = document.getElementsByClassName("info-hover");
hoverElement.forEach(element => {
    let isMouseOver = false;
    element.addEventListener("mouseover",(event)=>{
        isMouseOver = true;
    },false);

    element.addEventListener("mouseleave", (event)=>{
        isMouseOver = false;
        event.target.textContent = "mouse in";
        
    });
},false);