import React, { Component, PropsWithChildren } from "react";


export default interface EditState{
    id : number,
    open : boolean,
    date : string
}


export default class Todolist extends Component<any, EditState>{
    render(): React.ReactNode {
        return  <div>
                    {this.props.children}
                </div>
    }
}