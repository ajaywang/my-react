import React from 'react';
import Card from './Card';

class List extends React.Component{
    render(){
        let card = this.props.cards.map( (card) => {
            return(
                <Card key={ this.props.id }
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

export default List;