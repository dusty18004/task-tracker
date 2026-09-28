
import { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function App() {
    const [tasks, setTasks] = useState([
      {id: 1, text: "Schedule follow-up appointment", done: false},
      {id: 2, text: "Review medication list", done: false}
    ]);

    function addTask(text) {
      const newTask = {id: Date.now(), text, done: false};
      setTasks([...tasks, newTask]);
    }

    function toggleTask(id) {
      setTasks(tasks.map((t) =>
        t.id === id ? {...t, done: !t.done} : t
      ));
    }

    function deleteTask(id) {
      setTasks(tasks.filter((t) => t.id !== id));
    }

    const remaining = tasks.filter((t) => !t.done).length;

    return (
      <div style={{ maxWidth: "600px", margin: "2rem auto", padding:"0 1rem" }}>
        <h1>Patient Task Tracker</h1>
        <p style={{ color:"666" }}>{remaining} of {tasks.length} tasks remaining</p>
        <TaskForm onAdd={addTask} />
        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      </div>
    );
}

export default App;