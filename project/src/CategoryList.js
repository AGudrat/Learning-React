import React, { Component } from "react";
import { ListGroupItem } from 'reactstrap';

export default class CategoryList extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then(responce => responce.json())
      .then(data => this.setState({ categories: data }));
  }

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ul className="list-group">
          {
            this.state.categories.map(category => (
              <ListGroupItem
                onClick={() => this.props.changeCategory(category)}
                active={category.categoryName === this.props.currentCategory ? true : false}
                key={category.id}>
                {category.categoryName}
              </ListGroupItem>
            ))
          }
        </ul>
      </div>
    );
  }
}
