import * as React from "react";
import { BookListView } from "./bookList";

export interface AppProps { innerHtml: string; buttonText: string; }
export interface AppState { buttonText: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class AppView extends React.Component<AppProps, AppState> {
    constructor(props) {
        super(props);
        this.state = { buttonText: props.buttonText };

        this.press = this.press.bind(this);
    }
    press() {
        this.setState({ buttonText: "You clicked button" });
    }
    componentDidMount() {
        let bookListView = new BookListView();
        bookListView.render(document.getElementById("books-list"));
    }
    render() {
        return <div className="page-header">
            <div>{this.props.innerHtml}</div>
            <button onClick={this.press}>{this.state.buttonText}</button>
            <div id="books-list"></div>
        </div>;
    }
}