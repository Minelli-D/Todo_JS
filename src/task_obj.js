var items = JSON.parse(localStorage.getItem('div-testinput') || "[]");
var _id = localStorage.getItem('_last_id') === null ? 0 : localStorage.getItem('_last_id')  ;
var index_returned = 0

// BINARY SEARCH FOR SET CUR _ID
function binary_search(_id){
    items.forEach(function(element,index) {
        element['id'] === Number(_id) ? this.index_returned = index : {}
    })
    return this.index_returned
}

function edit_date(time){
    string = time.toString()
    string = string.split(' ',5)
    return string
}



function add_new_task(div){
    let obj = new Task(div[0]);
    obj.content = String(div[1]);
    items.push(obj);
    localStorage.setItem('div-testinput', JSON.stringify(items));
    items = JSON.parse(localStorage.getItem('div-testinput') || "[]");
    return items.length
    

}

function show_task(){
    items.forEach(element => {
        new_row(element)
    });
}


function task_done(_id){
    binary_search(_id);
    if(items[index_returned]['done']){
        items[index_returned]['done'] = 0;
        let div = document.getElementsByName(items[index_returned]['id']);
        div[0].style.cssText = "width:100%; text-decoration:none"
    }
    else{
        items[index_returned]['done'] = 1;
        let div = document.getElementsByName(items[index_returned]['id']);
        div[0].style.cssText = "width:100%; text-decoration:line-through"
    }
    localStorage.setItem('div-testinput', JSON.stringify(items));
}


function delete_array(_id){
    array = new Array()
    items.forEach(element => {
        if(element['_id'] !== _id){
            
            array.push(element)
        }
    });
    this.items = array
}


function task_delete(_id){
    let index = binary_search(_id)
    items.splice(index,1)
    let div = document.getElementsByName(String(_id));
    div[0].parentElement.remove()
    localStorage.setItem('div-testinput', JSON.stringify(items));
}