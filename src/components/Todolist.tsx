import React, { Component, PropsWithChildren } from "react";

export default class Todolist extends Component<any, any>{
    render(): React.ReactNode {
        return  <div>
                    {this.props.children}
                </div>
    }
}