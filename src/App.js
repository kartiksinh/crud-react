import React, { Component } from 'react';
import ProductItem from './ProductItem';
import AddProduct from './AddProduct';
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
      products: JSON.parse(localStorage.getItem('products'))
    };

    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }
  componentWillMount(){
    const products = this.getProducts();
    this.setState({ products });
  }
  getProducts(){
   return this.state.products;
  }

  onAdd(name, price){
    const products = this.getProducts();
    products.push({
      name,
      price
    });
    this.setState({ products });
  }

  onDelete(name){
    const products = this.getProducts();

    const filteredProducts = products.filter( product=>{
      return product.name !== name;
    });
    this.setState({products: filteredProducts });  
  }
  onEditSubmit(name, price){
    console.log(name, price);
  }

  render() {
    return (
      <div className="App">
        <h1>Product Manager</h1>
        <AddProduct
          onAdd={this.onAdd} 
        />
        { 
          this.state.products.map(product =>{
            return(
              <ProductItem
                key={product.name}
                {...product}
                onDelete={this.onDelete}
                onEditSubmit={this.onEditSubmit}  
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;
