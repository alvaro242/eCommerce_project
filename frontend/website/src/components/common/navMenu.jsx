import React, { Component, Fragment } from "react";
import { Navbar, Container, Row, Col, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import gimmeBeansLogo from "../../assets/logo_reduced.png";

export class NavMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: "",
      redirect: false,
    };
    this.inputOnChange = this.inputOnChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.redirect = this.redirectIfSearch.bind(this);
  }

  inputOnChange(event) {
    this.setState({ searchInput: event.target.value });
  }

  handleSearch() {
    if (this.state.searchInput !== "") {
      this.setState({ redirect: true });
    }
  }

  redirectIfSearch() {
    if (this.state.redirect === true) {
      return <Redirect to={"/search=" + this.state.searchInput}></Redirect>;
    }
  }

  logOut() {
    localStorage.clear();
  }

  triggerSearch = (event) => {
    console.log(event);
    if (event.keyCode === 13) {
      this.handleSearch();
    }
  };

  render() {
    let menuOptions = <div></div>;

    if (localStorage.getItem("token")) {
      menuOptions = (
        <div>
          <Link to="/account" className="h4 btn">
            <i className="fa fa-user-circle-o"> </i>
          </Link>
          <Link
            to="/"
            onClick={this.logOut}
            style={{ textDecoration: "none", color: "black" }}
          >
            LOGOUT
          </Link>
          <Link to="/basket" style={{ textDecoration: "none", color: "black" }}>
            <i className="fa fa-shopping-cart"></i>
          </Link>
        </div>
      );
    } else {
      menuOptions = (
        <div>
          <Link to="/login" className="h4 btn">
            Log in | Sign Up
          </Link>

          <Link to="/basket" style={{ textDecoration: "none", color: "black" }}>
            <i className="fa fa-shopping-cart"></i>
          </Link>
        </div>
      );
    }
    return (
      <Fragment>
        <Navbar expand="lg">
          <Container fluid={"true"} className="fixed-top  mb-2 ">
            <Row className="bg-white ">
              <Col className="px-2" lg={5} md={5} sm={3} xs={3}>
                <Link to="/" className="px-5">
                  <img src={gimmeBeansLogo} />
                  {/* sample icon: "https://www.iconexperience.com/_img/o_collection_png/office/64x64/plain/coffee_bean.png"*/}
                </Link>
              </Col>

              <Col lg={4} md={3} sm={2} xs={2}></Col>

              <Col className="px-4 mt-2 " lg={3} md={4} sm={7} xs={7}>
                {menuOptions}
              </Col>
            </Row>

            <Row className="bg-warning p-1 ">
              <Col className="px-5 mt-1" lg={12} md={12} sm={12} xs={12}>
                <div className="input-group  w-100">
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.inputOnChange}
                    onKeyDown={this.triggerSearch}
                    tabIndex="0"
                  />
                  <Button
                    type="button"
                    title="search"
                    id="search"
                    className="btn search-btn"
                    onClick={this.handleSearch}
                  >
                    <i className="fa fa-search"> </i>
                  </Button>
                </div>
              </Col>
            </Row>

            {this.redirectIfSearch()}
          </Container>
        </Navbar>
        <p className="p-4"></p>
      </Fragment>
    );
  }
}

export default NavMenu;
