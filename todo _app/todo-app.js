class Task {

    constructor(name, dueDate, isDone) {

        this.name = name;
        this.dueDate= dueDate;
        this.isDone = isDone;
    }

    toString() {
        return "<li>"+this.name+"</li>"
    }
}

function createTask(){
    const taskName = document.getElementById("taskName").value;
    addTask(new Task(taskName,new Date(), false))

}

function addTask(task){

    const list = document.getElementById("todo")

    list.innerHTML += task.toString()
}


function init() {
    console.log(" is it called");
    task = new Task("First Task", new Date("May 30, 2020"), false)
    addTask(task);
    console.log(task)
}

init()