import React from "react";
import Chart from "react-apexcharts";
import { useNavigate } from "react-router-dom";

const balanceSeries = [
  {
    data: [
      {
        x: "0.5 BTC",
        y: 33542.88,
        transactionId: "a8c4a726-b1fc-4f6c-a383-74f23e2a5188",
      },
      {
        x: "12 ETH",
        y: 42932.28,
        transactionId: "a8c4a726-b1fc-4f6c-a383-74f23e2a5188",
      },
      {
        x: "1.5 BTC",
        y: 100628.63,
        transactionId: "a8c4a726-b1fc-4f6c-a383-74f23e2a5188",
      },
      {
        x: "525'000 XRP",
        y: 325103.43,
        transactionId: "a8c4a726-b1fc-4f6c-a383-74f23e2a5188",
      },
      {
        x: "2000 LTC",
        y: -171616.73,
        transactionId: "a8c4a726-b1fc-4f6c-a383-74f23e2a5188",
      }
    ],
  }
];

const sortedData = balanceSeries[0].data.sort((a, b) => b.y - a.y);
const sortedBalanceSeries = [
  {
    data: sortedData,
  },
];

export default function TreeMap() {
  const navigate = useNavigate();

  const chartConfig = {
    type: "treemap",
    height: 600,
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        selection: {
          enabled: false,
        },
        animations: {
          enabled: false,
        },
        events: {
          dataPointSelection: function(event, chartContext, config) {
            const selectedData = balanceSeries[0].data[config.dataPointIndex];
            console.log(selectedData);
            navigate(`/tx/${selectedData.transactionId}`);
          },
        },
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: ["#121212"],
        width: 2,
        dashArray: 0,
      },
      tooltip: {
        theme: "dark",
        custom: function({ series, seriesIndex, dataPointIndex, w }) {
          const value = series[seriesIndex][dataPointIndex];
          const transactionId = w.config.series[seriesIndex].data[dataPointIndex].transactionId;
          return (
            '<div class="p-1 flex justify-center items-center">' +
            "$" + parseFloat(Math.abs(value)).toLocaleString('de-CH', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " usd" +
            '</div> <div class="p-1">' +
            "TX ID: " + transactionId +
            '</div>'
          );
        },
        style : {
          fontSize: '12px',
          fontFamily: 'inherit'
        },
        marker: {
          show: false,
        },
      },
      noData: {
        text: "Loading...",
        align: "center",
        verticalAlign: "middle",
      },
      plotOptions: {
        treemap: {
          distributed: false,
          colorScale: {
            ranges: [
              {
                from: -10000000000,
                to: 0,
                color: "#FF0000",
              },
              {
                from: 1,
                to: 10000000000,
                color: "#00FF00",
              }
            ]
          }
        },
      },
    },
  };
  return (
    <div className="w-full flex flex-col items-center mt-12">
      <h1 className="text-ethpays_white text-3xl font-bold">Ethpays Transactions Heat Map</h1>
      <div className="mt-12 w-[80%] col-span-full overflow-hidden flex justify-center items-center rounded-[10px] border border-[--ui-dark-border-color] bg-ethpays text-ethpays">
        <div style={{ width: '100%', height: '100%' }} className="md:ml-[25px]">
          <Chart {...chartConfig} series={sortedBalanceSeries} />
        </div>
      </div>
    </div>
  );
}