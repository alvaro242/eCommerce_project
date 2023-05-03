import React, { Component, Fragment } from "react";
import { Navbar, Container, Row, Col, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

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
    if (this.state.redirect == true) {
      return <Redirect to={"/search=" + this.state.searchInput}></Redirect>;
    }
  }

  render() {
    return (
      <Fragment>
        <Navbar expand="lg" fixed="top">
          <Container fluid={"true"} className="fixed-top px-3 mb-2 bg-white">
            <Row>
              <Col className="px-2" lg={4} md={4} sm={12} xs={12}>
                <Link to="/" className="px-5">
                  <img src="https://www.iconexperience.com/_img/o_collection_png/office/64x64/plain/coffee_bean.png" />
                </Link>
              </Col>

              <Col className="px-5 mt-1" lg={4} md={4} sm={6} xs={4}>
                <div className="input-group  w-100">
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.inputOnChange}
                  />
                  <Button
                    type="button"
                    title="search"
                    className="btn search-btn"
                    onClick={this.handleSearch}
                  >
                    <i className="fa fa-search"> </i>
                  </Button>
                </div>
              </Col>
              <Col
                className="px-4 mt-2 text-center"
                lg={4}
                md={4}
                sm={12}
                xs={12}
              >
                <Link to="/login" className="h4 btn">
                  LOGIN
                </Link>
                <Link to="/basketPage">
                  <Button className="cart" variant="light">
                    {" "}
                    <i className="fa fa-shopping-cart"></i>
                  </Button>
                </Link>
                <Link to="/basketPage">
                  <Button className="cart-btn">
                    {" "}
                    <i className="fa fa-shopping-cart"> 3 items</i>
                  </Button>{" "}
                </Link>
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
