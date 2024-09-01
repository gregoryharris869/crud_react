import { useState } from "react";

// custom components
import CustomForm from "./components/CustomForm";
import TaskList from "./components/TaskList";
import EditForm from "./components/EditForm";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((t) => t.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prevSate) =>
      prevSate.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };
  const updateTask = (task) => {
    setTasks((prevSate) =>
      prevSate.map((t) => (t.id === task.id ? { ...t, name: task.name } : t))
    );
    // close edit mode
  };

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    // set focus back to original
  };

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      {isEditing && (
        <EditForm editedTask={editedTask} updateTask={updateTask} />
      )}
      <CustomForm addTask={addTask} />
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      )}
    </div>
  );
}

export default App;
