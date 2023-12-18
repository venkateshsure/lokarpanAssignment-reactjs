import { Component } from "react";

import Header from "../Header";

import "./index.css";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="con">
          <img
            src="https://e7.pngegg.com/pngimages/770/509/png-clipart-apple-logo-apple-iphone-logo-apple-logo-white-heart-thumbnail.png"
            alt="iphone-logo"
            className="apple-image"
          />
          <h1>There was still time to work wonders</h1>
        </div>
      </>
    );
  }
}

export default Home;
