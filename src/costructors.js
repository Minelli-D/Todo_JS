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

function Task_button(div_main, class_button, class_span, _id,delete_var = 0){
    this.div_main = div_main
    this.class_button = class_button
    this.class_span = class_span 
    this._id = _id
    this.delete_var = delete_var 
}