import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

class List extends Component{
    render(){
        let card = this.props.cards.map( (card) => {
            return(
                <Card key={ this.props.id }
                      taskCallbacks={this.props.taskCallbacks}
                      id={ card.id }
                      title={ card.title }
                      color={ card.color }
                      description={ card.description }
                      tasks={ card.tasks } />
            );
        });
        return(
            <div className="list">
                <h1>{ this.props.title }</h1>
                { card }
            </div>
        )
    }
}

List.protoTypes ={
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.object
};

export default List;