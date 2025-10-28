import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FormButton from "../../../common/FormButton";
import { Dialog } from '@mui/material';
import DefendantCard from "./DefendantCard";
import PlaintiffCard from "./PlaintiffCard";
import NextHearingsPopup from "./NextHearingsPopup";
import AdjournmentPopup from "./AdjournmentPopup";
import checkImg from "../../../../assets/images/check.jpg"
import { IoClose } from "react-icons/io5";
import DriveSafeGauge from "../../dashboard/charts/DriveSafeGauge";
import DonutScore from "../../dashboard/charts/DonutScore";
import QuickActions from "../../dashboard/charts/QuickActions";


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
  { date: "30/04/2025", day: "Monday", status: "Strike", color: "bg-blue-600" },

];


const CaseProgressDashboard = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [nextHearingsState, setNextHearingsState] = useState(false);
  const [adjournmentState, setAdjournmentState] = useState(false);
  const [ActiveDate, setActiveDate] = useState(null);
  const [checkFileModal, setCheckFileModal] = useState(false);
  const handleScroll = (direction) => {
    setScrollIndex((prev) =>
      direction === "left" ? Math.max(prev - 1, 0) : Math.min(prev + 1, hearingsData.length - 1)
    );
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="container mx-auto p-6 bg-white rounded-2xl shadow-md my-10 space-y-8">
      {/* Top Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-700 text-white p-4 rounded-xl lg:py-[25px]">
          <p className="text-lg font-medium">Case Lifecycle</p>
          <h3 className="text-2xl font-semibold mt-1">28 Months <br />(2 Yrs 4 Months)</h3>
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
          <p className="text-lg font-medium">Case Stack Value </p>
          <h3 className="text-2xl font-semibold mt-1">INR 28.0 Cr</h3>
        </div>

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-5 gap-3 ">
        <div className="col-span-1 bg-white  p-3 rounded border border-gray-300" >
          <div>
            <DriveSafeGauge rank={12} lastYearRank={13} />
          </div>
        </div>
        <div className="col-span-2  px-3  bg-white rounded border border-gray-300 ">
          <DonutScore
            driverScore={400}
            vehicleScore={180}
            behaviourScore={720}
            totalScore={900}
          />
        </div>

        <div className="col-span-2  rounded border border-gray-300 bg-white ">
          <QuickActions
            actions={[
              { label: "Download Case Files", onClick: () => handleDownload("Health Report 1") },
              { label: "Download Witness Testimony Report", onClick: () => handleDownload("Health Report 2") },
              { label: "Download Investigation Report", onClick: () => handleDownload("Health Report 3") },
            ]}
          />
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
          onClick={() => setAdjournmentState(true)}
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
            className="flex-wrap flex   items-center justify-between transition-transform duration-300 py-2 relative"
            style={{ transform: `translateX(-${scrollIndex * 180}px)` }}
          >
            {hearingsData.map((item, i) => (
              <div key={i + 1} className="flex gap-4">

                <button className={`py-2 px-3 rounded-lg shadow-card  space-y-1 w-full
                    ${ActiveDate === item.date
                    ? 'bg-webprimary text-white border-primary'
                    : 'bg-white text-webprimary border-webprimary'
                  }

                    `} onClick={() => setActiveDate(item.date)}>
                  <div className={`w-4 h-4 ${item.color} rounded-full border-2 border-white shadow `}  ></div>
                  <p className="font-semibold text-sm">{item.date}</p>
                  <div className="flex gap-3">
                    <p className="text-xs ">{item.day}</p>
                    <div className=" ps-2 text-xs "><p> 24 days </p></div>
                  </div>
                </button>


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
        <PlaintiffCard setCheckFileModal={setCheckFileModal} checkFileName={"Cheque, Return Memo, Notice, Invoices, Affidavits (Tasks 1–9 from evidence plan)"} />
        <DefendantCard
          setCheckFileModal={setCheckFileModal} checkFileName={"Cheque, Return Memo, Notice, Invoices, Affidavits (Tasks 1–9 from evidence plan)"}
        />
      </div>


      <Dialog
        open={nextHearingsState}
        onClose={() => setNextHearingsState(false)}
      >
        <div>
          <NextHearingsPopup onClose={setNextHearingsState} />
        </div>
      </Dialog>

      <Dialog
        open={adjournmentState}
        onClose={() => setAdjournmentState(false)}
        sx={{ "& .MuiDialog-paper": { maxWidth: '800px', } }}
      >
        <div>
          <AdjournmentPopup onClose={setAdjournmentState} />
        </div>
      </Dialog>

      <Dialog
        open={checkFileModal}
        onClose={() => setCheckFileModal(false)}
      >
        <div>
          <div onClick={() => setCheckFileModal(false)} className='flex justify-end p-4'>
            <IoClose size={24} />
          </div>
          <div className='flex justify-center p-12'  >
            <img src={checkImg || null} alt="img" className='w-full h-auto' />
          </div>
        </div>
      </Dialog>

    </div>
  );
};

export default CaseProgressDashboard;
