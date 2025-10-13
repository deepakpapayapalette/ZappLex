import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

// Sample hearing data
const hearingData = {
  '2025-10-12': [
    'CR/138/2025/DEL/056',
    'CR/136/2025/DEL/056',
    'CR/138/2025/DEL/057',
    'CR/138/2025/DEL/055',
    'CR/138/2025/DEL/055'
  ],
  '2025-10-13': [
    'CR/138/2025/DEL/056',
    'CR/136/2025/DEL/056',
    'CR/138/2025/DEL/057',
    'CR/138/2025/DEL/055',
    'CR/138/2025/DEL/055'
  ],
  '2025-10-26': [
    'CR/139/2025/DEL/058',
    'CR/140/2025/DEL/059',
    'CR/141/2025/DEL/060'
  ],
  '2025-10-15': [
    'CR/142/2025/DEL/061',
    'CR/143/2025/DEL/062'
  ],
  '2025-10-20': [
    'CR/144/2025/DEL/063',
    'CR/145/2025/DEL/064',
    'CR/146/2025/DEL/065',
    'CR/147/2025/DEL/066'
  ]
};

const HearingForToday = () => {
  // Get actual current date
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1)); // First day of current month
  const [selectedDate, setSelectedDate] = useState(`${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`);

  // Get current month and year
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Month names
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Day names
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Get first day of month and number of days
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Navigate months
  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentMonth + direction);
    setCurrentDate(newDate);
  };

  // Check if date has hearing
  const hasHearing = (day) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return hearingData[dateStr] && hearingData[dateStr].length > 0;
  };

  // Check if date is today
  const isToday = (day) => {
    const today = new Date();
    return currentYear === today.getFullYear() &&
      currentMonth === today.getMonth() &&
      day === today.getDate();
  };

  // Check if date is special hearing date (26th Oct 2025)
  const isSpecialHearing = (day) => {
    return currentYear === 2025 && currentMonth === 9 && day === 26;
  };

  // Handle date selection
  const selectDate = (day) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    if (hasHearing(day)) {
      setSelectedDate(dateStr);
    }
  };

  // Format selected date for display
  const formatSelectedDate = (dateStr) => {
    const [year, month, day] = dateStr.split('-');
    const date = new Date(year, month - 1, day);
    return `${day}-${monthNames[date.getMonth()]}-${year}`;
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const days = [];

    // Empty cells for days before first day of month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="w-8 h-8"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isClickable = hasHearing(day);
      const todayClass = isToday(day) ? 'bg-blue-500 text-white' : '';
      const specialClass = isSpecialHearing(day) ? 'bg-red-500 text-white' : '';
      const clickableClass = isClickable && !isToday(day) && !isSpecialHearing(day) ? 'hover:bg-blue-100 cursor-pointer text-blue-600' : '';

      days.push(
        <div
          key={day}
          onClick={() => selectDate(day)}
          className={`w-8 h-8 flex items-center justify-center text-sm rounded-full ${todayClass || specialClass || clickableClass || 'text-gray-600'
            } ${isClickable ? 'cursor-pointer' : ''}`}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className=" p-6 rounded-lg space-top">
      <h2 className="text-3xl  mb-6">Hearing For Today</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calendar Section */}
        <div className="p-3 border-gray-300 border bg-white rounded-lg">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-4 ">
            <button
              onClick={() => navigateMonth(-1)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ChevronLeft size={20} />
            </button>
            <h3 className="text-lg font-semibold">{monthNames[currentMonth]} {currentYear}</h3>
            <button
              onClick={() => navigateMonth(1)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="">
            {/* Day headers */}
            <div className="grid grid-cols-7 gap-2 mb-2">
              {dayNames.map(day => (
                <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar days */}
            <div className="grid grid-cols-7 gap-2">
              {generateCalendarDays()}
            </div>
          </div>
        </div>

        {/* Hearing Dates Section */}
        <div className="">
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Hearing Dates</h3>
            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <Calendar size={18} />
              <span>{formatSelectedDate(selectedDate)}</span>
            </div>
          </div>

          {/* Case References Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {hearingData[selectedDate] && hearingData[selectedDate].map((caseRef, index) => (
              <div key={index} className="">
                <a
                  href={`#/case/${caseRef}`}
                  className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium block py-1"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(`Navigating to case: ${caseRef}`);
                    // Add navigation logic here
                  }}
                >
                  {caseRef}
                </a>
              </div>
            ))}

            {(!hearingData[selectedDate] || hearingData[selectedDate].length === 0) && (
              <div className="col-span-2 text-gray-500 text-center py-4">
                No hearings scheduled for this date.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HearingForToday;

