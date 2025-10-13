import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

// Example case data structure
const cases = [
  {
    id: "CR/138/2025/DEL/056",
    title: "Rajesh Sharma v. Anil Kumar",
    note: "No investigation ordered yet (private complaint under Section 138, NI Act), but potential for Section 202 inquiry if defense raises fraud claims",
    status: [
      { name: "Completed", value: 70, color: "#388e3c" },
      { name: "Ongoing", value: 20, color: "#fbc02d" },
      { name: "Not Initiated", value: 10, color: "#d32f2f" }
    ],
  }
  // Add more cases if necessary
];

export default function InvestigationStatusDashboard() {
  const [selectedCase, setSelectedCase] = useState(cases[0]);

  return (
    <div className="space-top ">
      <h1 className="text-3xl font-semibold mb-6">Incomplete Investigation Status</h1>
      <div className="bg-white rounded-xl p-6 shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="mb-4">
            <select
              className="border border-gray-300 rounded px-4 py-2 focus:ring w-full"
              value={selectedCase.id}
              onChange={(e) =>
                setSelectedCase(
                  cases.find((c) => c.id === e.target.value) || cases[0]
                )
              }
            >
              {cases.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.id}
                </option>
              ))}
            </select>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow mb-4">
            <p className="mb-2 text-gray-700">
              {selectedCase.note}
              <br />
              <span className="font-bold">Case No. {selectedCase.id}</span>
            </p>
            <a href="#" className="text-blue-600 underline text-sm font-medium">
              view Case File
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border shadow">
              <span className="font-semibold block mb-2">
                Incomplete Investigation Cases
              </span>
              <a href="#" className="text-blue-600 underline text-sm">
                view all
              </a>
            </div>
            <div className="bg-white rounded-lg p-4 border shadow flex items-center">
              <span className="w-3 h-3 rounded-full bg-red-600 mr-2 inline-block"></span>
              <span className="font-semibold">Not Initiated :</span>
              <span className="ml-2">
                {
                  selectedCase.status.find((s) => s.name === "Not Initiated")
                    .value
                }
                %
              </span>
              <a href="#" className="ml-auto text-blue-600 underline text-sm">
                view all
              </a>
            </div>
            <div className="bg-white rounded-lg p-4 border shadow flex items-center">
              <span className="w-3 h-3 rounded-full bg-yellow-400 mr-2 inline-block"></span>
              <span className="font-semibold">Ongoing :</span>
              <span className="ml-2">
                {selectedCase.status.find((s) => s.name === "Ongoing").value}%
              </span>
              <a href="#" className="ml-auto text-blue-600 underline text-sm">
                view all
              </a>
            </div>
            <div className="bg-white rounded-lg p-4 border shadow flex items-center">
              <span className="w-3 h-3 rounded-full bg-green-700 mr-2 inline-block"></span>
              <span className="font-semibold">Completed :</span>
              <span className="ml-2">
                {selectedCase.status.find((s) => s.name === "Completed").value}%
              </span>
              <a href="#" className="ml-auto text-blue-600 underline text-sm">
                view all
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <ResponsiveContainer width={300} height={300}>
            <PieChart>
              <Pie
                data={selectedCase.status}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={110}
                label={({ name }) => name}
                labelLine={false}
              >
                {selectedCase.status.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
