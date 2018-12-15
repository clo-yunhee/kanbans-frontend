import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Taskboard from './Taskboard';

import { fetchBoard } from './app/fetch.js';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        let { data, id } = this.props;

        if (data) {
            this.setState({board: 
                <Taskboard
                    key={data._id}
                    data={data}
                />
            });
        } else {
            if (!id) {
                id = '26d301d2-ff22-11e8-ac5d-42010a84008d';
            }

            fetchBoard(data => {
                this.setState({board:
                    <Taskboard
                        key={id}
                        data={data}
                    />
                });
            }, id); 
       }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {this.state.board}
                </header>
            </div>
        );
    }
}
