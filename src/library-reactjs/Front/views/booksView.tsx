

import * as React from "react";

export interface BooksProps { testHtml: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class BooksView extends React.Component<BooksProps, {}> {
    render() {
        return <div className="page-header">
            <div> {this.props.testHtml} </div>
            <div id="books-list"></div>
        </div>;
    }
}