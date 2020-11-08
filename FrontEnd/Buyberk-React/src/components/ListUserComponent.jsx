import React, { Component } from 'react';
import UserService from '../services/UserService';

class ListUserComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    componentDidMount(){
        UserService.getUsers().then((res)=>{
            this.setState({users:res.data})
        });
    }
    
    render() {
        return (
            <div>
                <h2 className="text-center">User List </h2>
                <br/>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>User First Name</th>
                                <th>User Password</th>
                                <th>User Email ID</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.id}>
                                            <td>{user.firstName}</td>
                                            <td>{user.password}</td>
                                            <td>{user.eMailID}</td>
                                        </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListUserComponent;