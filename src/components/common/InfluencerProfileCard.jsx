import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { Briefcase } from 'lucide-react';

export default function InfluencerProfileCard({ data }) {
  const socialLinks = [
    { icon: <FaInstagram className="w-5 h-5" />, link: "#", color: "text-webprimary" },
    { icon: <FaFacebookF className="w-5 h-5" />, link: "#", color: "text-webprimary" },
    { icon: <FaLinkedinIn className="w-5 h-5" />, link: "#", color: "text-webprimary" },
    { icon: <FaYoutube className="w-5 h-5" />, link: "#", color: "text-webprimary" }
  ];

  return (
    <div className="w-full mx-auto ">
      <div className="bg-white rounded-2xl shadow-card overflow-hidden p-4">
        {/* Profile Image */}
        <div className="relative">
          <img
            src={data?.img || null}
            alt="Profile"
            className="w-full h-64 object-cover"
            style={{ borderRadius: '10px 10px 0 0' }}
          />
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h2 className=" text-2xl font-bold text-gray-900 mb-1">
            Full Name
          </h2>

          <p className="text-gray-600 text-lg mb-6">
            Instagram Influencers
          </p>

          {/* Social Media Icons */}
          <div className="flex flex-wrap gap-4 mb-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                className={`${social.color} `}
              >
                <div className='hover:scale-110 transition-transform p-3 shadow-card rounded-full'>
                  {social.icon}
                </div>
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="bg-webprimary hover:bg-webprimary text-white font-semibold py-3 px-3 rounded-lg w-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 flex items-center justify-center">
              Call
            </button>
            <button className="bg-webprimary hover:bg-webprimary text-white font-semibold py-3 px-3 rounded-lg w-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 flex items-center justify-center">
              <Briefcase className="w-5 h-5 inline" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
