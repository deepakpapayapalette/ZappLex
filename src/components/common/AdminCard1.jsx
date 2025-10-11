import React from 'react';
import { FaUser, FaPhone, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import FormButton from './FormButton';
import { Link } from 'react-router-dom';

const AdminCard1 = ({ setLayerOpen, setLawyerShow, setShowPleadings }) => {
  return (
    <div className="bg-white rounded-lg shadow-card py-5 px-4 ">
      <div className="flex items-center mb-2">
        <FaUser className="text-gray-700 mr-2" size={22} />
        <span className="font-semibold text-lg">Ravi Rai</span>
      </div>

      <div className="flex items-center mb-2">
        <FiPhoneCall className="text-gray-600 mr-2" size={15} />
        <span className="text-gray-800">+91 5996565151</span>
        <FaCheckCircle className="text-blue-500 ml-2" size={14} />
      </div>

      <div className=" text-sm mb-2 flex items-center">
        <span className="font-semibold text-gray-600">Aadhar No.:</span>
        <span className="ml-1">XXXXXX202452</span>
        <FaCheckCircle className="text-blue-500 ml-2" size={14} />
      </div>

      <div className=" text-sm mb-3">
        <span className="font-semibold text-gray-600">Role :</span>
        <span className="ml-1">Co-Plaintiff</span>
      </div>

      <div className="flex items-center text-gray-700 text-sm mb-4">
        <FaMapMarkerAlt className="text-gray-600 mr-2" size={15} />
        <span>
          H-Block, Sector-63, Noida, Uttar Pradesh, 201301
        </span>
      </div>

      <div className="flex lg:flex-row flex-col gap-2 mb-4 ">
        <FormButton className="hover:bg-active w-full" sx={{ textTransform: 'capitalize' }}
          onClick={() => setLayerOpen(true)}
        >
          Add Lawyer
        </FormButton>
        <FormButton variant='outlined' className="hover:bg-webprimary hover:text-white w-full" sx={{ textTransform: 'capitalize' }}
          onClick={() => setLawyerShow(true)}
        >
          View Lawyer (4)
        </FormButton>
      </div>

      <div className='w-full'>

        <FormButton variant='outlined'
          className="w-full "
          endIcon={<IoMdCheckmarkCircleOutline className="ml-1 text-green-500 w-full " size={20} />}
          sx={{ textTransform: 'capitalize', paddingBlock: '8px', fontWeight: 'bold' }}

          onClick={() => setShowPleadings(true)}
        >
          Add Pleading
        </FormButton>

      </div>
    </div>
  );
};

export default AdminCard1;
