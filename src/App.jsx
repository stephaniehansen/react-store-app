import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";

class App extends Component {
  render() { 
    return (
      <>
      <NavBar />
      <h1>Welcome</h1>
      <ProductList />
      </>
    );
  }
}
 
export default App;