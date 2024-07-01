import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    const renderPieChart = () => {
      const ctx = chartRef.current.getContext("2d");

      // If there's an existing chart instance, destroy it
      if (chartInstance) {
        chartInstance.destroy();
      }

      // Render the new pie chart
      chartInstance = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Post Graduate", "Female", "Male", "Undergraduate"],
          datasets: [
            {
              data: [22, 8.9, 13.3, 56.6],
              backgroundColor: ["#DEE2F1", "#57E4FF", "#00C4CC", "#235A86"],
              borderColor: "#00000000",
            },
          ],
        },
        options: {
          responsive: true,
          color: "#fff",
        },
      });
    };

    renderPieChart();

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="w-3/4 md:w-1/2  flex items-center justify-center">
      <canvas ref={chartRef} />
    </div>
  );
};

export default PieChart;