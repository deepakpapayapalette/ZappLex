import React from 'react'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { ChevronDown } from 'lucide-react';
import WitnessCard from '../case-portfolio/case-pogress/WitnessCard';
import { Dialog } from '@mui/material';
import PlaintiffCard from '../case-portfolio/case-pogress/PlaintiffCard';

const casesArr = [
  {
    _id: 1,
    caseNo: 'CR/138/2025/DEL/056',
    status: "Scheduled",
    bgColor: '#d4cd00',
    title: 'Rajesh Sharma v. Anil Kumar',
    witnesses: 'Witness: Amit Tiwari',
    onView: () => alert('View Case File clicked')
  },
  {
    _id: 2,
    caseNo: 'CR/142/2025/DEL/078',
    status: "Delayed/Unavailable",
    bgColor: '#ea0e0e',
    title: 'State v. Sanjay Verma',
    witnesses: 'Witness: Ramesh Patel',
    onView: () => alert('View Case File clicked')
  },
  {
    _id: 3,
    caseNo: 'CR/156/2025/DEL/091',
    status: "Delayed/Unavailable",
    bgColor: '#ea0e0e',
    title: 'Priya Singh v. Mumbai Municipal Corporation',
    witnesses: 'Witness: Meena Joshi',
    onView: () => alert('View Case File clicked')
  },
  {
    _id: 4,
    caseNo: 'CR/167/2025/DEL/112',
    status: "Testimony Completed",
    bgColor: '#238206',
    title: 'Rohit Gupta v. Neha Sharma & Ors.',
    witnesses: 'Witness: Suresh Nair',
    onView: () => alert('View Case File clicked')
  },
  {
    _id: 5,
    caseNo: 'CR/189/2025/DEL/134',
    status: "Scheduled",
    bgColor: '#d4cd00',
    title: 'Sunita Devi v. Land Development Authority',
    witnesses: 'Witness: Kavita Menon',
    onView: () => alert('View Case File clicked')
  },
  {
    _id: 6,
    caseNo: 'CR/201/2025/DEL/156',
    status: "Testimony Completed",
    bgColor: '#238206',
    title: 'Vikram Mehta v. State Bank of India',
    witnesses: 'Witness: Deepak Reddy',
    onView: () => alert('View Case File clicked')
  }
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
const WitnessTestimonyOverview = () => {
  const [selectedCase, setSelectedCase] = React.useState('Choose Case');

  const [witnessState, setWitnessState] = React.useState(false);

  // function witnessesView() {
  //   <WitnessCard />
  // }

  return (
    <div className='w-full space-top'>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold">Witness Testimony Tracker</h1>
        <div className="relative" style={{ minWidth: '320px' }}>
          <select
            value={selectedCase}
            onChange={(e) => setSelectedCase(e.target.value)}
            className="w-full appearance-none border-2 border-gray-300 rounded-lg px-6 py-3 pr-12 bg-white cursor-pointer hover:border-gray-400 focus:outline-none focus:border-blue-500 text-gray-600"
          >
            <option disabled>Choose Case</option>
            <option>case 1</option>
            <option>Case 2</option>
            <option>Case 3</option>
          </select>
          <ChevronDown className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" />
        </div>
      </div>

      {/* ===================witness-Testimony-Trackerr================= */}
      <div>
        <Carousel
          responsive={responsive}
          infinite
          keyBoardControl
          swipeable
          draggable
          showDots={false}
          containerClass="pb-2 mb-0 pb-0 "
          itemClass="ps-1 pt-2 pe-2"
          arrows={false}
          renderButtonGroupOutside={false}
          partialVisible
        >
          {casesArr.map((item) => (
            <div className="card   " key={item._id}>
              <article className="w-full justify-between items-stretch xl:min-h-[350px] flex flex-col bg-white rounded-lg border border-gray-300 overflow-hidden">
                {/* Header */}
                <div className={` px-5 py-3 rounded-t-lg`} style={{ backgroundColor: `${item.bgColor}` }}>
                  <h3 className="text-white text-lg ">{item.status}</h3>
                </div>
                {/* Body */}
                <div className="p-5 space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Case No.</p>
                    <p className="mt-1 text-md text-gray-900">{item.caseNo}</p>
                  </div>


                  <div>
                    <p className="text-sm text-gray-500">Case Title</p>
                    <h4 className="mt-1 text-md leading-tight">{item.title}</h4>
                  </div>


                  <div>
                    <p className="text-sm text-gray-500">Witnesses</p>
                    <p className="mt-1 text-sm font-semibold ">{item.witnesses}</p>
                  </div>


                  <div className="pt-2">
                    <button
                      onClick={() => setWitnessState(true)}
                      className="w-full inline-flex items-center justify-center  px-4 py-2 rounded-lg border-2 border-webprimary text-webprimary  text-base hover:bg-active hover:border-active hover:text-white transition"
                      aria-label="View case file"
                    >
                      View Case File
                    </button>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </Carousel>
      </div>

      <Dialog
        open={witnessState}
        onClose={() => setWitnessState(false)}
        // fullWidth
        // maxWidth="lg"
        fullWidth={true}
        sx={{

        }}
      >
        <div >
          <PlaintiffCard onClose={setWitnessState} />
        </div>
      </Dialog>


    </div>
  )
}

export default WitnessTestimonyOverview
