import React, { useEffect, useState } from "react";
import { FaUserPlus, FaPlus, FaSearch } from "react-icons/fa";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Link } from "react-router-dom";
// Removed unused allCases array as we now use localStorage data

const CaseList = () => {
  const [activeFilter, setActiveFilter] = useState("today");
  const [searchTerm, setSearchTerm] = useState("");
  const [getCaseLocal, setgetCaseLocal] = useState([]);
  const [relevancy, setRelevancy] = useState(4);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 24,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      partialVisibilityGutter: 16,
    },
  }

  useEffect(() => {
    const storedLocalData = JSON.parse(localStorage.getItem("regCase")) || [];
    setgetCaseLocal(storedLocalData);
    console.log("Loaded cases from localStorage:", storedLocalData);
  }, [])

  // Add a function to refresh data when localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      const storedLocalData = JSON.parse(localStorage.getItem("regCase")) || [];
      setgetCaseLocal(storedLocalData);
      console.log("Storage changed, reloaded cases:", storedLocalData);
    };

    // Listen for storage events (when localStorage changes in other tabs)
    window.addEventListener('storage', handleStorageChange);

    // Also listen for custom events (when localStorage changes in same tab)
    window.addEventListener('caseAdded', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('caseAdded', handleStorageChange);
    };
  }, [])
  // Filter cases based on selected time period
  const getFilteredCases = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return getCaseLocal.filter(caseItem => {
      const caseDate = new Date(caseItem.dateAdded || caseItem.dateCreated);
      caseDate.setHours(0, 0, 0, 0);

      // Search filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch =
          caseItem.caseNo.toLowerCase().includes(searchLower) ||
          caseItem.plaintiff.toLowerCase().includes(searchLower) ||
          caseItem.defendant.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }

      // Date filter
      if (activeFilter === "today") {
        return caseDate.getTime() === today.getTime();
      } else if (activeFilter === "week") {
        const weekAgo = new Date(today);
        weekAgo.setDate(today.getDate() - 7);
        return caseDate >= weekAgo && caseDate <= today;
      } else if (activeFilter === "month") {
        const monthAgo = new Date(today);
        monthAgo.setMonth(today.getMonth() - 1);
        return caseDate >= monthAgo && caseDate <= today;
      }
      return true;
    });
  };

  const filteredCases = getFilteredCases();

  // const getComplianceColor = (score) => {
  //   const colors = {
  //     "useless": "bg-red-600 text-white",
  //     "worth": "bg-yellow-500 text-white",
  //     "not-good": "bg-orange-500 text-white",
  //     "good": "bg-green-500 text-white",
  //     "better": "bg-green-700 text-white"
  //   };
  //   return colors[score] || "bg-gray-300 text-gray-700";
  // };

  // const getComplianceLabel = (score) => {
  //   const labels = {
  //     "useless": "1",
  //     "worth": "2",
  //     "not-good": "3",
  //     "good": "4",
  //     "better": "5"
  //   };
  //   return labels[score] || score;
  // };
  const scores = [
    { id: 1, color: "bg-[#c00000]" },
    { id: 2, color: "bg-[#ffc001]" },
    { id: 3, color: "bg-[#feff99]" },
    { id: 4, color: "bg-[#92d14f]" },
    { id: 5, color: "bg-[#107c42]" },
  ];

  return (
    <section className="space-top">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className=" rounded-lg py-4 mb-3">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">Case List</h1>

            <div className="flex flex-wrap items-center gap-3">
              {/* Filter Buttons */}
              <div className="flex items-center gap-3">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="filter"
                    checked={activeFilter === "today"}
                    onChange={() => setActiveFilter("today")}
                    className="w-5 h-5 text-primary"
                  />
                  <span className="text-gray-700 font-medium">Today</span>
                </label>

                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="filter"
                    checked={activeFilter === "week"}
                    onChange={() => setActiveFilter("week")}
                    className="w-5 h-5 text-primary"
                  />
                  <span className="text-gray-700 font-medium">This Week</span>
                </label>

                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="filter"
                    checked={activeFilter === "month"}
                    onChange={() => setActiveFilter("month")}
                    className="w-5 h-5 text-primary"
                  />
                  <span className="text-gray-700 font-medium">This Month</span>
                </label>
              </div>

              {/* Search Icon */}
              {/* <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                <FaSearch className="text-gray-600" />
              </button> */}
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search by case number, court, case type, plaintiff, or defendant..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-1">
          <p className="text-webprimary text-xs">
            Showing <span className="font-semibold">{filteredCases.length}</span> case(s)
            {activeFilter === "today" && " from today"}
            {activeFilter === "week" && " from this week"}
            {activeFilter === "month" && " from this month"}
          </p>
          {/* <p className="text-gray-500 text-xs">
            Total cases in localStorage: {getCaseLocal.length} |
            Filtered cases: {filteredCases.length}
          </p> */}
        </div>

        {/* Cases Grid */}
        {filteredCases.length > 0 ? (
          <div className="">
            <Carousel
              responsive={responsive}
              infinite
              keyBoardControl
              swipeable
              draggable
              showDots={false}
              containerClass="pb-4 pt-4"
              itemClass="ps-1 pt-2 pe-4"
              arrows={false}
              renderButtonGroupOutside={false}
              partialVisible
            >
              {filteredCases.map((caseItem, index) => (
                <div key={caseItem.id || index} className="bg-white rounded-xl border border-gray-300 hover:shadow-card transition-shadow pb-3">
                  {/* Case Header */}
                  <div className="px-3 py-4 ">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Case No.</h3>
                    <p className="text-gray-700 mb-4">{caseItem.caseNumber || caseItem.caseNo || "N/A"}</p>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Plaintiff</h4>
                        <p className="text-gray-600 text-sm">{caseItem.plaintiff || "Rajesh Kumar"}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Defendant</h4>
                        <p className="text-gray-600 text-sm">{caseItem.defendant || "Amit Singh"}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-between">
                      <Link className="max-w-full" to={`/admin/case-portfolio/add-parties/`} onClick={() => console.log('Navigating to Add Parties')}>
                        <button className="flex-1 border-2 border-webprimary text-webprimary hover:bg-webprimary2  font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center space-x-2 text-sm w-full">
                          <FaUserPlus size={14} />
                          <span>Add Parties</span>
                        </button>
                      </Link>
                      <Link className="max-w-full" to={`/admin/case-portfolio/case-profiling/`} onClick={() => console.log('Navigating to Case Profiling')}>
                        <button className="border-2 border-webprimary flex-1 bg-webprimary hover:bg-active text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center space-x-2 text-sm w-full"
                        >
                          <FaPlus size={14} />
                          <span>Case Profiling</span>
                        </button>
                      </Link>
                    </div>
                  </div>

                  {/* Court Details */}
                  <div className="px-2 py-3 bg-gray-50">
                    <div className="p-2 py-3 border border-gray-200 rounded-lg mb-4">
                      <h4 className="font-bold text-gray-900 mb-2">Court Name</h4>
                      <p className="text-sm text-black bg-[#def7ff] py-2 px-3">{caseItem.court || caseItem.courtName || 'District Court of Noida, Uttar Pradesh'}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="p-2 py-3 border border-gray-200 rounded-lg ">
                        <p className="text-xs font-semibold text-gray-900 mb-1">Status</p>
                        <p className="text-sm text-gray-600">{caseItem.status || caseItem.caseStatus || 'Pending'}</p>
                      </div>
                      <div className="p-2 py-3 border border-gray-200 rounded-lg ">
                        <p className="text-xs font-semibold text-gray-900 mb-1">Case Type</p>
                        <p className="text-sm text-gray-600">{caseItem.caseType || 'Criminal (Murder)'}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="p-2 py-3 border border-gray-200 rounded-lg ">
                        <p className="text-xs font-semibold text-gray-900 mb-1">Last Hearing Date</p>
                        <p className="text-sm text-gray-600">{caseItem.lastHearingDate ? new Date(caseItem.lastHearingDate).toLocaleDateString() : '1/10/2025'}</p>
                      </div>
                      <div className="p-2 py-3 border border-gray-200 rounded-lg ">
                        <p className="text-xs font-semibold text-gray-900 mb-1">Next Hearing Date</p>
                        <p className="text-sm text-gray-600">{caseItem.nextHearingDate ? new Date(caseItem.nextHearingDate).toLocaleDateString() : '1/15/2025'}</p>
                      </div>
                    </div>

                    <div className="p-2 py-3 border border-gray-200 rounded-lg mb-4">
                      <p className="text-xs font-semibold text-gray-900 mb-1">Expected Judgement Cycle</p>
                      <p className="text-sm text-gray-600">{caseItem.expectedJudgement || "2 years 8 months"}</p>
                    </div>

                    {/* Compliance Score */}
                    <div className="mb-6">
                      <p className="text-xs font-semibold text-gray-900 mb-2">ZAPPLEX Compliance Score</p>
                      <div className="flex  relative">
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
                    <div className="flex flex-wrap gap-4 justify-between">
                      <Link className="max-w-full" to={`/admin/case-portfolio/case-profile/`} >
                        <button className="max-w-full border-2 border-webprimary bg-webprimary hover:bg-active text-white  py-2 px-3 rounded-sm transition-colors text-sm">
                          Open Case Journey
                        </button>
                      </Link>
                      <Link className="" to={`/admin/case-portfolio/case-progress/`} >
                        <button className="w-full border-2 border-webprimary text-webprimary hover:bg-webprimary hover:text-white  py-2 px-4 rounded-sm transition-colors text-sm">
                          Start Case Trial
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <p className="text-gray-500 text-lg">No cases found for the selected period</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseList;

// const indicatorStyle = `
//     {
// }
// `;
