function Task(props) {
  return <li>{props.name}, {props.dueDate.toLocaleTimeString()}</li>
}

class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {list: props.list};

    this.handleAddTask = this.handleAddTask.bind(this);
  }
  handleAddTask(task) {
    // need to push the task into the list
    this.state.list.push(task);
    this.setState({list: this.state.list})
    console.log("add Task");
  }

  render() {
    // const task = {};
    // const task = {};

    return (
      <div>
        <h1>TODO LIST</h1>
        <ol>
            {
              this.state.list.map((t) =>
                <Task key={t.id} name = {t.name} dueDate={t.dueDate}/>)
            }
        </ol>
        <TaskNameForm onAddTask= {this.handleAddTask} />
      </div>

    );
      
  }

}

class TaskNameForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {value:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //to add task
  handleSubmit(event) {
    const taskList = this.props.taskList;
    // to create a task object
    const task=({id:Date.now(), name: this.state.value, dueDate:new Date()}); 

    //add the task object to task list
    // tasks.push(task);
    this.props.onAddTask(task);
    // console.log(tasks);
    event.preventDefault();

  }

  // to set a state
  handleChange(event) {
    // to set the state of the component
    this.setState({value: event.target.value});
      
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" value = {this.state.value}
        onChange={this.handleChange}/>
        <input type="submit" value="Add Task" />
      </form>
    );
  } 
  
}

// const tasks = [
//   {id:0, name: "Welcome task"}, 
//   {id:1,name: "first task"},
//   {id:2,name: "second task"},
//   {id:3,name: "third task"}]
ReactDOM.render(
    <TodoList list={[]}/>,
    document.getElementById('todo')
  );



