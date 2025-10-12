import { X } from 'lucide-react';

export default function DetailedCaseRecords({ closePopup }) {
  const caseRecords = [
    {
      recordId: 'WH-001',
      firNo: '045/2018',
      dateOfFir: '15-03-2018',
      policeStation: 'Tilak Nagar PS, Delhi',
      ipcSections: '420 (Cheating), 468 (Forgery)',
      offense: 'Accused of issuing a forged cheque for ₹2,00,000 to a supplier, leading to financial fraud.',
      status: 'Convicted',
      punishment: '18 months RI + Fine of ₹50,000 (u/s 420 IPC)',
      remarks: 'Witness was co-accused; sentence suspended on appeal in 2020.'
    },
    {
      recordId: 'WH-002',
      firNo: '078/2023',
      dateOfFir: '10-11-2023',
      policeStation: 'Sadar Bazar PS, Delhi',
      ipcSections: '138 NI Act (Dishenour of Cheque)',
      offense: 'Cheque bounce for ₹3,00,000 issued to a creditor; claimed as security but proven as debt repayment.',
      status: 'Pending',
      punishment: 'N/A',
      remarks: 'Case dropped due to lack of evidence; witness turned approver in related trial.'
    },
    {
      recordId: 'WH-003',
      firNo: '112/2020',
      dateOfFir: '22-07-2020',
      policeStation: 'Kamla Market PS, Delhi',
      ipcSections: '406 (Criminal Breach of Trust), 420 (Cheating)',
      offense: 'Misappropriation of entrusted goods worth ₹1,50,000 from a business partner.',
      status: 'Acquitted',
      punishment: 'N/A',
      remarks: 'Case dropped due to lack of evidence; witness turned approver in related trial.'
    }
  ];


  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg ">Detailed Case Records</h2>
        <button className="text-gray-500 hover:text-gray-700"
          onClick={() => closePopup(false)}
        >

          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Scrollable Table Container */}
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full min-w-max">
          <thead>
            <tr className="bg-webprimary text-white">
              <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Record ID</th>
              <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">FIR No.</th>
              <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Date OF FIR</th>
              <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Police Station</th>
              <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">IPC Sections Involved</th>
              <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Offense Description</th>
              <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Status</th>
              <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Punishment (if convicted)</th>
              <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Remarks</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {caseRecords.map((record, index) => (
              <tr key={record.recordId} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-4 py-4 border-t border-gray-200 whitespace-nowrap">{record.recordId}</td>
                <td className="px-4 py-4 border-t border-gray-200 whitespace-nowrap">{record.firNo}</td>
                <td className="px-4 py-4 border-t border-gray-200 whitespace-nowrap">{record.dateOfFir}</td>
                <td className="px-4 py-4 border-t border-gray-200 whitespace-nowrap">{record.policeStation}</td>
                <td className="px-4 py-4 border-t border-gray-200">
                  <div className="max-w-xs">{record.ipcSections}</div>
                </td>
                <td className="px-4 py-4 border-t border-gray-200">
                  <div className="max-w-sm">{record.offense}</div>
                </td>
                <td className="px-4 py-4 border-t border-gray-200 whitespace-nowrap">{record.status}</td>
                <td className="px-4 py-4 border-t border-gray-200">
                  <div className="max-w-xs">{record.punishment}</div>
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
