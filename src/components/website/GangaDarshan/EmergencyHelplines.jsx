import React from 'react'
import { FiPhoneCall } from "react-icons/fi";

const helplineCards = [
  {
    label: "Tourist Helpline",
    value: "tourist-helpline",
    phone: "+910312145852",
    icon: <FiPhoneCall className="text-gray-500 mr-2" size={18} />
  },
  {
    label: "Medical Helpline",
    value: "medical-helpline",
    phone: "+910312145852",
    icon: <FiPhoneCall className="text-gray-500 mr-2" size={18} />
  }
];

const EmergencyHelplines = () => {
  return (
    <>
      <section className='space-top'>
        <div className="container">
          <div className='bg-websecondary px-4 md:p-8 py-12 rounded-sm'>
            <h2 className="text-xl md:text-2xl font-semibold  mb-5">
              Emergency Helplines
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              {helplineCards.map((card, index) => (

                <div className="helpline-card p-5 bg-webcard rounded-xl" key={index}>
                  <h3 className="text-xl font-semibold mb-3">{card?.label}</h3>
                  <div className="flex items-center text-webPara mb-4">
                    {card?.icon}
                    <span className="text-webPara font-medium">{card?.phone}</span>
                  </div>
                  <button className='zatra-btn-fill w-full'>
                    Call Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EmergencyHelplines

