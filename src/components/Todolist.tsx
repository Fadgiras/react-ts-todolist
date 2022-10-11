import React, { Component, PropsWithChildren } from "react";
import Task from "../models/Task";
import TaskDeleteConfirm from "./TaskDeleteConfirm";
import TaskEdit from "./TaskEdit";
import TaskLine from "./TaskLine";
import TaskList from "./TaskList";

// Need to get data from localstorage : maybe json
    // Here are dummy tasks
    var task1 = new Task(1,"Faire des gatos","cat1","09/12/2022","Je sais pas quoi marquer");
    var task2 = new Task(2,"42","cat1","24/10/2022","Je sais pas quoi marquer x2");
    var task3 = new Task(3,"AAAAAAAAAAAAAAAAAAA","cat2","09/11/2023","Je sais pas quoi marquer x3");
    var tasks: Task[] = [task1, task2, task3];
     

    const defaultTask = new Task(0, "I'm a dummy task", "dummyCat", "01/01/1900", "Dummy desc")


interface EditState{
    isOpenEdit : boolean,
    isOpenDelete : boolean,
    currentTask : Task
}

export default class Todolist extends Component<any, EditState>{
    constructor(props: any) {
        super(props);
        this.state = {
            isOpenEdit : false,
            isOpenDelete : false,
            currentTask : defaultTask           
        };
      }

        setCurrentTask(task: Task){
            this.setState({currentTask : task})
        }

        toggleEdit(){
            this.setState({isOpenEdit : !this.state.isOpenEdit})
        }

        toggleDelete(){
            this.setState({isOpenDelete : !this.state.isOpenDelete})
        }

    taskList = tasks.map((task) => (<TaskLine task={task} toggleEdit = {this.toggleEdit.bind(this)} toggleDelete={this.toggleDelete.bind(this)} setCurrentTask={this.setCurrentTask.bind(this)}/>));

    

    render(): React.ReactNode {
        return  <div>
                    <TaskList>
                        {this.taskList}
                    </TaskList>
                    <TaskEdit task={this.state.currentTask} isOpen={this.state.isOpenEdit} toggleFn = {this.toggleEdit.bind(this)}/>
                    <TaskDeleteConfirm task={this.state.currentTask} isOpen={this.state.isOpenDelete} toggleFn = {this.toggleDelete.bind(this)}/>
                </div>
    }
}