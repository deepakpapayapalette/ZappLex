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
import DefendantCard from "./DefendantCard";
import PlaintiffCard from "./PlaintiffCard";
import NextHearingsPopup from "./NextHearingsPopup";


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


const CaseProgressDashboard = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [nextHearingsState, setNextHearingsState] = useState(false);
  const handleScroll = (direction) => {
    setScrollIndex((prev) =>
      direction === "left" ? Math.max(prev - 1, 0) : Math.min(prev + 1, hearingsData.length - 1)
    );
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-2xl shadow-md my-10 space-y-8">
      {/* Top Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-700 text-white p-4 rounded-xl lg:py-[25px]">
          <p className="text-lg font-medium">Case Lifecycle</p>
          <h3 className="text-2xl font-semibold mt-1">4Y, 3Months</h3>
        </div>
        <div className="bg-green-600 text-white p-4 rounded-xl lg:py-[25px]">
          <p className="text-lg font-medium">Total Hearings</p>
          <h3 className="text-2xl font-semibold mt-1">14</h3>
        </div>
        <div className="bg-red-600 text-white p-4 rounded-xl lg:py-[25px]">
          <p className="text-lg font-medium">Adjournments</p>
          <h3 className="text-2xl font-semibold mt-1">04</h3>
        </div>
        <div className="bg-yellow-500 text-white p-4 rounded-xl lg:py-[25px]">
          <p className="text-lg font-medium">Absent</p>
          <h3 className="text-2xl font-semibold mt-1">03</h3>
        </div>
      </div>

      {/* Next Hearing Buttons */}
      <div className="flex justify-end gap-4">
        <FormButton className="px-6 py-2 hover:bg-active transition"

          onClick={() => setNextHearingsState(true)}
        >
          Next Hearing
        </FormButton>
        <FormButton className=" hover:bg-active hover:text-white  transition"
          variant="outlined"
        >
          Adjournment
        </FormButton>
      </div>

      {/* Scrollable Timeline */}
      <div className="relative flex items-center">
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-0 z-10 p-2 bg-white shadow rounded-full hover:bg-gray-100"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="overflow-x-auto w-full px-10">
          <div
            className="flex   items-center justify-between transition-transform duration-300 py-2 relative"
            style={{ transform: `translateX(-${scrollIndex * 180}px)` }}
          >
            {hearingsData.map((item, i) => (
              <div key={i + 1} className="flex gap-4">
                <div className="flex  items-center relative py-2 px-3  rounded-lg shadow-card w-full" >
                  <div className="bg-white   space-y-1 ">
                    <div className={`w-4 h-4 ${item.color} rounded-full border-2 border-white shadow `}  ></div>
                    <p className="font-semibold text-sm">{item.date}</p>
                    <div className="flex gap-3">

                      <p className="text-xs text-gray-500">{item.day}</p>
                      <div className=" ps-2 text-xs text-gray-500"><p> 24 days </p></div>
                    </div>
                  </div>
                  {i !== hearingsData.length - 1 && (
                    <>
                      {/* <div className="hidden lg:block absolute top-[50%] left-[100%] w-[80px] h-[1px] bg-active z-0"></div> */}
                    </>)}
                </div>
              </div>))}
          </div>
        </div>
        <button
          onClick={() => handleScroll("right")}
          className="absolute right-0 z-10 p-2 bg-white shadow rounded-full hover:bg-gray-100"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Timeline Legend */}
      <div className="flex justify-end gap-6 text-sm text-gray-700 mt-2">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span> Absent
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span> Adjournment
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-green-600 rounded-full"></span> Hearing
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-blue-600 rounded-full"></span> Strike
        </div>
      </div>

      {/*===============Statements-buttons================= */}
      <div className="flex flex-wrap justify-center gap-3">
        {StatementsBtns.map((label, i) => (<FormButton key={i} className="" >
          {label}
        </FormButton>
        ))}
      </div>
      {/*===============-end-Statements-buttons================= */}

      {/* ====================plaintiff-difenderCard============== */}
      <div className="grid lg:grid-cols-2 gap-6">
        <PlaintiffCard />
        <DefendantCard />
      </div>


      <Dialog
        open={nextHearingsState}
        onClose={() => setNextHearingsState(false)}
      >
        <div>
          <NextHearingsPopup onClose={setNextHearingsState} />
        </div>
      </Dialog>

    </div>
  );
};

export default CaseProgressDashboard;
