import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './Task.css';

const Task = (props) => {
  console.log('Task rendered');
  const [isDone, setIsDone] = useState(props.done);
  const buttonClass = isDone ? 'tasks__item__toggle--completed' : '';

  const toggleComplete = () => {
    console.log('Toggle Complete');
    setIsDone(!isDone);
  };

  const deleteTask = () => {
    console.log('Delete task');
  };

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={toggleComplete}
      >
        {props.text}
      </button>
      <button
        className="tasks__item__remove button alert pull-right"
        onClick={deleteTask}
      >
        <i className="fa fa-times">
          <FontAwesomeIcon icon={faTimes} />
        </i>
      </button>
    </li>
  );
};

Task.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  done: PropTypes.bool.isRequired,
};

export default Task;
