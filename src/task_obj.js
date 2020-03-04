var items = JSON.parse(localStorage.getItem('div-testinput') || "[]");
var _id = localStorage.getItem('_last_id') === null ? 0 : localStorage.getItem('_last_id')  ;
var index_returned = 0

// BINARY SEARCH FOR SET CUR _ID
function binary_search(_id){
    items.forEach(function(element,index) {
        if(element['id'] === Number(_id))
            this.index_returned = index
    })
    return this.index_returned
}

function edit_date(time){
    string = time.toString()
    string = string.split(' ',5)
    return string
}

// COSTRUCTOR 
function Task(name_task){
    this.name = name_task;
    this.done = 0; 
    this.delete = 0;

    this.time = new Date('10 Sept 2020');
    this.time = edit_date(this.time)
    this.id = Number(_id) ;
    let app = Number(_id) + 1;


    this.content = ''

    localStorage.setItem('_last_id',app);
    _id = app;
}


function add_new_task(div){
    let obj = new Task(div[0]);
    obj.content = String(div[1]);
    items.push(obj);
    localStorage.setItem('div-testinput', JSON.stringify(items));
    return obj['id']
    

}

function show_task(){
    items.forEach(element => {
        new_row(element['name'], element['done'], element['id'])
    });
}


function task_done(_id){
    binary_search(_id);
    if(items[index_returned]['done']){
        items[index_returned]['done'] = 0;
        let div = document.getElementsByName(items[index_returned]['id']);
        div[0].style.cssText = "width:100%; text-decoration:none"
        console.log(div)
    }
    else{
        items[index_returned]['done'] = 1;
        let div = document.getElementsByName(items[index_returned]['id']);
        console.log(div)

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


function task_delete(index, _id){
    items.splice(index,1)
    let div = document.getElementsByName(String(_id));
    div[0].parentElement.remove()
    localStorage.setItem('div-testinput', JSON.stringify(items));
}