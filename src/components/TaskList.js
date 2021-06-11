import React from 'react';
import Task from './Task';

const TaskList = ({ tasks }) => {
  return (
    <div className='tasklist-container'>
      {tasks.map((singleTask) => {
        return <Task singleTask={singleTask} />;
      })}
    </div>
  );
};

export default TaskList;
