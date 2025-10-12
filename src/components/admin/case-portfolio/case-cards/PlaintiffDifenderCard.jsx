import React from 'react'

const PlaintiffDifenderCard = (
  {
    tabs,
    activeTab,
    setActiveTab,
    setDetailCaseRecord,
    setWitnessRecordHistory,
    

  }
) => {
  function renderContent() {
    switch (activeTab) {
      case "opening":
        return <><OpeningStatements activeTab={activeTab} /> </>;
      case "evidence":
        return <><EvidenceCard /> </>;
      case "witness":
        return <><WitnessCard setDetailCaseRecord={setDetailCaseRecord} setWitnessRecordHistory={setWitnessRecordHistory} /> </>;
      case "closing":
        return <><ClosingStatements /> </>;
      default:
        return null;
    }

  }
  return (
    <div>
      <div className="border rounded-xl p-5 shadow-sm">
        <h1 className="font-semibold text-lg mb-4">Plaintiff Submissions</h1>
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
  )
}

export default PlaintiffDifenderCard

