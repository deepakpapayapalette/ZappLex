import React, { useState } from 'react';
import { X, Calendar } from 'lucide-react';

export default function AdjournmentPopup({ onClose }) {
  const [selectedReason, setSelectedReason] = useState('');
  const [todayDate, setTodayDate] = useState('08-Oct-2025');
  const [comments, setComments] = useState('');

  const reasons = [
    'Absence of Parties or Counsel',
    'Incomplete Preparation',
    'Pending Motions or Applications',
    'Court Scheduling Conflicts',
    'Witness Unavailability',
    'Settlement Negotiations',
    'Procedural or Legal Issues',
    'Illness or Emergency',
    'Discovery Delays',
    'Technical Issues',
    'Change in Representation',
    'Statutory or Mandatory Waiting Periods',
    'Jury Issues',
    'Complex Case Requirements',
    'Request for Continuance',
    'Judicial Discretion',
    'External Factors including Strike'
  ];

  const handleReasonClick = (reason) => {
    setSelectedReason(reason);
  };

  const handleConfirm = () => {
    if (!selectedReason) {
      alert('Please select a reason for adjournment');
      return;
    }

    alert(`Adjournment Confirmed\n\nDate: ${todayDate}\nReason: ${selectedReason}\nComments: ${comments || 'None'}`);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-8 bg-white rounded-lg">
      {/* Header */}
      <div className=" mb-8">
        <div className='flex justify-between mb-3'>
          <h1 className="text-3xl">Adjournment</h1>

          <button className="p-2 hover:bg-gray-100 rounded-lg transition"
            onClick={() => onClose(false)}
          >
            <X size={24} />
          </button>
        </div>


        <div className="flex flex-col sm:flex-row  sm:items-center justify-end gap-3" >
          <div className="text-md ">Today Date</div>
          <div className="relative">
            <input
              type="text"
              value={todayDate}
              onChange={(e) => setTodayDate(e.target.value)}
              className="px-1 py-2 border-2 border-gray-300 rounded-lg pr-10 text-md "
            />
            <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </div>

      {/* Reason Selection */}
      <div className="mb-8">
        <h2 className="text-lg mb-4">Select Reason for Adjournment</h2>
        <div className="flex flex-wrap gap-3">
          {reasons.map((reason) => (
            <button
              key={reason}
              onClick={() => handleReasonClick(reason)}
              className={`
                px-3 py-2 rounded-lg border transition-all text-md
                ${selectedReason === reason
                  ? 'bg-webprimary text-white border-primary'
                  : 'bg-white text-webprimary border-webprimary hover:bg-blue-50'
                }
              `}
            >
              {reason}
            </button>
          ))}
        </div>
      </div>

      {/* Comments Section */}
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-3">Comments</label>
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          placeholder="Type Here..."
          className="w-full h-48 p-4 border-2 border-gray-300 rounded-lg resize-none "
        />
      </div>

      {/* Confirm Button */}
      <div className="flex justify-end">
        <button
          onClick={handleConfirm}
          className="bg-webprimary text-white font-semibold py-3 px-12 rounded-lg hover:bg-webprimary transition text-lg"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
