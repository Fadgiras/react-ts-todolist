import React, { Children, Component } from "react";
import Task from "../models/Task";
import TaskDeleteConfirm from "./TaskDeleteConfirm";
import TaskEdit from "./TaskEdit";
import TaskLine from "./TaskLine";
import TaskList from "./TaskList";
import StorageService from "../services/StorageService";
import moment from "moment";

   
moment.locale("fr")
let date = new Date()
const defaultTask = new Task(0, "Task title", "category", moment(date.toLocaleDateString(), "DD-MM-YYYY").format("YYYY-MM-DD"), "Task Description")

interface EditState{
    isOpenEdit : boolean,
    isOpenDelete : boolean,
    currentTask : Task,
    editMode : boolean,
    mode : string
}

export default class Todolist extends Component<any, EditState>{
    constructor(props: any) {
        super(props);
        this.state = {
            isOpenEdit : false,
            isOpenDelete : false,
            currentTask : defaultTask,
            editMode : false, 
            mode: "List"
        };        
    }

    setCurrentTask(task: Task){
        this.setState({currentTask : task})
    }

    switchMode(CurrentMode : string){
        this.setState({mode : CurrentMode})
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

    //NB : instanciate a new obj to access a task
    setTaskList(){
        let tasks = new StorageService().getTasks()
        let taskList = tasks.map((task) => (<TaskLine key={task.taskKey()} task={task} setCurrentTask={this.setCurrentTask.bind(this)} switchMode={this.switchMode.bind(this)}/>));
        
        return taskList
    }

    render(){ 
        return  <div className="min-h-screen bg-gray-800 text-2xl text-gray-200 flex items-center flex-col">
                    <div className="pt-2 w-1/2">
                        <p className="text-start">Todo</p>        
                    </div>  
                    <TaskList task={defaultTask} mode={this.state.mode} setCurrentTask={this.setCurrentTask.bind(this)} switchMode={this.switchMode.bind(this)}>
                        {this.setTaskList()}
                    </TaskList>
                    <TaskEdit task={this.state.currentTask} mode={this.state.mode} switchMode={this.switchMode.bind(this)}/>
                    <TaskDeleteConfirm task={this.state.currentTask} mode={this.state.mode} switchMode={this.switchMode.bind(this)}/>
                </div>
    }
  }