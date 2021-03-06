import React from 'react';

class CheckList extends React.Component{
    render(){
        let tasks = this.props.tasks.map( (task) => (
            <li key={ task.name } className="checklist_task">
                <input type="checkbox" defaultChecked={ task.done }/>
                { task.name }
                <a href="#" className="checklist_task--remove" />
            </li>
        ));
        return(
            <div className="checklist">
                <ul>{ tasks }</ul>
            </div>
        );
    }
}

export default CheckList;