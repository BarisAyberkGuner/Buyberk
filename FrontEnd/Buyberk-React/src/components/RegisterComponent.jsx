import React, { Component } from 'react';
import UserService from '../services/UserService';

class RegisterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            password: '',
            eMailID: '',
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);

        this.registerUser = this.registerUser.bind(this);
    }
    registerUser = (e) => {
        e.preventDefault();
        let user = { firstName: this.state.firstName, password: this.state.password, eMailID: this.state.eMailID }
        console.log('user=>' + JSON.stringify(user))
        UserService.registerUser(user).then(res => {
            this.props.history.push('/')
        });
    }
    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }
    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }
    changeEMailHandler = (event) => {
        this.setState({ eMailID: event.target.value });
    }

    render() {
        return (
            <div>
                <br/>

                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Kayıt Ol</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label >First Name:</label>
                                    <input placeholder="First Name" name="firstName" className="form-control"
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                </div>
                                <div className="form-group">
                                    <label >Password:</label>
                                    <input type="password" placeholder="Password" name="password" className="form-control"
                                        value={this.state.password} onChange={this.changePasswordHandler} />
                                </div>
                                <div className="form-group">
                                    <label >E-Mail:</label>
                                    <input placeholder="E-Mail" name="eMailID" className="form-control"
                                        value={this.state.eMailID} onChange={this.changeEMailHandler} />
                                </div>
                                <button className="btn btn-dark " onClick={this.registerUser}>Kayıt Ol</button>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterComponent;