import React, { Component } from 'react';
import KanbanBoard from './KanbanBoard';
import update from 'react-addons-update';
import 'whatwg-fetch';
import 'babel-polyfill';

const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
    'Content-type': 'application/json',
    Authorization: 'any-string-you-like'
};

class KanbanBoardContainer extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            cards: []
        };
    }

    componentDidMount(){
        fetch(`${API_URL}/cards`, {headers: API_HEADERS})
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    cards: responseData
                });
                window.state = this.state;
            })
            .catch((error) => {
                console.log('Error fetching and parsing data', error);
            })

    }

    addTask(cardId, taskName){
        //保持一个参考原始状态的突变之前
        //如果你需要恢复用户界面中的乐观的变化
        let prevState = this.state;

        //查找卡片的索引
        let cardIndex = this.state.cards.findIndex((card) => card.id == cardId);

        //用给定的名称创建一个新的任务和临时ID
        let newTask = {id: Date.now(), name: taskName, done: false};

        //create a new object and the new task to the array of  tasks
        let nextState = update(this.state.cards, {
            [cardIndex]: {
                tasks: { $push: [newTask] }
            }
        });

        //set the component state to the mutated object
        this.setState({ cards: nextState} );

        //Call the API to add the task on the server
        fetch(`${API_URL}/cards/${cardId}/tasks`, {
            method: 'post',
            headers: API_HEADERS,
            body: JSON.stringify(newTask)
        })
            .then((response) => {
                if(response.ok){
                    return response.json()
                }else {
                    throw new Error("Server response wasn't OK")
                }
            })
            .then((responseData) => {
                newTask.id = responseData.id;
                this.setState({ cards: nextState });
            })
            .catch((error) => {
                this.setState(prevState);
                console.log(error);
            })
    }

    deleteTask(cardId, taskId, taskIndex){
        //find the index of the card
        let cardIndex = this.state.cards.findIndex((card) => card.id == cardId);

        //keep a reference to the original state prior to the mutations
        //in case you need to revert the optimistic changes in the UI
        let prevState = this.state;

        //create a new object without the task
        let nextState = update(this.state.cards, {
            [cardIndex]: {
                tasks: {$splice:[[taskIndex, 1]]}
            }
        });

        //set the component state to the mutated object
        this.setState({cards: nextState});

        //call the API to remove the task on the server
        fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
            method: 'delete',
            headers: API_HEADERS
        })
            .then((response) => {
                if(!response.ok){
                    //throw an error if server response wasn't 'ok'
                    //so you can revert back the optimistic changes
                    //made to the UI
                    throw new Error("Server response wasn't ok")
                }
            })
            .catch((error) => {
                console.error("fetch error:", error);
                this.setState(prevState);
            });
    }

    toggleTask(cardId, taskId, taskIndex){
        //keep a reference to the original state prior to the mutations
        //in case you need to revert the optimistic changes in the UI
        let prevState = this.state;

        //find the index of the card
        let cardIndex = this.state.cards.findIndex((card) => card.id == cardId);

        //save a reference to the task's 'done' value
        let newDoneValue;
        //using the $apply command, you will change the done value to its opposite
        let nextState = update(
            this.state.cards,{
                [cardIndex]: {
                    tasks: {
                        [taskIndex]: {
                            done: {
                                $apply: (done) => {
                                newDoneValue = !done;
                                return newDoneValue;
                                }
                            }
                        }
                    }
                }
            });
        //set the component state to the mutated object
        this.setState({cards: nextState});
        //call the API to toggle the task on the server
        fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`,{
            method: 'put',
            headers: API_HEADERS,
            body: JSON.stringify({done: newDoneValue})
        })
            .then((response) => {
                if(!response.ok){
                    //throw an error if server response wasn't 'ok'
                    //so you can revert back the optimistic changes
                    //made to the UI
                    throw new Error("server response wasn't OK")
                }
            })
            .catch((error) => {
                console.error("fetch error:", error);
                this.setState(prevState);
            });
    }

    render(){
        return <KanbanBoard
            cards={this.state.cards}
            taskCallbacks={{
                toggle: this.toggleTask.bind(this),
                delete: this.deleteTask.bind(this),
                add: this.addTask.bind(this) }} />
    }
}

export default KanbanBoardContainer;