
let html = document.querySelector('html');
let container = document.getElementsByClassName('column lone');
let div = document.createElement('div');
div.setAttribute('class',' row_task scale-up-ver-center');



function create_task_button(task_button){

    let button_row = document.createElement('button')
    button_row.setAttribute('class',task_button.class_button)

    let span_row = document.createElement('span')
    span_row.setAttribute('class',task_button.class_span)

    items = JSON.parse(localStorage.getItem('div-testinput') || "[]");

    button_row.onclick = () => {
        task_button.delete_var ? task_delete(binary_search(task_button._id),task_button._id) : task_done(binary_search(task_button._id))
    };

    button_row.appendChild(span_row)
    task_button.div_main.appendChild(button_row);
}

function task_description(div){
    //Content 
    //Where
    //Time
    div1 = document.createElement('div')
    div2 = document.createElement('div') 
    div3 = document.createElement('div')      
    div4 = document.createElement('div')     

    div3.style.cssText = "display:flex"

    div1.style.cssText = "flex:1"
    div2.style.cssText = "flex:2"     

    div1.textContent = 'Time: ' 
    div2.textContent = items[this.index_returned]['time'][4];
    div4.textContent = items[this.index_returned]['content'];

    div3.appendChild(div1)
    div3.appendChild(div2)

    div.appendChild(div3)
    div.appendChild(div4)

    
}

function delete_if_task_exist(){

    let div_c = document.getElementsByClassName('edit_task')
    let div = document.createElement('div');
    div.setAttribute('class','edit_task scale-up-hor-right');

    div_c.length ? div_c[0].remove() : {}
        
    return div 

}

function row_label(text,_id){
    let empty_div = document.createElement('div');
    empty_div.textContent = text;
    empty_div.setAttribute('name',_id);
    empty_div.onclick = () =>{
        
        let div = delete_if_task_exist()

        //Div Description On Click
        binary_search(_id)
        task_description(div)

        container[0].appendChild(div);
    }
    return empty_div
    
}


function new_row(text, done = 0, _id){
    let div_main = document.createElement('div');
    div_main.setAttribute('class','activities main div_row');

    // ROW TEXT LABEL 
    let empty_div = row_label(text,_id)
    
    //done ? empty_div.setAttribute('class','done') : empty_div.setAttribute('class','undone') 
    done ? empty_div.style.cssText = "width:100%; text-decoration:line-through;" : empty_div.style.cssText = "width:100%;";
    div_main.appendChild(empty_div);
    
    // ROW BUTTON 
    let button_green = new Task_button(div_main,'action_button green', 'fas fa-check-circle',_id, 0)
    let button_red = new Task_button(div_main,'action_button danger', 'fas fa-times-circle',_id,1)
    create_task_button(button_green)
    create_task_button(button_red)

    // Create column two 
    let column1 = document.getElementsByClassName('column ltwo');
    column1[0].appendChild(div_main);


}


//      ADD NEW ITEM VAR TYPE
let input_type = document.createElement('input');
input_type.className = 'input_type';

let input_type_content = document.createElement('input');
input_type_content.setAttribute('class','content');

let button_type = document.createElement('button');
button_type.classList = 'button_type';
button_type.textContent = 'save';

button_type.onclick = function (){

        let div = document.getElementsByClassName('input_type')[0].value;
        let array = new Array()
        array.push(div)
        div = document.getElementsByClassName('content')[0].value;
        array.push(div)
        
        div !== '' ? new_row(array[0], null ,add_new_task(array)) : {};       
}

let h3 = document.createElement('h3');
h3.textContent = 'Add Activities';
let div_head = document.createElement('div');
div_head.setAttribute('class','row div_head');
div_head.appendChild(h3);


//    ACTION ITEM
function add_new_item(){

    let div1 = document.createElement('div')
    let div2 = document.createElement('div')
    div1.setAttribute('class','row');
    div2.setAttribute('class','row');

    div.appendChild(div_head)
    div2.appendChild(input_type);
    div2.appendChild(input_type_content);
   
    div.appendChild(div2)

    container[0].insertBefore(div, container[0].firstChild);

    div1.appendChild(button_type);
    div.appendChild(div1)
}

function remove_add_item(){
    container[0].removeChild(div);
}   
show_task();
