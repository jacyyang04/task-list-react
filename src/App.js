import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import axios from 'axios';

const URL = 'https://adas-task-list.herokuapp.com';

const App = () => {
  const [taskState, updateTaskState] = useState([]);

  // getting current tasklist from api
  const getTasks = () => {
    console.log('getting tasks..');
    axios
      .get(`${URL}/tasks`)
      .then((response) => {
        console.log(response.data);
        // make a new task list
        const newTasks = response.data.map((task) => {
          return {
            id: task.id,
            text: task.title,
            done: task.is_complete,
          };
        });
        updateTaskState(newTasks);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  useEffect(getTasks, []);

  // updating the API
  const updateApi = (task) => {
    const completeOrIncomplete = task.done ? 'incomplete' : 'complete';

    axios
      .patch(`${URL}/tasks/${task.id}/${completeOrIncomplete}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const updateTask = (id) => {
    const newTasks = taskState.map((task) => {
      if (task.id === id) {
        updateApi(task);
        return {
          id: task.id,
          text: task.text,
          done: !task.done,
        };
      }
      return task;
    });
    updateTaskState(newTasks);
  };

  const deleteTask = (id) => {
    console.log(`Delete task ${id}`);
    axios
      .delete(`${URL}/tasks/${id}`)
      .then((response) => {
        console.log(response.data);
        // getTasks(); --> this way works too.
        const newTasks = taskState.filter((task) => task.id !== id);
        updateTaskState(newTasks);
      })
      .catch((error) => {
        console.log(error.response.data);
      });

    // filter returns a new array
    // const newTasks = taskState.filter((task) => task.id !== id);

    // for loop example
    // const newTasks = [];

    // for (let task of taskState) {
    //   if (task.id != id) {
    //     newTasks.push(task);
    //   }
    // }
    // creates new taskList with the tasks in newTask
    // updateTaskState(newTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList
            tasks={taskState}
            completedCallBack={updateTask}
            deleteCallBack={deleteTask}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
