import React , {useState} from 'react';
import './App.css';
import TaskLine from './components/TaskLine';
import Task from './models/Task';
import TaskList from './components/TaskList';
import TaskEdit from './components/TaskEdit';
import Todolist from './components/Todolist';
import TaskDeleteConfirm from './components/TaskDeleteConfirm';

function App() {

    // Need to get data from localstorage : maybe json
    // Here are dummy tasks
    var task1 = new Task(1,"Faire des gatos","cat1","09/12/2022","Je sais pas quoi marquer");
    var task2 = new Task(2,"42","cat1","24/10/2022","Je sais pas quoi marquer x2");
    var task3 = new Task(3,"AAAAAAAAAAAAAAAAAAA","cat2","09/11/2023","Je sais pas quoi marquer x3");
    var tasks: Task[] = [task1, task2, task3];
    const taskList = tasks.map((task) => (<TaskLine task={task}/>)); 

    const defaultTask = new Task(0, "I'm a dummy task", "dummyCat", "01/01/1900", "Dummy desc")

    
  return (
    <Todolist>
      <TaskList>
        {taskList}
      </TaskList>
      <TaskEdit task={task1}/>
    </Todolist>
  );
}

export default App;
