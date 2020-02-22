var items = JSON.parse(localStorage.getItem('div-testinput') || "[]");
var _id = localStorage.getItem('_last_id') === null ? 0 : localStorage.getItem('_last_id')  ;


function Task(name_task){
    this.name = name_task;
    this.done = 0; 
    this.delete = 0;
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
    if(items[_id]['done']){
        items[_id]['done'] = 0;
        let div = document.getElementsByName(String(_id));
        div[0].style.cssText = "width:100%; text-decoration:none"

    }
    else{
        items[_id]['done'] = 1;
        let div = document.getElementsByName(String(_id));
        div[0].style.cssText = "width:100%; text-decoration:line-through"

    }
    localStorage.setItem('div-testinput', JSON.stringify(items));
}

//FIXME: Delete doesn't work. No Dynamically
function task_delete(_id){
    if(_id > -1)
        items.splice(_id,1);
    localStorage.setItem('div-testinput', JSON.stringify(items));
}