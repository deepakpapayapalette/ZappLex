import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LabelList,
} from "recharts";

const data = [
  { name: "Absence of Parties or Counsel", value: 45 },
  { name: "Incomplete Preparation", value: 32 },
  { name: "Pending Motions or Applications", value: 28 },
  { name: "Court Scheduling Conflicts", value: 36 },
  { name: "Witness Unavailability", value: 22 },
  { name: "Settlement Negotiations", value: 41 },
  { name: "Procedural or Legal Issues", value: 19 },
  { name: "Illness or Emergency", value: 25 },
  { name: "Discovery Delays", value: 30 },
];

const CaseDelayBarChart = () => {
  return (
    <div className="w-full h-[400px] p-4 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Case Delay
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 80 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            angle={-20}
            textAnchor="end"
            interval={0}
            height={100}
            tick={{ fontSize: 12 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#3b82f6" barSize={60} radius={[3, 3, 0, 0]} >
            <LabelList dataKey="value" position="top" className="text-xs" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CaseDelayBarChart;
