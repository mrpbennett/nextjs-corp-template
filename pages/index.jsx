import React from 'react'
import LearnMore from '../components/learn-more'
import Charity from '../components/sections/charity'
import Logos from '../components/sections/logos'
import WhoAreWe from '../components/sections/whoarewe'
import LayoutMain from '../layouts/layout-main'

export default function Home() {
  return (
    <>
      <div
        id="intro-screen"
        className="bg-blue-300 relative z-0 h-[80vh] min-h-[800px]"
      >
        <div className="absolute bottom-0 right-0 bg-white rounded-tl-[122px] min-h-[40vh] md:w-[63%] flex flex-wrap flex-col justify-center md:px-20 p-16">
          <h1 className="text-2xl md:text-6xl font-bold font-playfair leading-none mb-[24px]">
            A global leader in impact intelligence
          </h1>
          <p className="text-lg md:text-2xl font-dmsans mb-[30px]">
            Offering the debt capital market leading management, impact
            reporting and asset allocation solutions to mobilize transition.
          </p>

          <div className="flex items-center">
            <LearnMore href="about" />
          </div>
        </div>
      </div>

      <Logos />

      <WhoAreWe />

      <Charity />
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <LayoutMain
      title="Main"
      bgImageUrl="https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80"
    >
      {page}
    </LayoutMain>
  )
}
