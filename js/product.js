const bigImg = document.querySelector(".bigimg");
const theGallery = document.querySelector(`.gallery`)

function setThumb(event) {

    // target refers to what was under the mouse when this event occurred
   
    const eventTarget = event.target
   
   
    if(eventTarget.matches(`.thumb`)){
   
        let imgSrc = eventTarget.getAttribute(`src`)
   
        let imgAlt = eventTarget.getAttribute(`alt`)
       
       
        // Update the big image's attributes
       
        bigImg.setAttribute(`src`, imgSrc)
       
        bigImg.setAttribute(`alt`, imgAlt)
       
    }
   }
     
   // Listen to the entire gallery for a click
   
   theGallery.addEventListener(`click`, setThumb)