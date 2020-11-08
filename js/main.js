"use strict";

(function(){
    const aboutBtn = document.querySelector("#about");
    const contactsBtn = document.querySelector("#contacts");
    const aboutSection = document.querySelector("#aboutSection");
    const contactsSection = document.querySelector("#contactSection");
    const moveTo = (e)=>{
       switch(e.target.id){
        case "about":
            window.scrollTo({
                top: aboutSection.offsetTop,
                left: 100,
                behavior: 'smooth'
              });
            break;
            case "contacts":
                window.scrollTo({
                    top: contactsSection.offsetTop,
                    left: 100,
                    behavior: 'smooth'
                  });
                break;
       }
    }
    aboutBtn.addEventListener("click", moveTo);
    contactsBtn.addEventListener("click", moveTo);
}());