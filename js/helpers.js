function AddClassToElement(element, className1, className2 = null, className3 = null, className4 = null, className5 = null){
    element.classList.add(className1);

    if(className2 != null)
    element.classList.add(className2);

    if(className3 != null)
    element.classList.add(className3);

    if(className4 != null)
    element.classList.add(className4);

    if(className5 != null)
    element.classList.add(className5);

}

function RemoveClassFromElement(element, className1, className2 = null, className3 = null, className4 = null, className5 = null){
    element.classList.remove(className1);

    if(className2 != null)
    element.classList.remove(className2);

    if(className3 != null)
    element.classList.remove(className3);

    if(className4 != null)
    element.classList.remove(className4);

    if(className5 != null)
    element.classList.remove(className5);
}

function ToggleElementClass(element, classNameRemove, classNameAdd){
    element.classList.remove(classNameRemove);
    element.classList.add(classNameAdd);
}

function ContainClass(element, className){
    return element.classList.contains(className);
}

function RemoveAllChildElements(parentElement){
    while(parentElement.firstChild){
        parentElement.removeChild(parentElement.firstChild);
    }
}