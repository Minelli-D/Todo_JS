function Task(name_task){
    this.name = name_task;
    this.done = 0; 
    this.delete = 0;
}


function add_new_task(div){

    let obj = new Task(div);
    obj['done'] = 1;
    let items = JSON.parse(localStorage.getItem('div-testinput') || "[]");

    items.push(obj);
    localStorage.setItem('div-testinput', JSON.stringify(items));

}

function show_task(){
    let items = JSON.parse(localStorage.getItem('div-testinput') || "[]");
    items.forEach(element => {
        new_row(element['name'], element['done'])
    });
}

function done_task(){
    let items = JSON.parse(localStorage.getItem('div-testinput') || "[]");
    
}

{/* <button class="action_button green " ><span class=" fas fa-check-circle"></span></button>
            <button class="action_button danger"><i class="fas fa-times-circle"></i></button>  */}