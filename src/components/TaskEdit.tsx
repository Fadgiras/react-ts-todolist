import React, { Component } from "react";
import Task from "../models/Task";
import StorageService from "../services/StorageService";


interface TaskProps{
    task : Task, 
    mode : string,
    switchMode : Function
}


export default class TaskEdit extends Component<TaskProps, any>{
    constructor(props: TaskProps) {
        super(props);
        this.state = {
            date: this.props.task.getDate()            
        };
      }

    // componentDidMount() {
    // // Runs after the first render() lifecycle
    //     console.log("Did mount called " + this.props.task.getDate());
    //     this.setState({date : this.props.task.getDate()})
    //     this.forceUpdate()
    // }
    editTask : Task = this.props.task;
    componentDidUpdate(prevProps: Readonly<TaskProps>, prevState: Readonly<any>, snapshot?: any): void {
        this.editTask = this.props.task

    }

    handleDateChange = (Event: { target: any; }) =>{
        this.setState({date : Event.target.value})
        this.editTask.setDate(Event.target.value)
    }

    handleCatChange = (Event: { target: any; }) =>{
        this.editTask.setCat(Event.target.value)
    }

    handleDescChange = (Event: { target: any; }) =>{
        this.editTask.setDesc(Event.target.value)
    }

    handleNameChange = (Event: { target: any; }) =>{
        this.editTask.setName(Event.target.value)
    }
    
    toggle = () => {
        if(this.EditCheck()){
            this.editTask.setId(this.props.task.getId())
            new StorageService().editTask(this.editTask)
        }else{
            this.editTask.setId(Object.keys(localStorage).length+1)
            new StorageService().addTask(this.editTask)
        }
        
        this.props.switchMode("List")
    }

    EditCheck(){
        return this.props.mode=="Edit" ? true : false
    }

    modeCheck(){
        switch(this.props.mode){
            case "Edit" : return true; 
            case "Add" : return true;
            default : return false
        }
    }

    render(): React.ReactNode {
        return <div> 
            {this.modeCheck() ? 
            <div className="fixed overflow-y-auto">
                    <div className="fixed bottom-0 top-0 left-0 right-0 m-auto flex w-1/2 bg-gray-400 h-fit rounded shadow-lg shadow-blue-800 flex-col items-center text-black">
                        <p className="mr-auto pt-2 pl-4 pb-4 text-bold text-xl"> {this.EditCheck() ? "Task : "+this.props.task.getName() : "Task Add"}</p>
                        <div className="w-2/3 text-lg">
                            <p className="pl-2 pt-2">Task Name : </p>
                            <input type="text" className="m-2 ring-2 pl-2 rounded border-black w-full" placeholder={this.EditCheck()  ? this.props.task.getName() : "Task title"} onChange={this.handleNameChange}/>
                            
                            <p className="pl-2 pt-2">Task Category : </p>
                            <input type="text" className="m-2 ring-2 pl-2 rounded border-black w-full" placeholder={this.EditCheck()  ? this.props.task.getCat() : "Task category"} onChange={this.handleCatChange}/>
                            
                            <p className="pl-2 pt-2">Task Description : </p>
                            <textarea className="m-2 ring-2 pl-2 rounded border-black resize w-full" placeholder={this.EditCheck()  ? this.props.task.getDesc() : "Task description"} onChange={this.handleDescChange}/>

                            <p className="pl-2 pt-2">Task Date : </p>
                            {/* Day's date displayed because of the defaultTask object in Todolist.tsx */}
                            <input type="date" value={this.props.task.getDate()} className="m-2 ring-2 pl-2 rounded border-black w-fit" onChange={this.handleDateChange}/>
                        </div>
                        <div className="flex flex-row ml-auto mr-4 pt-2">
                    
                    {/* Check */}
                    <button type="button"
                            className="w-fit text-gray-400 bg-transparent rounded-lg text-sm p-0.5 m-1 inline-flex items-center hover:bg-gray-500 hover:text-white ml-auto mr-12 mb-5"
                            onClick={this.toggle}
                            >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M20.303 4.846l.882.882-12.22 12.452-6.115-5.93.902-.902 5.303 5.028 11.248-11.53zm-.018-2.846l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285-3.715-3.715z"/>
                        </svg>
                    </button>

                    {/* cross */}
                    <button type="button"
                            className="w-fit text-gray-400 bg-transparent rounded-lg text-sm p-0.5 m-1 inline-flex items-center hover:bg-gray-500 hover:text-white ml-auto mr-12 mb-5"
                            onClick={() => {this.props.switchMode("List")}}
                            >
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24">
                            <path d="M20.197 2.837l.867.867-8.21 8.291 8.308 8.202-.866.867-8.292-8.21-8.23 8.311-.84-.84 8.213-8.32-8.312-8.231.84-.84 8.319 8.212 8.203-8.309zm-.009-2.837l-8.212 8.318-8.31-8.204-3.666 3.667 8.321 8.24-8.207 8.313 3.667 3.666 8.237-8.318 8.285 8.204 3.697-3.698-8.315-8.209 8.201-8.282-3.698-3.697z"/>
                        </svg>
                    </button>                
                    </div>
                    </div>
                </div>

            : null}
        </div> 
        
    }    
}