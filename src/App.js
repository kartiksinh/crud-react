import React, { Component } from 'react';
import MyComponent from './MyComponent';
import './App.css';

const products = [
  {
    name: 'iPad',
    price: 20000
  },
  {
    name: 'iPhone',
    price: 60000
  }
];

localStorage.setItem('products', JSON.stringify(products));

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: []
    };
  }
  componentWillMount(){
    const products =  JSON.parse(localStorage.getItem('products'));
    this.setState({ products });
  }

  render() {
    return (
      <div className="App">
        <h1>Product Manager</h1>
        {
          this.state.products.map(product =>{
            return(
              <div key={product.name}>
                <span>{product.name}</span> | <span>{product.price}</span>
              </div>
              )
          })
        }
      </div>
    );
  }
}

export default App;
