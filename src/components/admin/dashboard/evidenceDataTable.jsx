import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function IrrelevantEvidenceTracker() {
  const [selectedCase, setSelectedCase] = useState('Choose Case');

  const headers = ['Case Number', 'Case Title', 'Evidence Submitted', 'Relevance Status', 'Next Action'];

  const evidenceData = [
    {
      caseNumber: 'CR/138/2025/DEL/056',
      caseTitle: 'Rajesh Sharma v. Anil Kumar',
      evidenceSubmitted: 'Cheque, Return Memo, Notice, Invoices, Affidavits (Tasks 1–9 from evidence plan).',
      relevanceStatus: 'All relevant (pending verification); optional evidence (Tasks 10–13) may be challenged.',
    },
    {
      caseNumber: 'CR/138/2025/DEL/056',
      caseTitle: 'Rajesh Sharma v. Anil Kumar',
      evidenceSubmitted: 'Cheque, Return Memo, Notice, Invoices, Affidavits (Tasks 1–9 from evidence plan).',
      relevanceStatus: 'All relevant (pending verification); optional evidence (Tasks 10–13) may be challenged.',
    }
  ];

  const thStyle = { padding: '8px 18px', fontSize: '14px', lineHeight: '18px' };
  const tdStyle = { padding: '18px', fontSize: '14px', lineHeight: '24px' };

  return (
    <div className="space-top">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold">Irrelevant Evidence Tracker</h1>
        <div className="relative" style={{ minWidth: '320px' }}>
          <select
            value={selectedCase}
            onChange={(e) => setSelectedCase(e.target.value)}
            className="w-full appearance-none border-2 border-gray-300 rounded-lg px-6 py-3 pr-12 bg-white cursor-pointer hover:border-gray-400 focus:outline-none focus:border-blue-500 text-gray-600"
          >
            <option>Choose Case</option>
            <option>CR/138/2025/DEL/056</option>
            <option>Case 2</option>
            <option>Case 3</option>
          </select>
          <ChevronDown className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" />
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-webprimary">
              {headers.map((header, i) => (
                <th
                  key={i}
                  className={`text-white lext-sm text-left ${i < headers.length - 1 ? 'border-r border-blue-600' : ''}`}
                  style={thStyle}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {evidenceData.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                <td className="border-t border-r border-gray-200" style={tdStyle}>{row.caseNumber}</td>
                <td className="border-t border-r border-gray-200" style={tdStyle}>{row.caseTitle}</td>
                <td className="border-t border-r border-gray-200" style={tdStyle}>{row.evidenceSubmitted}</td>
                <td className="border-t border-r border-gray-200" style={tdStyle}>{row.relevanceStatus}</td>
                <td className="border-t border-gray-200 text-center" style={{ padding: '24px' }}>
                  <button className="text-webprimary font-semibold hover:text-active hover:underline" style={{ fontSize: '14px' }}>
                    Action
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
