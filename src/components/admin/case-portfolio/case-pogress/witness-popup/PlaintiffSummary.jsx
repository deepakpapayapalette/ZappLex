import React from 'react'
import { X } from 'lucide-react';
const PlaintiffSummary = ({ closePopup }) => {
  return (
    <div className='w-full'>
      <div className="bg-white rounded-xl shadow-md p-7  mx-auto">
        {/* Modal header with close "X" */}
        <div className="flex justify-between items-start mb-2">
          <h1 className="text-2xl font-bold">Summary</h1>
          <button className="text-gray-500 hover:text-gray-700"
            onClick={() => closePopup(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <p>
          Summary of Cheque Bounce Case: Anil Sharma v. Vikram SinghIn this fictional case, Mr. Anil Sharma (complainant) lent ₹5,00,000 to Mr. Vikram Singh (accused) for business purposes. To repay the loan, Vikram issued a cheque dated 01/06/2025 for ₹5,00,000, which was presented by Anil on 05/06/2025. The cheque was dishonored due to "insufficient funds." On 10/06/2025, Anil sent a legal notice to Vikram, demanding payment within 15 days, as required under Section 138 of the Negotiable Instruments Act, 1881. Vikram failed to respond or pay within the stipulated period. Consequently, Anil filed a complaint on 28/06/2025 in a Delhi trial court, within the one-month limitation period. The case involves a legally enforceable debt, and Anil must prove the debt’s existence, cheque dishonor, and compliance with statutory notice requirements. Vikram may defend by challenging the debt’s validity or the cheque’s purpose. If convicted, Vikram faces up to two years’ imprisonment, a fine up to twice the cheque amount, or both, and may be ordered to pay compensation. The case remains pending, with potential for settlement or appeal if decided.
        </p>

      </div>

    </div>
  )
}

export default PlaintiffSummary
