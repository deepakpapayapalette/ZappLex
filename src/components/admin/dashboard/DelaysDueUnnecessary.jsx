import { AlertCircle } from 'lucide-react';
import CaseDelayBarChart from './CaseDelayBarChart';
import { useState } from 'react';
import { IoClose } from "react-icons/io5";
export default function DelaysDueUnnecessary() {
  const [showDelayChart, setShowDelayChart] = useState(false);
  const headers = ['Case Number', 'Case Title', "Case Lifecycle", 'Hearing Date', 'No. of Adjournments', 'Reason for Last Adjournment', 'Next Action'];

  const caseData = [
    {
      caseNumber: 'CR/138/2025/DEL/056',
      caseTitle: 'Rajesh Sharma v. Anil Kumar',
      caseLifecycle: " 3 Years 4 Months",
      hearingDate: 'June 10, 2025',
      adjournments: '30',
      reason: 'N/A (summons issuance pending)',
      iconColor: '#DC2626'
    },
    {
      caseNumber: 'CR/138/2025/DEL/056',
      caseTitle: 'Rajesh Sharma v. Anil Kumar',
      caseLifecycle: " 2 Years 6 Months",
      hearingDate: 'June 10, 2025',
      adjournments: '24',
      reason: 'N/A (summons issuance pending)',
      iconColor: '#CDDC39'
    }
  ];

  const thStyle = { padding: '16px 18px', fontSize: '14px', lineHeight: '20px' };
  const tdStyle = { padding: '20px 18px', fontSize: '14px', lineHeight: '20px' };

  return (
    <div className="space-top">
      <h2 className='text-2xl lg:text-3xl font-semibold mb-2  pb-4 lg:pb-6'>
        Delays Due to Unnecessary Adjournments
      </h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-webprimary rounded-tl-lg">
            {headers.map((header, i) => (
              <th
                key={i}
                className="text-white font-semibold text-left"
                style={thStyle}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {caseData.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
              <td className="border-t border-gray-200" style={tdStyle}>
                <div className="flex items-center gap-2">
                  <span>{row.caseNumber}</span>
                  <AlertCircle
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: row.iconColor }}
                  />
                </div>
              </td>
              <td className="border-t border-gray-200" style={tdStyle}>{row.caseTitle}</td>
              <td className="border-t border-gray-200" style={tdStyle}>{row.caseLifecycle}</td>
              <td className="border-t border-gray-200" style={tdStyle}>{row.hearingDate}</td>
              <td className="border-t border-gray-200" style={tdStyle} onClick={() => setShowDelayChart(true)}><span className='cursor-pointer underline '> {row.adjournments}</span></td>
              <td className="border-t border-gray-200" style={tdStyle}>{row.reason}</td>
              <td className="border-t border-gray-200 text-center" style={tdStyle}>
                <button className="text-blue-600 font-bold hover:text-blue-800 hover:underline">
                  Action
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='pt-8'>
        {showDelayChart && <>
          <div className='flex justify-end p-5 text-2xl font-semibold cursor-pointer' onClick={() => setShowDelayChart(false)}>
            <IoClose size={28} />
          </div>
          {<CaseDelayBarChart />}


        </>
        }
      </div>
    </div>
  );
}
