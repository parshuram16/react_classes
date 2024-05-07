



import axios from "axios";
import React, { Component } from "react";
import CardNew from "../../components/functional/cards/cardnew";

class DisplayDataOne extends Component {
  state = {
    products: [],
    selectedProductId: null
  };

  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      this.setState({
        products: response.data
      })
    })
  }

  display = (productId) => {
    this.setState({
      selectedProductId: productId,
    })
  }

  render() {
    return (

        <>
      
        <h1>Display Respective data</h1>
        <div style={{
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            rowGap:"5px",
            columnGap:"5px"
        }}>
        
        {this.state.products.map((details) => {
          return (
            <div key={details.id} >
              <button onClick={() => this.display(details.id)}  style={{
                width:100,
                height:50,
                backgroundColor:"blue"
              }}>
                {details.id}
              </button>
              {this.state.selectedProductId === details.id && (
                <CardNew product={details} />
              )}
            </div>
          )
        })}
        </div>
      </>
    )
  }
}

export default DisplayDataOne
