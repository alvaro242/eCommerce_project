import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { getServerURL } from "../api/api";
import { Link } from "react-router-dom";

class SearchResultsContent extends Component {
  componentDidMount() {}
  render() {
    const productsFound = this.props.productsFound;
    const searchInput = this.props.searchInput;

    const renderProductsFound = productsFound.map((product, index) => {
      return (
        <Col className="p-2" key={index} xl={2} lg={4} sm={4} xs={6} md={4}>
          <Link
            to={"/product/" + product.id}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Card className="card ">
              <img className="center" src={getServerURL() + product.image_1} />
              <Card.Body>
                <p>{product.name} </p>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      );
    });
    return (
      <Fragment>
        <Container>
          <p className="p-1"></p>
          <h3>
            Results for: <i className="h7 text-secondary">{searchInput}</i>
          </h3>
          <p className="p-2"></p>
          <Row>{renderProductsFound}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default SearchResultsContent;
