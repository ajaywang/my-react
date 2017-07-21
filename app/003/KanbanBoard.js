import React from 'react';
import List from './List';

class KanbanBoard extends React.Component{
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

export default KanbanBoard;