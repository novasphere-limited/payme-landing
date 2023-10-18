import { useState, useEffect } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function BarComponent() {
  const data = [
    {
      name: "Monday",
      uv: 4000,
      //   pv: 2400,
      //   amt: 2400,
    },
    {
      name: "Tuesday",
      uv: 3000,
      //   pv: 1398,
      //   amt: 2210,
    },
    {
      name: "Wednesday",
      uv: 2000,
      //   pv: 9800,
      //   amt: 2290,
    },
    {
      name: "Thursday",
      uv: 2780,
      //   pv: 3908,
      //   amt: 2000,
    },
    {
      name: "Friday",
      uv: 1890,
      //   pv: 4800,
      //   amt: 2181,
    },
    {
      name: "Saturday",
      uv: 2390,
      //   pv: 3800,
      //   amt: 2500,
    },
    {
      name: "Sunday",
      uv: 3490,
      //   pv: 4300,
      //   amt: 2100,
    },
  ];

  return (
    <div className="rounded-md shadow-lg p-3 w-full">
      <h6 className="label-3_bold mb-3">Revenue</h6>
      <p className="text-4_bold grnSec mb-5">Today</p>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart barGap={0} barSize={20} data={data}>
          <CartesianGrid
            strokeDasharray="0"
            horizontal={false}
            vertical={false}
          />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          {/* <Bar dataKey="pv" fill="#8884d8" /> */}
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
