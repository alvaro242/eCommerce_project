import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import p1 from "../../assets/images/products/noBackground/colombia.png";
import p2 from "../../assets/images/products/noBackground/Brazil.png";
import p3 from "../../assets/images/products/noBackground/Guatemala.png";
import p4 from "../../assets/images/products/noBackground/Honduras.png";
import p5 from "../../assets/images/products/noBackground/India.png";
import p6 from "../../assets/images/products/noBackground/Indonesia.png";
import p7 from "../../assets/images/products/noBackground/Peru.png";
import p8 from "../../assets/images/products/noBackground/Vietnam.png";
import { getProductsByFeatureNew, getServerURL } from "../api/api";

export class ItemsList extends Component {
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
    const renderNewArrivals = newArrivals.map((newArrivalItem, index) => {
      if (newArrivals.offer_price !== "") {
        return (
          <Col className="p-2" key={index} xl={3} lg={4} sm={4} xs={6} md={4}>
            <Card>
              <Link
                to="/product"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Card className="image-box card w-100">
                  <img
                    className="center "
                    src={getServerURL() + newArrivalItem.image_nobackground}
                  />
                  <Card.Body>
                    <p>{newArrivalItem.name} </p>
                    <p>
                      <strike>£{newArrivalItem.price} </strike> £
                      {newArrivalItem.offer_price}
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
                to="/Product"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Card className="image-box card w-100">
                  <img
                    className="center "
                    src={getServerURL() + newArrivalItem.image_nobackground}
                  />
                  <Card.Body>
                    <p>{newArrivalItem.name} </p>
                    <p>£{newArrivalItem.offer_price}</p>
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
          <div className="section-title text-center mb-55">
            <h2>New arrivals</h2>
            <p>Have a look!</p>
          </div>
          <Row>{renderNewArrivals}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default ItemsList;
