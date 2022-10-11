import React, { Component } from "react";
import Task from "../models/Task";
import TaskDeleteConfirm from "./TaskDeleteConfirm";
import TaskEdit from "./TaskEdit";
import TaskLine from "./TaskLine";
import TaskList from "./TaskList";
import moment from "moment";

// Need to get data from localstorage : maybe json
    // Here are dummy tasks
    var task1 = new Task(1,"Faire des gatos","cat1","2022-12-09","Je sais pas quoi marquer");
    var task2 = new Task(2,"42","cat1","2022-09-18","Je sais pas quoi marquer x2");
    var task3 = new Task(3,"AAAAAAAAAAAAAAAAAAA","cat2","2023-10-21","Je sais pas quoi marquer x3");
    var tasks: Task[] = [task1, task2, task3];
     
    moment.locale("fr")
    let date = new Date()
    const defaultTask = new Task(0, "Task title", "category", moment(date.toLocaleDateString(), "DD-MM-YYYY").format("YYYY-MM-DD"), "Task Description")


interface EditState{
    isOpenEdit : boolean,
    isOpenDelete : boolean,
    currentTask : Task,
    editMode : boolean
}

export default class Todolist extends Component<any, EditState>{
    constructor(props: any) {
        super(props);
        this.state = {
            isOpenEdit : false,
            isOpenDelete : false,
            currentTask : defaultTask,
            editMode : false
        };
      }

        setCurrentTask(task: Task){
            this.setState({currentTask : task})
        }

        setMode(edit : boolean){
            this.setState({editMode : edit})
        }

        toggleEdit(){
            this.setState({isOpenEdit : !this.state.isOpenEdit})
        }

        toggleDelete(){
            this.setState({isOpenDelete : !this.state.isOpenDelete})
        }

    taskList = tasks.map((task) => (<TaskLine task={task} toggleEdit = {this.toggleEdit.bind(this)} toggleDelete={this.toggleDelete.bind(this)} setCurrentTask={this.setCurrentTask.bind(this)} editModeFn={this.setMode.bind(this)}/>));

    

    render(){
        return  <div>
                    <TaskList task={defaultTask} isOpen={this.state.isOpenEdit} toggleFn = {this.toggleEdit.bind(this)} setCurrentTask={this.setCurrentTask.bind(this)} editModeFn={this.setMode.bind(this)}>
                        {this.taskList}
                    </TaskList>
                    <TaskEdit task={this.state.currentTask} isOpen={this.state.isOpenEdit} toggleFn = {this.toggleEdit.bind(this)} EditMode={this.state.editMode}/>
                    <TaskDeleteConfirm task={this.state.currentTask} isOpen={this.state.isOpenDelete} toggleFn = {this.toggleDelete.bind(this)}/>
                </div>
    }
}