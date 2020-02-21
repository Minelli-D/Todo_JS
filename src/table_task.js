
let html = document.querySelector('html');
let container = document.getElementsByClassName('column lone');
let div = document.createElement('div');
div.setAttribute('class','row');

let input_type = document.createElement('input');
input_type.className = 'input_type';


function create_task_button(div_main, class_button, class_span){
    //let button_div_row = document.createElement('div');
    let button_row = document.createElement('button');
    let span_row = document.createElement('span');
    
    button_row.setAttribute('class',class_button)
    span_row.setAttribute('class',class_span)

    button_row.appendChild(span_row)
    //button_div_row.appendChild(button_row)
    div_main.appendChild(button_row);
}

function new_row(text, done ){
    let div_main = document.createElement('div');
    div_main.setAttribute('class','activities main');
    
    let empty_div = document.createElement('div');
    empty_div.textContent = text;
    done ? empty_div.style.cssText = "width:100%; text-decoration:line-through" : empty_div.style.cssText = "width:100%;";
    div_main.appendChild(empty_div);
    
    create_task_button(div_main,'action_button green', 'fas fa-check-circle')
    create_task_button(div_main,'action_button danger', 'fas fa-times-circle')

    let column1 = document.getElementsByClassName('column ltwo');
    column1[0].appendChild(div_main);


}
//      BUTTON TYPE
let button_type = document.createElement('button');
button_type.classList = 'button_type';
button_type.textContent = 'save';

button_type.onclick = function (){

        let div = document.getElementsByClassName('input_type')[0].value;
        if(div != ''){
                add_new_task(div)
                new_row(div);
            }
        else
            console.log('null');
        
}

//    ACTION ITEM
function add_new_item(){
    container[0].appendChild(div);
    div.appendChild(input_type);
    div.appendChild(button_type);
}

function remove_add_item(){
    container[0].removeChild(div);
}

show_task()