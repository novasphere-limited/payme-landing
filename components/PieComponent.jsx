import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function PieComponent() {
  return (
    <div className="rounded-md shadow-lg p-3 w-full">
      <p className="label-3_bold text-center mb-10">
        Customer&rsquo;s activity
      </p>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={120}
            outerRadius={180}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      {/* <Legend
        iconSize={8}
        iconType="square"
        layout="horizontal"
        align="center"
        verticalAlign="bottom"
        payload={data.map((entry, index) => ({
          value: entry.name,
          type: "circle",
          color: COLORS[index % COLORS.length],
        }))}
      /> */}
    </div>
  );
}
