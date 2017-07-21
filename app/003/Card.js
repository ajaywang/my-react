import React from 'react';
import CheckList from './CheckList';

class Card extends React.Component{
    constructor() {
        super(...arguments);
        this.state = {
            showDetails: false
        };
    }
    render(){
        let cardDetails;
        if(this.state.showDetails){
            cardDetails = (
                <div className="card_details">
                    { this.props.description }
                    <CheckList key={ this.props.id } cardID={ this.props.id } tasks={ this.props.tasks } />
                </div>
            )
        }
        return(
            <div className="card">
                <div className="card_title" onClick={
                    () => this.setState({
                        showDetails: !this.state.showDetails
                    })
                }>{ this.props.title }</div>
                { cardDetails }
            </div>
        );
    }
}

export default Card;