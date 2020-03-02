
let html = document.querySelector('html');
let container = document.getElementsByClassName('column lone');
let div = document.createElement('div');
div.setAttribute('class','row');




function create_task_button(div_main, class_button, class_span, _id,delete_var = 0){
    //let button_div_row = document.createElement('div');
    let button_row = document.createElement('button');
    let span_row = document.createElement('span');
    
    button_row.setAttribute('class',class_button)
    button_row.onclick = function () {
        if(delete_var){
            task_delete(_id);
        }
        else{
            task_done(_id);
        }
    };
    span_row.setAttribute('class',class_span)

    button_row.appendChild(span_row)
    //button_div_row.appendChild(button_row)
    div_main.appendChild(button_row);
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

function row_label(text,_id){
    let empty_div = document.createElement('div');
    empty_div.textContent = text;
    empty_div.setAttribute('name',_id);
    empty_div.onclick = () =>{
        
        let div_c = document.getElementsByClassName('edit_task')
        if(div_c.length){
            div_c[0].remove()
            one = 1     
        }
        let div = document.createElement('div');
        div.setAttribute('class','edit_task');
        //Div Description On Click
        binary_search(_id)
        task_description(div)
        //div.textContent = items[index_returned]['name']
        container[0].appendChild(div);
    }
    return empty_div
    
}


function new_row(text, done = 0, _id){
    console.log(text)
    let div_main = document.createElement('div');
    div_main.setAttribute('class','activities main div_row');

    // ROW TEXT LABEL 
    let empty_div = row_label(text,_id)
    
    done ? empty_div.style.cssText = "width:100%; text-decoration:line-through" : empty_div.style.cssText = "width:100%;";
    div_main.appendChild(empty_div);
    
    // ROW BUTTON 
    create_task_button(div_main,'action_button green', 'fas fa-check-circle',_id)
    create_task_button(div_main,'action_button danger', 'fas fa-times-circle',_id,1)

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
        if(div != ''){
                new_row(array[0], null ,add_new_task(array));
            }
        else
            console.log('null');
        
}

//    ACTION ITEM
function add_new_item(){
    container[0].insertBefore(div, container[0].firstChild);
    div.appendChild(input_type, div.firstChild);
    div.appendChild(input_type_content, div.firstChild);
    div.appendChild(button_type, div.firstChild);
}

function remove_add_item(){
    container[0].removeChild(div);
}   
show_task();
