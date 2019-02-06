import React, { Component } from "react";
import homeStyles from "./Home.module.scss";
import Chart1 from "../Components/Chart1";

class Home extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className={homeStyles.container}>
        <h1>FakeDroid App Chart Story</h1>
        <h2>Introduction</h2>
        <p>This is a story about app downloads...</p>
        <h2>What We Found</h2>
        <Chart1 />
        <h2>Conclusions</h2>
        <p>The data shows...</p>
      </div>
    );
  }
}

export default Home;
