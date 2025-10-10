import React from 'react'
import slide1 from "../../../assets/images/website/ganga-darshan/Local-influencers.png";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import InfluencerProfileCard from '../../common/InfluencerProfileCard';

const Localinfluencers = () => {
  const slideData = [
    {
      id: 1,
      img: slide1,
      title: 'Sectors Open For Trade Handicrafts.',
      subtitle: 'Private initiatives Partnerships ',
      desc: "Investment schemes available",
      btnText: "View Seller Details"
    },
    {
      id: 2,
      img: slide1,
      title: 'Sectors Open For Trade Handicrafts.',
      subtitle: 'Private initiatives Partnerships ',
      desc: "Investment schemes available",
      btnText: "View Seller Details"

    },
    {
      id: 3,
      img: slide1,
      title: 'Sectors Open For Trade Handicrafts.',
      subtitle: 'Private initiatives Partnerships ',
      desc: "Investment schemes available",
      btnText: "View Seller Details"

    },
    {
      id: 4,
      img: slide1,
      title: 'Sectors Open For Trade Handicrafts.',
      subtitle: 'Private initiatives Partnerships ',
      desc: "Investment schemes available",
      btnText: "View Seller Details"


    },
    {
      id: 5,
      img: slide1,
      title: 'Sectors Open For Trade Handicrafts.',
      subtitle: 'Private initiatives Partnerships ',
      desc: "Investment schemes available",
      btnText: "View Seller Details"


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
            Local influencers
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
                <InfluencerProfileCard key={index} data={item} />
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  )
}

export default Localinfluencers;

