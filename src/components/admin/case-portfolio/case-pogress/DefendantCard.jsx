import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FormButton from "../../../common/FormButton";
import EvidenceCard from "./EvidenceCard";
import WitnessCard from "./WitnessCard";
import DetailedCaseRecords from "./DetailedCaseRecords";
import { Dialog } from '@mui/material';
import DetailedWitnessHistory from "./DetailedWitnessHistory";
import ClosingStatements from "./ClosingStatements";
import OpeningStatements from "./OpeningStatements";
import WitnessSanctityTab from "./witness-popup/WitnessSanctityTab";
import PlaintiffSummary from "./witness-popup/PlaintiffSummary";
import WitnessTestimonyTab from "./witness-popup/WitnessTestimonyTab";
import ExaminationPopup from "./witness-popup/ExaminationPopup";


const StatementsBtns = ["Add Opening Statements",
  "Add Witness Testimonies",
  "Add Evidence Presentations",
  "Add Closing Statements",]

const hearingsData = [
  { date: "06/01/2025", day: "Monday", status: "Absent", color: "bg-yellow-400" },
  { date: "08/02/2025", day: "Monday", status: "Adjournment", color: "bg-red-500" },
  { date: "12/03/2025", day: "Monday", status: "Hearing", color: "bg-green-600" },
  { date: "20/04/2025", day: "Monday", status: "Strike", color: "bg-blue-600" },
  { date: "20/05/2025", day: "Monday", status: "Hearing", color: "bg-green-600" },
  { date: "20/04/2025", day: "Monday", status: "Strike", color: "bg-blue-600" },

];

const tabs = [
  { id: 'opening', label: 'Opening Statements' },
  { id: 'evidence', label: 'Evidence Presentations' },
  { id: 'witness', label: 'Witness Testimonies' },
  { id: 'closing', label: 'Closing Statements' }
];


const DefendantCard = () => {
  const [activeTab, setActiveTab] = useState('opening');
  const [detailCaseRecord, setDetailCaseRecord] = useState(false);
  const [witnessRecordHistory, setWitnessRecordHistory] = useState(false);
  const [WitnessTestimony, setWitnessTestimony] = useState(false);
  const [WitnessSanctityState, setWitnessSanctitystate] = useState(false);
  const [PlaintiffSummaryState, setPlaintiffSummaryState] = useState(false);
  const [ExaminationState, setExaminationState] = useState(false);


  function renderContent() {
    switch (activeTab) {
      case "opening":
        return <><OpeningStatements activeTab={activeTab} /> </>;
      case "evidence":
        return <><EvidenceCard /> </>;
      case "witness":
        return <><WitnessCard
          setDetailCaseRecord={setDetailCaseRecord}
          setWitnessRecordHistory={setWitnessRecordHistory}
          setWitnessTestimony={setWitnessTestimony}
          setWitnessSanctitystate={setWitnessSanctitystate}
          setPlaintiffSummaryState={setPlaintiffSummaryState}
          setExaminationState={setExaminationState}
        /> </>;
      case "closing":
        return <><ClosingStatements /> </>;
      default:
        return null;
    }

  }
  return (
    <>
      {/* ====================plaintiff-difenderCard============== */}
      <div className="">
        <div className="border rounded-xl p-5 shadow-sm">
          <h1 className="font-semibold text-lg mb-4">Defendant Submissions</h1>
          <div>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-3 px-4 rounded font-medium transition-colors ${activeTab === tab.id
                    ? 'bg-webprimary text-white'
                    : 'bg-blue-50 text-webprimary hover:bg-blue-100'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>

      {/* =================witness-record-popup================ */}
      <Dialog
        open={detailCaseRecord}
        onClose={() => setDetailCaseRecord(false)}
        aria-describedby="witness-record"
        maxWidth="md"
      >
        <div id="witness-record">
          <DetailedCaseRecords closePopup={setDetailCaseRecord} />
        </div>
      </Dialog>

      {/* =================witness-record-history-popup================ */}
      <Dialog
        open={witnessRecordHistory}
        onClose={() => setWitnessRecordHistory(false)}
        aria-describedby="witness-record-history"
        maxWidth="md"
      >
        <div id="witness-record-history">
          <DetailedWitnessHistory closePopup={setWitnessRecordHistory} />
        </div>
      </Dialog>

      { /* =================witness-testimony-popup================ */}
      <Dialog
        open={WitnessTestimony}
        onClose={() => setWitnessTestimony(false)}
        aria-describedby="witness-testimony-tab"
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "800px",
            },
          },
        }}
      >
        <div id="witness-testimony-tab">
          <WitnessTestimonyTab closePopup={setWitnessTestimony} />
        </div>
      </Dialog>


      { /* ================examination-popup================ */}
      <Dialog
        open={ExaminationState}
        onClose={() => setExaminationState(false)}
        aria-describedby="examination-Popup"
      >
        <div id="examination-Popup">
          <ExaminationPopup closePopup={setExaminationState} />
        </div>
      </Dialog>

      { /* =================witness-Sanctity-popup================ */}
      <Dialog
        open={WitnessSanctityState}
        onClose={() => setWitnessSanctitystate(false)}
        aria-describedby="witness-SanctityTab"
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "800px",
            },
          },
        }}
      >
        <div id="witness-SanctityTab">
          <WitnessSanctityTab closePopup={setWitnessSanctitystate} />
        </div>
      </Dialog>
      { /* =================plaintiff-Summary-popup================ */}
      <Dialog
        open={PlaintiffSummaryState}
        onClose={() => setPlaintiffSummaryState(false)}
        aria-describedby="witness-SanctityTab"
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "800px",
            },
          },
        }}
      >
        <div id="witness-SanctityTab">
          <PlaintiffSummary closePopup={setPlaintiffSummaryState} />
        </div>
      </Dialog>
    </>
  )
}

export default DefendantCard
