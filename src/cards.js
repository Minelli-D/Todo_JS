function card_head(){
    let div_container = document.createElement('div')
    div_container.style.cssText = "display:flex;"

    let div_head = document.createElement('div')
    div_head.style.cssText = "display:flex; justify-content:center; flex:1;"
    div_head.textContent = 'TITLE'


    div_container.appendChild(div_head)
    return div_container
}

function card_body(){
    let div_container = document.createElement('div')
    div_container.style.cssText = "display:flex;"

    let div_head = document.createElement('div')
    div_head.style.cssText = "display:flex; flex:1;"
    div_head.textContent = 'body'


    div_container.appendChild(div_head)
    return div_container

}


function append_to_container(array){
    array.forEach(element => {
        container[0].appendChild(element)
    });
}


function card_composition(){
    let array = new Array()
    array.push(card_head())
    array.push(card_body())
    append_to_container(array)
}