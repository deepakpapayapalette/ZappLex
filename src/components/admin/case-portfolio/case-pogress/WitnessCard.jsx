import { Phone, Calendar, User, MapPin, CheckCircle, Download } from 'lucide-react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import FormButton from '../../../common/FormButton';
import { useNavigate } from 'react-router-dom';

export default function WitnessCard({ setDetailCaseRecord, setWitnessRecordHistory }) {
  const navitage = useNavigate();
  const handleNavitage = () => {
    navitage("/admin/case-portfolio/case-pogress/case-records")
  }


  return (
    <div className=" mx-auto bg-[#ecf3fb] rounded-lg p-3">
      {/* Header Section */}
      <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
        <div className="flex gap-4">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
            alt="Ravi Rai"
            className="w-24 h-24 rounded-lg object-cover"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-xl font-semibold">Ravi Rai</h2>

            </div>

            <div className="space-y-1 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 5996565151</span>
                <IoMdCheckmarkCircleOutline className="text-webprimary" size={15} />
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>30/12/2025</span>
                <User className="w-4 h-4 ml-2" />
                <span>Male</span>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>H-Block, Sector-63, Noida, Uttar Pradesh, 201301</span>
                <IoMdCheckmarkCircleOutline className="text-webprimary" size={16} />
              </div>
            </div>
          </div>
        </div>

        <p className="text-webprimary text-sm mt-3">Witness References</p>
      </div>

      {/* Aadhar Card Section */}
      <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-gray-900">XXXX XX20 5258</p>
            <p className="text-sm text-gray-500">Aadhar Card Verified</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="">
              <CheckCircle className="w-5 h-5 text-green-700 " />
            </div>
            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
              <Download className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mb-4">
        <FormButton className=" hover:bg-active w-full" sx={{ paddingBlock: '10px' }}
          onClick={() => setDetailCaseRecord(true)}
        >
          Criminal Record(05)
        </FormButton>
        <FormButton className=" hover:bg-webprimary hover:text-white w-full"
          variant='outlined'
          sx={{ paddingBlock: '10px' }}
          onClick={() => setWitnessRecordHistory(true)}
        >
          Witness History(00)
        </FormButton>
      </div>

      {/* Case Information */}
      <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
        <div className="space-y-2 text-sm">
          <p className="text-gray-700">
            Any personal interest in the case ? <span className="font-semibold">NO</span>
          </p>
          <p className="text-gray-700">
            Connection to this Case ? <span className="font-semibold">YES</span>
          </p>
          <p className="text-gray-700">
            Any Criminal Record ? <span className="font-semibold">YES</span>
          </p>
        </div>
      </div>

      {/* Relevancy Score */}
      <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
        <p className="font-semibold mb-3">Relevancy Score</p>
        <div className="relative">
          <div className="flex h-12 rounded overflow-hidden">
            <div className="bg-red-700 flex-1 flex items-center justify-center text-white font-semibold">
              01
            </div>
            <div className="bg-orange-400 flex-1 flex items-center justify-center text-white font-semibold">
              02
            </div>
            <div className="bg-yellow-300 flex-1 flex items-center justify-center text-gray-700 font-semibold">
              03
            </div>
            <div className="bg-green-300 flex-1 flex items-center justify-center text-gray-700 font-semibold">
              04
            </div>
            <div className="bg-green-700 flex-1 flex items-center justify-center text-white font-semibold">
              05
            </div>
          </div>
          <div className="absolute top-0 right-16 bottom-0 w-1 bg-gray-900"></div>
        </div>
      </div>

      {/* Bottom Action Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <FormButton
          variant='outlined'
          sx={{ paddingBlock: '10px' }} className="bg-white text-webprimary border-2 border-webprimary py-3 rounded-lg font-medium hover:bg-blue-50">
          Witness Testimony
        </FormButton>
        <FormButton
          variant='outlined'
          sx={{ paddingBlock: '10px' }} className="bg-white text-webprimary border-2 border-webprimary py-3 rounded-lg font-medium hover:bg-blue-50">
          Cross-Examination
        </FormButton>
        <FormButton
          variant='outlined'
          sx={{ paddingBlock: '10px' }} className="bg-white text-webprimary border-2 border-webprimary py-3 rounded-lg font-medium hover:bg-blue-50">
          Evidence Sanctity Compliance
        </FormButton>
        <FormButton
          variant='outlined'
          sx={{ paddingBlock: '10px' }} className="bg-white text-webprimary border-2 border-webprimary py-3 rounded-lg font-medium hover:bg-blue-50">
          Summary
        </FormButton>
      </div>
    </div>
  );
}
