import React from 'react';
import { render } from 'react-dom';
import './css/style.css'

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            searchTerm: "React"
        }
    }

    handleChange(event){
        this.setState({
            searchTerm: event.target.value.substr(0,10)
        });
    }

    render(){
        return(
            <div>
                Search Term:
                <input type="search" value={ this.state.searchTerm } onChange={ this.handleChange.bind(this) } />
            </div>
        );
    }
}

render(
    <App />,
    document.body
);