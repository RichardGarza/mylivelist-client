import { Component } from "react";
import React from "react";
import LoginPage from "./LoginPage";
import Homepage from "./Homepage";
import SignUpPage from "./SignUpPage";
import AboutPage from "./AboutPage";
import HowToPage from "./HowToPage";
import UserDashboard from "./UserDashboard";

class Body extends Component {
  componentDidMount() {
    console.log("Body Mounted", this.props);
  }

  signIn = userId => {
    this.props.signIn(userId);
  };

  renderLoginPage = () => {
    this.props.setActivePage("loginPage");
  };

  renderSignUpPage = () => {
    this.props.setActivePage("signupPage");
  };

  renderHomePage = () => {
    this.props.setActivePage("homePage");
  };

  render() {
    if (
      this.props.activePage === "loginPage" &&
      this.props.signedIn === false
    ) {
      return (
        <LoginPage
          signIn={this.signIn}
          renderHomePage={this.renderHomePage}
          renderSignUpPage={this.renderSignUpPage}
          renderLoginPage={this.renderLoginPage}
          renderAboutPage={this.renderAboutPage}
          renderHowToPage={this.renderHowToPage}
        />
      );
    } else if (this.props.activePage === "homePage") {
      return (
        <Homepage
          renderHomePage={this.renderHomePage}
          renderSignUpPage={this.renderSignUpPage}
          renderLoginPage={this.renderLoginPage}
          renderAboutPage={this.renderAboutPage}
          renderHowToPage={this.renderHowToPage}
        />
      );
    } else if (this.props.activePage === "aboutPage") {
      return (
        <AboutPage
          renderHomePage={this.renderHomePage}
          renderSignUpPage={this.renderSignUpPage}
          renderLoginPage={this.renderLoginPage}
          renderAboutPage={this.renderAboutPage}
          renderHowToPage={this.renderHowToPage}
        />
      );
    } else if (this.props.activePage === "howToPage") {
      return (
        <HowToPage
          renderHomePage={this.renderHomePage}
          renderSignUpPage={this.renderSignUpPage}
          renderLoginPage={this.renderLoginPage}
          renderAboutPage={this.renderAboutPage}
          renderHowToPage={this.renderHowToPage}
        />
      );
    } else if (
      this.props.signedIn === true &&
      this.props.activePage === "UserDashboard"
    ) {
      return (
        <UserDashboard
          renderHomePage={this.renderHomePage}
          renderSignUpPage={this.renderSignUpPage}
          renderLoginPage={this.renderLoginPage}
          renderAboutPage={this.renderAboutPage}
          renderHowToPage={this.renderHowToPage}
        />
      );
    } else {
      return (
        <SignUpPage
          renderHomePage={this.renderHomePage}
          renderSignUpPage={this.renderSignUpPage}
          renderLoginPage={this.renderLoginPage}
          renderAboutPage={this.renderAboutPage}
          renderHowToPage={this.renderHowToPage}
        />
      );
    }
  }
}

export default Body;
