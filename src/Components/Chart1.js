import React, { Component } from "react";
import ReactDOM from "react-dom";
import spStyles from "./Chart1.module.scss";
import * as d3 from "d3";
import data from "../data/fake_app_download_rating.csv";

class Chart1 extends Component {
  componentDidMount() {
    d3.csv(data, d => {
      return {
        app_name: d.app_name,
        downloads: parseInt(d.downloads),
        average_rating: parseFloat(d.average_rating),
        thirty_day_keep: parseFloat(d.thirty_day_keep)
      };
    })
      .then(csvData => {
        // this.visualizeCSV(csvData);
        this.svgCSV(csvData);
      })
      .catch(error => {
        console.dir(error);
      });
  }

  svgCSV(dataset) {
    const svgWidth = 600;
    const svgHeight = dataset.length * 24;

    let svg = d3
      .select(ReactDOM.findDOMNode(this.refs.d3Content))
      .append("svg")
      .attr("width", `${svgWidth}px`)
      .attr("height", `${svgHeight}px`)
      .attr("class", spStyles.chart1);

    // Plotting data
    let xScale = d3
      .scaleLinear()
      .domain([0, d3.max(dataset, d => d.downloads)])
      .range([0, svgWidth - 100]);

    let yScale = d3
      .scaleBand()
      .domain(dataset.map(d => d.app_name))
      .rangeRound([20, svgHeight - 20]);

    let colorScale = d3
      .scaleLinear()
      .domain([4.5, 5])
      .range(["#88d", "#ccf"]);

    svg
      .selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("x", 80)
      .attr("y", d => yScale(d.app_name))
      .attr("width", d => xScale(d.downloads))
      .attr("height", 20)
      .attr("fill", d => colorScale(d.average_rating));

    // Axes
    svg
      .append("g")
      .attr("class", "axis")
      .attr("transform", `translate(80, ${svgHeight - 20})`)
      .call(d3.axisBottom(xScale));

    svg
      .append("g")
      .attr("class", "axis")
      .attr("transform", `translate(80,0 )`)
      .call(d3.axisLeft(yScale));
  }

  render() {
    return <div className={spStyles.d3Content} ref="d3Content" />;
  }
}

export default Chart1;
