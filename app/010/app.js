import React from 'react';
import { render } from 'react-dom';
import KanbanBoard from './KanbanBoard';
import './css/style.css'

let cardsList = [
    {
        id: 1,
        title: "Read the book",
        description: "I should read the **whole** book",
        color: '#bd8d31',
        status: "in-progress",
        tasks: []
    },
    {
        id: 2,
        title: "write some code",
        description: "code along with the samples in the book. The complete source can be found at [github](https://github.com/pro-reacr)",
        color: '#3a7e28',
        status: "todo",
        tasks: [
            {
                id: 1,
                name: "contactlist examlp",
                done: true
            },
            {
                id: 2,
                name: "kanban example",
                done: false
            },
            {
                id: 3,
                name: "my own experiments",
                done: false
            }
        ]
    },
    {
        id: 3,
        title: "jsfk",
        description: "code along with the samples in the book. The complete source can be found at [github](https://github.com/pro-reacr)",
        color: '#3a7e28',
        status: "done",
        tasks: []
    }
];

render(
    <KanbanBoard cards={ cardsList } />,
    document.getElementById('app')
);