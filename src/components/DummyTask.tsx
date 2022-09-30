import React from "react";
import Task from "../models/Task"

export default class DummyTask {
    task1 = new Task(1,"Faire des gatos","cat1","09/12/2022");
    task2 = new Task(2,"42","cat1","24/10/2022");
    task3 = new Task(3,"AAAAAAAAAAAAAAAAAAA","cat2","09/11/2022");

    tasks: Task[] = [this.task1,this.task2, this.task3]; 
}