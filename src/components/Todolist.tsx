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
    isOpenDelete : boolean
}

export default class Todolist extends Component<any, EditState>{
    constructor(props: any) {
        super(props);
        this.state = {
            isOpenEdit : false,
            isOpenDelete : false           
        };
      }
        toggleEdit(){
            console.log(this.state.isOpenEdit)
            this.setState({isOpenEdit : !this.state.isOpenEdit}, () => console.log(this.state.isOpenEdit))
        }

        toggleDelete(){
            console.log(this.state.isOpenDelete)
            this.setState({isOpenDelete : !this.state.isOpenDelete}, () => console.log(this.state.isOpenDelete))
        }

    taskList = tasks.map((task) => (<TaskLine task={task} toggleEdit = {this.toggleEdit.bind(this)} toggleDelete={this.toggleDelete.bind(this)} />));

    render(): React.ReactNode {
        return  <div>
                    <TaskList>
                        {this.taskList}
                    </TaskList>
                    <TaskEdit task={task1} isOpen={this.state.isOpenEdit} toggleFn = {this.toggleEdit.bind(this)}/>
                    <TaskDeleteConfirm task={task1} isOpen={this.state.isOpenDelete} toggleFn = {this.toggleDelete.bind(this)}/>
                </div>
    }
}