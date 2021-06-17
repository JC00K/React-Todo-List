import React, { useState } from 'react';

const EditForm = ({ tasks, setTasks, singleTask }) => {
  const [updatedTask, setUpdatedTask] = useState('');
  const changeHandler = (e) => {
    e.preventDefault();
    setUpdatedTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let tasksCopy = [...tasks];
    let newTasksArr = tasksCopy.map((taskObj) => {
      if (taskObj.singleTask === singleTask) {
        taskObj.singleTask = updatedTask;
      }
      return taskObj;
    });
    setTasks(newTasksArr);
    setUpdatedTask('');
  };

  return (
    <div>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='Edit task'
            name='edit'
            autoComplete='off'
            type='text'
            onChange={changeHandler}
            value={updatedTask}
          />
          <button className='button' type='submit'>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
