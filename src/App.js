import React, { Component } from 'react';
import './App.css';

class App extends Component {
  onSubmit(event){
    console.log('event', event)
    event.preventDefault();
    console.log(this.input.value);
  }
  onClick(){
    alert("hey ssup!!!");
  }

  render() {
     const List = [
      'Item 1',
      'Item 2',
      'Item 3'
     ]; 

    return (
      <div className="App">
        <h1>
          {
            List.map(item=>{
              return (
                <div key={item} onClick={this.onClick}>{item}</div>
              ) 
            })
          }
        </h1>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange}></input>
        </form>
      </div>
    );
  }
}

export default App;
