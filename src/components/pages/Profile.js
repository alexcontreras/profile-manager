import React, { Component, Fragment } from "react";
import axios from "axios";
import Header from "../Header";

export class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: "",
        username: "",
        email: ""
      }
    };
  }

  componentDidMount() {
    const { match } = this.props;

    axios
      .get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
      .then(({ data: user }) => {
        console.log("user", user);

        this.setState({ user });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state);
    return (
      <Fragment>
        <Header />
        <h1>Hello, {this.state.user.name}</h1>
      </Fragment>
    );
  }
}

export default Profile;
