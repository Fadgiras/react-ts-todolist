import React, { Component } from "react";
import Task from "../models/Task";
import EditState from "./Todolist";

interface TaskProps{
    task : Task
    toggleEdit : Function,
    toggleDelete : Function
    
}

export default class TaskLine extends Component<TaskProps,EditState>{
    constructor(props: TaskProps) {
        super(props);        
      }

    toggleEdit = () => {this.props.toggleEdit()}
    toggleDelete = () => {this.props.toggleDelete()}

    render() {
        return <div id={this.props.task.getId().toString()} className='bg-gray-500 rounded pr-2 shadow-md  '>
                    <div className="flex flex-row">
                        <p className='m-2 p-2 bg-gray-400 bg-opacity-80 w-1/5 rounded align-middle break-words'>
                            {this.props.task.getName()}
                        </p>
                        <div className="w-full flex flex-col">
                            <p className="mt-2 p-2 bg-gray-400 rounded w-full h-screen max-h-16 break-words">
                                {this.props.task.getDesc()}
                            </p>
                            <div className="flex">
                                <div className="m-2 ml-0 p-2 mr-auto bg-gray-400 rounded w-fit break-words">
                                    <p className=""> Dead line : {this.props.task.getDate()}</p>
                                </div>

                                {/* Check */}
                                <button type="button"
                                        className="w-fit text-gray-400 bg-transparent rounded-lg text-sm p-0.5 m-1 inline-flex items-center hover:bg-gray-600 hover:text-white"
                                        >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M20.303 4.846l.882.882-12.22 12.452-6.115-5.93.902-.902 5.303 5.028 11.248-11.53zm-.018-2.846l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285-3.715-3.715z"/>
                                    </svg>
                                </button>

                                {/* edit */}
                                <button type="button"
                                        className="w-fit text-gray-400 bg-transparent rounded-lg text-sm p-0.5 m-1 inline-flex items-center hover:bg-gray-600 hover:text-white"
                                        onClick={this.toggleEdit}
                                        >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#333333" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-3">
                                            <path d="M12 20h9" fill="black"></path>
                                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" fill="#4d4d4d"></path>
                                        </svg>
                                </button>

                                {/* bin */}
                                <button type="button"
                                        className="w-fit text-gray-400 bg-transparent rounded-lg text-sm p-0.5 m-1 inline-flex items-center hover:bg-gray-600 hover:text-white"
                                        onClick={this.toggleDelete}
                                        >
                                    <svg aria-hidden="true" className="w-5 h-5" fill="black" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm2 2v10h12V10H6zm3 2h2v6H9v-6zm4 0h2v6h-2v-6zM7 5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>                      
                </div>
    }
}