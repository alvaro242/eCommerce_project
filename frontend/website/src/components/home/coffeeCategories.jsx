import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { getServerURL } from "../api/api";
import { Link } from "react-router-dom";

class CoffeeCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    const subcategories = this.props.subcategories;

    const renderSubcategories = subcategories.map((subcategory, index) => {
      return (
        <Col className="p-0" key={index} xl={2} lg={4} md={4} sm={4} xs={6}>
          <Link
            to={"/subcategories/" + subcategory.name}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Card className="h-100 w-100 text-center">
              <Card.Body>
                <img
                  className="center"
                  src={getServerURL() + subcategory.images}
                />
                <h5 className="category-name">{subcategory.name}</h5>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      );
    });

    return (
      <Fragment>
        <p className="p-4"></p>

        <Container className="center p=2" fluid={true}>
          <Row>
            <p className="p-2"></p>

            {renderSubcategories}
          </Row>
        </Container>

        <p></p>
      </Fragment>
    );
  }
}
export default CoffeeCategories;
