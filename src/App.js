import React, { Component } from "react";
import HomePage from "./Pages/HomePage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./Pages/ShopPage/ShopPage";
import Header from "./Component/Header/Header";
import SignInAndSignUp from "./Pages/SignInAndSignUp/SignInAndSignUp";
import { auth } from "./Component/FireBase/Firebase";
class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/ShopPage" component={ShopPage} />
          <Route exact path="/SignIn" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
