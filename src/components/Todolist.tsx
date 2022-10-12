import React, { Component } from "react";
import Task from "../models/Task";
import TaskDeleteConfirm from "./TaskDeleteConfirm";
import TaskEdit from "./TaskEdit";
import TaskLine from "./TaskLine";
import TaskList from "./TaskList";
import StorageService from "../services/storageService";
import moment from "moment";

   
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

    //NB : instanciate a new obj to acces a task
    tasks = new StorageService().getTasks()

    taskList = this.tasks.map((task) => (<TaskLine task={task} toggleEdit = {this.toggleEdit.bind(this)} toggleDelete={this.toggleDelete.bind(this)} setCurrentTask={this.setCurrentTask.bind(this)} editModeFn={this.setMode.bind(this)}/>));

    saveData = () =>{
        this.tasks.map((task)=>(localStorage.setItem(task.getId().toString(), JSON.stringify(task))));
    };



    render(){
        return  <div>
                    <TaskList task={defaultTask} isOpen={this.state.isOpenEdit} toggleFn = {this.toggleEdit.bind(this)} setCurrentTask={this.setCurrentTask.bind(this)} editModeFn={this.setMode.bind(this)}>
                        {this.taskList}
                    </TaskList>
                    <TaskEdit task={this.state.currentTask} isOpen={this.state.isOpenEdit} toggleFn = {this.toggleEdit.bind(this)} EditMode={this.state.editMode}/>
                    <TaskDeleteConfirm task={this.state.currentTask} isOpen={this.state.isOpenDelete} toggleFn = {this.toggleDelete.bind(this)}/>
                    <div>
                        <button onClick={this.saveData}>Save!</button>
                        <p>{this.tasks.toString()}</p>
                    </div>
                </div>
    }
}