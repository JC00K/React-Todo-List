import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';

const TaskContainer = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const changeHandler = (e) => {
    e.preventDefault();
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.length) {
      let newTaskList = [...tasks, { singleTask: task }];
      setTasks(newTaskList);
      setTask('');
    }
  };

  useEffect(() => {
    // Logic for saving to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    // Logic for pulling tasks from storage
    setTasks(JSON.parse(localStorage.getItem('tasks')));
  }, []);

  return (
    <div className='container'>
      <h1>To Do List</h1>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='Add task'
            name='add'
            autoComplete='off'
            type='text'
            onChange={changeHandler}
            value={task}
          />
          <button className='button' type='submit'>
            Add Task
          </button>
        </form>
      </div>
      <TaskList setTasks={setTasks} tasks={tasks} task={task} />
    </div>
  );
};

export default TaskContainer;
