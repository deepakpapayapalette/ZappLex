import React, { useState } from 'react'
import FormInput from '../../../common/FormInput';
import FormButton from '../../../common/FormButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button } from '@mui/material';
import { BorderColor } from '@mui/icons-material';
import { IoMdClose } from "react-icons/io";

// const VisuallyHiddenInput = styled('input')({
//   clip: 'rect(0 0 0 0)',
//   clipPath: 'inset(50%)',
//   height: 1,
//   overflow: 'hidden',
//   position: 'absolute',
//   bottom: 0,
//   left: 0,
//   whiteSpace: 'nowrap',
//   width: 1,
// });

const AddLayers = ({ onDataSend, closeValue }) => {
  const [formData, setFormData] = React.useState({
    lawyer: "",
    lawyer_registration: "",
    mobile: "",
  });
  const [lawyers, setLawyers] = useState([]); // Array to store all submitted lawyers
  const [uploadedFiles, setUploadedFiles] = useState([]);
  // Reset form to initial state
  const resetForm = () => {
    setFormData({
      lawyer: "",
      lawyer_registration: "",
      mobile: "",
    });
    setUploadedFiles([]);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file upload
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles(files);
  };

  const handleSubmit = (e) => {

    e.preventDefault();



    // Validate form data
    if (!formData.lawyer || !formData.lawyer_registration || !formData.mobile) {
      alert('Please fill in all required fields');
      return;
    }

    // Create new lawyer entry with unique ID and timestamp
    const newLawyer = {
      id: Date.now(), // Simple ID generation using timestamp
      lawyer: formData.lawyer,
      lawyer_registration: formData.lawyer_registration,
      mobile: formData.mobile,
      files: uploadedFiles,
      dateAdded: new Date().toISOString()
    };

    // Add to lawyers array
    const updatedLawyers = [...lawyers, newLawyer];
    setLawyers(updatedLawyers);

    // Send updated lawyers array to parent component
    if (onDataSend) {
      onDataSend(updatedLawyers);
    }

    // Log the updated lawyers array
    console.log('New lawyer added:', newLawyer);
    console.log('All lawyers:', updatedLawyers);

    // Reset form after successful submission
    resetForm();

    alert('Lawyer added successfully!');

  };

  // Add more function to reset form for new entry
  const handleAddMore = () => {
    if (onDataSend && lawyers.length > 0) {
      onDataSend(lawyers);
    }
    resetForm();
  };


  return (
    <>
      <div className="add-layers max-w-[1000px] mx-auto">
        <div className="shadow-card p-5 sm:p-8 rounded-lg">
          <div className='flex justify-end '>
            <IoMdClose className=' cursor-pointer ' size={30} onClick={() => closeValue(false)} />
          </div>
          <h3 className='text-xl md:text-2xl font-semibold mb-3'>Add Legal Counsel</h3>
          <div>
            <form onSubmit={handleSubmit}>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <FormInput
                  label="Lawyer Name"
                  name="lawyer"
                  placeholder="Lawyer Name"
                  value={formData.lawyer}
                  onChange={onChange}
                  type="text"
                />
                <FormInput
                  label="Registration Number"
                  name="lawyer_registration"
                  placeholder="Registration Number"
                  value={formData.lawyer_registration}
                  onChange={onChange}
                  type="text"
                />
                <FormInput
                  label="Mobile"
                  name="mobile"
                  placeholder="Mobile No"
                  value={formData.mobile}
                  onChange={onChange}
                  type="number"
                />

                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                >
                  Upload files
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    multiple
                    hidden
                  />
                </Button>
              </div>
              <div className="flex justify-end mt-5 ">
                <div className="flex flex-col md:flex-row gap-2 mb-4 md:w-[300px]">
                  <FormButton
                    variant='outlined'
                    className="hover:bg-webprimary hover:text-white w-full "
                    sx={{ textTransform: 'capitalize', borderWidth: '2px', borderColor: 'var(--web-primary)', color: 'var(--web-primary)' }}
                    type="button"
                    onClick={handleAddMore}

                  >
                    + Add More
                  </FormButton>
                  <FormButton className="hover:bg-active w-full" sx={{ textTransform: 'capitalize', Width: "100%" }}
                    type="submit"
                  >
                    Save
                  </FormButton>

                  {/* {closeValue && (

                  )} */}
                </div>
              </div>
            </form>
            {/* Display saved lawyers */}
            {lawyers.length > 0 && (
              <div className='mt-6'>
                <h4 className='text-lg font-semibold mb-3'>Added Lawyers ({lawyers.length})</h4>
                <div className='space-y-3'>
                  {lawyers.map((lawyer) => (
                    <div key={lawyer.id} className='p-4 border rounded-lg bg-gray-50'>
                      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                        <div><strong>Name:</strong> {lawyer.lawyer}</div>
                        <div><strong>Registration:</strong> {lawyer.lawyer_registration}</div>
                        <div><strong>Mobile:</strong> {lawyer.mobile}</div>
                      </div>
                      {lawyer.files.length > 0 && (
                        <div className='mt-2'>
                          <strong>Files:</strong> {lawyer.files.map(f => f.name).join(', ')}
                        </div>
                      )}
                      <div className='text-sm text-gray-500 mt-1'>
                        Added: {new Date(lawyer.dateAdded).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default AddLayers
