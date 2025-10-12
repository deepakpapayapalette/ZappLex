import React, { useState } from "react";
import { CalendarDays, FileImage } from "lucide-react";

const EvidenceCard = () => {
  const [relevancy, setRelevancy] = useState(4);

  const scores = [
    { id: 1, color: "bg-red-600" },
    { id: 2, color: "bg-orange-400" },
    { id: 3, color: "bg-yellow-300" },
    { id: 4, color: "bg-green-300" },
    { id: 5, color: "bg-green-600" },
  ];

  const handleOpen = () => {
    alert("Opening file: Blood-Stained Knife.png");
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
        <div className="flex items-center justify-between bg-white rounded-lg p-2 shadow-sm
        ">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-lg border">
              <FileImage className="text-red-500" size={20} />
            </div>
            <div>
              <p className="text-webprimary font-semibold text-sm hover:underline cursor-pointer">
                Blood-Stained Knife.png
              </p>
              <p className="text-xs text-gray-500">
                16 Sep 2025 at 02:30 PM • 4.8mb
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
        <div className="relative flex overflow-hidden rounded-md shadow-sm">
          {scores.map((score) => (
            <button
              key={score.id}
              className={`flex-1 py-2 text-center text-xs text-white font-bold ${score.color} ${relevancy === score.id ? "ring-2 ring-black" : ""
                }`}
              onClick={() => setRelevancy(score.id)}
            >
              {`0${score.id}`}
            </button>
          ))}

        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
        {[
          "Summary",
          "Doc Log(20)",
          "Evidence Sanctity Compliance",
          "Q&A",
        ].map((btn, i) => (
          <button
            key={i}
            className="px-3 py-2 bg-white border border-blue-200 rounded-lg text-sm text-webprimary font-medium hover:bg-blue-100 transition"
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EvidenceCard;
