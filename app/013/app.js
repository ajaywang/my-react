import React from 'react';
import { render } from 'react-dom';
import KanbanBordContainer from './KanbanBoardContainer';
import './css/style.css'

render(
    <KanbanBordContainer />,
    document.getElementById('app')
);