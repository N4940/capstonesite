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
    descTar.childNode.forEach(childNode => {
        if(childNode.classList.contains("description")){
           childNode.remove() 
        }
    })
    let descEl = document.createElement("div")
    if(typeof description == "string"){
        console.log(description)
        descEl.innerHTML = description
    }
    descEl.classList.add("description")
    descTar.appendChild(descEl)
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

//general custom elements ###############################
