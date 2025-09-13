import React from 'react'
import Heading from '../Heading/Heading'
import { TbCircleNumber1Filled , TbCircleNumber2Filled , TbCircleNumber3Filled , TbCircleNumber4Filled } from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from 'react-icons/bs';

const Process = () => {

  const renderSteps = steps.map(item => {
    return (
      <div 
        key={item.id}
        className={`flex flex-col items-center text-center md:text-left md:items-start md:flex-1 ${item.id % 2 === 0 ? 'md:-mt-40' : ''} mb-12 md:mb-0`}
      >
       
        <span className="flex justify-center items-center rounded-full outline-dashed w-16 h-16 text-3xl text-white bg-zinc-800 outline-[3px] outline-offset-4 outline-zinc-800 mb-4">
          {item.number}
        </span>

      
        <div className="flex justify-center items-center">
          <span className="flex justify-center items-center text-2xl bg-gradient-to-b from-orange-400 to-orange-500 text-white w-12 h-12 rounded-full">
            {item.icon}
          </span>
        </div>

    
        <div className="mt-4 max-w-xs md:max-w-sm">
          <h4 className="text-zinc-800 text-xl md:text-2xl font-bold">{item.title}</h4>
          <p className="text-zinc-600 mt-2 text-sm md:text-base">{item.para}</p>
        </div>
      </div>
    )
  })

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="w-fit mr-auto">
          <Heading highlight="Our" heading="Process" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-16 gap-12 md:gap-8">
          {renderSteps}
        </div>
      </div>
    </section>
  )
}

export default Process

const steps = [
  {
    id:1,
    number: <TbCircleNumber1Filled />,
    title: 'Sourcing',
    para: 'It is a long established fact that a reader',
    icon: <PiPlant />
  },
  {
    id:2,
    number: <TbCircleNumber2Filled />,
    title: 'Manufacturing',
    para: 'It is a long established fact that a reader',
    icon: <PiFactory />
  },
  {
    id:3,
    number: <TbCircleNumber3Filled />,
    title: 'Quality Control',
    para: 'It is a long established fact that a reader',
    icon: <SlBadge />
  },
  {
    id:4,
    number: <TbCircleNumber4Filled />,
    title: 'Logistics',
    para: 'It is a long established fact that a reader',
    icon: <BsTruck />
  }
]
