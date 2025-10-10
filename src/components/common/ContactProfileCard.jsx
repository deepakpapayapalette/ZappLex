import React from 'react';
import { Phone, Mail } from 'lucide-react';


export default function ContactProfileCard({ slideData = [] }) {
  return (
    <div className="w-full mx-auto  ">
      <div className="bg-white rounded-xl shadow-card">
        <div className="flex flex-col lg:flex-row items-start sm:items-center  gap-3 p-4  ">
          {/* Profile Image */}
          <div className="">
            <img
              src={slideData?.img || null}
              alt="Profile"
              className="w-32 h-32 rounded-lg object-cover"
            />
          </div>

          {/* Contact Information */}

          <div className=" px-3">
            {slideData?.name ?
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                {slideData?.name || null}
              </h2>
              : null
            }
            {slideData?.designation ?
              <p className="text-gray-600 mb-4">
                {slideData?.designation || null}
              </p>
              : null}
            {/* Contact Details */}
            <div className="flex flex-col xl:flex-row gap-2 mb-4">
              {slideData?.phone ?
                <div className="flex items-center gap-2 text-gray-700">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{slideData?.phone || null}</span>
                </div>
                : null
              }

              {slideData?.email ?
                <div className="flex items-center gap-2 text-gray-700">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{slideData?.email || null}</span>
                </div>
                : null}
            </div>

            {/* Call Now Button */}
            {slideData.callToAction ?
              <button className="zatra-btn-fill">
                {slideData.callToAction || null}
              </button>
              : null
            }
          </div>
        </div>
      </div>
    </div>
  );
}
