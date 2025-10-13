import { Calendar, Filter, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function CaseDashboardOverview() {
  const [selectedFilter, setSelectedFilter] = useState('Choose');

  const stats = [
    {
      title: 'Total Cases',
      count: '150',
      bgColor: 'bg-webprimary',
      textColor: 'text-white'
    },
    {
      title: 'Pending Cases',
      count: '120',
      bgColor: 'bg-[#d4cd00]',
      textColor: 'text-white'
    },
    {
      title: 'Cases Past Statutory Timeline',
      count: '30',
      bgColor: 'bg-[#10bceb]',
      textColor: 'text-white'
    },
    {
      title: 'Adjournments in Last 30 Days',
      count: '50',
      bgColor: 'bg-green-600',
      textColor: 'text-white'
    }
  ];

  return (
    <div className="space-top">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Calendar className="w-8 h-8" />
          <span className="text-2xl font-bold">11-Oct-2025</span>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 font-semibold">
          <Filter className="w-5 h-5" />
          Use Filter
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.bgColor} ${stat.textColor} rounded-xl p-6 shadow-lg`}
          >
            <h3 className="text-lg  mb-3 ">
              {stat.title}
            </h3>
            <p className="text-4xl font-bold">{stat.count}</p>
          </div>
        ))}
      </div>

      {/* Speedy Trial Section */}
      <div className="bg-white rounded-xl border-2 border-gray-300 p-6">
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-xl font-bold">Speedy Trial Eligible Cases</h2>
          <div className="relative">
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="appearance-none border-2 border-gray-300 rounded-lg px-4 py-2 pr-10 bg-white cursor-pointer hover:border-gray-400 focus:outline-none focus:border-blue-500"
            >
              <option>Choose</option>
              <option>All Cases</option>
              <option>Criminal Cases</option>
              <option>Civil Cases</option>
              <option>Section 143</option>
            </select>
            <ChevronDown className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" />
          </div>
        </div>
        <p className="text-xl font-bold">
          40, Cheque bounce cases under Section 143, NI Act
        </p>
      </div>
    </div>
  );
}
