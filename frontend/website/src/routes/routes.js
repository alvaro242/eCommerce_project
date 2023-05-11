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
import AllCategoriesPage from "../pages/allCategoriesPage";
import SearchResultsPage from "../pages/searchResultsPage";
import MyAccountPage from "../pages/myAccountPage";
import { getUserData } from "../components/api/api";
import NavMenu from "../components/common/navMenu";
import CheckoutPage from "../pages/checkoutPage";
import PaymentPage from "../pages/PaymentPage";
import OrderPage from "../pages/orderPage";

export class Routes extends Component {
  constructor() {
    super();

    this.state = {
      user: { name: "", email: "" },
    };
  }

  componentDidMount() {
    getUserData()
      .then((response) => this.setUser(response.data))
      .catch((error) => this.setUser("unlogged"));
  }

  setUser = (user) => {
    this.setState({ user: user });
  };
  render() {
    return (
      <Fragment>
        <NavMenu user={this.state.user} setUser={this.setUser} />
        <Switch>
          <Route exact path="/" component={homePage}></Route>
          <Route
            exact
            path="/login"
            render={(props) => (
              <LoginPage
                user={this.state.user}
                setUser={this.setUser}
                {...props}
                key={Date.now()}
              />
            )}
          />
          <Route exact path="/contact" component={ContactPage}></Route>
          <Route
            exact
            path="/product/:productid"
            render={(props) => (
              <ProductPage
                user={this.state.user}
                setUser={this.setUser}
                {...props}
                key={Date.now()}
              />
            )}
          />
          <Route
            exact
            path="/account"
            render={(props) => (
              <MyAccountPage
                user={this.state.user}
                setUser={this.setUser}
                {...props}
                key={Date.now()}
              />
            )}
          />
          <Route
            exact
            path="/basket"
            render={(props) => (
              <BasketPage
                user={this.state.user}
                setUser={this.setUser}
                {...props}
                key={Date.now()}
              />
            )}
          />

          <Route exact path="/about" component={AboutPage}></Route>
          <Route exact path="/categories/:category" component={CategoryPage} />
          <Route
            exact
            path="/subcategories/:subcategory"
            component={SubcategoryPage}
          />
          <Route exact path="/categories" component={AllCategoriesPage} />
          <Route exact path="/categories" component={AllCategoriesPage} />

          <Route
            exact
            path="/search=:searchInput"
            render={(props) => (
              <SearchResultsPage {...props} key={Date.now()} />
            )}
          />

          <Route
            exact
            path="/checkout"
            render={(props) => (
              <CheckoutPage
                user={this.state.user}
                {...props}
                key={Date.now()}
              />
            )}
          />
          <Route
            exact
            path="/payment"
            render={(props) => <PaymentPage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/order/:id"
            render={(props) => <OrderPage {...props} key={Date.now()} />}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default Routes;
