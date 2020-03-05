function append_to_element(array,e_append){
    array.forEach(element => {
        e_append.appendChild(element)
    });
}

function card_head(){
    let div_container = document.createElement('div')
    div_container.style.cssText = "display:flex;"

    let div_head = document.createElement('div')
    div_head.style.cssText = "display:flex; justify-content:center; flex:1;"
    div_head.textContent = 'TITLE'


    div_container.appendChild(div_head)
    return div_container
}

function card_input(){
    let div_container = document.createElement('div')
    let div_container_input = document.createElement('div')
    let div_span = document.createElement('span')
    div_span.textContent = "span"
    let div_input = document.createElement('input')

    div_container_input.style.cssText = "display:flex;"
    div_span.style.cssText = "display:flex; flex:1;"
    div_input.style.cssText = "display:flex; flex:2;"

    div_container_input.appendChild(div_span)
    div_container_input.appendChild(div_input)
    div_container.appendChild(div_container_input)
    return div_container

}

function card_content(){
    let div_container = document.createElement('div')
    let div_container_input = document.createElement('div')
    let div_span = document.createElement('span')
    div_span.textContent = "span"
    let div_content = document.createElement('div')

    div_container_input.style.cssText = "display:flex;"
    div_span.style.cssText = "display:flex; flex:1; justify-content:center;"
    div_content.style.cssText = "display:flex; flex:2; border: 1px solid; border-radius:10px"

    div_container_input.appendChild(div_span)
    div_container_input.appendChild(div_content)
    div_container.appendChild(div_container_input)
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


function card_composition(){
    let array = new Array()
    array.push(card_head())
    array.push(card_body())
    array.push(card_input())
    array.push(card_content())
    append_to_element(array,container[0])
}