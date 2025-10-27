import React, { useState } from 'react'
import { Calendar, Filter, ChevronDown, X } from 'lucide-react';
const SpeedTrail = () => {
  const [filterPopupOpen, setFilterPopupOpen] = useState(false);
  const [filters, setFilters] = useState({
    caseType: [],
    caseStatus: [],
    priority: [],
    pendingSince: '08-Oct-2025',
    hearingDate: '08-Oct-2025'
  });
  const [selectedFilter, setSelectedFilter] = useState('Choose');
  return (
    <>
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
              <option value="CR/138/2025/DEL/056">CR/138/2025/DEL/056</option>
              <option value="CR/136/2025/DEL/056">CR/136/2025/DEL/056</option>
              <option value="CR/138/2025/DEL/057">CR/138/2025/DEL/057</option>
              <option value="CR/138/2025/DEL/055">CR/138/2025/DEL/055</option>
              <option value="CR/138/2025/DEL/055">CR/138/2025/DEL/055</option>
            </select>
            <ChevronDown className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" />
          </div>
        </div>
        <p className="text-xl font-bold">
          40, Cheque bounce cases under Section 143, NI Act
        </p>
      </div>

    </>
  )
}

export default SpeedTrail

