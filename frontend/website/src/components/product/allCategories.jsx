import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getServerURL } from "../api/api";

export class AllCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    const categories = this.props.categories;

    const renderCategories = categories.map((category, index) => {
      return (
        <Col className="p-2" key={index} xl={2} lg={4} sm={4} xs={6} md={4}>
          <Link
            to={"/categories/" + category.name}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Card className="card ">
              <img className="center" src={getServerURL() + category.image} />
              <Card.Body>
                <p>{category.name} </p>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      );
    });
    return (
      <Fragment>
        <Container>
          <Row>{renderCategories}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default AllCategories;
