import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import colombiaLogo from "../../assets/countries_icons/colombia.png";
import hondurasLogo from "../../assets/countries_icons/honduras.png";
import guatemalaLogo from "../../assets/countries_icons/guatemala.png";
import brazilLogo from "../../assets/countries_icons/brazil.png";
import peruLogo from "../../assets/countries_icons/peru.png";
import vietnamLogo from "../../assets/countries_icons/vietnam.png";
import indiaLogo from "../../assets/countries_icons/india.png";
import indonesiaLogo from "../../assets/countries_icons/indonesia.png";

class Categories extends Component {
  render() {
    return (
      <Fragment>
        <p className="p-4"></p>
        <Container className="text-center center p=2" fluid={true}>
          <Row>
            <p className="p-2"></p>
            <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
              <Row>
                <Col className="p-0" key={1} xl={3} lg={3} md={6} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img className="center" src={colombiaLogo} />
                      <h5 className="category-name">Colombia</h5>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="p-0" key={2} xl={3} lg={3} md={6} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img className="center" src={hondurasLogo} />
                      <h5 className="category-name">Honduras</h5>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="p-0" key={3} xl={3} lg={3} md={6} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img className="center" src={guatemalaLogo} />
                      <h5 className="category-name">Guatemala</h5>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="p-0" key={4} xl={3} lg={3} md={6} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img className="center" src={brazilLogo} />
                      <h5 className="category-name">Brazil</h5>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>

            <Col key={5} xl={6} lg={6} md={2} sm={12} xs={12}>
              <Row>
                <Col className="p-0" key={1} xl={3} lg={3} md={6} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img className="center" src={peruLogo} />
                      <h5 className="category-name">Peru</h5>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="p-0" key={6} xl={3} lg={3} md={6} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img className="center" src={vietnamLogo} />
                      <h5 className="category-name">Vietnam</h5>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="p-0" key={7} xl={3} lg={3} md={6} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img className="center" src={indiaLogo} />
                      <h5 className="category-name">India</h5>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="p-0" key={8} xl={3} lg={3} md={6} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img className="center" src={indonesiaLogo} />
                      <h5 className="category-name">Indonesia</h5>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <p></p>
      </Fragment>
    );
  }
}
export default Categories;
