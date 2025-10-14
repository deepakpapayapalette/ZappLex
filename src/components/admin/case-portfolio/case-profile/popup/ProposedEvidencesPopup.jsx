import React from "react";
import { X } from "lucide-react";

const ProposedEvidencesPopup = ({ onClose }) => {
  const documentaryEvidence = [
    {
      description:
        "Original Cheque (Cheque No. 123456, dated April 15, 2025, XYZ Bank)",
      purpose: "To prove the cheque was issued by the accused to the complainant.",
      status: "Submitted",
    },
    {
      description:
        "Cheque Return Memo (Dated April 20, 2025, issued by XYZ Bank)",
      purpose: 'To confirm dishonor of the cheque due to "Insufficient Funds".',
      status: "Submitted",
    },
    {
      description: "Legal Demand Notice (Dated April 25, 2025)",
      purpose:
        "To demonstrate compliance with the mandatory notice requirement.",
      status: "Copy Filed",
    },
  ];

  const testimonialEvidence = [
    {
      witness: "Mr. Rajesh Sharma (Complainant)",
      role: "Proprietor of Sharma Grocery Store",
      testimony:
        "To confirm supply of goods worth ₹5,00,000, issuance of the cheque by Mr. Kumar, dishonor, and compliance with notice requirements.",
    },
    {
      witness: "Mr. Vikram Singh (Employee)",
      role: "Employee at Sharma Grocery Store",
      testimony:
        "To verify delivery of goods and discussions with Mr. Kumar regarding payment.",
    },
  ];

  const supportingEvidence = [
    {
      description:
        "Correspondence Records (Emails/Letters between Mr. Sharma and Mr. Kumar)",
      purpose:
        "To demonstrate acknowledgment of the debt or transaction by the accused.",
      status: "Copies Filed",
    },
    {
      description:
        "Witness Criminal History Report (NCRB records for Mr. Vikram Singh)",
      purpose:
        "To address defense challenges to Mr. Singh’s credibility proactively.",
      status: "Certified Copy",
    },
  ];

  const TableSection = ({ title, headers, data, fields }) => (
    <div className="mb-6">
      <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
      <div className="overflow-x-auto border rounded-lg shadow-sm">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-webprimary text-white">
              {headers.map((h, i) => (
                <th key={i} className="px-4 py-2 font-medium  border-gray-200">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={i}
                className={` hover:bg-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
              >
                {fields.map((f, j) => (
                  <td key={j} className="px-4 py-2 align-top text-gray-700">
                    {row[f]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
      <div className="bg-white max-w-4xl w-full max-h-[90vh] rounded-lg shadow-xl overflow-y-auto p-6 relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 sticky top-0 bg-white py-2 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">
            Evidence Summary for Cheque Bounce Case
          </h2>
          <button onClick={() => onClose(false)}>
            <X size={22} className="text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        {/* Content Sections */}
        <TableSection
          title="A. Documentary Evidence"
          headers={["Evidence Description", "Purpose", "Status"]}
          data={documentaryEvidence}
          fields={["description", "purpose", "status"]}
        />

        <TableSection
          title="B. Testimonial Evidence"
          headers={["Witness", "Role", "Proposed Testimony"]}
          data={testimonialEvidence}
          fields={["witness", "role", "testimony"]}
        />

        <TableSection
          title="C. Additional Supporting Evidence (If Required)"
          headers={["Evidence Description", "Purpose", "Status"]}
          data={supportingEvidence}
          fields={["description", "purpose", "status"]}
        />
      </div>
    </div>
  );
};

export default ProposedEvidencesPopup;
