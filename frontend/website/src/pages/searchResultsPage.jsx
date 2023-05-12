import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/common/footer";
import NavMenu from "../components/common/navMenu";
import { getProductsByInput } from "../components/api/api";
import SearchResultsContent from "../components/Content/searchResultsContent";

class searchResultsPage extends Component {
  constructor({ match }) {
    super();

    this.state = {
      searchInput: match.params.searchInput,
      productsFound: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    getProductsByInput(this.state.searchInput)
      .then((response) => this.setState({ productsFound: response.data }))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <Fragment>
        <Container>
          <NavMenu />
          <SearchResultsContent
            searchInput={this.state.searchInput}
            productsFound={this.state.productsFound}
          />
        </Container>
        <Footer></Footer>
      </Fragment>
    );
  }
}

export default searchResultsPage;
