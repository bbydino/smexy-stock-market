import React from "react";
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";

const Plot = createPlotlyComponent(Plotly);
const queryString = require("query-string");

class Stock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockXValues: [],
      stockYValues: [],
      stockTicker: queryString.parse(window.location.search).name
        ? queryString.parse(window.location.search).name.toUpperCase()
        : queryString.parse(window.location.search).name,
      stockColor: "",
    };
  }

  componentDidMount() {
    this.fetchStock();
  }

  fetchStock() {
    const ptr = this;

    const API_KEY = "YHDWEN1G40F4U6KX";
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.state.stockTicker}&apikey=${API_KEY}`;

    let stockChartX = [];
    let stockChartY = [];

    fetch(API_Call)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data);

        for (let key in data["Time Series (Daily)"]) {
          stockChartX.push(key);
          stockChartY.push(data["Time Series (Daily)"][key]["1. open"]);
        }

        ptr.setState({
          stockXValues: stockChartX,
          stockYValues: stockChartY,
          stockColor: stockChartY[0] > stockChartY[stockChartY.length - 1] ? "green" : "red",
        });
      });
  }

  render() {
    return (
      <>
        <div className="title">
          <h1>dngo's smexy stock market!</h1>
          <form>
            <label>
              Ticker<br></br>
              <input type="text" name="name" placeholder="e.g. AMZN"></input>
            </label>
          </form>
        </div>
        <div className="plot">
          <Plot
            data={[
              {
                x: this.state.stockXValues,
                y: this.state.stockYValues,
                type: "scatter",
                mode: "lines+markers",
                marker: { color: this.state.stockColor },
              },
            ]}
            layout={{
              width: 900,
              height: 500,
              title: this.state.stockTicker,
              paper_bgcolor: "#00000000",
              plot_bgcolor: "#00000000",
              displayModeBar: false,
              autosize: true,
            }}
            config={{
              displayModeBar: false,
            }}
          />
        </div>
      </>
    );
  }
}

export default Stock;
