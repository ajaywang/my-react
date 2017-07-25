import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckList extends Component{

    checkInputKeyPress(evt){
        if(evt.key === 'Enter'){
            this.props.taskCallbacks.add(this.props.cardID, evt.target.value);
            evt.target.value = '';
        }
    }

    render(){
        let tasks = this.props.tasks.map( (task) => (
            <li key={ task.id } className="checklist_task">
                <input type="checkbox"
                       defaultChecked={ task.done }
                       onChange={ this.props.taskCallbacks.delete.bind(null, this.props.cardID, task.id, taskIndex) } />
                { task.name }
                <a href="#"
                   className="checklist_task--remove"
                   onClick={ this.props.taskCallbacks.delete.bind(null, this.props.cardID, task.id, taskIndex) } />
            </li>
        ));
        return(
            <div className="checklist">
                <ul>{ tasks }</ul>
                <input type="text"
                        className="checklist--add-task"
                       placeholder="Type then hit Enter to add a task"
                       onKeyPress={ this.checkInputKeyPress.bind(this)}
                />
            </div>
        );
    }
}

CheckList.propTypes = {
    cardID: PropTypes.number,
    tasks: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.object
};

export default CheckList;