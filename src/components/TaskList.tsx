import React, { Component } from "react";
import Task from "../models/Task";

interface TaskProps{
    task : Task, 
    isOpen : boolean,
    toggleFn : Function,
    setCurrentTask : Function, 
    editModeFn : Function,
    children : any
}

export default class TaskList extends Component<TaskProps, any>{
    constructor(props: any) {
        super(props);
        this.state = {     
        };
    }

    toggle = () => {
        this.props.editModeFn(false)
        this.props.toggleFn()
    }

    render() {
        return  <div className="min-h-screen bg-gray-800 text-2xl text-gray-200 ">
                    <div className="block flex-col w-1/2 m-auto ">
                        <div>
                            <p>Todo</p>        
                        </div>            
                        <div className="flex h-fit mt-20 justify-end">
                            <button type="button"
                                    className="w-fit ml-auto text-gray-400 bg-transparent rounded-lg text-sm p-0.5 m-1 inline-flex items-center hover:bg-gray-600 hover:text-white"
                                    onClick={this.toggle}
                                    >
                                <svg fill="gray" xmlns="http://www.w3.org/2000/svg" stroke="white" viewBox="0 0 128 128" width="40px" height="40px">
                                    <path d="M105,23C105,23,105,23,105,23C82.4,0.4,45.6,0.4,23,23C0.4,45.6,0.4,82.4,23,105c11.3,11.3,26.2,17,41,17s29.7-5.7,41-17C127.6,82.4,127.6,45.6,105,23z M100.8,100.8c-20.3,20.3-53.3,20.3-73.5,0C7,80.5,7,47.5,27.2,27.2C37.4,17.1,50.7,12,64,12s26.6,5.1,36.8,15.2C121,47.5,121,80.5,100.8,100.8z"/>
                                    <path d="M83,61H67V45c0-1.7-1.3-3-3-3s-3,1.3-3,3v16H45c-1.7,0-3,1.3-3,3s1.3,3,3,3h16v16c0,1.7,1.3,3,3,3s3-1.3,3-3V67h16c1.7,0,3-1.3,3-3S84.7,61,83,61z"/>
                                </svg>
                            </button>
                        </div>
                        <div className='bg-gray-300 h-full mt-2 p-3 rounded-lg text-base text-black space-y-3 shadow-lg shadow-gray-500'>
                            {this.props.children}
                        </div>      
                    </div>
                </div> 
        
    }
}