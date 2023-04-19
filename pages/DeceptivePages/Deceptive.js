function showModal(modalID = "ID",background = true){
    let modalOb = document.getElementById(modalID)
    modalOb.classList.add("show")
    let backgroundOb = Object;
    if(background == true){
        backgroundOb = document.createElement("div")
        backgroundOb.classList.add("modal-background")
        modalOb.parentElement.appendChild(backgroundOb)
    }
}

function hideModal(modalID){
    let modalOb = document.getElementById(modalID)
    modalOb.classList.remove("show")
    let backgrounds = document.getElementsByClassName("modal-background")
    Array.from(backgrounds).forEach(element => {
        element.remove()
    });
}

function toggleModal(modalID,background = false){
    //find modal
    let targetModal = document.getElementById(modalID)
    if(targetModal.classList.contains("show")){
        hideModal(modalID)
        return
    }
    showModal(modalID, background)
}
function reroute(destination = "/index.html"){
    window.location.href = destination;
}