import React, { useState } from 'react'
import FormInput from '../../common/FormInput'
import FormButton from '../../common/FormButton';

const CasePortfolio = () => {
  const [formData, setFormData] = useState({
    court: "",
    caseNumber: "",
    dateOfFiling: "",
    caseStatus: "",
    caseType: "",
    caseSubType: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, using formData
  };
  // console.log(formData, "formData")
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
                  options={[
                    { value: "", label: "Choose" },
                    // Add more status options
                  ]}
                />

                <FormInput
                  label="Case Type"
                  name="caseType"
                  placeholder="Choose"
                  value={formData.caseType}
                  onChange={onChange}
                  type="select"
                  options={[
                    { value: "", label: "Choose" },
                    // Add more type options
                  ]}
                />

                <FormInput
                  label="Case Sub Type"
                  name="caseSubType"
                  placeholder="Choose"
                  value={formData.caseSubType}
                  onChange={onChange}
                  type="select"
                  options={[
                    { value: "", label: "Choose" },
                    // Add more sub type options
                  ]}
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

export default CasePortfolio
