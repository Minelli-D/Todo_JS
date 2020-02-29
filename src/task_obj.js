var items = JSON.parse(localStorage.getItem('div-testinput') || "[]");
var _id = localStorage.getItem('_last_id') === null ? 0 : localStorage.getItem('_last_id')  ;
var index_returned = 0


function binary_search(_id){
    items.forEach(function(element,index) {
        if(element['id'] == _id)
            index_returned = index
    })
}
function edit_date(time){
    string = time.toString()
    string = string.split(' ',5)
    return string
}


function Task(name_task){
    this.name = name_task;
    this.done = 0; 
    this.delete = 0;

    this.time = new Date('10 Sept 2020');
    this.time = edit_date(this.time)
    this.id = _id ;
    let app = Number(_id) + 1;
    localStorage.setItem('_last_id',app);
    _id = app;
}


function add_new_task(div){

    let obj = new Task(div);
    items.push(obj);
    localStorage.setItem('div-testinput', JSON.stringify(items));

}

function show_task(){
    items.forEach(element => {
        new_row(element['name'], element['done'], element['id'])
    });
}


function task_done(_id){
    binary_search(_id);
    console.log(index_returned)
    if(items[index_returned]['done']){
        items[index_returned]['done'] = 0;
        let div = document.getElementsByName(String(_id));
        div[0].style.cssText = "width:100%; text-decoration:none"

    }
    else{
        items[index_returned]['done'] = 1;
        let div = document.getElementsByName(String(_id));
        div[0].style.cssText = "width:100%; text-decoration:line-through"

    }
    localStorage.setItem('div-testinput', JSON.stringify(items));
}

function task_delete(_id){
    items.splice(_id,1);
    let div = document.getElementsByName(String(_id));
    div[0].parentElement.remove()
    localStorage.setItem('div-testinput', JSON.stringify(items));
}