import * as React from "react";
import * as ReactDOM from "react-dom";
import ReactTable from 'react-table'

let data = [
    {
        name: 'Tanner Linsley',
        age: 26,
        friend: {
            name: 'Jason Maurer',
            age: 23
        }
    }, {
        name: '222',
        age: 27,
        friend: {
            name: '222',
            age: 24
        }
    }
];

let columns = [
    {
        Header: 'Name',
        accessor: 'name' // String-based value accessors!
    }, {
        Header: 'Age',
        accessor: 'age',
        Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }, {
        id: 'friendName', // Required because our accessor is not a string
        Header: 'Friend Name',
        accessor: d => d.friend.name // Custom value accessors!
    }, {
        Header: props => <span>Friend Age</span>, // Custom header components!
        accessor: 'friend.age'
    }
];

export class BookListView {
    render(el: HTMLElement) {
        ReactDOM.render(
            <ReactTable data={data} columns={columns}/>,
            el
        );
    }
}