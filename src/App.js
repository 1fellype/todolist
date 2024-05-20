
import React, { useState } from 'react';
import './App.css'; // Importando o arquivo CSS personalizado


const App = () => {
  // Initialize tasks as an empty array
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTodo = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Function to toggle task completion status
  const toggleTodoCompleted = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  // Function to delete a task
  const deleteTodo = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <h1>Minha Lista de Tarefas</h1>

      <form className="todo-form" onSubmit={(event) => {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const description = event.target.elements.description.value;
        const newTask = { id: Date.now(), name, description, completed: false };
        addTodo(newTask);
        event.target.elements.name.value = '';
        event.target.elements.description.value = '';
      }}>
        <label>
          Nome da Tarefa:
          <input type="text" name="name" className="todo-input" />
        </label>
        <label>
          Descrição:
          <input type="text" name="description" className="todo-input" />
        </label>
        <button type="submit" className="todo-button">Adicionar Tarefa</button>
      </form>

      <ul className="todo-list">
        {tasks.map((task) => (
          <li key={task.id} className="todo-item">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTodoCompleted(task.id)}
              className="todo-checkbox"
            />
            <span className={`todo-text ${task.completed ? 'completed' : ''}`}>
              {task.name} - {task.description}
            </span>
            <button className="todo-delete-button" onClick={() => deleteTodo(task.id)}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
