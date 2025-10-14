import React, { useState } from "react";
import FormButton from "../../../common/FormButton";
import QuestionsPopup from "./popup/QuestionsPopup";
import { Dialog } from "@mui/material";
import ProposedEvidencesPopup from "./popup/ProposedEvidencesPopup";
import InvestigationPlanPopup from "./popup/InvestigationPlanPopup";
import GanttChartRecharts from "./popup/GanttChartRecharts";

const CaseProfile = () => {

  const [QuestionState, setQuestionState] = useState(false);
  const [ProposedEvidencesState, setProposedEvidencesState] = useState(false);
  const [InvestigationState, setInvestigationState] = useState(false);
  const [InvestigationTrackerState, setInvestigationTrackerState] = useState(false);
  const [GanttChartRechartsState, setGanttChartRechartsState] = useState(false);

  return (
    <div className="container p-8">
      <h2 className="text-2xl font-semibold my-4 text-gray-800">
        Case Profile: Cheque Bounce Case (Pre-Trial Stage)
      </h2>
      <div className=" mx-auto bg-white p-8 rounded-2xl shadow-card my-10">
        {/* Case Details */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2 text-gray-800 pb-1">
            Case Details
          </h2>
          <table className="w-full text-sm border border-gray-200 rounded-lg">
            <tbody>
              {[
                ["Case Number", "CR/138/2025/DEL/056"],
                ["Court", "Metropolitan Magistrate Court, Tis Hazari, Delhi"],
                ["Case Title", "Mr. Rajesh Sharma v. Mr. Anil Kumar"],
                ["Filing Date", "May 20, 2025"],
                ["Legal Provision", "Section 138, Negotiable Instruments Act, 1881"],
                ["Next Hearing", "June 10, 2025 (Summons issuance and pre-trial hearing)"],
                ["Case Status", "Pre-Trial (Summons issued to the accused)"],
              ].map(([field, value], index) => (
                <tr
                  key={index}
                  className={`border-t border-gray-200 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                >
                  <td className="p-2 font-medium w-1/3 text-gray-700">{field}</td>
                  <td className="p-2 text-gray-800">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Parties Involved */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2 text-gray-800 pb-1">
            Parties Involved
          </h2>
          <table className="w-full text-sm border border-gray-200 rounded-lg">
            <tbody>
              <tr className="bg-gray-50 border-t border-gray-200">
                <td className="p-2 font-medium w-1/3 text-gray-700">Complainant</td>
                <td className="p-2 text-gray-800">
                  Mr. Rajesh Sharma, Age 42, Proprietor of Sharma Grocery Store, R/O Flat
                  No. 12, Karol Bagh, Delhi – 110005
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="p-2 font-medium text-gray-700">Accused</td>
                <td className="p-2 text-gray-800">
                  Mr. Anil Kumar, Age 38, Trader, R/O House No. 45, Rohini Sector-8, Delhi
                  – 110085
                </td>
              </tr>
              <tr className="bg-gray-50 border-t border-gray-200">
                <td className="p-2 font-medium text-gray-700">Complainant’s Advocate</td>
                <td className="p-2 text-gray-800">
                  Ms. Priya Mehra, Advocate, Bar Council No. DL/456/2010
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="p-2 font-medium text-gray-700">Accused’s Advocate</td>
                <td className="p-2 text-gray-800">
                  Not yet appointed (Accused to confirm representation at first hearing)
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Case Background */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2 text-gray-800 pb-1">
            Case Background
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Mr. Rajesh Sharma, a grocery store owner, supplied goods worth ₹5,00,000 to Mr.
            Anil Kumar, a local trader, between January and March 2025. To settle the
            outstanding amount, Mr. Kumar issued a post-dated cheque (Cheque No. 123456,
            dated April 15, 2025) drawn on XYZ Bank, Delhi, in favor of Mr. Sharma. The
            cheque was presented for encashment on April 16, 2025, but was returned unpaid
            on April 20, 2025, with the bank’s remark “Insufficient Funds.” A cheque return
            memo was received by Mr. Sharma on April 22, 2025.
          </p>
        </section>

        {/* Procedural History */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2 text-gray-800 pb-1">
            Procedural History
          </h2>
          <ol className="list-decimal list-inside text-sm text-gray-700 space-y-2">
            <li>
              <strong>Demand Notice:</strong> On April 25, 2025, Mr. Sharma’s advocate sent
              a legal notice to Mr. Kumar demanding payment of ₹5,00,000 within 15 days.
            </li>
            <li>
              <strong>Non-Compliance:</strong> Mr. Kumar neither made the payment nor
              responded by May 12, 2025.
            </li>
            <li>
              <strong>Complaint Filed:</strong> On May 20, 2025, a complaint under Section
              138 was filed before the Metropolitan Magistrate Court, Delhi.
            </li>
            <li>
              <strong>Preliminary Verification:</strong> On May 25, 2025, the court
              conducted a preliminary hearing and issued summons to Mr. Kumar for June 10,
              2025.
            </li>
          </ol>
        </section>

        {/* Current Status */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2 text-gray-800 pb-1">
            Current Status (Pre-Trial)
          </h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>The court has taken cognizance of the offense under Section 138, NI Act.</li>
            <li>Summons have been issued to Mr. Anil Kumar to appear on June 10, 2025.</li>
            <li>
              The accused may file for bail or challenge the complaint’s maintainability.
            </li>
          </ul>
        </section>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 justify-center">


          <FormButton className="px-4 py-2  hover:bg-active transition"
            onClick={() => setQuestionState(true)}
          >
            Question List
          </FormButton>
          <FormButton className="px-4 py-2  hover:bg-active transition"
            onClick={() => setProposedEvidencesState(true)}
          >
            Proposed Evidences
          </FormButton>
          <FormButton className="px-4 py-2  hover:bg-active transition"
            onClick={() => setInvestigationState(true)}
          >
            Investigation Plan
          </FormButton>
          <FormButton className="px-4 py-2  hover:bg-active transition"
            onClick={() => setGanttChartRechartsState(true)}
          >
            Investigation Tracker
          </FormButton>
        </div>
      </div>

      <Dialog
        open={QuestionState}
        onClose={() => setQuestionState(false)}
        aria-describedby="witness-record-history"
        maxWidth="md"
      >
        <div id="witness-record-history">
          <QuestionsPopup onClose={setQuestionState} />
        </div>
      </Dialog>

      <Dialog
        open={ProposedEvidencesState}
        onClose={() => setProposedEvidencesState(false)}
        aria-describedby="witness-record-history"
        maxWidth="md"
      >
        <div id="witness-record-history">
          <ProposedEvidencesPopup onClose={setProposedEvidencesState} />
        </div>
      </Dialog>

      <Dialog
        open={InvestigationState}
        onClose={() => setInvestigationState(false)}
        aria-describedby="witness-record-history"
        maxWidth="md"
      >
        <div id="witness-record-history">
          <InvestigationPlanPopup onClose={setInvestigationState} />
        </div>
      </Dialog>

      <Dialog
        open={GanttChartRechartsState}
        onClose={() => setGanttChartRechartsState(false)}
        aria-describedby="witness-record-history"
        maxWidth='w-[800px]'
      >
        <div id="witness-record-history">
          <GanttChartRecharts onClose={setGanttChartRechartsState} />
        </div>
      </Dialog>
    </div>
  );
};

export default CaseProfile;
