import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart({ datapoints }) {
  let dataPointValues = [];
  let totalMax = 0;

  if (datapoints && datapoints.length > 0) {
    dataPointValues = datapoints.map((datapoint) => datapoint.value);
    totalMax = Math.max(...dataPointValues);
  }

  return (
    <div className="chart">
      {datapoints?.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMax}
          label={datapoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
