import React, { Component } from "react";

export default class TaskEdit extends Component<any, any>{
    render(): React.ReactNode {
        return  <div className="fixed overflow-y-auto">
                    <div className="fixed flex w-screen h-screen bg-gray-300 opacity-60"/>
                    <div className="fixed bottom-0 top-0 left-0 right-0 m-auto flex w-1/2 bg-gray-400 h-fit rounded shadow-lg shadow-blue-800 flex flex-col">
                        <p className="m-auto pt-2 text-bold text-xl">Task Edit : Task name</p>
                        <p className="pl-2 pt-2">Task name</p>
                        <input type="text" className="m-2 ring-2 pl-2 w-1/2 rounded border-black" placeholder="task name"/>
                        
                        <p className="pl-2 pt-2">Task name</p>
                        <input type="text" className="m-2 ring-2 pl-2 w-1/2 rounded border-black" placeholder="task name"/>
                        
                        <p className="pl-2 pt-2">Task name</p>
                        <textarea className="m-2 ring-2 pl-2 w-1/2 rounded border-black resize" placeholder="task name"/>

                    </div>
                </div>
    }    
}