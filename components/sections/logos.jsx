import Image from 'next/image'
import React from 'react'
import {logos} from '../../data/logos'

export default function Logos() {
  return (
    <div className="py-[140px] bg-[#f6f6f6] text-center text-3xl">
      <p className="font-dmsans">Trusted by transparency leaders</p>
      <div className="flex items-center justify-around mt-20 flex-wrap">
        {logos.map(logo => (
          <div key={logo.name} className="relative w-[162px] h-[75px]">
            <Image
              src={logo.url}
              alt={logo.name}
              layout="fill"
              optionFill="contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
