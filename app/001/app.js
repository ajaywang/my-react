import React,{ Component } from 'react';
import { render } from 'react-dom';

//Parent Component
class GrocetyList extends Component{
    render(){
        return(
            <ul>
                <ListItem quantity="1" name="Bread" />
                <ListItem quantity="6" name="Eggs" />
                <ListItem quantity="2" name="Milk" />
            </ul>
        );
    }
}

//Child Component
class ListItem extends Component{
    render(){
        return (
            <li>
                {this.props.quantity}x {this.props.name}
            </li>
        );
    }
}

render(
    <GrocetyList/>,
    document.getElementById('app')
);