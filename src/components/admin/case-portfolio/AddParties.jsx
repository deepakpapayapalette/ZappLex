import React, { useState } from 'react'
import FormInput from '../../common/FormInput'
import FormButton from '../../common/FormButton';

const roles = [
  { value: "", label: "Choose" },
  { value: "plaintiff", label: "Plaintiff" },
  { value: "defendant", label: "Defendant" },
  // Add more roles as needed
];

const states = [
  { _id: "", lookup_value: "Choose State" },
  { _id: "UP", lookup_value: "Uttar Pradesh" },
  { _id: "DL", lookup_value: "Delhi" },
  // Add more states as needed
];


const AddParties = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    aadhaar: "",
    mobile: "",
    address1: "",
    address2: "",
    state: "",
    city: "",
    postalCode: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, using formData
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Stub handlers for verify buttons
  const handleVerifyAadhaar = () => {
    // Aadhaar verification logic here
  };

  const handleVerifyMobile = () => {
    // Mobile verification logic here
  };

  const handleAddMore = () => {
    alert("Add more  here");
  };

  const handleNext = (e) => {
    e.preventDefault();
    // Logic for Next step
  };


  return (
    <>
      <section className='pt-6 lg:pt-12 '>
        <div className="container">
          <h2 className='text-xl md:text-3xl  mb-4'>Add New Case</h2>
          <div className="shadow-card p-5 sm:p-8 rounded-lg">
            <h3 className='text-xl md:text-2xl font-semibold mb-3'>Case Registration</h3>
            <div className=''>
              <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                  <FormInput
                    label="Name"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={onChange}
                    type="text"
                  />
                  <FormInput
                    label="Role"
                    name="role"
                    value={formData.role}
                    onChange={onChange}
                    type="select"
                    options={roles}
                  />
                  <div style={{ position: "relative", flexGrow: 1 }}>
                    <FormInput
                      label="Aadhaar Number"
                      name="aadhaar"
                      placeholder="Aadhaar no."
                      value={formData.aadhaar}
                      onChange={onChange}
                      type="text"
                    />
                    <button
                      type="button"
                      style={{
                        position: "absolute",
                        right: 8,
                        bottom: "30%",
                        transform: "translateY(50%)",
                        // background: "#fff",

                        padding: "2px 10px",
                        fontSize: 12,
                        color: "#006DDB",
                        cursor: "pointer"
                      }}
                      onClick={handleVerifyAadhaar}
                    >Verify</button>
                  </div>
                  <div style={{ position: "relative", flexGrow: 1 }}>
                    <FormInput
                      label="Mobile Number"
                      name="mobile"
                      placeholder="Mobile no."
                      value={formData.mobile}
                      onChange={onChange}
                      type="text"
                    />
                    <button
                      type="button"
                      style={{
                        position: "absolute",
                        right: 8,
                        bottom: "30%",
                        transform: "translateY(50%)",
                        // background: "#fff",

                        padding: "2px 10px",
                        fontSize: 12,
                        color: "#006DDB",
                        cursor: "pointer"
                      }}
                      onClick={handleVerifyMobile}
                    >Verify</button>
                  </div>
                  <FormInput
                    label="Address 1"
                    name="address1"
                    placeholder="Address"
                    value={formData.address1}
                    onChange={onChange}
                    type="text"
                  />
                  <FormInput
                    label="Address 2 (Optional)"
                    name="address2"
                    placeholder="Address"
                    value={formData.address2}
                    onChange={onChange}
                    type="text"
                  />
                  <FormInput
                    label="State"
                    name="state"
                    value={formData.state}
                    onChange={onChange}
                    type="select"
                    options={states}
                  />
                  <FormInput
                    label="City"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={onChange}
                    type="text"
                  />
                  <FormInput
                    label="Postal Code"
                    name="postalCode"
                    placeholder="Postal Code"
                    value={formData.postalCode}
                    onChange={onChange}
                    type="text"
                  />
                </div>

                <div className='mt-5 flex  gap-4'>
                  <FormButton size="large" type="button" onClick={handleAddMore}>Add More</FormButton>
                  <FormButton size="large" type="submit" >Next</FormButton>
                </div>
              </form>
            </div>
          </div>
        </div >

      </section >
    </>
  )
}

export default AddParties

