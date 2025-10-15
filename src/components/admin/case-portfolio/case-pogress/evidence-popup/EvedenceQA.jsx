import { X } from "lucide-react";

const questionsAnswers = [
  {
    q: "What is a cheque bounce case under Indian law?",
    a: "A cheque bounce case arises when a cheque is dishonored by the bank due to reasons like insufficient funds, and the payee files a complaint under Section 138 of the Negotiable Instruments Act, 1881, treating it as a criminal offense.",
  },
  {
    q: "Who are the parties involved in this cheque bounce case?",
    a: "The complainant is Mr. Anil Sharma, the payee who presented the cheque, and the accused is Mr. Vikram Singh, the drawer who issued the cheque.",
  },
  {
    q: "What was the amount of the cheque in question?",
    a: "The cheque was for ₹5,00,000.4.",
  },
  {
    q: "Why was the cheque dishonoured?",
    a: "The cheque was dishonored due to 'insufficient funds' in Vikram Singh's bank account.",
  },
  {
    q: "When was the cheque presented for payment?",
    a: "The cheque was presented on 05/06/2025.",
  },
  {
    q: "What action did Anil Sharma take after the cheque was dishonored?",
    a: "Anil Sharma sent a legal notice to Vikram Singh on 10/06/2025, demanding payment of the cheque amount within 15 days.",
  },
  {
    q: "Did Vikram Singh respond to the legal notice?",
    a: "No, Vikram Singh did not respond or make the payment within the 15-day period.",
  },
  {
    q: "Under which law was the case filed?",
    a: "The case was filed under Section 138 of the Negotiable Instruments Act, 1881.",
  },
  {
    q: "Where was the case filed?",
    a: "The case was filed in a trial court in Delhi, where the cheque was presented for payment.",
  },
  {
    q: "What is the time limit for sending a legal notice in a cheque bounce case?",
    a: "The legal notice must be sent within 30 days from the date of receiving the bank’s memo indicating the cheque’s dishonor.",
  },
];

export default function EvedenceQA({ onClose }) {
  return (
    <div className="bg-white max-w-3xl mx-auto rounded-2xl p-6 shadow-md">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-2xl font-semibold">Q&amp;A</h2>
        <button onClick={() => onClose(false)}>
          <X size={22} className="text-gray-500 hover:text-gray-700" />
        </button>
      </div>
      <ol className="space-y-5 list-decimal list-inside">
        {questionsAnswers.map(({ q, a }, idx) => (
          <li key={idx} className="pl-1">
            <div className="text-xl font-semibold mb-1">{q}</div>
            <div className="text-gray-600">{a}</div>
          </li>
        ))}
      </ol>
    </div>
  );
}
