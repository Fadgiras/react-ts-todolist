import React from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './models/Task';

function App() {
  // TODO Réussir a parser le tableau et le foreach 
  var task1 = new Task(1,"Faire des gatos","cat1","09/12/2022");
  var task2 = new Task(2,"42","cat1","24/10/2022");
  var task3 = new Task(3,"AAAAAAAAAAAAAAAAAAA","cat2","09/11/2022");

  var tasks: Task[] = [task1, task2, task3];
  return (
    <div className="flex justify-center min-h-screen bg-gray-800 text-2xl text-gray-200">
      Todo
        <div className='bg-gray-300 w-1/2 h-full mt-20 rounded-lg text-base text-black'>
            {/* Will be replaced by a component */}
            <div className='flex flex-col'>
              <p className='m-2 p-2 bg-cyan-800 bg-opacity-80 w-fit rounded'>
                Faire des gatos
              </p>
              <p>
                {tasks.forEach(element => {
                  element.getNom
                });}
              </p>

            </div>
        </div>      
    </div>
  );
}

export default App;
