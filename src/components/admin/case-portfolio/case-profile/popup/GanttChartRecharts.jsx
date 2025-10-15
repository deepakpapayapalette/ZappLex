import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import { X } from 'lucide-react';

const GanttChartRecharts = ({ onClose }) => {
  // Define the date range (Oct 10 - Oct 15)
  const startDate = new Date('2024-10-10');
  const dates = ['Oct 10', 'Oct 11', 'Oct 12', 'Oct 13', 'Oct 14', 'Oct 15', 'Oct 16'];

  // Task data with start day (0-based) and duration in days
  const tasks = [
    { name: 'Task1: Cheque', start: 0, duration: 6, color: '#078428' },
    { name: 'Task2: Return Memo', start: 0, duration: 5, color: '#16a34a' },
    { name: 'Task3: Demand Notice', start: 2, duration: 4, color: '#15803d' },
    { name: 'Task4: Invoices', start: 3, duration: 3, color: '#16a34a' },
    { name: 'Task5: Bank Statement', start: 4, duration: 2, color: '#15803d' },
    { name: 'Task 7: Complainant Aff', start: 5, duration: 1, color: '#16a34a' },
    { name: 'Task 8: Witness Aff.', start: 6, duration: 0.5, color: '#15803d' },
    { name: 'Task 9: Bank Official', start: -1, duration: 0, color: '#e5e7eb' }
  ];

  // Transform data for Recharts
  const chartData = tasks.map(task => ({
    name: task.name,
    start: task.start,
    duration: task.duration,
    color: task.color
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const startDay = Math.floor(data.start);
      const endDay = Math.floor(data.start + data.duration);
      return (
        <div className="bg-white p-3 border border-gray-300 rounded shadow-lg">
          <p className="font-semibold">{data.name}</p>
          <p className="text-sm">Start: {dates[startDay] || 'N/A'}</p>
          <p className="text-sm">End: {dates[endDay] || 'N/A'}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-screen ">
      <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl lg:text-3xl font-semibold md:pe-10">Gantt Chart for Evidence Plan in Cheque Bounce Case</h2>
          <button onClick={() => onClose(false)}>
            <X size={22} className="text-gray-600 hover:text-gray-800" />
          </button>
        </div>

        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={chartData}
              margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={true} />
              <XAxis
                type="number"
                domain={[0, 7]}
                ticks={[0, 1, 2, 3, 4, 5, 6]}
                tickFormatter={(value) => dates[value] || ''}
                orientation="top"
              />
              <YAxis
                type="category"
                dataKey="name"
                width={180}
                tick={{ fontSize: 14 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="duration" stackId="a">
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
              <Bar dataKey="start" stackId="a" fill="transparent" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 flex gap-4 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span className="text-sm">In Progress</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-700 rounded"></div>
            <span className="text-sm">Completed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GanttChartRecharts;
