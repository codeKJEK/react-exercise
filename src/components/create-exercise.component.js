import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExcercises extends Component {
    state = {
        username: "",
        description: "",
        duration: 0,
        date: new Date(),
        users: []
    };

    
    componentDidMount() {
        this.setState({
            users: ["test user"],
            username: "test user"
        })
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
    
        this.setState({
            [name]: value,
        });
    };

    
    onChangeDate(date) {
        this.setState({
            date: date
        });
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        const {
            username,
            description,
            duration,
            date
        } = this.state;
        
        const exercise = {
            username: username,
            description: description,
            duration: duration,
            date: date
          }
      
        //   window.location = "/";
          console.log(exercise)
    }


    render() {
        const {
            username,
            description,
            duration,
            date
        } = this.state;
        
        return (
            <div>
                <h3>Create New Exercise Log</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Username:</label>
                        <select ref="userInput"
                            required
                            name="username"
                            className="form-control"
                            onChange={this.handleInputChange}
                            value={username}>
                            {
                                this.state.users.map(function(user) {
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                        </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                            <label>Description:</label>
                            <input type="text"
                                required
                                name="description"
                                className="form-control"
                                value={description}
                                onChange={this.handleInputChange}
                            />
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes):</label>
                        <input type="text"
                            required
                            name="duration"
                            className="form-control"
                            value={duration}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                            <label>Date:</label>
                            <DatePicker 
                                id="dateField"
                                className="form-control"
                                selected={date}
                                onChange={this.onChangeDate.bind(this)}
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                    </div>             
                </form>
            </div>
        )
    }
}