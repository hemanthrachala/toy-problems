function Task(props) {
return <li>{props.name}, {new Date().toLocaleTimeString()}</li>
}

class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.TaskList = this.props.list.map((t) =>
        <Task key={t.id} name = {t.name} />
    );
  }
  // addTask() {
  //   console.log("add Task");
  // }

  render() {

    return (
      <div>
        <h1>TODO</h1>
        <ol>
            {this.TaskList}
        </ol>
        <TaskNameForm/>
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
    // to create a task object
    task = {id:Date.now(), name: this.state.value, dueDate:Date.now()} 

    //add the task object to task list
    event.preventDefault();

  }

  // to set a state
  handleChange(event) {
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

const tasks = [
  {id:0, name: "Welcome task"}, 
  {id:1,name: "first task"},
  {id:2,name: "second task"},
  {id:3,name: "third task"}]
ReactDOM.render(
    <TodoList list={tasks}/>,
    document.getElementById('todo')
  );



