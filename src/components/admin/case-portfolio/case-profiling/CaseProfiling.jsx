
import React, { useState } from "react";
import FormInput from "../../../common/FormInput";
import FormButton from "../../../common/FormButton";
const CaseProfiling = () => {
  const [form, setForm] = useState({
    filingDate: '',
    caseBackground: '',
    demandNotice: '',
    nonCompliance: '',
    complaintFiled: '',
    preliminaryVerification: '',
    complainantClaim: '',
    accusedResponse: '',
    evidence: '',
    witnesses: '',
    currentStatus: '',
    potentialIssues: '',
    legalProvisions: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <section>
      <div className="container pt-8 md:pt-12">
        <h2 className='text-xl md:text-3xl font-semibold '>Add New Case</h2>
        <div className='mt-6 md:mt-8'>
          <form className=" mx-auto p-6 bg-white rounded shadow">
            <h2 className='text-xl md:text-xl font-semibold mb-2 '>Case Profiling</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block font-semibold mb-1">Filing Date</label>
                <FormInput
                  type="date"
                  value={form.filingDate}
                  onChange={handleChange}
                  name="filingDate"
                />
              </div>

              <div className="mb-4">
                <label className="block font-semibold mb-1">Case Background</label>
                <FormInput
                  type="text"
                  value={form.caseBackground}
                  onChange={handleChange}
                  name="caseBackground"
                  placeholder="Case Background"
                />
              </div>
            </div>
            <h2 className="text-xl mt-8 mb-2">Procedural History</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1">Demand Notice</label>
                <FormInput
                  type="text"
                  value={form.demandNotice}
                  onChange={handleChange}
                  name="demandNotice"
                  placeholder="Demand Notice"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Non-Compliance</label>
                <FormInput
                  type="text"
                  value={form.nonCompliance}
                  onChange={handleChange}
                  name="nonCompliance"
                  placeholder="Non-Compliance"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Complaint Filed</label>
                <FormInput
                  type="text"
                  value={form.complaintFiled}
                  onChange={handleChange}
                  name="complaintFiled"
                  placeholder="Complaint Filed"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Preliminary Verification</label>
                <FormInput
                  type="text"
                  value={form.preliminaryVerification}
                  onChange={handleChange}
                  name="preliminaryVerification"
                  placeholder="Preliminary Verification"
                />
              </div>
            </div>

            <h2 className="text-xl mt-8 mb-2">Key Allegations</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1">Complainant’s Claim</label>
                <FormInput
                  type="text"
                  value={form.complainantClaim}
                  onChange={handleChange}
                  name="complainantClaim"
                  placeholder="Complainant’s Claim"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Accused’s Preliminary Response</label>
                <FormInput
                  type="text"
                  value={form.accusedResponse}
                  onChange={handleChange}
                  name="accusedResponse"
                  placeholder="Accused’s Preliminary Response"
                />
              </div>
            </div>

            <h2 className="font-semibold mt-8 mb-2">Evidence Filed by Complainant</h2>
            <FormInput
              type="text"
              value={form.evidence}
              onChange={handleChange}
              name="evidence"
              placeholder="List of Evidence"
            />

            <h2 className="font-semibold mt-8 mb-2">Witnesses Proposed by Complainant</h2>
            <FormInput
              type="text"
              value={form.witnesses}
              onChange={handleChange}
              name="witnesses"
              placeholder="List of Witnesses"
            />

            <h2 className="font-semibold mt-8 mb-2">Current Status (Pre-Trial)</h2>
            <FormInput
              type="text"
              value={form.currentStatus}
              onChange={handleChange}
              name="currentStatus"
              placeholder="Status"
            />

            <h2 className="font-semibold mt-8 mb-2">Potential Issues for Trial</h2>
            <FormInput
              type="text"
              value={form.potentialIssues}
              onChange={handleChange}
              name="potentialIssues"
              placeholder="Potential Issues"
            />

            <h2 className="font-semibold mt-8 mb-2">Applicable Legal Provisions</h2>
            <FormInput
              type="text"
              value={form.legalProvisions}
              onChange={handleChange}
              name="legalProvisions"
              placeholder="Legal Provisions"
            />

            <FormButton
              type="submit"
              className="  px-6  hover:bg-active md:w-[200px] "

              sx={{
                marginTop: "1.5rem",
                paddingBlock: "7px",
              }}
            >
              Save
            </FormButton>
          </form>

        </div>
      </div>
    </section>
  )
}

export default CaseProfiling
