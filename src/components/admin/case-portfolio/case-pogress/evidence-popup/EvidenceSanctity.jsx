import { CheckCircle, XCircle } from 'lucide-react';
import { X } from "lucide-react";
import { FaPhoneAlt, FaCalendarAlt, FaClock, } from 'react-icons/fa';
import { GrDocumentImage } from "react-icons/gr";
import { GoDownload } from "react-icons/go";

const checks = [
  { label: 'Chain of Custody Check', passed: true },
  { label: 'Authentication Check', passed: false },
  { label: 'Proper Collection Check', passed: true },
  { label: 'Expert Validation/ Forensic Test Check', passed: false },
  { label: 'Legal Compliance Check', passed: false },
  { label: 'Secure Storage Compliance Check', passed: true },
  { label: 'Documentation Compliance', passed: false },
];

export default function EvidenceSanctity({ onClose }) {
  return (
    <div className="bg-white max-w-xl mx-auto rounded-2xl p-6 shadow-lg relative px-8">
      {/* Close icon */}
      {/* <button className="absolute top-5 right-5 text-2xl text-black hover:text-gray-700">
        ×
      </button> */}
      <button
        onClick={() => onClose(false)}
        className="absolute top-5 right-5 text-2xl text-black hover:text-gray-700"
      >
        <X size={24} />
      </button>

      <h2 className="md:text-2xl text-xl font-semibold mb-6 mt-5 md:mt-0">Evidence Sanctity Compliance</h2>

      <div>
        {checks.map((item, idx) => (
          <div className="flex items-center justify-between mb-3" key={idx}>
            <span className="text-md">{item.label}</span>
            {item.passed
              ? <CheckCircle className="text-green-600 w-7 h-7" />
              : <XCircle className="text-red-600 w-7 h-7" />}
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 my-6"></div>

      <h3 className="text-xl font-semibold">Evidence Collection Officer</h3>
      <div className="mt-1 mb-6">
        <div className="text-lg font-semibold">Ravi Rai</div>
        <div className=" text-gray-600 mt-1 mb-2 gap-6">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="inline-block" />
            <span>+91 5996565151</span>
          </div>
          <div className='flex items-center gap-5 mt-1'>

            <div className="flex items-center gap-2">
              <FaCalendarAlt className="inline-block" />
              <span>30/12/2025</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="inline-block" />
              <span>02:20 PM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mb-4">
        <div className="border border-gray-300 rounded-md p-3 flex-1">
          <div className="text-xs text-gray-500 mb-1">Open Log</div>
          <div className="text-md font-medium">06 Times</div>
        </div>
        <div className="border border-gray-300 rounded-md p-3 flex-1">
          <div className="text-xs text-gray-500 mb-1">Version Updates</div>
          <div className="text-md font-medium">03</div>
        </div>
      </div>

      <div className="mb-3">
        <h4 className="text-md font-semibold mb-2">Previous Files</h4>
        <div className="flex items-center gap-3 border border-gray-300 rounded-md px-4 py-2 mb-2">
          <span className="inline-flex justify-center items-center bg-blue-50 text-webprimary rounded p-1">
            <GrDocumentImage className="w-5 h-5" />
          </span>
          <div>

            <div className="font-medium text-webprimary cursor-pointer hover:underline">
              Ravi_Rai_Vakalatnama.png
            </div>
            <div className="text-gray-600 text-xs">16 Sep 2025 at 02:30 PM &middot; 4.8mb</div>
          </div>
          <button className="text-webprimary ml-auto p-1 hover:text-active text-xl">
            <GoDownload />
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 border border-gray-300 rounded-md p-3">
            <div className="text-xs text-gray-500 mb-1">Evidence Collection Officer</div>
            <div className="text-md font-medium">Ravi Rai</div>
          </div>
          <div className="flex-1 border border-gray-300 rounded-md p-3">
            <div className="text-xs text-gray-500 mb-1">Compliance Check Date & Time</div>
            <div className=" text-md font-medium">
              <div className='flex gap-2'>

                <FaCalendarAlt />
                <span>30/12/2025</span>
              </div>
              <div className='flex gap-2'>

                <FaClock />
                <span>02:20 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
