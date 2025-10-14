import React from "react";
import { X } from "lucide-react";

const QuestionsPopup = ({ onClose }) => {
  const sections = [
    {
      title: "A. Questions for Examination-in-Chief (By Complainant’s Advocate)",
      subSections: [
        {
          heading: "1. For Complainant (Mr. Rajesh Sharma)",
          questions: [
            "Can you confirm your name, occupation, and the nature of your business relationship with the accused, Mr. Anil Kumar?",
            "What was the total value of goods supplied to Mr. Kumar between January and March 2025, and how was the payment agreed upon?",
            "Did Mr. Kumar issue a cheque (Cheque No. 123456, dated April 15, 2025) to clear the outstanding amount of ₹50,00,000?",
            "Can you describe the circumstances under which the cheque was handed over to you?",
            "When and through which bank did you present the cheque for encashment?",
            "What was the outcome when the cheque was presented, and did you receive a cheque return memo?",
            "Can you confirm the date and contents of the cheque return memo issued by XYZ Bank?",
            "Did you send a legal notice to Mr. Kumar demanding payment after the cheque was dishonoured?",
            "Can you confirm the date of dispatch and delivery of the legal notice to Mr. Kumar?",
            "Did Mr. Kumar respond to the notice or make the payment within the 15-day period?",
            "Are the invoices and delivery receipts submitted as evidence accurate and related to the goods supplied to Mr. Kumar?",
            "Was there any dispute raised by Mr. Kumar regarding the quality or delivery of the goods prior to the cheque’s dishonour?"
          ]
        },
        {
          heading: "2. For Complainant’s Witness (Mr. Vikram Singh, Employee)",
          questions: [
            "Can you state your name, occupation, and role at Sharma Grocery Store during January–March 2025?",
            "Were you involved in the delivery of goods worth ₹50,00,000 to Mr. Anil Kumar?",
            "Can you verify the dates and quantities of goods delivered, as per the invoices submitted?",
            "Did you observe any discussions or agreements between Mr. Sharma and Mr. Kumar regarding payment terms?",
            "Were you present when Mr. Kumar handed over the cheque to Mr. Sharma? If so, what was the stated purpose of the cheque?",
            "Can you identify the person who presented the cheque for encashment at the bank?",
            "Are you aware of any prior transactions between Mr. Sharma and Mr. Kumar that might relate to this cheque?"
          ]
        },
        {
          heading: "3. For Bank Official (XYZ Bank)",
          questions: [
            "Can you confirm your name, designation, and role at XYZ Bank in April 2025?",
            "Was the Cheque No. 123456, drawn by Mr. Kumar, presented for encashment on April 16, 2025?",
            "What was the reason stated in the cheque return memo for dishonour?",
            "Can you confirm the account balance of Mr. Anil Kumar at the time the cheque was presented?",
            "Did Mr. Kumar have any arrangement with the bank to cover the cheque amount of ₹50,00,000?",
            "Can you verify the authenticity of the cheque return memo submitted as evidence?",
            "Were there any subsequent attempts by Mr. Kumar to deposit funds to honour the cheque after its dishonour?"
          ]
        }
      ]
    },
    {
      title: "B. Questions for Cross-Examination (By Defense Advocate)",
      subSections: [
        {
          heading: "1. For Complainant (Mr. Rajesh Sharma)",
          questions: [
            "Can you confirm the exact dates and terms of the agreement for supplying goods to Mr. Kumar? Were these terms documented in writing?",
            "Did Mr. Kumar not indicate that the cheque was issued as a security for future transactions rather than for an existing debt?",
            "Were there any prior disputes with Mr. Kumar regarding the quality or quantity of the goods supplied?",
            "Can you produce any written communication from Mr. Kumar acknowledging the debt of ₹50,00,000?",
            "Is it possible that the cheque was given to you as part of a different transaction or as a precautionary measure?",
            "Did you verify Mr. Kumar’s bank account status before accepting the cheque?",
            "Was the legal notice sent to Mr. Kumar’s correct and current address? Can you confirm the proof of delivery?",
            "Have you filed any other legal proceedings against Mr. Kumar for similar or related transactions?",
            "Are you aware of any financial disputes or litigation involving your business that might affect your credibility in this case?",
            "Did you attempt to resolve the matter with Mr. Kumar informally before filing this complaint?"
          ]
        },
        {
          heading: "2. For Complainant’s Witness (Mr. Vikram Singh)",
          questions: [
            "Can you confirm your employment history with Mr. Sharma and any personal or financial interest in this case?",
            "Were you directly responsible for preparing or verifying the invoices for the goods supplied to Mr. Kumar?",
            "Did you personally deliver goods to Mr. Kumar, or were they handled by another employee or third party?",
            "Have you ever been involved in criminal history, including a conviction under Section 420 IPC (Pw-II-001 Bank Fraud)?",
            "Have you testified before in similar cheque bounce cases (e.g., CW-003, CW-004), and were your statements consistent?",
            "You’ve said to the court that the cheque was issued as a security rather than for payment of goods; can you confirm this?",
            "Did you know at the time of delivery that Mr. Kumar were inspected for faulty product quality by Mr. Sharma?",
            "Are you aware of Mr. Kumar’s financial status or banking arrangements during April 2025?",
            "Have you witnessed any prior transactions between Mr. Kumar and Mr. Sharma, and were they disputed?"
          ]
        },
        {
          heading: "3. For Bank Official (XYZ Bank)",
          questions: [
            "Can you confirm if Mr. Kumar’s account had sufficient funds shortly before or after the cheque was presented?",
            "Were there any technical issues with the cheque presentation process that could have led to its dishonour?",
            "Is it possible that the cheque was returned due to reasons other than insufficient funds, such as a signature mismatch?",
            "Did Mr. Kumar contact the bank after the cheque’s dishonour to address the issue or deposit funds?",
            "Are you aware of any prior instances where cheques issued by Mr. Kumar were dishonoured by your bank?",
            "Can you confirm the exact date and time when the cheque return memo was issued and communicated to Mr. Sharma’s bank?"
          ]
        }
      ]
    },
    {
      title: "C. Questions for Examination-in-Chief (By Defense Advocate)",
      subSections: [
        {
          heading: "1. For Accused (Mr. Anil Kumar)",
          questions: [
            "Can you confirm your name, occupation, and relationship with the complainant, Mr. Rajesh Sharma?",
            "Did you issue Cheque No. 123456 to Mr. Sharma, and if so, for what purpose?",
            "Was the cheque intended to discharge an existing debt, or was it issued as a security for potential future transactions?",
            "Can you describe the nature and quality of the goods supplied by Mr. Sharma between January and March 2025?",
            "Did you raise any complaints about the goods supplied or delivery with Mr. Sharma before the cheque was presented?",
            "Did you receive the legal notice sent by Mr. Sharma on April 25, 2025? If yes, why did you not respond or make payment?",
            "Were there sufficient funds in your bank account to honour the cheque at any point before or after its presentation?",
            "Have you attempted to resolve this dispute with Mr. Sharma outside of court proceedings?",
            "Are there any documents or communications that support your claim that the goods were not as per the agreed standard?",
            "Have you been involved in similar disputes with other suppliers, and how were they resolved?"
          ]
        },
        {
          heading: "2. For Defense Witness (If Any, e.g., Business Associate of Mr. Kumar)",
          questions: [
            "Can you confirm your name, occupation, and relationship with Mr. Anil Kumar?",
            "Can you describe the transaction between Mr. Kumar and Mr. Sharma involving goods worth ₹50,00,000?",
            "Did Mr. Kumar ever mention that the cheque issued to Mr. Sharma was for security purpose rather than for payment?",
            "Can you confirm if any goods were damaged or inspected related to the goods supplied by Mr. Sharma?",
            "Did you personally inspect the goods supplied by Mr. Sharma or verify their quality?",
            "Are you aware of any disputes between Mr. Kumar and Mr. Sharma regarding the delivery or payment for goods?",
            "Did you witness any prior transactions between Mr. Kumar and Mr. Sharma, and were they disputed?"
          ]
        }
      ]
    },
    {
      title: "D. Questions for Cross-Examination (By Complainant’s Advocate)",
      subSections: [
        {
          heading: "1. For Accused (Mr. Anil Kumar)",
          questions: [
            "Can you produce any written agreement stating that the cheque was issued as a security and not for a debt?",
            "Why did you issue a post-dated cheque if there was no intention to clear an existing liability?",
            "Did you inform Mr. Sharma in writing about any issue with the goods before the cheque was presented?",
            "Can you confirm details of your bank account with XYZ Bank in April 2025, particularly regarding available funds?",
            "Why did you fail to respond to the legal notice sent by Mr. Sharma on April 26, 2025?",
            "How long have you issued cheques to Mr. Sharma or other parties that were dishonoured in the past?",
            "Can you provide evidence of any alternative payments made to Mr. Sharma for the goods supplied?",
            "Is it correct that you continued to do business with Mr. Sharma even after alleging issues with the goods?",
            "Are you aware of any criminal or civil cases against you involving similar financial disputes?",
            "Did you take any step to stop the cheque’s presentation or inform the bank of your intentions?"
          ]
        },
        {
          heading: "2. For Defense Witness (If Any)",
          questions: [
            "How long have you known Mr. Kumar, and do you have any financial or personal interest in this case?",
            "Were you directly involved in the transaction between Mr. Kumar and Mr. Sharma? If not, how did you gain knowledge of it?",
            "Can you produce any documents or communications supporting Mr. Kumar’s claim that the cheque was for security purposes?",
            "Did you personally inspect the goods supplied by Mr. Sharma or verify their quality?",
            "Are you aware of Mr. Kumar’s banking history or any prior instances of cheque dishonour?",
            "Have you testified in other cases involving Mr. Kumar, and were your statements consistent?",
            "Can you confirm the exact dates and details of any discussions you had with Mr. Kumar about this transaction?"
          ]
        }
      ]
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
      <div className="bg-white max-w-4xl w-full max-h-[90vh] rounded-lg shadow-xl overflow-y-auto p-6 relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 sticky top-0 bg-white py-2 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">
            List of Questions for Trial in Cheque Bounce Case
          </h2>
          <button onClick={() => onClose(false)}>
            <X size={22} className="text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {sections.map((section, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold text-webprimary mb-3">
                {section.title}
              </h3>
              {section.subSections.map((sub, j) => (
                <div key={j} className="mb-5">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {sub.heading}
                  </h4>
                  <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                    {sub.questions.map((q, k) => (
                      <li key={k}>{q}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionsPopup;
