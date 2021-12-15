import React from 'react';
import './TaskList.css';
import Task from './Task';
import PropTypes from 'prop-types';

const TaskList = ({ tasks }) => {
  const taskComponent = tasks.map((task) => {
    return (
      <Task key={task.id} id={task.id} text={task.text} done={task.done}></Task>
    );
  });

  return <ul className="tasks__list no-bullet">{taskComponent}</ul>;
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default TaskList;
