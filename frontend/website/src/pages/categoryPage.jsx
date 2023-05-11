import React, { Component, Fragment } from "react";
import { getSubcategoriesByCategoryName } from "../components/api/api";
import Footer from "../components/common/footer";
import NavMenu from "../components/common/navMenu";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CategoryContent from "../components/product/categoryContent";

class CategoryPage extends Component {
  constructor({ match }) {
    super();

    this.state = {
      categoryName: match.params.category,
      subcategories: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    window.scroll(0, 0);
    this.getData();
  }

  async getData() {
    await getSubcategoriesByCategoryName(this.state.categoryName)
      .then((response) =>
        this.setState({
          subcategories: response.data,
          isLoading: false,
        })
      )
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <Fragment>
        <Container>
          <NavMenu></NavMenu>
          <div>{<h2>{this.state.categoryName}</h2>}</div>
          <div>
            <Link
              to={"/categories/"}
              style={{ textDecoration: "none", color: "black" }}
            >
              All categories
            </Link>
            &gt; {this.state.categoryName}
          </div>
          <CategoryContent
            categoryName={this.state.categoryName}
            subcategories={this.state.subcategories}
          ></CategoryContent>
        </Container>

        <Footer></Footer>
      </Fragment>
    );
  }
}

export default CategoryPage;
