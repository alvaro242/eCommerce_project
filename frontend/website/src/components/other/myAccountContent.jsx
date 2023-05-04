import React, { Component, Fragment } from "react";

class MyAccountContent extends Component {
  render() {
    let name = "";
    let email = "";

    if (this.props.user) {
      console.log(this.props.user);
      name = this.props.user.user.name;
      email = this.props.user.user.email;
    }
    return (
      <Fragment>
        <h2>
          Name:
          {name}
          <p></p>
          Email: {email}
        </h2>
      </Fragment>
    );
  }
}

export default MyAccountContent;
