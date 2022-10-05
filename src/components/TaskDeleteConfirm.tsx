import React, { Component } from "react";
import Task from "../models/Task";

interface TaskProps{
    task : Task
}

export default class TaskDeleteConfirm extends Component<TaskProps, any>{
    
    render(): React.ReactNode {
        function dateFormat(string : string){
            let str = string.split('/')
            return str[2]+"-"+str[1]+"-"+str[0]
        }
        return  <div className="fixed overflow-y-auto">
                    <div className="fixed flex w-screen h-screen bg-gray-300 opacity-60"/>
                    <div className="fixed bottom-0 top-0 left-0 right-0 m-auto flex w-1/2 bg-gray-400 h-fit rounded shadow-lg shadow-blue-800 flex flex-col items-center">
                        <p className="mr-auto pt-2 pl-4 pb-4 text-bold text-xl">Delete Task : {this.props.task.getName()}</p>
                        <div className="w-2/3">
                            <div className="bg-gray-300 flex flex-col text-center text-lg font-bold space-y-4 p-2 rounded">
                                <p >Are you sure you want to delete this task ?</p>
                                <p className="underline decoration-2">You won't be able to retrieve it afterwards !</p>
                            </div>
                        </div>
                        <div className="flex flex-row ml-auto mr-4 pt-2">
                            <button type="button"
                                    className="w-fit text-gray-400 bg-transparent rounded-lg text-sm p-0.5 m-1 inline-flex items-center hover:bg-gray-500 hover:text-white ml-auto mr-12 mb-5"
                                    >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M20.303 4.846l.882.882-12.22 12.452-6.115-5.93.902-.902 5.303 5.028 11.248-11.53zm-.018-2.846l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285-3.715-3.715z"/>
                                </svg>
                            </button>
                            <button type="button"
                                    className="w-fit text-gray-400 bg-transparent rounded-lg text-sm p-0.5 m-1 inline-flex items-center hover:bg-gray-500 hover:text-white ml-auto mr-12 mb-5"
                                    >
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24">
                                    <path d="M20.197 2.837l.867.867-8.21 8.291 8.308 8.202-.866.867-8.292-8.21-8.23 8.311-.84-.84 8.213-8.32-8.312-8.231.84-.84 8.319 8.212 8.203-8.309zm-.009-2.837l-8.212 8.318-8.31-8.204-3.666 3.667 8.321 8.24-8.207 8.313 3.667 3.666 8.237-8.318 8.285 8.204 3.697-3.698-8.315-8.209 8.201-8.282-3.698-3.697z"/>
                                </svg>
                            </button>
                        </div>
                        
                    </div>
                </div>
    }    
}