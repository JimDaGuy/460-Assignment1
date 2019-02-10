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
      <main className={homeStyles.container}>
        <section id="top">
          <h1 className={homeStyles.h1}>FakeDroid App Chart Story</h1>
          <h2 className={homeStyles.h2}>Introduction</h2>
          <p className={homeStyles.p}>
            Here are some statistics about the top 20 apps currently on the
            FakeDroid App Store.
            <br />
            Author: James DiGrazia
          </p>
          <h2 className={homeStyles.h2}>What We Found</h2>
          <ol className={homeStyles.ol}>
            <li className={homeStyles.li}>
              <a href="#1" className={homeStyles.link}>
                Overall Downloads
              </a>
            </li>
            <li className={homeStyles.li}>
              <a href="#2" className={homeStyles.link}>
                Average Rating
              </a>
            </li>
            <li className={homeStyles.li}>
              <a href="#3" className={homeStyles.link}>
                30 Day Retention
              </a>
            </li>
            <li className={homeStyles.li}>
              <a href="#4" className={homeStyles.link}>
                Overall Downloads / Average Rating
              </a>
            </li>
            <li className={homeStyles.li}>
              <a href="#5" className={homeStyles.link}>
                Overall Downloads / 30 Day Retention
              </a>
            </li>
            <li className={homeStyles.li}>
              <a href="#bottom" className={homeStyles.link}>
                Conclusions
              </a>
            </li>
          </ol>
        </section>
        <section id="1">
          <h3 className={homeStyles.h3}>1. Overall Downloads</h3>
          <hr className={homeStyles.hr} />
          <p className={homeStyles.p}>
            This chart shows the overall downloads of the top 20 apps on the
            FakeDroid store. Darker bars indicate higher rated apps. While not
            explicitly clear in this graphic, the higher downloaded applications
            tend to have a higher average rating among our list. This conclusion
            is more visible in our fourth graphic.
          </p>
          <div className={homeStyles.chartContainer}>
            <Chart1 className={homeStyles.chart} />
          </div>
        </section>
        <section id="2">
          <h3 className={homeStyles.h3}>2. Average Rating</h3>
          <hr className={homeStyles.hr} />
          <p className={homeStyles.p}>
            This chart sorts the top 20 apps by their average rating. Notice all
            applications featured in our list have an average rating of atleast
            four and a half stars.
          </p>
          <div className={homeStyles.chartContainer}>
            <Chart2 className={homeStyles.chart} />
          </div>
        </section>
        <section id="3">
          <h3 className={homeStyles.h3}>3. 30 Day Retention</h3>
          <hr className={homeStyles.hr} />
          <p className={homeStyles.p}>
            This chart sorts the top 20 apps by the percentage of users they
            retain after a thirty day period. Darker bars still indicate higher
            rated applications. There seems to be no clear connection between
            the thirty day retention of applications and their average rating.
          </p>
          <div className={homeStyles.chartContainer}>
            <Chart3 className={homeStyles.chart} />
          </div>
        </section>
        <section id="4">
          <h3 className={homeStyles.h3}>
            4. Overall Downloads / Average Rating
          </h3>
          <hr className={homeStyles.hr} />
          <p className={homeStyles.p}>
            This graphic shows the overall downloads of the top 20 apps and
            their average rating. The area of each point scales along with
            average rating. This chart better demonstrates the conclusion drawn
            when describing our first graphic. The applications with more
            downloads tend to have a higher average rating. All applications
            with more than 700,000 overall downloads have a rating of 4.75 stars
            or more.
          </p>
          <div className={homeStyles.chartContainer}>
            <Chart4 className={homeStyles.chart} />
          </div>
        </section>
        <section id="5">
          <h3 className={homeStyles.h3}>
            5. Overall Downloads / 30 Day Retention
          </h3>
          <hr className={homeStyles.hr} />
          <p className={homeStyles.p}>
            This chart shows the overall downloads of the top 20 apps along our
            x axis and the thirty day retention of these apps along the y axis.
            There seems to be no clear connection between overall downloads and
            thirty day retention.
          </p>
          <div className={homeStyles.chartContainer}>
            <Chart5 className={homeStyles.chart} />
          </div>
        </section>
        <section id="bottom">
          <h3 className={homeStyles.h3}>Conclusions</h3>
          <hr className={homeStyles.hr} />
          <p className={homeStyles.p}>
            Our graphics have found that among the top 20 apps on the FakeDroid
            app store, the higher downloaded applications tend to have a higher
            average rating and all our applications have a rating of atleast 4.5
            stars. We also found that in our set of data, there is no clear
            connection between an application's thirty day retention and its
            average rating or overall downloads. Thanks for reading!
          </p>
        </section>
      </main>
    );
  }
}

export default Home;
