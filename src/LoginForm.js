import React from "react";

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      Password: ""
    };
  }

  render() {
    const { Username, Password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="Username">Username</label>
        <input
          name="Username"
          type="text"
          placeholder="Enter your Username"
          value={Username}
          onChange={this.handleChange}
        />
        <label htmlFor="Password">Password</label>
        <input
          name="Password"
          type="Password"
          placeholder="Enter your Password"
          value={Password}
          onChange={this.handleChange}
        />
        <button type="submit">Login</button>
      </form>
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    console.log("Submitting");
    console.log(this.state);
    alert(`${this.state.Username} Logged In Successfully !!!!`);
  };
}
