import React from 'react';
import { FaUser, FaPhone } from 'react-icons/fa';
import { FiEdit2, FiTrash2 } from 'react-icons/fi'; // Use these for Edit and Delete icons
import { FaFilePdf, FaImage } from 'react-icons/fa'; // For document and image icons

const ShowLawyersCard = ({ lawyerRecord, closeValue }) => {
  console.log("Lawyer Record:", lawyerRecord);

  // Handle case when no data is provided or data is empty
  if (!lawyerRecord || lawyerRecord.length === 0) {
    return (
      <>
        <div className=' '>
          {lawyerRecord.map((lawyer, index) => (
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

  return (
    <div className='grid grid-cols-2 gap-6 p-4'>
      {lawyerRecord.map((lawyer, index) => (
        <div className="space-y-4">
          <div key={lawyer.id || index} className="bg-white rounded-xl shadow-card p-4 w-[500px] font-sans flex flex-col gap-3 relative">
            {/* Top Row - Title and Actions */}
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <FaUser className="text-gray-700" size={22} />
                <span className="font-bold text-lg">{lawyer.lawyer || 'Unknown Lawyer'}</span>
              </div>
              <div className="flex gap-3">
                <FiEdit2 className="text-gray-700 cursor-pointer" size={22} title="Edit" />
                <FiTrash2 className="text-red-500 cursor-pointer" size={22} title="Delete" />
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowLawyersCard;
