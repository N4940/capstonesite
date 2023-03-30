//general functions ####################################

//reroute 
function linkTo(href){
    console.log('started')
    if(typeof href == "string"){
        window.location.assign(href);
        console.log("rerouted to:"+href)
    }
}
//when visible
const targets = document.querySelectorAll(".anim")
const observer = new IntersectionObserver(entries => {
    console.log(entries)
    entries.forEach(entry => {
        entry.target.classList.toggle("active", entry.isIntersecting)
    })
})
targets.forEach(target => {
    observer.observe(target)
})
//messegebox on click 
function addDesc(descTar, description){
    console.log(typeof descTar + descTar)
    for(let child of descTar.children){
        if(child.classList.contains("description")){
            child.remove() 
         }
    }     
    let descEl = document.createElement("p")
    if(typeof description == "string"){
        console.log(description)
        descEl.innerHTML = description
    }
    descEl.classList.add("description")
    descTar.appendChild(descEl)
    setTimeout(()=>{
        descEl.remove()
    }, 3000)

}

//modal display
function displayModal(id){
    if(typeof id == "string"){
        let targetModal = document.getElementById(id)
        console.log(targetModal)
        
        if (targetModal.classList.contains("modal")){
            console.log('contains modal')
            if(targetModal.style.display == "block"){
                targetModal.style.display = "none";
                console.log('diplay is none')
            } else{
                targetModal.style.display = "block";
                console.log('display is block')
            }
        }
    }
}

function addclass(targObj, className){
    if(targObj.classList.contains(className)){
        return
    }
    targObj.classList.add(className) 
}
function removeclass(targObj, className){
    if(!targObj.classList.contains(className)){
        targObj.classList.remove(className)
    }
    return
}

//scroll gallary 
let scrollContainer = querySelectorAll(".gallery")
let backBtn = querySelectorAll(".backBtn")
let nextBtn = querySelectorAll(".nextBtn")

nextBtn.EventListener("click", ()=>{
    scrollContainer.scrollLeft += 1920;
})
backBtn.EventListener("click", ()=>{
    scrollContainer.scrollRight += 1920;
})



//general custom elements ###############################
    //Design control panel
