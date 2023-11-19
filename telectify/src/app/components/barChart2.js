"use client";
import { useRef, useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import { FaInfoCircle } from "react-icons/fa";

export default function BarChart2() {
  const chartRef = useRef(null);
  const [info, setInfo] = useState(false);
  const [sum, setSum] = useState(0);

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

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      //   const label = mainData.map((items) => items.field7 );
      const data = mainData.map((items) => items.field8 / 1000);

      let arraySum = data.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);

      setSum(arraySum);
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
              barPercentage: 0.2,
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
              display: false,
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
      {info && (
        <div className="bar-info p-4">
          This is the energy consumed starting from the most recent reset or
          credit purchase
        </div>
      )}
      <p className=" text-center flex items-center ml-6">
        Tenant 2: {sum}kwh
        <FaInfoCircle
          className="ml-2"
          onClick={() => setInfo((prev) => !prev)}
        />
      </p>

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
