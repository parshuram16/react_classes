import React, { Component } from "react";
import axios from "axios";
import CardNew from "../../components/functional/cards/cardnew";

class DisplaySelectedData extends Component {
  state = {
    products: [],
    filteredProducts: []
  };

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      this.setState({
        products: response.data,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Something went wrong")
    }
  };

  filterProductsByCategory = (category) => {
    const filteredProducts = this.state.products.filter(
      (product) => product.category === category
    );
    this.setState({ filteredProducts })
  };

  showAllProducts = () => {
    this.setState({ filteredProducts: this.state.products })
  };

  render() {
    return (
      <>
        <h1>Display Selected Data</h1>
        <button onClick={() => this.filterProductsByCategory("men's clothing")}>
          Men's Clothing
        </button>
        <button onClick={() => this.filterProductsByCategory("jewelery")}>
          Jewelery
        </button>
        <button onClick={() => this.filterProductsByCategory("electronics")}>
          Electronics
        </button>
        <button onClick={() => this.filterProductsByCategory("women's clothing")}>
          Women's Clothing
        </button>
        <button onClick={this.showAllProducts}>All</button>

        <div style={{
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap"


        }}>

        {this.state.filteredProducts.map((eachProduct) => {
          return (
            <div key={eachProduct.id}>
              <CardNew products={eachProduct} />
            </div>
          )
        })}
        </div>
      </>
    )
  }
}

export default DisplaySelectedData;
