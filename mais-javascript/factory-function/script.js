function $$(selectedElements){
    const elements = document.querySelectorAll(selectedElements)

    function hide(){
        elements.forEach(element => {
            element.style.display = 'none'
        })
        return $$(selectedElements)
    }

    function show(){
        elements.forEach(element => {
            element.style.display = 'initial'
        })
        return $$(selectedElements)
    }

    function on(onEvent, callback){
        elements.forEach((element)=>{
            element.addEventListener(onEvent, callback)
        })
        return $$(selectedElements)
    }

    function addClass(className){
        elements.forEach((element)=>{
            element.classList.add(className)
        })
        return $$(selectedElements)
    }

    function removeClass(className){
        elements.forEach((element)=>{
            element.classList.remove(className)
        })
        return $$(selectedElements)
    }

    return{
        selectedElements,
        hide,
        show,
        on, 
        addClass,
        removeClass
    }
}

const btns = $$('button')
btns.removeClass('mostrar')