import React, { useState } from "react";
import { CalendarDays, FileImage } from "lucide-react";
import EvedenceQA from "./evidence-popup/EvedenceQA";
import { Dialog } from "@mui/material";
import EvidenceLog from "./evidence-popup/EvidenceLog";
import EvidenceSanctity from "./evidence-popup/EvidenceSanctity";
import EvidenceSummary from "./evidence-popup/EvidenceSummary";

const EvidenceCard = ({ checkName, checkFile, checkFileName, setCheckFileModal  }) => {
  const [relevancy, setRelevancy] = useState(5);
  const [EvSummaryState, setEvSummaryState] = useState(false);
  const [EvidenceLogState, setEvidenceLogState] = useState(false);
  const [EvidenceSanctityState, setEvidenceSanctityState] = useState(false);
  const [EvedenceQAState, setEvedenceQAState] = useState(false);


  const scores = [
    { id: 1, color: "bg-[#c00000]" },
    { id: 2, color: "bg-[#ffc001]" },
    { id: 3, color: "bg-[#feff99]" },
    { id: 4, color: "bg-[#92d14f]" },
    { id: 5, color: "bg-[#107c42]" },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = checkFile;
    link.download = "image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  const handleOpen = () => {

    // handleDownload();
    // setCheckModal(true);
    setCheckFileModal(true);

  };

  return (
    <div className="w-full bg-blue-50 rounded-2xl shadow-sm p-5 space-y-4 border border-blue-100">
      {/* Header */}
      <div>
        <h2 className="font-semibold text-gray-800">
          Expert report from interior design consultant
        </h2>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <CalendarDays size={16} className="mr-1" />
          <span>08-Oct-2025</span>
        </div>
      </div>

      {/* Physical Evidence */}
      <div>
        <p className="font-medium text-gray-700 mb-2">Physical Evidence</p>
        <div className="flex items-center justify-between
        ">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-lg border">
              <FileImage className="text-red-500" size={20} />
            </div>
            <div>
              <p className="text-webprimary font-semibold text-sm hover:underline cursor-pointer">
                {checkName || null}
              </p>
              <p className="text-xs text-gray-500">
                {checkFileName}
              </p>
            </div>
          </div>
          <button
            onClick={handleOpen}
            className="px-3 py-1 border border-webprimary text-webprimary text-sm rounded-md font-medium hover:bg-active hover:text-white transition"
          >
            Open
          </button>
        </div>
      </div>

      {/* Relevancy Score */}
      <div>
        <p className="font-medium text-gray-700 mb-2">Relevancy Score</p>
        <div className="relative flex overflow-hidden rounded-md shadow-sm py-1">
          {scores.map((score) => (
            <button
              key={score.id}
              className={` relative flex-1 py-2 text-center text-xs text-white font-bold ${score.color} ${relevancy === score.id ? "indicator" : ""
                }`}
            // onClick={() => setRelevancy(score.id)}
            >
              {`0${score.id}`}
            </button>
          ))}

        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
        <button
          className="px-3 py-2  border border-webprimary rounded-lg text-sm text-webprimary hover:bg-webprimary hover:text-white transition"
          onClick={() => setEvSummaryState(true)}
        >
          Summary
        </button>
        <button
          className="px-3 py-2  border border-webprimary rounded-lg text-sm text-webprimary hover:bg-webprimary hover:text-white transition"
          onClick={() => setEvidenceLogState(true)}
        >
          Doc Log(20)
        </button>
        <button
          className="px-3 py-2  border border-webprimary rounded-lg text-sm text-webprimary hover:bg-webprimary hover:text-white transition"
          onClick={() => setEvidenceSanctityState(true)}
        >
          Evidence Sanctity Compliance
        </button>
        <button
          className="px-3 py-2  border border-webprimary rounded-lg text-sm text-webprimary hover:bg-webprimary hover:text-white transition"
          onClick={() => setEvedenceQAState(true)}
        >
          Q&A
        </button>
      </div>



      <Dialog
        open={EvSummaryState}
        onClose={() => setEvSummaryState(false)}
      >
        <div>
          <EvidenceSummary onClose={setEvSummaryState} />
        </div>
      </Dialog>

      <Dialog
        open={EvidenceLogState}
        onClose={() => setEvidenceLogState(false)}
      >
        <div>
          <EvidenceLog onClose={setEvidenceLogState} />
        </div>
      </Dialog>

      <Dialog
        open={EvidenceSanctityState}
        onClose={() => setEvidenceSanctityState(false)}
        sx={{ "& .MuiDialog-paper": { width: "100%" } }}
      >
        <div>
          <EvidenceSanctity onClose={setEvidenceSanctityState} />
        </div>
      </Dialog>

      <Dialog
        open={EvedenceQAState}
        onClose={() => setEvedenceQAState(false)}
      >
        <div>
          <EvedenceQA onClose={setEvedenceQAState} />
        </div>
      </Dialog>



    </div>
  );
};

export default EvidenceCard;
