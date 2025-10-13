import React, { useEffect, useState } from 'react';
import { FaUser, FaPhone } from 'react-icons/fa';
import { FiEdit2, FiTrash2 } from 'react-icons/fi'; // Use these for Edit and Delete icons
import { FaFilePdf, FaImage } from 'react-icons/fa'; // For document and image icons
import FormInput from '../../../common/FormInput';
import FormButton from '../../../common/FormButton';

const ShowLawyersCard = ({ lawyerRecord, closeValue }) => {

  const [lawyersLocal, setLawyersLocal] = useState([]);
  const [editingLawyer, setEditingLawyer] = useState(null);
  const [editFormData, setEditFormData] = useState({

    lawyer: '',
    mobile: '',
    lawyer_registration: ''
  });

  //get lawyer record from local storage if exists
  useEffect(() => {
    const storedLawyers = localStorage.getItem('lawyers');
    if (storedLawyers) {
      setLawyersLocal(JSON.parse(storedLawyers));
    }

  }, []);


  console.log(lawyersLocal.length, "lawyersLocal");
  // Delete lawyer function
  const handleDeleteLawyer = (lawyerId) => {
    if (window.confirm('Are you sure you want to delete this lawyer?')) {
      const updatedLawyers = lawyersLocal.filter(lawyer => lawyer.id !== lawyerId);
      setLawyersLocal(updatedLawyers);
      localStorage.setItem('lawyers', JSON.stringify(updatedLawyers));
      alert('Lawyer deleted successfully');
    }
  };

  // Edit lawyer function
  const handleEditLawyer = (lawyer) => {
    setEditingLawyer(lawyer.id);
    setEditFormData({
      lawyer: lawyer.lawyer || '',
      mobile: lawyer.mobile || '',
      lawyer_registration: lawyer.lawyer_registration || ''
    });
  };

  // Save edited lawyer
  const handleSaveEdit = () => {
    const updatedLawyers = lawyersLocal.map(lawyer =>
      lawyer.id === editingLawyer
        ? { ...lawyer, ...editFormData }
        : lawyer
    );
    setLawyersLocal(updatedLawyers);
    localStorage.setItem('lawyers', JSON.stringify(updatedLawyers));
    setEditingLawyer(null);
    setEditFormData({ lawyer: '', mobile: '', lawyer_registration: '' });
    console.log('Lawyer updated successfully');
  };

  // Cancel edit
  const handleCancelEdit = () => {
    setEditingLawyer(null);
    setEditFormData({ lawyer: '', mobile: '', lawyer_registration: '' });
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // if no lawyer record return this section
  if (!lawyerRecord || lawyersLocal.length === 0) {
    return (
      <>
        <div className=' '>
          {lawyerRecord.map(() => (
            <div className="bg-white rounded-xl shadow p-5 w-[500px] font-sans flex flex-col gap-3 relative">
              <div className="text-center text-gray-500 py-8">
                <FaUser className="mx-auto mb-3 text-gray-300" size={48} />
                <p>No lawyers added yet</p>
                <p className="text-sm">Add lawyers from the form to see them here</p>
              </div>
              {closeValue && (
                <button
                  onClick={() => closeValue(false)}
                  className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
                >
                  Close
                </button>
              )}
            </div>
          ))}
        </div>
      </>

    );
  }

  if (lawyersLocal.length == 0) {
    return (
      <div className=' '>
        <div className="text-center text-gray-500 py-8">
          <FaUser className="mx-auto mb-3 text-gray-300" size={48} />
          <p>No lawyers added yet</p>
          <p className="text-sm">Add lawyers from the form to see them here</p>
        </div>
      </div>
    )
  }




  return (
    <div className='grid grid-cols-2 gap-6 p-4'>
      {lawyersLocal.map((lawyer, index) => (
        <div className="space-y-4" key={lawyer.id || index}>
          <div className="bg-white rounded-xl shadow-card p-4 w-[500px] font-sans flex flex-col gap-3 relative">
            {/* Top Row - Title and Actions */}
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <FaUser className="text-gray-700" size={22} />
                <span className="font-bold text-lg">{lawyer.lawyer || 'Unknown Lawyer'}</span>
              </div>
              <div className="flex gap-3">
                <FiEdit2
                  className="text-gray-700 cursor-pointer hover:text-blue-600"
                  size={22}
                  title="Edit"
                  onClick={() => handleEditLawyer(lawyer)}
                />
                <FiTrash2
                  className="text-red-500 cursor-pointer hover:text-red-700"
                  size={22}
                  title="Delete"
                  onClick={() => handleDeleteLawyer(lawyer.id)}
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex items-center text-gray-800 text-[15px] gap-2">
              <FaPhone className="text-gray-500" size={15} />
              <span>{lawyer.mobile || 'No mobile number'}</span>
            </div>

            {/* Registration No */}
            <div className="text-gray-400 font-semibold text-[16px]">
              Registration No. : <span className="text-black font-normal">{lawyer.lawyer_registration || 'Not provided'}</span>
            </div>

            {/* Document Info */}
            {lawyer.files && lawyer.files.length > 0 ? (
              <div className="space-y-2">
                {lawyer.files.map((file, fileIndex) => (
                  <div key={fileIndex}>
                    <div className="flex items-center gap-3">
                      {file.type && file.type.includes('pdf') ? (
                        <FaFilePdf className="text-red-500" size={22} />
                      ) : (
                        <FaImage className="text-blue-500" size={22} />
                      )}
                      <span className="text-blue-700 font-semibold text-sm">
                        {file.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 pl-8">
                      <FaImage className="text-green-500" size={16} />
                      <span className="text-green-500 text-sm font-medium">File Selected</span>
                      <span className="text-gray-500 text-sm ml-2">&bull; {(file.size / (1024 * 1024)).toFixed(2)}mb</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-gray-500 text-sm">
                No files uploaded
              </div>
            )}

            {/* Date Added */}
            <div className="text-gray-400 text-xs border-t pt-2 mt-2">
              Added: {lawyer.dateAdded ? new Date(lawyer.dateAdded).toLocaleString() : 'Unknown date'}
            </div>

            {/* Edit Form - Show when editing this lawyer */}
            {editingLawyer === lawyer.id && (
              <div className="border-t pt-4 mt-4 bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Edit Lawyer Information</h3>
                <div className="space-y-3">
                  <FormInput
                    label="Lawyer Name"
                    name="lawyer"
                    value={editFormData.lawyer}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter lawyer name"
                  />
                  <FormInput
                    label="Mobile Number"
                    name="mobile"
                    value={editFormData.mobile}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter mobile number"
                  />
                  <FormInput
                    label="Registration Number"
                    name="lawyer_registration"
                    value={editFormData.lawyer_registration}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter registration number"
                  />
                  <div className="flex gap-2 pt-2">
                    <FormButton
                      type="button"
                      onClick={handleSaveEdit}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Save Changes
                    </FormButton>
                    <FormButton
                      type="button"
                      variant="outlined"
                      onClick={handleCancelEdit}
                      className="border-gray-400 text-gray-600 hover:bg-gray-100"
                    >
                      Cancel
                    </FormButton>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowLawyersCard;
