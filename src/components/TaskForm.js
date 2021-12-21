import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TaskForm.css'

const TaskForm = (onSubmitCallBack) => {
  // set up state variables
  const [taskText, changeTaskText] = useState('');

  return (
    <form onSubmit={}>
      <label htmlFor="taskText">New Task:</label>
      <input
        type="text"
        name="taskText"
        value={taskText}
        onChange={onChangeTask}
      />
    </form>
  );
};

TaskForm.propTypes = {
  onSubmitCallBack: PropTypes.func.isRequired,
};

export default TaskForm;
