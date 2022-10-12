import React from "react";
import Task from "../models/Task";

export default class StorageService {
    private taskFinder(task : string|null){
        return task ? task : ""
    }

    private getTask(key : string){
        return JSON.parse(this.taskFinder(localStorage.getItem(key)))
    }
    
    private keys = Object.keys(localStorage)
    
    private tasks : Task[] = this.keys.map((key : any) => ( 
        new Task(key, this.getTask(key).name, this.getTask(key).cat, this.getTask(key).date, this.getTask(key).desc)
        
        ))

    public getTasks(){
        return this.tasks
    }
}