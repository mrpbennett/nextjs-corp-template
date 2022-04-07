import Image from 'next/image'
import React from 'react'

export default function LayoutPage({
  children,
  bgImg,
  title = '',
  subTitle = '',
}) {
  return (
    <>
      <div
        id="hero-section"
        className="h-[105vh] relative w-full min-h-[862px]"
      >
        <div className="container relative">
          <div className="absolute z-20 text-white flex flex-col text-2xl lg:text-6xl  w-1/2 lg:w-1/3 right-10 lg:right-40 top-[70rem]">
            <span className="font-playfair">{title}</span>
            <span className="text-xl mt-6 font-dmsans">{subTitle}</span>
          </div>
        </div>

        <div className="absolute bottom-0 bg-white rounded-tr-[1000px] h-[144px] w-full z-10 -mb-1" />
        <div
          id="background-image"
          className="absolute top-0 left-0 h-full w-full"
        >
          <Image
            src={`${bgImg}`}
            alt="background image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
      <div className="bg-white pb-12 lg:pb-20 px-6 w-full">
        <section className="container">{children}</section>
      </div>
    </>
  )
}
