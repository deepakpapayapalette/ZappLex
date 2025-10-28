import React from 'react'
import { ChevronDown } from 'lucide-react';
const statusItems = [
  {
    title: 'On track',
    description: '(<3 months pending).',
    color: '#16A34A',
    bgColor: '#F0F9FF'
  },
  {
    title: 'Approaching deadline',
    description: '(3-6 months)',
    color: '#CDDC39',
    bgColor: '#FEFCE8'
  },
  {
    title: 'Exceeded timeline',
    description: '(>6 months)',
    color: '#DC2626',
    bgColor: '#FEF2F2'
  }
];

const SpeedyTrialOverview = () => {
  const [selectedCase, setSelectedCase] = React.useState('Choose Case');
  return (
    <>
      <div className='space-top'>
        <div className="flex items-center justify-between mb-6  ">
          <h1 className="text-3xl font-semibold">Irrelevant Evidence Tracker</h1>
          <div className="relative" style={{ minWidth: '320px' }}>
            <select
              value={selectedCase}
              onChange={(e) => setSelectedCase(e.target.value)}
              className="w-full appearance-none border-2 border-gray-300 rounded-lg px-6 py-3 pr-12 bg-white cursor-pointer hover:border-gray-400 focus:outline-none focus:border-blue-500 text-gray-600"
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
        <div className=''>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {statusItems.map((item, index) => (
              <div
                key={index}
                className="rounded-lg px-4 py-4 shadow-sm border border-gray-200"
              // style={{ backgroundColor: item.bgColor }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-12 h-12 rounded-full flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </div>
                </div>
                <a href="#" className="text-blue-600 hover:underline font-medium text-sm">
                  view all
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  )
}

export default SpeedyTrialOverview
