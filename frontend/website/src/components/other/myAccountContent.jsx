import React, { Component, Fragment } from "react";

class MyAccountContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.user;
    let name = user.name;
    let email = user.email;

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
