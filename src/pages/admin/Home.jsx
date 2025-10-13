import React from 'react'

import CaseLifecycleOverview from '../../components/admin/dashboard/CaseLifecycleOverview'
import CaseDashboardOverview from '../../components/admin/dashboard/CaseDashboardOverview'
import DlaysDue from '../../components/admin/dashboard/DlaysDue'
// import InvestigationStatusDashboard from '../../components/admin/dashboard/InvestigationStatusDashboard'
import IncompleteInvestigation from '../../components/admin/dashboard/IncompleteInvestigation'
import IrrelevantEvidenceTracker from '../../components/admin/dashboard/evidenceDataTable'
import WitnessTestimonyOverview from '../../components/admin/dashboard/WitnessTestimonyOverview'
import SpeedyTrialOverview from '../../components/admin/dashboard/SpeedyTrialOverview'
import AlertsPanel from '../../components/admin/dashboard/AlertsPanel'
import CaseDetailsDrillDown from '../../components/admin/dashboard/CaseDetailsDrillDown'
import HearingForToday from '../../components/admin/dashboard/HearingForToday'
import DelaysDueUnnecessary from '../../components/admin/dashboard/DelaysDueUnnecessary'

const Home = () => {
  return (
    <>
      <section>
        <div className="container">
          <CaseDashboardOverview />
          <CaseLifecycleOverview />
          {/* <DlaysDue /> */}
          <DelaysDueUnnecessary />
          <IncompleteInvestigation />
          <IrrelevantEvidenceTracker />
          <WitnessTestimonyOverview />
          <SpeedyTrialOverview />
          <AlertsPanel />
          <CaseDetailsDrillDown />
          <HearingForToday />
        </div>
      </section>
    </>
  )
}

export default Home
