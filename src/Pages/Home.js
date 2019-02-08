import React, { Component } from "react";
import homeStyles from "./Home.module.scss";
import Chart1 from "../Components/Chart1";
import Chart2 from "../Components/Chart2";
import Chart3 from "../Components/Chart3";
import Chart4 from "../Components/Chart4";
import Chart5 from "../Components/Chart5";

class Home extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className={homeStyles.container}>
        <h1 className={homeStyles.h1}>FakeDroid App Chart Story</h1>
        <h2 className={homeStyles.h2}>Introduction</h2>
        <p className={homeStyles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          faucibus sapien molestie mauris porta convallis eget at justo. Proin
          finibus orci in lobortis elementum. Sed tincidunt augue eu tortor
          imperdiet, in dignissim ex tincidunt.
        </p>
        <h2 className={homeStyles.h2}>What We Found</h2>
        <h3 className={homeStyles.h3}>1. Overall Downloads</h3>
        <hr className={homeStyles.hr} />
        <p className={homeStyles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          faucibus sapien molestie mauris porta convallis eget at justo. Proin
          finibus orci in lobortis elementum. Sed tincidunt augue eu tortor
          imperdiet, in dignissim ex tincidunt.
        </p>
        <div className={homeStyles.chartContainer}>
          <Chart1 className={homeStyles.chart} />
        </div>
        <h3 className={homeStyles.h3}>2. Average Rating</h3>
        <hr className={homeStyles.hr} />
        <p className={homeStyles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          faucibus sapien molestie mauris porta convallis eget at justo. Proin
          finibus orci in lobortis elementum. Sed tincidunt augue eu tortor
          imperdiet, in dignissim ex tincidunt.
        </p>
        <div className={homeStyles.chartContainer}>
          <Chart2 className={homeStyles.chart} />
        </div>
        <h3 className={homeStyles.h3}>3. 30 Day Retention</h3>
        <hr className={homeStyles.hr} />
        <p className={homeStyles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          faucibus sapien molestie mauris porta convallis eget at justo. Proin
          finibus orci in lobortis elementum. Sed tincidunt augue eu tortor
          imperdiet, in dignissim ex tincidunt.
        </p>
        <div className={homeStyles.chartContainer}>
          <Chart3 className={homeStyles.chart} />
        </div>
        <h3 className={homeStyles.h3}>4. Overall Downloads / Average Rating</h3>
        <hr className={homeStyles.hr} />
        <p className={homeStyles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          faucibus sapien molestie mauris porta convallis eget at justo. Proin
          finibus orci in lobortis elementum. Sed tincidunt augue eu tortor
          imperdiet, in dignissim ex tincidunt.
        </p>
        <div className={homeStyles.chartContainer}>
          <Chart4 className={homeStyles.chart} />
        </div>
        <h3 className={homeStyles.h3}>
          5. Overall Downloads / 30 Day Retention
        </h3>
        <hr className={homeStyles.hr} />
        <p className={homeStyles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          faucibus sapien molestie mauris porta convallis eget at justo. Proin
          finibus orci in lobortis elementum. Sed tincidunt augue eu tortor
          imperdiet, in dignissim ex tincidunt.
        </p>
        <div className={homeStyles.chartContainer}>
          <Chart5 className={homeStyles.chart} />
        </div>
        <h3 className={homeStyles.h3}>Conclusions</h3>
        <hr className={homeStyles.hr} />
        <p className={homeStyles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          faucibus sapien molestie mauris porta convallis eget at justo. Proin
          finibus orci in lobortis elementum. Sed tincidunt augue eu tortor
          imperdiet, in dignissim ex tincidunt.
        </p>
      </div>
    );
  }
}

export default Home;
