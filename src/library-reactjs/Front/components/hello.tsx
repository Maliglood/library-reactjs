import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }
interface MyState { }


// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps/*, MyState*/> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}