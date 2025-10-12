import { X } from 'lucide-react';

const crossExaminationData = [
  {
    question: 'Was this loan amount paid in cash or through a bank transaction?',
    answer: 'The amount was paid in cash, as Vikram requested cash for urgent business needs.'
  },
  {
    question: 'Do you have any bank records or receipts to prove that you paid ₹5,00,000 to the accused?',
    answer: "I don't have bank records since it was a cash transaction, but the loan agreement signed by both of us clearly mentions the amount."
  },
  {
    question: "Isn't it unusual to lend such a large sum in cash without any bank trail, especially as a businessman?",
    answer: "It's not uncommon in my business circle to lend cash for urgent needs, and the signed agreement is sufficient proof of the transaction."
  },
  {
    question: "Can you confirm the exact date the loan was given, and was anyone else present during this transaction?",
    answer: "The loan was given on 15/01/2025, as per the agreement. No one else was present, as it was a private discussion between Vikram and me."
  },
  {
    question: "You mentioned a loan agreement. Was it notarized or registered with any authority?",
    answer: "The agreement was not notarized or registered, but it was signed by both parties and is legally valid."
  },
  {
    question: "Isn't it true that the cheque you claim was issued for repayment was actually given as a security for a potential business deal, not a loan?",
    answer: "No, that's incorrect. The cheque was issued specifically to repay the ₹5,00,000 loan, as agreed."
  },
  {
    question: "Did you ever discuss with Mr. Singh that the cheque was not to be presented unless a business deal was finalized?",
    answer: "No such discussion took place. The cheque was given for repayment of the loan, with no conditions attached."
  },
  {
    question: "Can you confirm if the cheque was filled in your handwriting or Mr. Singh’s?",
    answer: "The cheque was filled and signed by Mr. Vikram Singh in his handwriting."
  },
  {
    question: "You claim the cheque was presented on 05/06/2025. Did you check with Mr. Singh before presenting it to ensure sufficient funds?",
    answer: "No, I was not required to check with him. The cheque was issued for repayment, and it was his responsibility to ensure funds were available."
  },
  {
    question: "Isn’t it possible that Mr. Singh asked you to hold off presenting the cheque due to temporary financial difficulties?",
    answer: "No, he never communicated any such request to me before or after issuing the cheque."
  }
];

const CrossExaminationTab = ({ closePopup }) => (
  <div className="bg-white rounded-xl shadow-md p-7 max-w-3xl mx-auto">
    {/* Modal header with close "X" */}
    <div className="flex justify-between items-start mb-2">
      <h1 className="text-2xl font-bold">Cross-Examination</h1>
      <button className="text-gray-500 hover:text-gray-700"
        onClick={() => closePopup(false)}
      >
        <X className="w-6 h-6" />
      </button>
    </div>
    <ol className="mt-4">
      {crossExaminationData.map((item, idx) => (
        <li key={idx} className="mb-6">
          <div className="font-bold text-lg">{item.question}</div>
          <p className="mt-2 text-gray-700 text-base">{item.answer}</p>
        </li>
      ))}
    </ol>
  </div>
);

export default CrossExaminationTab;
