import React, { Component } from "react";
import Task from "../models/Task";

interface TaskProps{
    task : Task
}



export default class TaskEdit extends Component<TaskProps, any>{
    
    render(): React.ReactNode {
        function dateFormat(string : string){
            let str = string.split('/')
            return str[2]+"-"+str[1]+"-"+str[0]
        }
        return  <div className="fixed overflow-y-auto">
                    <div className="fixed flex w-screen h-screen bg-gray-300 opacity-60"/>
                    <div className="fixed bottom-0 top-0 left-0 right-0 m-auto flex w-1/2 bg-gray-400 h-fit rounded shadow-lg shadow-blue-800 flex flex-col items-center">
                        <p className="mr-auto pt-2 pl-4 pb-4 text-bold text-xl">Task Edit : {this.props.task.getName()}</p>
                        <div className="w-2/3">
                            <p className="pl-2 pt-2">Task name :</p>
                            <input type="text" className="m-2 ring-2 pl-2 rounded border-black w-full" placeholder={this.props.task.getName()}/>
                            
                            <p className="pl-2 pt-2">Task Category :</p>
                            <input type="text" className="m-2 ring-2 pl-2 rounded border-black w-full" placeholder={this.props.task.getCat()}/>
                            
                            <p className="pl-2 pt-2">Task name</p>
                            <textarea className="m-2 ring-2 pl-2 rounded border-black resize w-full" placeholder={this.props.task.getDesc()}/>

                            <p className="pl-2 pt-2">Task Date : </p>
                            {/* use state to change value */}
                            <input type="date" placeholder={dateFormat(this.props.task.getDate())} className="m-2 ring-2 pl-2 rounded border-black w-fit"/>
                        </div>
                        <button type="button"
                                className="w-fit text-gray-400 bg-transparent rounded-lg text-sm p-0.5 m-1 inline-flex items-center hover:bg-gray-500 hover:text-white ml-auto mr-12 mb-5"
                                >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="" fill="" viewBox="0 0 24 24">
                                <path d="M20.303 4.846l.882.882-12.22 12.452-6.115-5.93.902-.902 5.303 5.028 11.248-11.53zm-.018-2.846l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285-3.715-3.715z"/>
                            </svg>
                        </button>
                    </div>
                </div>
    }    
}