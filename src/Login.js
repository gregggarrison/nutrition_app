import React, { Component } from 'react'

export default class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    componentDidMount() {
        localStorage.removeItem('token')
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.login(this.state)
    }

    render() {
        const { username, password } = this.state

        return (
            <form onSubmit={this.handleSubmit} className="todo-form">
                <h1>Log In</h1>
                <label>User Name</label>
                <input name="username" value={username} onChange={this.handleChange} />
                <label>Password</label>
                <input name="password" value={password} onChange={this.handleChange} />
                <input type="submit" />
            </form>
        )
    }
}
