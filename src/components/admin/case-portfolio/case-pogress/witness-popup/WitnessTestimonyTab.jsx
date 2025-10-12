import { FaRegFileImage, FaClock, FaDownload } from 'react-icons/fa';
import { X } from 'lucide-react';
const WitnessTestimonyTab = ({ closePopup }) => (
  <div className="bg-white rounded-xl shadow p-8 max-w-full mx-auto relative">
    {/* Close and Download icons */}
    <div className="absolute right-6 top-6 flex gap-4">
      <button className="text-gray-500 hover:text-gray-700"
        onClick={() => closePopup(false)}
      >
        <X className="w-6 h-6" />
      </button>
      <a href="../../../../../assets/images/test.pdf" download="witness-card.pdf" >
        <FaDownload className="text-gray-400 hover:text-gray-600 text-xl cursor-pointer" />
      </a>
    </div>
    <h1 className="text-2xl font-bold mb-2">Witness Testimony</h1>
    <div className="mb-4">
      <div className="text-gray-700 font-semibold">Testimony Document Pdf</div>
      <div className="flex items-center gap-2 mt-2">
        <FaRegFileImage size={22} className="text-red-500" />
        <a href="../../../../../assets/images/test.pdf" download="witness-card.pdf" className="webprimary font-semibold underline">
          witness-card.pdf
        </a>
        <span className="text-gray-400 text-sm flex items-center ml-4 gap-2">
          <FaClock size={14} />
          26 Oct 2025 at 02:30 PM
          <span className="mx-2">&bull;</span>
          4.8mb
        </span>
      </div>
    </div>
    {/* Questions and Answers */}
    <ol className="mt-6">
      <li className="mb-6">
        <span className="font-bold text-lg">Please state your name, occupation, and address for the record.</span>
        <p className="mt-2 text-gray-700 text-base">
          My name is Anil Sharma. I am a businessman dealing in wholesale textiles, residing at 123, Green Park, New Delhi.
        </p>
      </li>
      <li className="mb-6">
        <span className="font-bold text-lg">How do you know the accused, Mr. Vikram Singh?</span>
        <p className="mt-2 text-gray-700 text-base">
          Vikram Singh is a business acquaintance. I lent him ₹5,00,000 for his business in January 2025.
        </p>
      </li>
      <li className="mb-6">
        <span className="font-bold text-lg">Can you explain the circumstances under which you lent money to the accused?</span>
        <p className="mt-2 text-gray-700 text-base">
          In January 2025, Vikram approached me for a loan of ₹5,00,000 to expand his retail business. I agreed to lend him the amount, and we executed a written loan agreement on 15/01/2025.
        </p>
      </li>
      <li className="mb-6">
        <span className="font-bold text-lg">Was there any condition for repayment of this loan?</span>
        <p className="mt-2 text-gray-700 text-base">
          Yes, Vikram agreed to repay the loan by 31/05/2025, with an interest of 8% per annum, as per the loan agreement.
        </p>
      </li>
      <li>
        <span className="font-bold text-lg">Did the accused issue any document to assure repayment?</span>
        <p className="mt-2 text-gray-700 text-base">
          Yes, on 01/06/2025, Vikram issued a post-dated cheque for ₹5,00,000 in my favor, drawn on his account with XYZ Bank.
        </p>
      </li>
    </ol>
  </div>
);

export default WitnessTestimonyTab;
