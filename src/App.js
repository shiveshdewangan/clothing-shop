import React, { Component } from "react";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shoppage";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import SingInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth } from "./firebase/firebase.utils";
import "./App.css";

class App extends Component {
  state = {
    currentUser: null
  };

  componentDidMount = () => {
    auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
      console.log(user);
    });
  };

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SingInAndSignUpPage} />
        </Switch>
      </>
    );
  }
}

export default App;
