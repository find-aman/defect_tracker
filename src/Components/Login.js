import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: ''
        }
    }

    setEmpState = (e) => {
        const value = e.target.value;
        const field = e.target.name;
        this.setState({ [field]: value })
    }

    handleLogin = (e) => {
        e.preventDefault();
        alert('Logged in successfully');
    }

    render() {
        return (<React.Fragment>
            <table align="center">
                <th>
                    <form>
                        <div className="form-group">
                            <label for="name">Username:</label>
                            <input style={{ width: '100%' }} type="text" className="form-control" id="name" placeholder="Enter Name" name="name" onChange={this.setEmpState} />
                        </div>
                        <div className="form-group">
                            <label for="pwd">Password:</label>
                            <input style={{ width: '100%' }} type="password" className="form-control" id="pwd" placeholder="Enter password" name="password" onChange={this.setEmpState} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.handleLogin}>Login</button>
                    </form>
                </th>

            </table>
        </React.Fragment>)
    }
}
export default Login;
