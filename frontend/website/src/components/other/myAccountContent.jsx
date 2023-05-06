import React, { Component, Fragment } from "react";

class MyAccountContent extends Component {
  render() {
    const user = this.props.user.user;
    let name = user.name;
    let email = user.email;

    console.log(user);

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
