import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function IncompleteInvestigation() {
  const [selectedCase, setSelectedCase] = useState('Choose Case');

  const pieData = [
    { name: 'Completed', value: 70, color: '#16A34A' },
    { name: 'Ongoing', value: 20, color: '#CDDC39' },
    { name: 'Not Initiated', value: 10, color: '#DC2626' }
  ];

  const stats = [
    {
      label: 'Incomplete Investigation Cases',
      link: 'view all',
      color: null
    },
    {
      label: 'Not Initiated : 10%',
      link: 'view all',
      color: '#DC2626'
    },
    {
      label: 'Ongoing : 20%',
      link: 'view all',
      color: '#CDDC39'
    },
    {
      label: 'Completed : 70%',
      link: 'view all',
      color: '#16A34A'
    }
  ];

  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, name }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        className="font-bold text-base"
      >
        {name}
      </text>
    );
  };

  return (
    <div className="space-top">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl ">Incomplete Investigation Status</h1>
        <div className="relative">
          <select
            value={selectedCase}
            onChange={(e) => setSelectedCase(e.target.value)}
            className="appearance-none border-2 border-gray-300 rounded-lg px-6 py-3 pr-12 bg-white cursor-pointer hover:border-gray-400 focus:outline-none focus:border-blue-500 text-gray-600"
          >
            <option disabled>Choose Case</option>
            <option value="CR/138/2025/DEL/056">CR/138/2025/DEL/056</option>
            <option value="CR/136/2025/DEL/056">CR/136/2025/DEL/056</option>
            <option value="CR/138/2025/DEL/057">CR/138/2025/DEL/057</option>
            <option value="CR/138/2025/DEL/055">CR/138/2025/DEL/055</option>
            <option value="CR/138/2025/DEL/055">CR/138/2025/DEL/055</option>
          </select>
          <ChevronDown className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side - Info Cards */}
        <div className="lg:w-1/2 space-y-4">
          {/* Case Info Card */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <p className="text-gray-800 mb-3 leading-relaxed">
              No investigation ordered yet (private complaint under Section 138, NI Act), but potential for Section 202 inquiry if defense raises fraud claims
            </p>
            <p className="font-bold text-gray-900 mb-2">Case No. CR/138/2025/DEL/056</p>
            <a href="#" className="text-blue-600 hover:underline font-medium">
              view Case File
            </a>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-5 shadow-sm border border-gray-200"
              >
                <div className="flex items-start gap-3 mb-2">
                  {stat.color && (
                    <div
                      className="w-6 h-6 rounded-full flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: stat.color }}
                    ></div>
                  )}
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 mb-2">{stat.label}</p>
                    <a href="#" className="text-blue-600 hover:underline font-medium text-sm">
                      {stat.link}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Pie Chart */}
        <div className="lg:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-md">
            <ResponsiveContainer width="100%" height={500}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomLabel}
                  outerRadius={200}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
