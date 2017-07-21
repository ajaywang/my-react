import React from 'react';
import { render } from 'react-dom';

class App extends React.Component{
    
    handleSubmit(event){
        console.log(
            "Submitted values are:",
            event.target.name.value,
            event.target.email.value,
            event
        );
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="formGroup">
                    Name: <input type="text" name="name"/>
                </div>
                <div className="formGroup">
                    E-mail: <input type="mail" name="mail"/>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

render(
    <App />,
    document.getElementById('app')
);