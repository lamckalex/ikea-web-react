import React, { Component } from 'react';
import Products from './components/products';

class App extends Component {
  
  state = {
    products: []
  }

  componentDidMount() {

    fetch('http://localhost:8080/categories')
      .then(res => res.json())
      .then((data)=>{
        console.log(data);
      })



    fetch('http://localhost:8080/categories?id=16244')
    .then(res => res.json())
    .then((data) => {
      this.setState({ products: data })
    })
    .catch(console.log)
  }

  render() {
    return (
      <Products products={this.state.products} />
    );
  }
}

export default App;