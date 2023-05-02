import React, { Component, Fragment } from "react";
import Categories from "../components/home/coffeeCategories";
import NavMenu from "../components/common/navMenu";
import Footer from "../components/common/footer";
import { getAllCategories } from "../components/api/api";
import { Container } from "react-bootstrap";
import AllCategories from "../components/product/allCategories";
import LoadingSkeleton from "../components/other/skeleton";

class AllCategoriesPage extends Component {
  constructor({ match }) {
    super();

    this.state = {
      categories: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    window.scroll(0, 0);
    this.getData();
  }

  async getData() {
    await getAllCategories()
      .then((response) =>
        this.setState({ categories: response.data, isLoading: false })
      )
      .catch((error) => console.log(error));
  }

  renderAllCategeories() {
    if (this.state.isLoading === true) {
      return LoadingSkeleton();
    } else {
      return <AllCategories categories={this.state.categories}></AllCategories>;
    }
  }

  render() {
    return (
      <Fragment>
        <Container>
          <NavMenu></NavMenu>
          <div>{<h2>All Categories</h2>}</div>
          {this.renderAllCategeories()}
        </Container>
        <Footer></Footer>
      </Fragment>
    );
  }
}

export default AllCategoriesPage;
