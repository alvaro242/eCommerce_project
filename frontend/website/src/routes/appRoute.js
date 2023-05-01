import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import homePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import ContactPage from "../pages/contactPage";
import ProductPage from "../pages/productPage";
import BasketPage from "../pages/basketPage";
import AboutPage from "../pages/aboutPage";
import CategoryPage from "../pages/categoryPage";
import SubcategoryPage from "../pages/subcategoryPage";

export class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={homePage}></Route>
          <Route exact path="/login" component={LoginPage}></Route>
          <Route exact path="/contact" component={ContactPage}></Route>
          <Route exact path="/product" component={ProductPage}></Route>
          <Route exact path="/basket" component={BasketPage}></Route>
          <Route exact path="/about" component={AboutPage}></Route>
          <Route exact path="/category/:category" component={CategoryPage} />
          <Route
            exact
            path="/subcategories/:subcategory"
            component={SubcategoryPage}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default AppRoute;
