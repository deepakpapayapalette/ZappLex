import React, { useEffect, useState } from 'react'
import FormInput from '../../../common/FormInput'
import FormButton from '../../../common/FormButton';
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import AdminCard1 from '../../../common/AdminCard1';
import { Dialog } from '@mui/material';
// import AddLayers from './AddLayers';
// import Test from './test';
import { Add } from '@mui/icons-material';
import AddLayers from './AddLayers';
import ShowLawyersCard from './ShowLawyersCard';
import PleadingsForm from './PleadingsForm';
import { Link } from 'react-router-dom';

// Removed unused plaintiffData array as we now use localStorage data
const roles = [
  { value: "", label: "Choose" },
  { _id: 'plaintiff', lookup_value: "plaintiff", },
  { _id: "defendant", lookup_value: "defendant", },
  // { _id: "witness", lookup_value: "witness", },
  // Add more roles as needed
];

const states = [
  { _id: "", lookup_value: "Choose State" },
  { _id: "UP", lookup_value: "Uttar Pradesh" },
  { _id: "DL", lookup_value: "Delhi" },
  // Add more states as needed
];


const AddParties = () => {
  const [layerOpen, setLayerOpen] = useState(false);
  const [childData, setChildData] = React.useState([]);
  const [lawyerShow, setLawyerShow] = useState(false);
  const [showPleadings, setShowPleadings] = useState(false);
  const [PleadingState, setPleadingsState] = useState(false);

  // Verification popup states
  const [aadhaarVerifyOpen, setAadhaarVerifyOpen] = useState(false);
  const [mobileVerifyOpen, setMobileVerifyOpen] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState({
    aadhaar: false,
    mobile: false
  });

  // OTP states
  const [aadhaarOtp, setAadhaarOtp] = useState('');
  const [mobileOtp, setMobileOtp] = useState('');
  const [otpSent, setOtpSent] = useState({ aadhaar: false, mobile: false });
  const [isVerifying, setIsVerifying] = useState({ aadhaar: false, mobile: false });

  const handleChildData = (data) => {
    // console.log("Received data from AddLayers:", data);
    setChildData(data);
  };

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

  //write script for mobile number max 10 number


  const [partyLocalData, setPartyLocalData] = useState([]);
  const [getPartyLocalData, setGetPartyLocalData] = useState([])


  console.log(partyLocalData, "partyLocalData");
  console.log(getPartyLocalData, "getPartyLocalData");

  // store form date in local storage permanent
  const storeFormData = () => {
    const data = {
      name: formData.name,
      role: formData.role,
      aadhaar: formData.aadhaar,
      mobile: formData.mobile,
      address1: formData.address1,
      address2: formData.address2,
      state: formData.state,
      city: formData.city,
      postalCode: formData.postalCode,
    };
    let updatedFormData = [...partyLocalData, data];
    setPartyLocalData(updatedFormData);
    localStorage.setItem("Parties_localData", JSON.stringify(updatedFormData));
  }

  // get form data from local storage updated
  useEffect(() => {
    const storedData = localStorage.getItem("Parties_localData");
    if (storedData) {
      setGetPartyLocalData(JSON.parse(storedData));
    }
  }, []);

  const resetForm = () => {
    setFormData({
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

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    storeFormData();
    console.log("Form Data:", formData);
    alert('Party added successfully!');


    resetForm();

  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  // Verification handlers
  const handleVerifyAadhaar = () => {
    if (!formData.aadhaar || formData.aadhaar.length !== 12) {
      alert('Please enter a valid 12-digit Aadhaar number');
      return;
    }
    setAadhaarVerifyOpen(true);
  };

  const handleVerifyMobile = () => {
    if (!formData.mobile || formData.mobile.length !== 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }
    setMobileVerifyOpen(true);
  };

  // Send OTP functions
  const sendAadhaarOtp = async () => {
    setIsVerifying(prev => ({ ...prev, aadhaar: true }));
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setOtpSent(prev => ({ ...prev, aadhaar: true }));
      alert('OTP sent to your registered mobile number');
    } catch (error) {
      alert('Failed to send OTP. Please try again.');
    } finally {
      setIsVerifying(prev => ({ ...prev, aadhaar: false }));
    }
  };

  const sendMobileOtp = async () => {
    setIsVerifying(prev => ({ ...prev, mobile: true }));
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setOtpSent(prev => ({ ...prev, mobile: true }));
      alert(`OTP sent to ${formData.mobile}`);
    } catch (error) {
      alert('Failed to send OTP. Please try again.');
    } finally {
      setIsVerifying(prev => ({ ...prev, mobile: false }));
    }
  };

  // Verify OTP functions
  const verifyAadhaarOtp = async () => {
    if (!aadhaarOtp || aadhaarOtp.length !== 6) {
      alert('Please enter a valid 6-digit OTP');
      return;
    }

    setIsVerifying(prev => ({ ...prev, aadhaar: true }));
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // For demo, accept any 6-digit OTP
      setVerificationStatus(prev => ({ ...prev, aadhaar: true }));
      setAadhaarVerifyOpen(false);
      setAadhaarOtp('');
      setOtpSent(prev => ({ ...prev, aadhaar: false }));
      alert('Aadhaar verified successfully!');
    } catch (error) {
      alert('Invalid OTP. Please try again.');
    } finally {
      setIsVerifying(prev => ({ ...prev, aadhaar: false }));
    }
  };

  const verifyMobileOtp = async () => {
    if (!mobileOtp || mobileOtp.length !== 6) {
      alert('Please enter a valid 6-digit OTP');
      return;
    }

    setIsVerifying(prev => ({ ...prev, mobile: true }));
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // For demo, accept any 6-digit OTP
      setVerificationStatus(prev => ({ ...prev, mobile: true }));
      setMobileVerifyOpen(false);
      setMobileOtp('');
      setOtpSent(prev => ({ ...prev, mobile: false }));
      alert('Mobile number verified successfully!');
    } catch (error) {
      alert('Invalid OTP. Please try again.');
    } finally {
      setIsVerifying(prev => ({ ...prev, mobile: false }));
    }
  };

  // Close popup handlers
  const closeAadhaarPopup = () => {
    setAadhaarVerifyOpen(false);
    setAadhaarOtp('');
    setOtpSent(prev => ({ ...prev, aadhaar: false }));
  };

  const closeMobilePopup = () => {
    setMobileVerifyOpen(false);
    setMobileOtp('');
    setOtpSent(prev => ({ ...prev, mobile: false }));
  };
  // const handleAddMore = () => {
  //   alert("Add more  here");
  // };
  // Removed unused handleNext function
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

  return (
    <>
      <section className='pt-6 lg:pt-12 '>
        <div className="container">
          <h2 className='text-xl md:text-3xl  mb-4'>Add New Case</h2>
          <div className="shadow-card p-5 sm:p-8 rounded-lg">
            <h3 className='text-xl md:text-2xl font-semibold mb-3'>Add Parties</h3>
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
                      length={12}
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
                        padding: "2px 10px",
                        fontSize: 12,
                        color: verificationStatus.aadhaar ? "#28a745" : "#006DDB",
                        cursor: "pointer",
                        fontWeight: verificationStatus.aadhaar ? "bold" : "normal"
                      }}
                      onClick={handleVerifyAadhaar}
                    >{verificationStatus.aadhaar ? "✓ Verified" : "Verify"}</button>
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
                        padding: "2px 10px",
                        fontSize: 12,
                        color: verificationStatus.mobile ? "#28a745" : "#006DDB",
                        cursor: "pointer",
                        fontWeight: verificationStatus.mobile ? "bold" : "normal"
                      }}
                      onClick={handleVerifyMobile}
                    >{verificationStatus.mobile ? "✓ Verified" : "Verify"}</button>
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
                  <FormButton size="large" type="submit" variant='outlined' className='md:w-[200px]' >Add More</FormButton>

                  <Link to="/admin/case-portfolio/case-profiling/" className='md:w-[200px]'>
                    <FormButton size="large" type="button"
                      sx={{}}
                    >Next</FormButton>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="container space-top">
          <div className="shadow-card p-5 sm:p-8 rounded-lg">
            <h2 className='text-xl md:text-3xl  mb-4'>Plaintiff</h2>
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
              {getPartyLocalData
                .filter(party => party.role === 'plaintiff')
                .map((party, index) => (
                  <AdminCard1
                    key={index}
                    partyData={party}
                    setLayerOpen={setLayerOpen}
                    setLawyerShow={setLawyerShow}
                    setPleadingsState={setPleadingsState}
                  />
                ))}
              {getPartyLocalData.filter(party => party.role === 'plaintiff').length === 0 && (
                <div className="text-center text-gray-500 py-8">
                  No Plaintiff data found. Please add a party with Plaintiff role.
                </div>
              )}
            </Carousel>
          </div>
        </div>

        <div className="container space-top mb-6 md:mb-12">
          <div className="shadow-card p-5 sm:p-8 rounded-lg">
            <h2 className='text-xl md:text-3xl  mb-4'>Defendant</h2>
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
              {getPartyLocalData
                .filter(party => party.role === 'defendant')
                .map((party, index) => (
                  <AdminCard1
                    key={index}
                    partyData={party}
                    setLayerOpen={setLayerOpen}
                    setLawyerShow={setLawyerShow}
                    setPleadingsState={setPleadingsState}
                  />
                ))}
              {getPartyLocalData.filter(party => party.role === 'defendant').length === 0 && (
                <div className="text-center text-gray-500 py-8">
                  No Defendant data found. Please add a party with Defendant role.
                </div>
              )}
            </Carousel>
          </div>
        </div>



        <div className="container">

          {/* ==================Add-New-Lawyer=Popup================== */}
          <Dialog
            open={layerOpen}
            onClose={() => setLayerOpen(false)}
            aria-describedby="layer-open"
          >
            <div id="layer-open">
              <AddLayers closeValue={setLayerOpen} onDataSend={handleChildData} />
            </div>
          </Dialog>
          {/* ==================Lawyer-Records-Popup================== */}
          <Dialog
            open={lawyerShow}
            onClose={() => setLawyerShow(false)}
            aria-describedby="show-lawyer"
            maxWidth="lg"
          >
            <div id="show-lawyer" className='p-6'>
              <ShowLawyersCard closeValue={setLawyerShow} lawyerRecord={childData} />
            </div>
          </Dialog>
          {/* ==================pleading-Popup================== */}
          <Dialog
            open={PleadingState}
            onClose={() => setPleadingsState(false)}
            aria-describedby="pleading-form"
            fullWidth
            maxWidth="lg"
          >
            <div id="pleading-form" className=' '>
              <PleadingsForm
                closePopup={setPleadingsState}
              // lawyerRecord={childData}
              />
            </div>
          </Dialog>

          {/* ==================Aadhaar-Verification-Popup================== */}
          <Dialog
            open={aadhaarVerifyOpen}
            onClose={closeAadhaarPopup}
            aria-describedby="aadhaar-verification"
            maxWidth="sm"
            fullWidth
          >
            <div id="aadhaar-verification" className='p-6'>
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Aadhaar Verification</h3>
                <p className="text-gray-600">Aadhaar Number: {formData.aadhaar}</p>
              </div>

              {!otpSent.aadhaar ? (
                <div className="text-center">
                  <p className="mb-4 text-gray-700">Click the button below to send OTP to your registered mobile number</p>
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={sendAadhaarOtp}
                      disabled={isVerifying.aadhaar}
                      className="px-6 py-2 bg-webprimary text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed"
                    >
                      {isVerifying.aadhaar ? 'Sending...' : 'Send OTP'}
                    </button>
                    <button
                      onClick={closeAadhaarPopup}
                      className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Enter 6-digit OTP
                    </label>
                    <input
                      type="text"
                      maxLength="6"
                      value={aadhaarOtp}
                      onChange={(e) => setAadhaarOtp(e.target.value.replace(/\D/g, ''))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-center text-lg tracking-widest"
                      placeholder="000000"
                    />
                  </div>

                  <div className="flex justify-center gap-4">
                    <button
                      onClick={verifyAadhaarOtp}
                      disabled={isVerifying.aadhaar || aadhaarOtp.length !== 6}
                      className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-green-300 disabled:cursor-not-allowed"
                    >
                      {isVerifying.aadhaar ? 'Verifying...' : 'Verify OTP'}
                    </button>
                    <button
                      onClick={() => {
                        setOtpSent(prev => ({ ...prev, aadhaar: false }));
                        setAadhaarOtp('');
                      }}
                      className="px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
                    >
                      Resend OTP
                    </button>
                    <button
                      onClick={closeAadhaarPopup}
                      className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </Dialog>

          {/* ==================Mobile-Verification-Popup================== */}
          <Dialog
            open={mobileVerifyOpen}
            onClose={closeMobilePopup}
            aria-describedby="mobile-verification"
            maxWidth="sm"
            fullWidth
          >
            <div id="mobile-verification" className='p-6'>
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Mobile Verification</h3>
                <p className="text-gray-600">Mobile Number: {formData.mobile}</p>
              </div>

              {!otpSent.mobile ? (
                <div className="text-center">
                  <p className="mb-4 text-gray-700">Click the button below to send OTP to your mobile number</p>
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={sendMobileOtp}
                      disabled={isVerifying.mobile}
                      className="px-6 py-2 bg-webprimary text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed"
                    >
                      {isVerifying.mobile ? 'Sending...' : 'Send OTP'}
                    </button>
                    <button
                      onClick={closeMobilePopup}
                      className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Enter 6-digit OTP
                    </label>
                    <input
                      type="text"
                      maxLength="6"
                      value={mobileOtp}
                      onChange={(e) => setMobileOtp(e.target.value.replace(/\D/g, ''))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-center text-lg tracking-widest"
                      placeholder="000000"
                    />
                  </div>

                  <div className="flex justify-center gap-4">
                    <button
                      onClick={verifyMobileOtp}
                      disabled={isVerifying.mobile || mobileOtp.length !== 6}
                      className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-green-300 disabled:cursor-not-allowed"
                    >
                      {isVerifying.mobile ? 'Verifying...' : 'Verify OTP'}
                    </button>
                    <button
                      onClick={() => {
                        setOtpSent(prev => ({ ...prev, mobile: false }));
                        setMobileOtp('');
                      }}
                      className="px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
                    >
                      Resend OTP
                    </button>
                    <button
                      onClick={closeMobilePopup}
                      className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </Dialog>
        </div>

      </section >
    </>
  )
}

export default AddParties

