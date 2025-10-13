import { Calendar, Filter, ChevronDown, X } from 'lucide-react';
import { useState } from 'react';

export default function CaseDashboardOverview() {
  const [selectedFilter, setSelectedFilter] = useState('Choose');
  
  // Filter popup state
  const [filterPopupOpen, setFilterPopupOpen] = useState(false);
  const [filters, setFilters] = useState({
    caseType: [],
    caseStatus: [],
    priority: [],
    pendingSince: '08-Oct-2025',
    hearingDate: '08-Oct-2025'
  });

  // Filter logic functions
  const toggleFilter = (category, value) => {
    setFilters(prev => {
      const currentValues = prev[category];
      const isSelected = currentValues.includes(value);
      
      return {
        ...prev,
        [category]: isSelected 
          ? currentValues.filter(item => item !== value)
          : [...currentValues, value]
      };
    });
  };
  
  const updateDateFilter = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const resetFilters = () => {
    setFilters({
      caseType: [],
      caseStatus: [],
      priority: [],
      pendingSince: '08-Oct-2025',
      hearingDate: '08-Oct-2025'
    });
  };
  
  const applyFilters = () => {
    // Apply filter logic here
    console.log('Applying filters:', filters);
    setFilterPopupOpen(false);
  };
  
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
        <button 
          onClick={() => setFilterPopupOpen(true)}
          className="bg-webprimary text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-webprimary font-semibold"
        >
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
      
      {/* Filter Popup Overlay */}
      {filterPopupOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setFilterPopupOpen(false)}
        >
          <div 
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ease-in-out overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              {/* Popup Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Use Filter</h2>
                <button 
                  onClick={() => setFilterPopupOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* Case Type Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Case Type</h3>
                <div className="flex flex-wrap gap-3">
                  {['Criminal', 'Civil'].map((type) => (
                    <button
                      key={type}
                      onClick={() => toggleFilter('caseType', type)}
                      className={`px-4 py-2 rounded-lg border-2 font-medium transition-colors ${
                        filters.caseType.includes(type)
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'bg-white text-blue-500 border-blue-500 hover:bg-blue-50'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            
              {/* Case Status Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Case Status</h3>
                <div className="flex flex-wrap gap-3">
                  {['Pre-Trial, Evidence', 'Arguments', 'Judgment'].map((status) => (
                    <button
                      key={status}
                      onClick={() => toggleFilter('caseStatus', status)}
                      className={`px-4 py-2 rounded-lg border-2 font-medium transition-colors ${
                        filters.caseStatus.includes(status)
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'bg-white text-blue-500 border-blue-500 hover:bg-blue-50'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            
              {/* Priority Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Priority</h3>
                <div className="flex flex-wrap gap-3">
                  {['High', 'Medium', 'Low'].map((priority) => (
                    <button
                      key={priority}
                      onClick={() => toggleFilter('priority', priority)}
                      className={`px-4 py-2 rounded-lg border-2 font-medium transition-colors ${
                        filters.priority.includes(priority)
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'bg-white text-blue-500 border-blue-500 hover:bg-blue-50'
                      }`}
                    >
                      {priority}
                    </button>
                  ))}
                </div>
              </div>
            
              {/* Date Range Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Date Range</h3>
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                  {/* Pending Since */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pending Since
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={(() => {
                          const [day, month, year] = filters.pendingSince.split('-');
                          return `${year}-${month}-${day}`;
                        })()}
                        onChange={(e) => {
                          const [year, month, day] = e.target.value.split('-');
                          updateDateFilter('pendingSince', `${day}-${month}-${year}`);
                        }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  
                  {/* Hearing Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hearing Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={(() => {
                          const [day, month, year] = filters.hearingDate.split('-');
                          return `${year}-${month}-${day}`;
                        })()}
                        onChange={(e) => {
                          const [year, month, day] = e.target.value.split('-');
                          updateDateFilter('hearingDate', `${day}-${month}-${year}`);
                        }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            
              {/* Action Buttons */}
              <div className="flex gap-3 justify-end">
                <button
                  onClick={resetFilters}
                  className="px-6 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
                >
                  Reset
                </button>
                <button
                  onClick={applyFilters}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
