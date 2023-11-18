"use client";
import { useRef, useEffect, useState } from "react";
import { Chart } from "chart.js/auto";

export default function BarChart() {
  const chartRef = useRef(null);

  const [mainData, setMainData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const channelID = "2344245";
      const apiKey = "UBKXF666GHT15STZ";
      const resultsCount = 10; // Adjust as needed

      const url = `https://api.thingspeak.com/channels/${channelID}/feeds.json?api_key=${apiKey}&results=${resultsCount}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setMainData(data.feeds);
        // Process the data as needed in your Next.js app
      } catch (error) {
        console.error("Error fetching data from ThingSpeak:", error);
      }
    }
    fetchData();
  }, []);
  console.log(mainData);
  const tenant1 = mainData.map((items) => items.field7);
  const tenant2 = mainData.map((items) => items.field8);
  console.log(tenant1);
  console.log(tenant2);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      //   const label = mainData.map((items) => items.field7 );
      const data = mainData.map((items) => items.field7 / 1000);

      const newChart = new Chart(context, {
        type: "bar",
        data: {
          labels: [
            "10/11",
            "11/11",
            "12/11",
            "13/11",
            "14/11",
            "16/11",
            "17/11",
            "18/11",
          ],
          datasets: [
            {
              barPercentage: 10,
              barThickness: 20,
              label: "Tenant 1",
              data: data,
              backgroundColor: ["gray"],
              borderWidth: 0.8,
              borderRadius: 4,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },

          // responsive: true
          scales: {
            x: {
              type: "category",
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                display: false,
              },
            },
          },
        },
      });

      chartRef.current.chart = newChart;
    }
  }, [mainData]);

  function handleDownload() {
    if (chartRef.current) {
      const file = chartRef.current.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = file;
      link.download = "barChart.png";
      link.click();
    }
  }
  return (
    <div style={{ position: "relative", width: "98vw", height: "35vh" }}>
      <p className=" text-center">Tenant 1</p>

      <canvas ref={chartRef} />
      {/* <button
        onClick={handleDownload}
        className="rounded-md bg-amber-600 bg-opacity-25 p-3 m-4 border border-amber-800"
      >
        Download Chart
      </button> */}
    </div>
  );
}
