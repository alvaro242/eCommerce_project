import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getServerURL } from "../api/api";

export class CategoryContent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    const subcategories = this.props.subcategories;

    const rendersubCategories = subcategories.map((subcategory, index) => {
      return (
        <Col className="p-2" key={index} xl={2} lg={4} sm={4} xs={6} md={4}>
          <Link
            to={"/subcategories/" + subcategory.name}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Card className="card ">
              <img
                className="center"
                src={getServerURL() + subcategory.images}
              />
              <Card.Body>
                <p>{subcategory.name} </p>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      );
    });
    return (
      <Fragment>
        <Container>
          <p className="p-5"></p>
          <Row>{rendersubCategories}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default CategoryContent;
