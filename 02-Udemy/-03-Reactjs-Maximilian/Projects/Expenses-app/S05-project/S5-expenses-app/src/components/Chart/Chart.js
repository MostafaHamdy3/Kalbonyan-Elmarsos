import "./Chart.css";
import React from "react";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const valuesArray = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...valuesArray);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
