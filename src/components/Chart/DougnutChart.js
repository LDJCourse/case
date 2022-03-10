import React from "react";
import { Chart as ChartJS, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Legend);

export const data = {
  datasets: [
    {
      data: [58, 21, 21],
      backgroundColor: ["rgba(0, 0, 0)", "#fbb1bd", "#f7cad0"],
      borderColor: ["rgba(0, 0, 0)", "#fbb1bd", "#f7cad0"],
    },
  ],
};

const DougnutChart = () => {
  return (
    <div className="flex justify-center">
      <div className="w-2/4">
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default DougnutChart;
