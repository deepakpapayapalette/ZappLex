import React, { useState } from 'react';
import { Eye, Upload, Trash2, X, CheckCircle, XCircle, Calendar, Clock, MapPin } from 'lucide-react';

export default function EvidenceLog({ onClose }) {
  const [entries, setEntries] = useState([
    {
      id: 1,
      name: "Ravi Rai",
      phone: "+91 5996565151",
      verified: true,
      date: "30/12/2025",
      time: "02:20 PM",
      location: "H-Block, Sector-63, Noida, Uttar Pradesh, 201301"
    },
    {
      id: 2,
      name: "Ravi Rai",
      phone: "+91 5996565151",
      verified: false,
      date: "30/12/2025",
      time: "02:20 PM",
      location: "H-Block, Sector-63, Noida, Uttar Pradesh, 201301"
    },
    {
      id: 3,
      name: "Ravi Rai",
      phone: "+91 5996565151",
      verified: true,
      date: "30/12/2025",
      time: "02:20 PM",
      location: "H-Block, Sector-63, Noida, Uttar Pradesh, 201301"
    },
    {
      id: 4,
      name: "Ravi Rai",
      phone: "+91 5996565151",
      verified: false,
      date: "30/12/2025",
      time: "02:20 PM",
      location: "H-Block, Sector-63, Noida, Uttar Pradesh, 201301"
    }
  ]);



  const handleDelete = (id) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };



  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-900">Evidence Accessed Log</h1>
          <button
            onClick={() => onClose(false)}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {entries.map((entry, index) => (
            <div
              key={entry.id}
              className={`p-5 rounded-lg border-2 ${entry.verified
                ? 'border-gray-200 bg-white'
                : 'border-red-400 bg-white'
                } hover:shadow-md transition-shadow`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  {/* Header with number and name */}
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl font-semibold text-gray-800">{index + 1}.</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{entry.name}</h3>

                      {/* OTP Status */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm text-gray-700">
                          OTP {entry.verified ? 'Verified' : 'Not Verified'}
                        </span>
                        <span className="text-sm text-gray-600">({entry.phone})</span>
                        {entry.verified ? (
                          <CheckCircle className="text-blue-500" size={18} />
                        ) : (
                          <XCircle className="text-red-500" size={18} />
                        )}
                      </div>

                      {/* Date and Time */}
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} className="text-gray-500" />
                          <span>{entry.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={16} className="text-gray-500" />
                          <span>{entry.time}</span>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-start gap-1 text-sm text-gray-600">
                        <MapPin size={16} className="text-gray-500 mt-0.5 flex-shrink-0" />
                        <span>{entry.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 ml-4">
                  <button
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                    title="View"
                  >
                    <Eye size={20} />
                  </button>
                  <button
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                    title="Upload"
                  >
                    <Upload size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(entry.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                    title="Delete"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
