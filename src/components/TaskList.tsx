import React, { Component, PropsWithChildren } from "react";
import Task from "../models/Task";
import DummyTask from "./DummyTask";

import { render } from 'react-dom';


  // TODO Réussir a parser le tableau et le foreach 
  var task1 = new Task(1,"Faire des gatos","cat1","09/12/2022",null);
  var task2 = new Task(2,"42","cat1","24/10/2022",null);
  var task3 = new Task(3,"AAAAAAAAAAAAAAAAAAA","cat2","09/11/2022",null);

  var tasks: Task[] = [task1, task2, task3];

export default class TaskList extends Component<any, any>{
    render() {
        // TODO add an "add button"
        return <div className="flex justify-center min-h-screen bg-gray-800 text-2xl text-gray-200">
                Todo
                    <div className='bg-gray-300 w-1/2 h-full mt-20 p-3 rounded-lg text-base text-black space-y-3'>
                        {this.props.children}
                    </div>      
                </div>
    }
}