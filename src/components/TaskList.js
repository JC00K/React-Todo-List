import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, setTasks, setShowEditForm, task }) => {
  return (
    <div className='tasklist-container'>
      {tasks.map((sTask, i) => {
        return (
          <Task
            key={i}
            setTasks={setTasks}
            singleTask={sTask.singleTask}
            tasks={tasks}
            setShowEditForm={setShowEditForm}
            task={task}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
