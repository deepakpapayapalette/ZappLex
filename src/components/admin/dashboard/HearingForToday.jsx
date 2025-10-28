import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample hearing data
const hearingData = {
  '2025-10-11': [
    'CR/138/2025/DEL/052',
    'CR/137/2025/DEL/054',
    'CR/135/2025/DEL/055',
    'CR/136/2025/DEL/053'
  ],
  '2025-10-10': [
    'CR/139/2025/DEL/051',
    'CR/134/2025/DEL/052',
    'CR/137/2025/DEL/053'
  ],
  '2025-10-09': [
    'CR/133/2025/DEL/051',
    'CR/135/2025/DEL/050',
    'CR/138/2025/DEL/050'
  ],
  '2025-10-08': [
    'CR/134/2025/DEL/049',
    'CR/136/2025/DEL/048',
    'CR/138/2025/DEL/049'
  ],
  '2025-10-07': [
    'CR/132/2025/DEL/047',
    'CR/133/2025/DEL/048',
    'CR/134/2025/DEL/046'
  ],
  '2025-10-06': [
    'CR/131/2025/DEL/045',
    'CR/135/2025/DEL/045',
    'CR/136/2025/DEL/044'
  ],
  '2025-10-05': [
    'CR/130/2025/DEL/043',
    'CR/132/2025/DEL/042',
    'CR/134/2025/DEL/043'
  ],
  '2025-10-04': [
    'CR/129/2025/DEL/041',
    'CR/130/2025/DEL/040',
    'CR/132/2025/DEL/041'
  ],
  '2025-10-03': [
    'CR/128/2025/DEL/038',
    'CR/129/2025/DEL/039',
    'CR/130/2025/DEL/038'
  ],
  '2025-10-02': [
    'CR/127/2025/DEL/037',
    'CR/128/2025/DEL/036',
    'CR/129/2025/DEL/037'
  ],
  '2025-10-01': [
    'CR/126/2025/DEL/035',
    'CR/127/2025/DEL/034',
    'CR/128/2025/DEL/035'
  ],
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
  '2025-10-14': [
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
  '2025-10-16': [
    'CR/142/2025/DEL/061',
    'CR/143/2025/DEL/062'
  ],
  '2025-10-17': [
    'CR/142/2025/DEL/061',
    'CR/143/2025/DEL/062',
    'CR/145/2025/DEL/064',
    'CR/146/2025/DEL/065',
    'CR/147/2025/DEL/066'
  ],
  '2025-10-18': [
    'CR/142/2025/DEL/061',
    'CR/143/2025/DEL/062',
    'CR/145/2025/DEL/064',
    'CR/146/2025/DEL/065',
    'CR/147/2025/DEL/066',
    'CR/145/2025/DEL/064',
    'CR/146/2025/DEL/065',
    'CR/147/2025/DEL/066'
  ],
  '2025-10-19': [
    'CR/142/2025/DEL/061',
    'CR/143/2025/DEL/062',
    'CR/145/2025/DEL/064',
    'CR/146/2025/DEL/065',
    'CR/147/2025/DEL/066',
    'CR/145/2025/DEL/064',
    'CR/146/2025/DEL/065',
    'CR/147/2025/DEL/066'
  ],
  '2025-10-20': [
    'CR/144/2025/DEL/063',
    'CR/145/2025/DEL/064',
    'CR/146/2025/DEL/065',
    'CR/147/2025/DEL/066'
  ],
  '2025-10-21': [
    'CR/144/2025/DEL/063',
    'CR/145/2025/DEL/064',
    'CR/146/2025/DEL/065',
    'CR/147/2025/DEL/066'
  ],
  '2025-10-22': [
    'CR/144/2025/DEL/063',
    'CR/145/2025/DEL/064',
    'CR/146/2025/DEL/065',
    'CR/147/2025/DEL/066',
    'CR/145/2025/DEL/064',
    'CR/146/2025/DEL/065',
    'CR/147/2025/DEL/066'
  ],
  '2025-10-23': [
    'CR/144/2025/DEL/063',
    'CR/145/2025/DEL/064',
    'CR/146/2025/DEL/065',
    'CR/147/2025/DEL/066',
    'CR/145/2025/DEL/064',
    'CR/146/2025/DEL/065',
    'CR/147/2025/DEL/066'
  ],
  '2025-10-24': [
    'CR/144/2025/DEL/063',
    'CR/145/2025/DEL/064',

    'CR/146/2025/DEL/065',
    'CR/147/2025/DEL/066'
  ],
  '2025-10-25': [
    'CR/144/2025/DEL/063',
    'CR/145/2025/DEL/064',
    'CR/146/2025/DEL/065',
    'CR/147/2025/DEL/066',
    'CR/145/2025/DEL/064',
    'CR/146/2025/DEL/065',
    'CR/147/2025/DEL/066'
  ],
  '2025-10-27': [
    'CR/144/2025/DEL/063',
    'CR/145/2025/DEL/064',
    'CR/146/2025/DEL/065',
    'CR/147/2025/DEL/066',
    'CR/145/2025/DEL/064',
    'CR/146/2025/DEL/065',
    'CR/147/2025/DEL/060'
  ],
  '2025-10-28': [
    'CR/144/2025/DEL/063',
    'CR/145/2025/DEL/064',
    'CR/146/2025/DEL/065',
    'CR/147/2025/DEL/066',
    'CR/145/2025/DEL/064',
    'CR/146/2025/DEL/065',
    'CR/147/2025/DEL/060'
  ],
  '2025-10-29': [
    'CR/144/2025/DEL/063',
    'CR/145/2025/DEL/064',
    'CR/146/2025/DEL/065',
    'CR/147/2025/DEL/066',
    'CR/145/2025/DEL/064',
    'CR/145/2025/DEL/064',
    'CR/146/2025/DEL/065',
    'CR/147/2025/DEL/066',
    'CR/147/2025/DEL/060'
  ],
  '2025-10-30': [
    'CR/144/2025/DEL/063',
    'CR/145/2025/DEL/064',
    'CR/146/2025/DEL/065',
    'CR/147/2025/DEL/066',
    'CR/145/2025/DEL/064',
    'CR/145/2025/DEL/064',
    'CR/146/2025/DEL/065',

  ],
  '2025-10-31': [
    'CR/144/2025/DEL/063',
    'CR/145/2025/DEL/064',
    'CR/146/2025/DEL/065',
    'CR/147/2025/DEL/066',
    'CR/145/2025/DEL/064',
    'CR/145/2025/DEL/064',
    'CR/146/2025/DEL/065',
    'CR/145/2025/DEL/064',
    'CR/146/2025/DEL/065',
    'CR/147/2025/DEL/066'
  ],



};

const HearingForToday = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState(
    `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
  );

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Navigate month
  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentMonth + direction);
    setCurrentDate(newDate);
  };

  // Check if hearing data exists
  const hasHearing = (day) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return hearingData[dateStr] && hearingData[dateStr].length > 0;
  };

  const isToday = (day) => {
    const today = new Date();
    return currentYear === today.getFullYear() &&
      currentMonth === today.getMonth() &&
      day === today.getDate();
  };

  // Handle date click
  const selectDate = (day) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    setSelectedDate(dateStr);
  };

  const formatSelectedDate = (dateStr) => {
    const [year, month, day] = dateStr.split('-');
    const date = new Date(year, month - 1, day);
    return `${day}-${monthNames[date.getMonth()]}-${year}`;
  };

  // Generate all days for calendar
  const generateCalendarDays = () => {
    const days = [];

    // Empty spaces before first day
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="w-8 h-8"></div>);
    }

    // Generate each day cell
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const isSelected = selectedDate === dateStr;
      const todayClass = isToday(day) ? 'bg-blue-500 text-white' : '';
      const hearingClass = hasHearing(day) ? 'text-blue-600 font-semibold border border-blue-300' : '';
      const selectedClass = isSelected ? 'bg-blue-600 text-white' : '';

      days.push(
        <div
          key={day}
          onClick={() => selectDate(day)}
          className={`w-8 h-8 flex items-center justify-center text-sm rounded-full cursor-pointer transition-all
            ${todayClass} ${hearingClass} ${selectedClass} hover:bg-blue-100`}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  // Get hearing data for selected date (or empty)
  const currentHearingData = hearingData[selectedDate] || [];

  return (
    <div className="p-6 rounded-lg pt-10">
      <h2 className="text-3xl mb-6">Hearing For Today</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calendar Section */}
        <div className="p-3 border-gray-300 border bg-white rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => navigateMonth(-1)} className="p-2 hover:bg-gray-100 rounded-full">
              <ChevronLeft size={20} />
            </button>
            <h3 className="text-lg font-semibold">{monthNames[currentMonth]} {currentYear}</h3>
            <button onClick={() => navigateMonth(1)} className="p-2 hover:bg-gray-100 rounded-full">
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Weekday headers */}
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

        {/* Hearing Data Section */}
        <div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Hearing Dates</h3>
            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <Calendar size={18} />
              <span>{formatSelectedDate(selectedDate)}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentHearingData.length > 0 ? (
              currentHearingData.map((caseRef, index) => (
                <div key={index}>
                  <Link
                    to="case-portfolio/case-progress/"
                    // href={`#/case/${caseRef}`}
                    className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium block py-1"
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   console.log(`Navigating to case: ${caseRef}`);
                  // }}
                  >
                    {caseRef}
                  </Link>
                </div>
              ))
            ) : (
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
