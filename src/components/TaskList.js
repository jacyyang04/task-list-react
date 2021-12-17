import React from 'react';
import './TaskList.css';
import Task from './Task';
import PropTypes from 'prop-types';

const TaskList = ({ tasks, completedCallBack, deleteCallBack }) => {
  const taskComponent = tasks.map((task) => {
    return (
      <Task
        key={task.id}
        id={task.id}
        text={task.text}
        done={task.done}
        completedCallBack={completedCallBack}
        deleteCallBack={deleteCallBack}
      />
    );
  });

  return <ul className="tasks__list no-bullet">{taskComponent}</ul>;
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    })
  ).isRequired,
  completedCallBack: PropTypes.func.isRequired,
  deleteCallBack: PropTypes.func.isRequired,
};

export default TaskList;
