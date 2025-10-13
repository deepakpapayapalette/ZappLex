import React from 'react'
import { AlertCircle } from 'lucide-react';

const caseAlerts = [
  {
    _id: 1,
    alertType: "High Adjournment",
    caseNo: "CR/123/2024",
    description: "5 adjournments due to advocate absence",
    actionText: "Schedule strict hearing",
    secondaryAction: "view Case",
    onPrimaryAction: () => alert('Schedule strict hearing clicked'),
    onSecondaryAction: () => alert('View Case clicked')
  },
  {
    _id: 2,
    alertType: "Incomplete Investigation",
    caseNo: "CR/456/2025",
    description: "Witness Mr. Vikram Singh has prior conviction",
    actionText: "Summon IO",
    secondaryAction: "view Case",
    onPrimaryAction: () => alert('Summon IO clicked'),
    onSecondaryAction: () => alert('View Case clicked')
  },
  {
    _id: 3,
    alertType: "Witness Credibility",
    caseNo: "CR/138/2025/DEL/056",
    description: "Witness Mr. Vikram Singh has prior conviction",
    actionText: "Verify testimony relevance",
    secondaryAction: "view Case",
    onPrimaryAction: () => alert('Verify testimony relevance clicked'),
    onSecondaryAction: () => alert('View Case clicked')
  },
  {
    _id: 4,
    alertType: "Timeline Expiry",
    caseNo: "CR/789/2024",
    description: "Exceeded 6-month limit  for trial date",
    actionText: "Expedite judgment",
    secondaryAction: "view Case",
    onPrimaryAction: () => alert('Expedite judgment clicked'),
    onSecondaryAction: () => alert('View Case clicked')
  }
];

const AlertsPanel = () => {
  return (
    <div className='w-full space-top'>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold">Actionable Alerts Panel</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        {caseAlerts.map((item, index) => (
          <div key={index} className=" bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
            {/* Header */}
            <div className="p-5 space-y-3">
              <div className="flex items-center gap-2">
                <div className="bg-red-100 text-red-600 p-2 rounded-full">
                  <AlertCircle size={18} />
                </div>
              </div>
              <h3 className="text-lg text-gray-900">{item.alertType}</h3>


              <p className="text-sm text-gray-600">Case {item.caseNo}</p>


              <div className="bg-[#e7f0f9] px-3 py-2 rounded-lg text-sm text-gray-700">
                <span className="font-semibold">{item.description}</span>
              </div>
            </div>


            {/* Buttons */}
            <div className="p-4 flex flex-col gap-2">
              <button
                onClick={item.onSchedule}
                className="w-full px-4 py-2 border-2 border-webprimary text-webprimary rounded-lg font-medium hover:bg-webprimary hover:text-white transition"
              >
                Schedule strict hearing.
              </button>


              <button
                onClick={item.onView}
                className="w-full px-4 py-2 bg-webprimary text-white rounded-lg font-semibold hover:bg-active transition"
              >
                view Case
              </button>
            </div>
          </div>
        ))}


      </div>



    </div>
  )
}

export default AlertsPanel
