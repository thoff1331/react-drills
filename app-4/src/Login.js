import React, { Component } from 'react'

class Login extends Component {
  constructor() {
super();

this.state = {
userName: '',
passWord: ''    
};

this.handleLogIn = this.handleLogIn.bind(this);
}

handleUserNameChange(value) {
    this.setState({ userName: value});
}

handlePassWordChange(value) {
    this.setState({ passWord: value});
}

handleLogIn() {
 alert(`Usernmae: ${this.state.userName} Password: ${this.state.passWord}`);   

}

render() {
return (
<div>
<input onChange={e => this.handleUserNameChange(e.target.value)} type='text' />
<input onChange={e => this.handlePassWordChange(e.target.value)} type='text' />
<button onClick={this.handleLogIn}> Log Me In</button>

</div>
);
}

}

export default Login