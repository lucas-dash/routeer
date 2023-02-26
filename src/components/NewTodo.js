import Todo from './Todo';
import { useEffect, useRef, useState } from 'react';

const NewTodo = () => {
  const [tasks, setTasks] = useState([]);
  const [showNotif, setShowNotif] = useState(false);

  const [newTask, setNewTask] = useState('');
  const inputRef = useRef(null);

  function createNewTask(e) {
    e.preventDefault();
    if (inputRef) {
      setTasks([
        ...tasks,
        { id: new Date().getTime(), name: newTask, complete: false },
      ]);

      setShowNotif(true);

      setNewTask('');
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setShowNotif(false);
    }, 5000);
  }, [showNotif]);

  function handleInput() {
    setNewTask(inputRef.current.value);
  }

  return (
    <>
      {showNotif && <span>Přidáno</span>}
      <form onSubmit={createNewTask}>
        <input
          type="text"
          ref={inputRef}
          value={newTask}
          placeholder="New Task"
          onChange={handleInput}
        />
        <button type="submit">Přidat</button>
      </form>

      <section>
        <Todo tasks={tasks} setTasks={setTasks} />
      </section>
    </>
  );
};
export default NewTodo;
