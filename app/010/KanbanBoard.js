import React, { Component } from 'react';
import List from './List';
import PropTypes from 'prop-types';

class KanbanBoard extends Component{
    render(){
        return(
            <div className="app">
                <List id="todo" title="To Do" cards={this.props.cards.filter((cards) => cards.status === "todo")} />
                <List id="in-progress" title="In Progress" cards={ this.props.cards.filter((cards) => cards.status === "in-progress") } />
                <List id="done" title="Done" cards={ this.props.cards.filter((cards) => cards.status === "done") } />
            </div>
        );
    }
}

KanbanBoard.PropTypes = {
    cards: PropTypes.arrayOf(PropTypes.object)
};

export default KanbanBoard;