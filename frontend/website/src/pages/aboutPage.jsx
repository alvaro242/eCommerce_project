import React, { Component, Fragment } from "react";
import NavMenu from "../components/common/navMenu";
import Footer from "../components/common/footer";
import About from "../components/other/about";

class AboutPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <Fragment>
        <NavMenu />
        <About />
        <Footer />
      </Fragment>
    );
  }
}

export default AboutPage;
