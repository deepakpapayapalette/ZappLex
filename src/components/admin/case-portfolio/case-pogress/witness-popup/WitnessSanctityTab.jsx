import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { X } from 'lucide-react';
const complianceData = [
  { label: "Witness Identification and CompetenceVerified Identity", status: "pass" },
  { label: "Oath or AffirmationAdministered Oath/Affirmation", status: "fail" },
  { label: "Procedural ComplianceProper Summons", status: "pass" },
  { label: "Testimony IntegrityNo Coaching or Influence", status: "fail" },
  { label: "Examination Process Examination-in-Chief", status: "fail" },
  { label: "Witness Protection and ComfortNo Intimidation", status: "pass" },
  { label: "Evidence Admissibility Relevance", status: "fail" },
  { label: "Witness Protection and ComfortNo Intimidation", status: "fail" },
  { label: "Recording and Documentation Accurate Recording", status: "pass" },
  { label: "Post-Testimony Procedures Witness Discharge", status: "fail" },
  { label: "Blockchain Protection (If Applicable)Document Integrity", status: "pass" },
  { label: "Recording and Documentation Accurate Recording", status: "fail" },
];

const WitnessSanctityTab = ({ closePopup }) => (
  <div className="bg-white rounded-xl shadow-md p-7 w-full mx-auto">
    <div className="flex justify-between items-start mb-4">
      <h1 className="text-3xl font-bold leading-snug">Witness Testimony Sanctity Compliance</h1>
      <button className="text-gray-500 hover:text-gray-700"
        onClick={() => closePopup(false)}
      >
        <X className="w-6 h-6" />
      </button>
    </div>
    <ul>
      {complianceData.map((item, idx) => (
        <li key={idx} className="flex justify-between items-center mb-2">
          <span className="text-base">{item.label}</span>
          {item.status === "pass" ? (
            <FaCheckCircle className="text-green-600 text-xl" />
          ) : (
            <FaTimesCircle className="text-red-600 text-xl" />
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default WitnessSanctityTab;
