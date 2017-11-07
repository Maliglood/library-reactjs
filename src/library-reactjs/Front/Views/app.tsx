import * as React from "react";

export interface AppProps { innerHtml: string }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class AppView extends React.Component<AppProps, {}> {
    render() {
        return <div className="page-header">
            <div>{this.props.innerHtml}</div>
            <div id="books-list"></div>
        </div>;
    }
}