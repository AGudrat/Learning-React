import React, { Component } from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import alertify from "alertifyjs";
import {
  Routes,
  Route,
} from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo1 from "./FormDemo1";
import FormDemo2 from "./FormDemo2";

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };

  componentDidMount() {
    this.getProducts();
  }
  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName })
    this.getProducts(category.id)
  };


  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then(responce => responce.json())
      .then(data => this.setState({ products: data }));
  }

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    }
    else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + " added to cart!!!")

  }

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id)
    this.setState({ cart: newCart })
    alertify.error(product.productName + " remover from cart!!!")
  }
  render() {
    let categoryInfo = { title: "Category List" }
    let productInfo = { title: "Product List" }
    return (
      <div>
        <div className="container">
          <div className="row">
            <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          </div>
          <div className="row">
            <div className="col-3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </div>
            <div className="col-9">
              <Routes>
                <Route  path="/" element={<ProductList
                  products={this.state.products}
                  addToCart={this.addToCart}
                  currentCategory={this.state.currentCategory}
                  info={productInfo} />} />
                <Route path="/cart"  element={<CartList cart = {this.state.cart} removeFromCart= {this.removeFromCart} {...this.props} />} ></Route>
                <Route path="form1" element={<FormDemo1 />}/>
                <Route path="form2" element={<FormDemo2 />}/>
                <Route path="*" element={<NotFound />}></Route>
              </Routes>

            </div>
          </div>
        </div>

      </div>
    );
  }
}