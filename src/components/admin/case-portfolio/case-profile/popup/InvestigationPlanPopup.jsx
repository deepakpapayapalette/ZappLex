import React from "react";
import { X } from "lucide-react";

const InvestigationPlanPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
      <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-xl p-6 relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 sticky top-0 bg-white border-b border-gray-200 py-2">
          <h2 className="text-2xl font-semibold text-gray-800">
            Investigation Plan
          </h2>
          <button onClick={()=> onClose(false)}>
            <X size={22} className="text-gray-600 hover:text-gray-800" />
          </button>
        </div>

        {/* Section 1 */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            1. Verification of Complainant’s Allegations
          </h3>
          <p className="text-gray-700 mb-3">
            <span className="font-medium">Objective:</span> Confirm the
            foundational elements of the Section 138 offense.
          </p>

          <h4 className="font-semibold text-gray-800 mb-2">Actions:</h4>

          <ul className="space-y-5 list-disc list-inside text-gray-700 leading-relaxed">
            <li>
              <strong>Examine the Cheque:</strong>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Obtain the original cheque (Cheque No. 123456, dated April 15,
                  2025) from the complainant or court.
                </li>
                <li>
                  Verify its authenticity with XYZ Bank, including signature,
                  date, and account details of Mr. Anil Kumar.
                </li>
                <li>
                  Confirm the cheque was presented within its validity period
                  (three months from issuance).
                </li>
              </ul>
            </li>

            <li>
              <strong>Confirm Dishonor:</strong>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Collect a certified copy of the cheque return memo (dated
                  April 20, 2025) from XYZ Bank.
                </li>
                <li>
                  Interview the bank official to confirm the reason for dishonor
                  (“Insufficient Funds”) and check for other potential reasons
                  (e.g., signature mismatch).
                </li>
                <li>
                  Obtain Mr. Kumar’s account statement (April 2025) to verify
                  the balance at the time of presentation.
                </li>
              </ul>
            </li>

            <li>
              <strong>Validate Demand Notice:</strong>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Verify the legal notice (dated April 25, 2025) and confirm its
                  contents meet Section 138 requirements (demand for payment
                  within 15 days).
                </li>
                <li>
                  Check postal records to confirm dispatch (April 25, 2025) and
                  delivery (April 27, 2025) to Mr. Kumar’s correct address.
                </li>
                <li>
                  Investigate whether Mr. Kumar responded to the notice or made
                  any payment by May 12, 2025.
                </li>
              </ul>
            </li>

            <li>
              <strong>Establish the Debt:</strong>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Collect and verify invoices (January–March 2025) for goods
                  worth ₹5,00,000 supplied by Mr. Sharma to Mr. Kumar.
                </li>
                <li>
                  Examine delivery receipts to confirm goods were received by
                  Mr. Kumar or his representative.
                </li>
                <li>
                  Interview Mr. Sharma to corroborate the transaction details
                  and check for any written agreement or correspondence
                  acknowledging the debt.
                </li>
              </ul>
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            2. Examination of Witnesses
          </h3>
          <p className="text-gray-700 mb-3">
            <span className="font-medium">Objective:</span> Gather statements to
            support or challenge the complainant’s case and assess witness
            credibility.
          </p>

          <h4 className="font-semibold text-gray-800 mb-2">Actions:</h4>
          <ul className="space-y-5 list-disc list-inside text-gray-700 leading-relaxed">
            <li>
              <strong>Complainant (Mr. Rajesh Sharma):</strong>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Record a detailed statement on the business transaction,
                  cheque issuance, and notice compliance.
                </li>
                <li>
                  Ask for any additional evidence (e.g., emails, WhatsApp
                  messages, or prior dealings with Mr. Kumar) to prove the debt.
                </li>
                <li>
                  Verify if Mr. Sharma raised any prior complaints against Mr.
                  Kumar or faced similar disputes with other parties.
                </li>
              </ul>
            </li>

            <li>
              <strong>Employee Witness (Mr. Vikram Singh):</strong>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Record a statement on his role in delivering goods and any
                  interactions with Mr. Kumar regarding payment.
                </li>
                <li>
                  Cross-check his testimony against invoices and delivery
                  receipts.
                </li>
                <li>
                  Investigate his criminal history (NCRB records: WH-001, WH-003)
                  and prior testimony in cheque bounce cases (CW-003, CW-004) to
                  assess credibility.
                </li>
                <li>
                  Confirm whether he has any personal or financial interest in
                  the case outcome.
                </li>
              </ul>
            </li>

            <li>
              <strong>Bank Official (XYZ Bank):</strong>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Record a statement confirming the cheque’s presentation,
                  dishonor, and account status.
                </li>
                <li>
                  Obtain a certified statement or affidavit under the Bankers’
                  Books Evidence Act, 1891, to streamline trial evidence.
                </li>
                <li>
                  Check if Mr. Kumar attempted to deposit funds post-dishonor or
                  communicated with the bank.
                </li>
              </ul>
            </li>

            <li>
              <strong>Potential Defense Witnesses:</strong>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Identify and interview any witnesses proposed by Mr. Kumar
                  (e.g., business associates) to verify claims that the cheque
                  was for security or that goods were defective.
                </li>
                <li>
                  Collect statements on their knowledge of the transaction and
                  relationship with Mr. Kumar.
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default InvestigationPlanPopup;
