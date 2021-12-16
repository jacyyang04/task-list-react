import React from 'react';
import './Task.css';
import PropTypes from 'prop-types';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Task = ({ id, text, done, completedCallBack, deleteCallBack }) => {
  // let buttonIsCompleteClass = ''
  // if (isDone) {
  //   buttonIsCompleteClass = 'tasks__item__toggle--completed';
  // }

  const buttonClass = done ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="task__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => completedCallBack(id)}
      >
        {text}
      </button>

      <button
        className="tasks__item__remove button alert pull-right"
        data-testid={`delete button ${id}`}
        onClick={() => deleteCallBack(id)}
      >
        <i className="fa fa-times">
          <FontAwesomeIcon icon={faTimes} />
        </i>
      </button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  completedCallBack: PropTypes.func.isRequired,
  deleteCallBack: PropTypes.func.isRequired,
};

export default Task;
