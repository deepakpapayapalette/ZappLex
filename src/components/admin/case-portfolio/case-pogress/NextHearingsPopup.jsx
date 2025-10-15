import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import FormButton from '../../../common/FormButton';

export default function NextHearingsPopup({ onClose }) {
  const [currentMonth, setCurrentMonth] = useState(8); // September = 8
  const [currentYear, setCurrentYear] = useState(2025);
  const [selectedDates, setSelectedDates] = useState([16, 26]);
  const [comments, setComments] = useState('');

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];

    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  };

  const handleDateClick = (day) => {
    if (!day) return;

    if (selectedDates.includes(day)) {
      setSelectedDates(selectedDates.filter(d => d !== day));
    } else {
      setSelectedDates([...selectedDates, day]);
    }
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleYearChange = (e) => {
    setCurrentYear(parseInt(e.target.value));
  };

  const handleConfirm = () => {
    const formattedDates = selectedDates
      .sort((a, b) => a - b)
      .map(day => `${months[currentMonth]} ${day}, ${currentYear}`)
      .join(', ');

    alert(`Next hearing dates confirmed:\n${formattedDates}\n\nComments: ${comments || 'None'}`);
  };

  const calendarDays = generateCalendarDays();

  return (
    <div className="w-full max-w-5xl mx-auto p-8 bg-white rounded-lg">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl ">Next Hearings</h1>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition"
          onClick={() => onClose(false)}
        >
          <X size={24} />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calendar Section */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={handlePrevMonth}
              className="p-2 bg-gray-200 hover:bg-[#52677d] rounded-full transition"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold">{months[currentMonth]}</span>
              <select
                value={currentYear}
                onChange={handleYearChange}
                className=" px-1 me-2 py-1 border border-webprimary rounded-sm text-webprimary font-semibold cursor-pointer"
              >
                {[2023, 2024, 2025, 2026, 2027].map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            <button
              onClick={handleNextMonth}
              className="p-2 bg-gray-200 hover:bg-[#52677d] rounded-full transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Weekday Headers */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-2">
            {calendarDays.map((day, index) => (
              <button
                key={index}
                onClick={() => handleDateClick(day)}
                disabled={!day}
                className={`
                  aspect-square flex items-center justify-center rounded-full text-xs h-7
                  transition-all
                  ${!day ? 'invisible' : ''}
                  ${day && !selectedDates.includes(day)
                    ? 'text-webprimary shadow-card hover:bg-blue-50'
                    : ''}
                  ${selectedDates.includes(day)
                    ? 'bg-[#e11717] text-white  hover:bg-red-900'
                    : ''}
                `}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Comments Section */}
        <div className="flex flex-col">
          <div className="flex-1 mb-4">
            <label className="block text-lg font-semibold mb-3">Comments</label>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="Type Here..."
              className="w-full h-64 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-webprimary"
            />
          </div>

          <FormButton
            onClick={handleConfirm}
            className="px-4 py-2 "
          >
            Confirm Next Date
          </FormButton>
        </div>
      </div>
    </div>
  );
}
