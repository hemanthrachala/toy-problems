function Task(props) {
return <li>{props.name}, {new Date().toLocaleTimeString()}</li>
}

class TodoList extends React.Component {

  addTask() {
    console.log("add Task");
  }

  render() {

    const TaskList = this.props.list.map((t) =>
        <Task name = {t.name} />
    );

    return (
      <div>
        <h1>TODO</h1>
        <ol>
          {TaskList}
        </ol>
        <button onClick = {this.addTask}>
          ADD TASK
        </button>
      </div>

    );
      
  }

}

const tasks = [
  {name: "Welcome task"}, 
  {name: "first task"},
  {name: "second task"},
  {name: "third task"}]
ReactDOM.render(
    <TodoList list={tasks}/>,
    document.getElementById('todo')
  );



