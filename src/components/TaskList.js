import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';

// {
//   tasks: [
//     {
//       id: 1,
//       text: 'hiya',
//       done: true,
//     }
//   ]
// }

const TaskList = (props) => {
  const tasksComponentList = props.tasks.map((task) => {
    return (
      <Task key={task.id} text={task.text} done={task.done} id={task.id} />
    );
  });

  return <ul className="tasks__list">{tasksComponentList}</ul>;
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};

export default TaskList;
