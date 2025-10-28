import React, { useEffect, useState } from 'react'
import FormInput from '../../common/FormInput'
import FormButton from '../../common/FormButton';

const legalCasesArr = [
  { _id: 1, label: "Murder (IPC 302)", lookup_value: "murder-ipc-302" },
  { _id: 2, label: "Rape (IPC 376)", lookup_value: "rape-ipc-376" },
  { _id: 3, label: "Kidnapping, Robbery, Dacoity", lookup_value: "kidnapping-robbery-dacoity" },
  { _id: 4, label: "Corruption, Terrorism cases", lookup_value: "corruption-terrorism" },
  { _id: 5, label: "Defamation (IPC 499)", lookup_value: "defamation-ipc-499" },
  { _id: 6, label: "Minor hurt/threats", lookup_value: "minor-hurt-threats" },
  { _id: 7, label: "Public nuisance", lookup_value: "public-nuisance" },
  { _id: 8, label: "Cyber crimes, fraud, money laundering", lookup_value: "cyber-crimes-fraud-money-laundering" },
  { _id: 9, label: "Ownership dispute", lookup_value: "ownership-dispute" },
  { _id: 10, label: "Partition suit (family property)", lookup_value: "partition-suit-family-property" },
  { _id: 11, label: "Eviction suit (landlord vs tenant)", lookup_value: "eviction-suit" },
  { _id: 12, label: "Breach of contract", lookup_value: "breach-of-contract" },
  { _id: 13, label: "Business agreements", lookup_value: "business-agreements" },
  { _id: 14, label: "Loan recovery cases", lookup_value: "loan-recovery" }
];

const caseStatusArr = [
  { _id: 'pending', lookup_value: "pending" },
  { _id: 'trial', lookup_value: "trial" }
];

const caseTypesArr = [
  { _id: "criminal", label: "Criminal", lookup_value: "criminal" },
  { _id: "criminal", label: "Civil", lookup_value: "civil" }
];

const CaseRegistration = () => {
  const [formData, setFormData] = useState({
    court: "",
    caseNumber: "",
    dateOfFiling: "",
    caseStatus: "",
    caseType: "",
    caseSubType: "",
  });
  const [, setRegCase] = useState([]);


  const resetForm = () => {
    setFormData({
      court: "",
      caseNumber: "",
      dateOfFiling: "",
      caseStatus: "",
      caseType: "",
      caseSubType: "",
    });
  }



  const onChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCase = {
      id: Date.now(), // Simple ID generation using timestamp
      court: formData.court,
      caseNumber: formData.caseNumber,
      dateOfFiling: formData.dateOfFiling,
      caseStatus: formData.caseStatus,
      caseType: formData.caseType,
      caseSubType: formData.caseSubType,
      dateAdded: new Date().toISOString(),
      // Add fields that CaseList expects
      caseNo: formData.caseNumber,
      courtName: formData.court,
      status: formData.caseStatus,
      plaintiff: "To be added", // Placeholder until parties are added
      defendant: "To be added", // Placeholder until parties are added
      lastHearingDate: formData.dateOfFiling,
      nextHearingDate: formData.dateOfFiling,
      expectedJudgement: "To be determined",
      complianceScore: "good"
    };

    // Get existing data from localStorage
    const existingData = JSON.parse(localStorage.getItem("regCase")) || [];

    // Add new case to existing data
    const updatedRegCase = [...existingData, newCase];

    // Update state and localStorage
    setRegCase(updatedRegCase);
    localStorage.setItem("regCase", JSON.stringify(updatedRegCase));

    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('caseAdded', { detail: newCase }));

    resetForm();
    alert("Case registered successfully!");
  };

  // Load existing data from localStorage on component mount
  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem("regCase")) || [];
    setRegCase(existingData);
    
  }, []);

  // console.log(regCase, "regCase")
  return (
    <section className='pt-6 lg:pt-12 '>
      <div className="container">
        <h2 className='text-xl md:text-3xl  mb-4'>Add New Case</h2>
        <div className="shadow-card p-5 sm:p-8 rounded-lg">
          <h3 className='text-xl md:text-2xl font-semibold mb-3'>Case Registration</h3>

          <div className=''>
            <form onSubmit={handleSubmit}>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <FormInput
                  label="Court"
                  name="court"
                  placeholder="Enter Court Name"
                  value={formData.court}
                  onChange={onChange}
                  type="text"
                />

                <FormInput
                  label="Case Number"
                  name="caseNumber"
                  placeholder="Enter Case Number"
                  value={formData.caseNumber}
                  onChange={onChange}
                  type="text"
                />

                <FormInput
                  label="Date of Filing"
                  name="dateOfFiling"
                  placeholder="Select Date of Filing"
                  value={formData.dateOfFiling}
                  onChange={onChange}
                  type="date"
                />

                <FormInput
                  label="Case Status"
                  name="caseStatus"
                  placeholder="Choose"
                  value={formData.caseStatus}
                  onChange={onChange}
                  type="select"
                  options={caseStatusArr}
                />
                <FormInput
                  label="Case Type"
                  name="caseType"
                  placeholder="Choose"
                  value={formData.caseType}
                  onChange={onChange}
                  type="select"
                  options={caseTypesArr}
                />

                <FormInput
                  label="Case Sub Type"
                  name="caseSubType"
                  placeholder="Choose"
                  value={formData.caseSubType}
                  onChange={onChange}
                  type="select"
                  options={legalCasesArr}
                />
              </div>
              <div className='mt-4'>

                <FormButton size="large" type="submit" >Save</FormButton>
              </div>

            </form>
          </div>
        </div>
      </div>

    </section>
  )
}

export default CaseRegistration
