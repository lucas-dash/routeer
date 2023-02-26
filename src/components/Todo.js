import Task from './Task';

const Todo = (props) => {
  return (
    <ul>
      {/* {props.tasks.map((task) => {
        return <li key={task.id}>{task.name}</li>;
      })} */}
      <Task tasks={props.tasks} setTasks={props.setTasks} />
    </ul>
  );
};
export default Todo;
