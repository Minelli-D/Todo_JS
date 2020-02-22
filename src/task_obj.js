function Task(name_task){
    this.name = name_task;
    this.done = 0; 
    this.delete = 0;
    this.id = items.length ;
}

var items = JSON.parse(localStorage.getItem('div-testinput') || "[]");

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
    if(items[_id]['done'])
    //TODO: DINAMIC CHANGE WHEN TASK IS COMPLETE
        items[_id]['done'] = 0;
    else
        items[_id]['done'] = 1;
    localStorage.setItem('div-testinput', JSON.stringify(items));
}


function task_delete(_id){
    if(_id > -1)
        items.splice(_id,1);
    localStorage.setItem('div-testinput', JSON.stringify(items));
}