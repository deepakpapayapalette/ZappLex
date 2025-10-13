import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function CaseDetailsDrillDown() {
  const [selectedCase, setSelectedCase] = useState('Choose Case');

  const headers = ['Case Number', 'Case Title', 'Case Type', 'Filing Date', 'Last Hearing', 'Next Hearing'];

  const caseData = [
    {
      caseNumber: 'CR/138/2025/DEL/056',
      caseTitle: 'Rajesh Sharma v. Anil Kumar',
      caseType: 'Cheque Bounce (Section 138, NI Act)',
      filingDate: 'May 20, 2025',
      lastHearing: 'May 25, 2025 (Preliminary verification)',
      nextHearing: 'June 10, 2025 (Summons verification)',
    },
    {
      caseNumber: 'CR/138/2025/DEL/056',
      caseTitle: 'Rajesh Sharma v. Anil Kumar',
      caseType: 'Cheque Bounce (Section 138, NI Act)',
      filingDate: 'May 20, 2025',
      lastHearing: 'May 25, 2025 (Preliminary verification)',
      nextHearing: 'June 10, 2025 (Summons verification)',
    }
  ];

  const thStyle = { padding: '16px 18px', fontSize: '14px', lineHeight: '20px' };
  const tdStyle = { padding: '24px 18px', fontSize: '14px', lineHeight: '20px' };

  return (
    <div className="space-top">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl ">Case Details Drill-Down</h1>
        <div className="relative" style={{ minWidth: '200px' }}>
          <select
            value={selectedCase}
            onChange={(e) => setSelectedCase(e.target.value)}
            className="w-full appearance-none border-2 border-gray-300 rounded-lg px-4 py-2 pr-10 bg-white cursor-pointer hover:border-gray-400 focus:outline-none focus:border-blue-500 text-gray-500"
          >
            <option>Choose Case</option>
            <option>CR/138/2025/DEL/056</option>
            <option>Case 2</option>
            <option>Case 3</option>
          </select>
          <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" />
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-webprimary">
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
                <td className="border-t border-gray-200" style={tdStyle}>{row.caseNumber}</td>
                <td className="border-t border-gray-200" style={tdStyle}>{row.caseTitle}</td>
                <td className="border-t border-gray-200" style={tdStyle}>{row.caseType}</td>
                <td className="border-t border-gray-200" style={tdStyle}>{row.filingDate}</td>
                <td className="border-t border-gray-200" style={tdStyle}>{row.lastHearing}</td>
                <td className="border-t border-gray-200" style={tdStyle}>{row.nextHearing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
