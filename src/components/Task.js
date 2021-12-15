import React, { useState } from 'react';
import './Task.css';
import PropTypes from 'prop-types';

const Task = ({ id, text, done }) => {
  const [isDone, setIsDone] = useState(done);

  const toggleDone = () => {
    setIsDone(!isDone);
  };

  // let buttonIsCompleteClass = ''
  // if (isDone) {
  //   buttonIsCompleteClass = 'tasks__item__toggle--completed';
  // }

  const buttonIsCompleteClass = isDone ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="task__item">
      <button
        className={`tasks__item__toggle ${buttonIsCompleteClass}`}
        onClick={toggleDone}
      >
        {text}
      </button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};

export default Task;
