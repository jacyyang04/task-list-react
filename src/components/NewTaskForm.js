import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';
// import { text } from '@fortawesome/fontawesome-svg-core';

const NewTaskForm = ({ onSubmitCallback }) => {
  const [taskState, setTaskState] = useState({
    text: '',
    done: false,
  });

  const inputValid = () => {
    return taskState.text.length > 3;
  };

  const handleChange = (event) => {
    // console.log(event.target)
    // gets everything in the old state
    const newState = {
      ...taskState,
    };
    // newState['text'] = event.target.value;
    newState[event.target.name] = event.target.value;
    setTaskState(newState);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!inputValid()) {
      return;
    }

    onSubmitCallback(taskState);
    setTaskState({
      text: '',
      done: false,
    });
  };

  return (
    <div className="NewTaskForm">
      <form className="new-task__form" onSubmit={onSubmit}>
        <div className="new-task__fields">
          <label htmlFor="text">New Task</label>
          <input
            name="text"
            id="text"
            className={inputValid() ? 'valid' : 'invalid'}
            value={taskState.text}
            onChange={handleChange}
          />
        </div>
        <div className="new-task__fields">
          <label htmlFor="done">Done</label>
          <select
            name="done"
            id="done"
            value={taskState.done}
            onChange={handleChange}
          >
            <option></option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
        <div className="new-task__fields">
          <button
            className="button   new-task__submit"
            type="submit"
            disabled={!inputValid()}
          >
            Add a task
          </button>
        </div>
      </form>
    </div>
  );
};

NewTaskForm.propTypes = {
  onSubmitCallback: PropTypes.func.isRequired,
};

export default NewTaskForm;
