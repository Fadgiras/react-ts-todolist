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
    editMode : boolean
    // Add a mode state
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

      componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<EditState>, snapshot?: any): void {
          console.log("TodoList")
          //Refresh children here          
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

    //NB : instanciate a new obj to access a task
    tasks = new StorageService().getTasks()

    taskList = this.tasks.map((task) => (<TaskLine key={task.getName()} task={task} toggleEdit = {this.toggleEdit.bind(this)} toggleDelete={this.toggleDelete.bind(this)} setCurrentTask={this.setCurrentTask.bind(this)} editModeFn={this.setMode.bind(this)}/>));

    
    render(){
        return  <div>
                    <TaskList task={defaultTask} isOpen={this.state.isOpenEdit} toggleFn = {this.toggleEdit.bind(this)} setCurrentTask={this.setCurrentTask.bind(this)} editModeFn={this.setMode.bind(this)}>
                        {this.taskList}
                    </TaskList>
                    <TaskEdit task={this.state.currentTask} isOpen={this.state.isOpenEdit} toggleFn = {this.toggleEdit.bind(this)} EditMode={this.state.editMode}/>
                    <TaskDeleteConfirm task={this.state.currentTask} isOpen={this.state.isOpenDelete} toggleFn = {this.toggleDelete.bind(this)}/>
                    {/* TODO Add an add compo or handle well edit compo */}
                </div>
    }
  }