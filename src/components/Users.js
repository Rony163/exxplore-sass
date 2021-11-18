import React, { Component } from 'react';

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => this.setState({ users: data }))
    }

    render() {
        return (
            <div>
                <h2>This is user {this.state.users.length}</h2>
            </div>
        );
    }
}

export default Users;