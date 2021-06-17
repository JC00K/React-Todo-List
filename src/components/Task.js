import React, { useState } from 'react';
import EditForm from './EditForm';

const Task = ({ singleTask, setTasks, tasks }) => {
  const [showEditForm, setShowEditForm] = useState(false);

  const deleteTask = (e) => {
    let newList = tasks.filter((task) => task.singleTask !== singleTask);
    setTasks(newList);
  };
  return (
    <div>
      <div className='task'>
        <input type='checkbox' />
        <p>{singleTask}</p>
        <button type='button' onClick={() => setShowEditForm(true)}>
          Edit
        </button>
        <button className='delete-button' onClick={deleteTask} type='button'>
          Delete
        </button>
      </div>
      {showEditForm && (
        <EditForm tasks={tasks} setTasks={setTasks} singleTask={singleTask} />
      )}
    </div>
  );
};

export default Task;
