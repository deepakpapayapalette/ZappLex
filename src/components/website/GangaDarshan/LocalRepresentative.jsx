import React from 'react'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import CommonCarousel from '../../common/CommonCarousel'
import profile1 from "../../../assets/images/website/ganga-darshan/LocalRepresentative.png";
import profile2 from "../../../assets/images/website/ganga-darshan/LocalRepresentative2.png";
import ContactProfileCard from '../../common/ContactProfileCard';

const LocalRepresentative = () => {
  const slideData = [
    {
      id: 1,
      name: "Full Name",
      designation: "Local Authorities Manager",
      phone: "+91 0312145852",
      email: "sdfu767@gmail.com",
      callToAction: "Call Now",
      img: profile1
    },
    {
      id: 2,
      name: "Full Name",
      designation: "Local Authorities Manager",
      phone: "+91 0312145852",
      email: "sdfu767@gmail.com",
      callToAction: "Call Now",
      img: profile2
    },
    {
      id: 3,
      name: "Full Name",
      designation: "Local Authorities Manager",
      phone: "+91 0312145852",
      email: "sdfu767@gmail.com",
      callToAction: "Call Now",
      img: profile1
    },
    {
      id: 4,
      name: "Full Name",
      designation: "Local Authorities Manager",
      phone: "+91 0312145852",
      email: "sdfu767@gmail.com",
      callToAction: "Call Now",
      img: profile2
    },

  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      // partialVisibilityGutter: 24,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      // partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      // partialVisibilityGutter: 16,
    },
  }
  return (
    <>
      <section className='space-top'>
        <div className="container">
          <div className='bg-websecondary px-4 md:p-8 py-12 rounded-sm'>
            <h2 className="text-2xl md:text-4xl font-semibold  mb-3">
              Local Representative
            </h2>
            <div className="mt-5">

              <Carousel
                responsive={responsive}
                infinite
                keyBoardControl
                swipeable
                draggable
                showDots={true}
                containerClass="pb-4 pt-4"
                itemClass="ps-1 pt-2 pe-4"
                arrows={false}
                renderButtonGroupOutside={false}
                partialVisible
              >

                {slideData.map((item, index) => (
                  <ContactProfileCard slideData={item} key={index} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
        <style jsx>
          {`
             .react-multi-carousel-dot button{
            background-color: #bfc3c5;
            border-color: #bfc3c5;
          }
          .react-multi-carousel-dot--active button {
              background-color: var(--web-primary) !important;
              border-color: var(--web-primary) !important;
          }
              .react-multi-carousel-dot-list{
                bottom:0;
              }
                .react-multi-carousel-track{
                  top: -8px;
                }

          `}

        </style>
      </section>
    </>
  )
}

export default LocalRepresentative;

