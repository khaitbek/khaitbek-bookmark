// get elements
const elTabItems = document.querySelectorAll(".features__item");
const features = document.querySelectorAll(".features__content");

elTabItems.forEach(item => {
    item.addEventListener("click",()=>{
        elTabItems.forEach(elItem => {
            if(elItem.outerHTML === item.outerHTML) elItem.classList.add("features__item--active__item");
            else elItem.classList.remove("features__item--active__item")
        })
        
        features.forEach(feature => {
            if(`#${feature.id}` === item.dataset.link) feature.classList.add("features__content--active__content");
            else feature.classList.remove("features__content--active__content");
        })

    })
    
})

