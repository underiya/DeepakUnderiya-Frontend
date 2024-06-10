import { ArcElement, Chart, Legend, Tooltip } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);

const Charts = () => {
  const data = {
    labels: ["Partnership", "LP Pool", "Burned", "BNB LP Pool"],
    datasets: [
      {
        label: "Tokens",
        data: [5, 35, 30, 30],
        backgroundColor: ["#BE2C2C", "#FF8F34", "#9934FF", "#028DFD"],

        borderWidth: 0,
        borderRadius: 16,
        spacing: 16,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return <Doughnut data={data} options={options} />;
};

export default Charts;
