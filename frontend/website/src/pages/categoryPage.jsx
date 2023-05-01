import React, { Component } from "react";

class CategoryPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "",
    };
  }
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return <div>{this.state.category}</div>;
  }
}

export default CategoryPage;
