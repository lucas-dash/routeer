const Task = ({ tasks, setTasks }) => {
  function complete(taskId) {
    const newTask = [...tasks];
    const index = newTask.findIndex((task) => task.id === taskId);
    newTask[index].complete = !newTask[index].complete;
    setTasks(newTask);
  }

  function deleteTask(taskId) {
    const filter = tasks.filter((task) => task.id !== taskId);
    setTasks(filter);
  }

  return (
    <>
      {tasks.map((task) => {
        const { id, name } = task;
        return (
          <li key={id}>
            <input type="checkbox" onClick={() => complete(id)} />
            <p>{name}</p>
            <button onClick={() => deleteTask(id)}>Smazat</button>
          </li>
        );
      })}
    </>
  );
};
export default Task;
