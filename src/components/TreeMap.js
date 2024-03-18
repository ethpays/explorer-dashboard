import React, {useState, useEffect, useRef} from "react";
import Chart from "react-apexcharts";
import { useNavigate } from "react-router-dom";

export default function TreeMap() {
  const [data, setData] = useState([]);
  const dataRef = useRef(data);
  const navigate = useNavigate();

  console.log(data) //data: [{…}] (contains actual data from the backend)

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
            const selectedData = dataRef.current[config.seriesIndex].data[config.dataPointIndex];
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
            "$" + parseFloat(Math.abs(value)).toLocaleString('de-CH', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " usdt" +
            '</div> <div class="p-1 -mt-2 flex justify-center items-center">' +
            "TX: " + transactionId +
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

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(process.env.REACT_APP_ETHPAYS_BACKEND_FU + "transaction/ethpays/top100");
      const data = await response.json();

      const sortedData = data.sort((a, b) => b.y - a.y);
      const sortedBalanceSeries = [
        {
          data: sortedData,
        },
      ];

      setData(sortedBalanceSeries);
      dataRef.current = sortedBalanceSeries; // Update the mutable reference after setting state
    }
    fetchData();
  }, []);

  return (
    <div className="w-full flex flex-col items-center mt-12">
      <h1 className="text-ethpays_white text-3xl font-bold">Ethpays Transactions Heat Map</h1>
      <div className="mt-12 w-[80%] col-span-full overflow-hidden flex justify-center items-center rounded-[10px] border border-[--ui-dark-border-color] bg-ethpays text-ethpays">
        <div style={{ width: '100%', height: '100%' }} className="md:ml-[25px]">
          <Chart {...chartConfig} series={data} />
        </div>
      </div>
    </div>
  );
}