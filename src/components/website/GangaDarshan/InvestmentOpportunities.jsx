import React from 'react'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import CommonCarousel from '../../common/CommonCarousel'
import slide1 from "../../../assets/images/website/ganga-darshan/MajorExports.png";

const InvestmentOpportunities = () => {
  const slideData = [
    {
      id: 1,
      img: slide1,
      title: 'Jaggery',
      subtitle: 'Jaggery making in Ayodhya is being carried...',



    },
    {
      id: 2,
      img: slide1,
      title: 'Jaggery',
      subtitle: 'Jaggery making in Ayodhya is being carried...',

    },
    {
      id: 3,
      img: slide1,
      title: 'Jaggery',
      subtitle: 'Jaggery making in Ayodhya is being carried...',

    },
    {
      id: 4,
      img: slide1,
      title: 'Jaggery',
      subtitle: 'Jaggery making in Ayodhya is being carried...',


    },
    {
      id: 5,
      img: slide1,
      title: 'Full Name',
      subtitle: 'Jaggery making in Ayodhya is being carried...',


    },
  ];
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
      <section className='space-top'>
        <div className="container">
          <h2 className="text-2xl md:text-4xl font-semibold  mb-3">
            Investment Opportunities
          </h2>
          <div className="mt-5">

            <Carousel
              responsive={responsive}
              infinite
              keyBoardControl
              swipeable
              draggable
              showDots={false}
              containerClass="pb-2 pt-4"
              itemClass="ps-1 pt-2 pe-4"
              arrows={false}
              renderButtonGroupOutside={false}
              partialVisible
            >

              {slideData.map((item, index) => (
                <div className='border border-gray-300 p-4 rounded-2xl' key={index}>
                  <h2 className='text-xl md:text-2xl font-semibold pb-2'>Renewable Energy Sector</h2>
                  <p className='text-webPara pb-3 '>Government Schemes</p>
                  <ul className='mb-4 text-webPara list-disc list-inside' >
                    <li className='text-webPara'>Market demand (domestic + export)</li>
                    <li className='text-webPara'>Special schemes ODOP</li>
                  </ul>
                  <button className='zatra-btn-fill w-full px-3'>
                    Explore  Scheme
                  </button>


                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  )
}

export default InvestmentOpportunities;

