import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getProductsByFeatureNew, getServerURL } from "../api/api";

export class NewArrivals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newarrivals: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    await getProductsByFeatureNew()
      .then((response) => {
        this.setState({ newarrivals: response.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const newArrivals = this.state.newarrivals;
    const renderNewArrivals = newArrivals.map((product, index) => {
      if (newArrivals.offer_price !== "") {
        return (
          <Col className="p-2" key={index} xl={3} lg={4} sm={4} xs={6} md={4}>
            <Card>
              <Link
                to={"/product/" + product.id}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Card className="card">
                  <img
                    className="center "
                    src={getServerURL() + product.image_nobackground}
                  />
                  <Card.Body>
                    <p>{product.name} </p>
                    <p>
                      <strike>£{product.price} </strike> £{product.offer_price}
                    </p>
                  </Card.Body>
                </Card>
              </Link>
            </Card>
          </Col>
        );
      } else {
        return (
          <Col className="p-2" key={index} xl={3} lg={4} sm={4} xs={6} md={4}>
            <Card>
              <Link
                to={"/product/" + product.id}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Card className=" card ">
                  <img
                    className="center "
                    src={getServerURL() + product.image_nobackground}
                  />
                  <Card.Body>
                    <p>{product.name} </p>
                    <p>£{product.offer_price}</p>
                  </Card.Body>
                </Card>
              </Link>
            </Card>
          </Col>
        );
      }
    });

    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className=" text-center ">
            <h2>New arrivals</h2>
          </div>
          <Row>{renderNewArrivals}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default NewArrivals;
