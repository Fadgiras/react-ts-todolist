import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskLine from './components/TaskLine';
import Task from './models/Task';
import TaskList from './components/TaskList';

function App() {

    // Need to get data from localstorage : maybe json
    // Here are dummy tasks
    var task1 = new Task(1,"Faire des gatos","cat1","09/12/2022","Je sais pas quoi marquer");
    var task2 = new Task(2,"42","cat1","24/10/2022","Je sais pas quoi marquer x2");
    var task3 = new Task(3,"AAAAAAAAAAAAAAAAAAA","cat2","09/11/2022","Je sais pas quoi marquer x3");
    var tasks: Task[] = [task1, task2, task3];
    const taskList = tasks.map((task) => (
      <TaskLine
          id={task.getId()}
          name={task.getName()}
          cat={task.getCat()}
          date={task.getDate()}
          desc={task.getDesc()}
        />
      )
    ); 
    
  return (
    <TaskList>
      {taskList}
    </TaskList>
  );
}

export default App;
