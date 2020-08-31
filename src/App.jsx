import React from "react";
import {Route} from "react-router-dom";
import Index from "./pages/index";
import Products from "./pages/products";
import Details from "./pages/details";
import FormPage from "./pages/form";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = []
  }

  render() {
    return (
      <>
      <Route exact path="/">
        <Index />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/form">
        <FormPage />
      </Route>
      <Route path="/product/:id">
        <Details />
      </Route>
      </>
    )
  }
}

export default App;