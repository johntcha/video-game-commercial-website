import React from "react";
import { Button } from "react-bootstrap";
import "./Dashboard.css";
import API from "../../utils/API";
import Footer from "../Footer";

export class Dashboard extends React.Component {
  disconnect = () => {
    API.logout();
    window.location = "/";
  };
  render() {
    return (
      <div className="dashboard">
        <h1 className="h1_dash">Dashboard</h1>
        <div>
          <img className="avatar" src="/images/peon.jpg" alt=""/>
          <p>
            Welcome to your personal Dashboard !
          </p>
          <p>
            Here you can subscribe to our newsletter to be informed
            of the game changements.
          </p>
        </div>
        <div className="disconnect">
          <Button onClick={this.disconnect} type="submit">
          Logout
        </Button>
        </div>
        <Footer />
      </div>

    );
  }
}