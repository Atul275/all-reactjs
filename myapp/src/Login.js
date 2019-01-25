import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div align='center'>
                <table>
                    <tr>
                        <td colSpan='2'><b>Login User</b></td>
                    </tr>
                    <tr>
                        <td>User Name:</td>
                        <td><input type='text' /></td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td><input type='password' /></td>
                    </tr>
                    <tr>
                        <td colSpan='2' align='center'><button>Submit</button></td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default Login;