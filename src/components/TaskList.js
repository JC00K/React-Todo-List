import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, setTasks }) => {
  return (
    <div className='tasklist-container'>
      {tasks.map((sTask, i) => {
        return (
          <Task
            key={i}
            setTasks={setTasks}
            singleTask={sTask.singleTask}
            tasks={tasks}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
