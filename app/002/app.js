import React from 'react';
import { render } from 'react-dom';
import KanbanBoard from './KanbanBoard';
import './css/style.css'

let cardsList = [
    {
        id: 1,
        title: "Read the book",
        description: "I should read the whole book",
        status: "in-progress",
        tasks: []
    },
    {
        id: 2,
        title: "write some code",
        description: "code along with the samples in the book",
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
    }
];

render(
    <KanbanBoard cards={ cardsList } />,
    document.getElementById('app')
);