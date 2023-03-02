// general functions
function linkTo(href){
    console.log('started')
    if(typeof href == "string"){
        window.location.assign(href);
        console.log("rerouted to:"+href)
    }
}

const targets = document.querySelectorAll(".anim-scroll")
const observer = new IntersectionObserver(entries => {
    console.log(entries)
    entries.forEach(entry => {
        entry.target.classList.toggle("animate", entry.isIntersecting)
    })
})
observer.observe(targets)
//general custom elements
