let taskList = []

class Task {

    constructor(name, dueDate, isDone) {

        this.taskId = Date.now();
        this.name = name;
        this.dueDate= dueDate;
        this.isDone = isDone;
    }

    toString() {
        let htmlText= "<li>"+this.name
        htmlText += this.dueDate.getDate()+"/"+this.dueDate.getMonth();
        htmlText += '<input type="checkbox" name="isDone" id="isDone">'
        htmlText += '<button onclick="deleteTask(';
        htmlText += this.taskId;
        htmlText += ')">DELETE</button>'
        htmlText += "</li>";
        return htmlText;
    }
}


function createTask(){

    const taskName = document.getElementById("taskName").value;

    addTask(new Task(taskName,new Date(), false))

}

function addTask(task){

    taskList.push(task);

    const list = document.getElementById("todo")

    list.innerHTML += task.toString()
}

function deleteTask(taskId) {

    taskList = taskList.filter(

        (t) => {
            if(t.taskId != taskId)
            return t;
        }
    );
    console.log(taskList);

}


function init() {
    console.log(" is it called");
    task = new Task("First Task", new Date("May 30, 2020"), false)
    addTask(task);
    console.log(task)
}

init()