import { X } from 'lucide-react';

export default function DetailedWitnessHistory({ closePopup }) {
  const witnessRecords = [
    {
      caseId: 'CW-001',
      caseTitle: 'State v. Ramesh Gupta',
      court: 'Metropolitan Magistrate Court, Delhi',
      caseType: 'Criminal (u/s 420 IPC - Cheating)',
      dateOfTestimony: '12-06-2019',
      roleOfWitness: 'Prosecution Witness',
      caseDetails: 'Testified as a supplier who received a forged invoice from the accused for ₹1,80,000.',
      outcomeOfCase: 'Accused convicted; sentenced to 2 years RI + ₹60,000 fine.',
      remarks: "Witness's testimony was consistent but challenged for prior business rivalry with the accused."
    },
    {
      caseId: 'CW-002',
      caseTitle: 'State v. Vikram Singh',
      court: 'District Court, Gurgaon',
      caseType: 'Civil (Recovery Suit)',
      dateOfTestimony: '12-08-2019',
      roleOfWitness: 'Defense Witness',
      caseDetails: 'Testified as a third-party observer to a transaction involving disputed goods worth ₹2,50,000.',
      outcomeOfCase: 'Case settled out of court; plaintiff recovered 70% of the amount',
      remarks: 'Witness deemed neutral; no cross-examination issues raised.'
    },
    {
      caseId: 'CW-003',
      caseTitle: 'Priya Enterprises v. Anil Kumar',
      court: 'Sessions Court, Delhi',
      caseType: 'Criminal (u/s 138 NI Act - Cheque Bounce)',
      dateOfTestimony: '12-12-2019',
      roleOfWitness: 'Prosecution Witness',
      caseDetails: 'Testified as an employee of the complainant, confirming delivery of goods worth ₹3,50,000.',
      outcomeOfCase: 'Accused acquitted due to insufficient evidence of debt',
      remarks: "Witness's credibility questioned due to prior cheque bounce case (WH-003 in NCRB Records)"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg">Detailed Witness History</h2>
        <button className="text-gray-500 hover:text-gray-700" onClick={() => closePopup(false)}>
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Scrollable Table Container */}
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full min-w-max">
          <thead>
            <tr className="bg-webprimary text-white">
              <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Case ID</th>
              <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Case Title</th>
              <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Court</th>
              <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Case Type</th>
              <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Date of Testimony</th>
              <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Role of Witness</th>
              <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Case Details</th>
              <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Outcome of Case</th>
              <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Remarks</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {witnessRecords.map((record, index) => (
              <tr key={record.caseId} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-4 py-4 border-t border-gray-200 whitespace-nowrap font-medium">
                  {record.caseId}
                </td>
                <td className="px-4 py-4 border-t border-gray-200 whitespace-nowrap">
                  {record.caseTitle}
                </td>
                <td className="px-4 py-4 border-t border-gray-200 whitespace-nowrap">
                  {record.court}
                </td>
                <td className="px-4 py-4 border-t border-gray-200">
                  <div className="max-w-xs">{record.caseType}</div>
                </td>
                <td className="px-4 py-4 border-t border-gray-200 whitespace-nowrap">
                  {record.dateOfTestimony}
                </td>
                <td className="px-4 py-4 border-t border-gray-200 whitespace-nowrap">
                  {record.roleOfWitness}
                </td>
                <td className="px-4 py-4 border-t border-gray-200">
                  <div className="max-w-md">{record.caseDetails}</div>
                </td>
                <td className="px-4 py-4 border-t border-gray-200">
                  <div className="max-w-xs">{record.outcomeOfCase}</div>
                </td>
                <td className="px-4 py-4 border-t border-gray-200">
                  <div className="max-w-sm">{record.remarks}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
