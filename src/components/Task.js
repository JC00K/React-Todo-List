import React from 'react';

const Task = ({ singleTask }) => {
  return (
    <div className='task'>
      <input type='checkbox' />
      <p>{singleTask}</p>
      <button type='button'>Edit</button>
      <button type='button'>Delete</button>
    </div>
  );
};

export default Task;
