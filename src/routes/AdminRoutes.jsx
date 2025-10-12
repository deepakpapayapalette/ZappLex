import { Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import AdminLayout from "../layouts/AdminLayout";
import Home from "../pages/admin/Home";
import AddParties from "../components/admin/case-portfolio/add-parties/AddParties";
import CasePortfolioPage from "../pages/admin/CasePortfolioPage";
import CaseProfiling from "../components/admin/case-portfolio/case-profiling/CaseProfiling";
import CaseProfile from "../components/admin/case-portfolio/case-profile/CaseProfile";
import CaseProgressDashboard from "../components/admin/case-portfolio/case-pogress/CaseProgressDashboard";
import DetailedCaseRecords from "../components/admin/case-portfolio/case-pogress/DetailedCaseRecords";

const AdminRoutes = () => (
  <Routes>
    <Route path="/" element={<AdminLayout />}>
      <Route index element={<Home />} />
      <Route path="case-portfolio" element={<CasePortfolioPage />} />
      <Route path="add-parties/" element={<AddParties />} />
      <Route path="case-portfolio/case-profiling/" element={<CaseProfiling />} />
      <Route path="case-portfolio/case-profile/" element={<CaseProfile />} />
      <Route path="case-portfolio/case-progress/" element={<CaseProgressDashboard />} />
      <Route path="case-portfolio/case-progress/case-records/" element={<DetailedCaseRecords />} />


      {/* <Route path="configuration/" element={<AdminConfigOutlet />}>
          <Route path="unit-type" element={<UnitType />} />
          <Route path="legal-entity-type" element={<LegalEntityType />} />
          <Route path="brand-type" element={<BrandType />} />
          <Route path="industry-sector" element={<IndustrySector />} />
          <Route path="sub-sector" element={<SubSector />} />
          <Route path="product-category" element={<ProductCategory />} />
          <Route path="product-sub-category" element={<ProductSubcategory />} />
          <Route path="panchtatva-level-1" element={<PanchtatvaLevel1 />} />
          <Route path="panchtatva-level-2" element={<PanchtatvaLevel2 />} />
          <Route path="panchtatva-level-3" element={<PanchtatvaLevel3 />} />
          <Route path="oraganizer-type" element={<OrganizerType />} />
          <Route path="zatra-type" element={<ZatraType />} />
          <Route path="verification-checklist-type" element={<VerificationChecklistType />} />
          <Route path="verifier-name" element={<VerifierName />} />
          <Route path="disease-type" element={<DiseaseType />} />
          <Route path="*" element={<ErrorPage />} />
        </Route> */}

      {/*========== Asset Master ==============*/}

      {/* Catch-all inside admin */}
      <Route path="*" element={<ErrorPage />} />
    </Route>
  </Routes>
);

export default AdminRoutes;
