import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  state = {
    username: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const user = {
        username: this.state.username
    }

    console.log(user);
    axios.post("/users/add", user)
        .then(res => console.log(res.data));

    this.setState({
        username: ""
    })
  };

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>Username: </label>
                <input 
                    required
                    name="username"
                    className="form-control"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                />
            </div>
            <div className="form-group">
                <input type="submit" value="Create User" className="btn btn-primary" />
            </div>
        </form>
      </div>
    );
  }
}
