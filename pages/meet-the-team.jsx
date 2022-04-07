import Image from 'next/image'
import * as React from 'react'
import {team} from '../data/team'
import LayoutMain from '../layouts/layout-main'
import LayoutPage from '../layouts/layout-page'

// markup
export default function Privacy() {
  return (
    <>
      <h2 className="prose prose-lg font-playfair text-2xl md:text-4xl mb-10">
        Leadership team
      </h2>
      <div className="container grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 ">
        {team.map(member => (
          <div key={member.name} className="group mb-8 hover:cursor-pointer">
            <div className="mx-0 mb-6 hidden sm:block">
              <Image
                src={member.image}
                alt={`photo of ${member.name}`}
                width={720}
                height={960}
                className="rounded-bl-[122px] transition ease-in-out"
                priority
              />
            </div>

            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-normal">
                {member.name}
              </span>
              <span className="text-base md:text-lg">{member.position}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

Privacy.getLayout = function getLayout(page) {
  return (
    <LayoutMain title="Meet the team">
      <LayoutPage
        bgImg="https://greenassetswallet.io/wp-content/uploads/2022/01/Axel-and-Sofie-standing_HIGH.jpg"
        title={`We serve actors that build a better Earth`}
        subTitle="Meet the team"
      >
        {page}
      </LayoutPage>
    </LayoutMain>
  )
}
