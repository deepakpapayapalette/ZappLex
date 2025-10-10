import React from 'react'
import about1 from "../../../assets/images/website/about/about1.png"
import our_vision from "../../../assets/images/website/about/our_vision.png"

const OurMission = () => {
  return (
    <>
      <section className="space-top ">
        <div className="container">
          <div className="grid md:grid-cols-5  gap-6 ">
            <div className="md:col-span-2">
              <div className="w-full flex self-stretch" >
                <img
                  src={about1}
                  alt="Our Mission"
                  className="w-full lg:max-h-[340px]  max-h-[300px] object-cover rounded-xl self-stretch"
                />

              </div>
            </div>
            <div className="bg-websecondary p-6 md:p-8 rounded-xl md:col-span-3">
              <h2 className="text-xl md:text-4xl font-semibold text-webprimary mb-4 ">Our Mission</h2>
              <p className="text-webPara leading-7 font-normal   text-md sm:text-lg">
                Our mission is to make every journey enriching, safe, and sustainable by blending tourism with culture, wellness, and technology. We strive to promote responsible travel that preserves heritage, celebrates traditions, and supports local communities. Through continuous education, awareness campaigns, and collaboration with local partners, government bodies, and organizations, we aim to create memorable experiences that empower travelers, uplift communities, and build a culture of safety, sustainability, and shared prosperity.
              </p>

            </div>

          </div>
          <div className='space-top'>

            <div className="grid md:grid-cols-5  gap-6 ">
              <div className="md:col-span-2 bg-webprimary p-6 md:p-8  rounded-xl md:order-1 order-2">
                <h2 className="text-xl md:text-4xl font-semibold text-white mb-4 ">Our Vision</h2>
                <p className="text-webPara leading-7 font-normal  text-white  text-md sm:text-lg">
                  To create a future where tourism becomes a driving force for cultural exchange, community empowerment, and sustainable growth. We envision safe and seamless journeys where responsible travel preserves heritage, celebrates traditions, and supports local economies.
                </p>

              </div>
              <div className="rounded-xl md:col-span-3 md:order-2 order-1">
                <div className="w-full " >
                  <img
                    src={our_vision}
                    alt="Our Mission"
                    className="w-full lg:max-h-[340px]  max-h-[300px] object-cover rounded-xl"
                  />

                </div>

              </div>

            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default OurMission
