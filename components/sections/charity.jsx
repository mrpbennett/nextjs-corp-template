import React from 'react'
import LearnMore from '../learn-more'

export default function Charity() {
  return (
    <div className="py-36 bg-white text-3xl">
      <div className="container prose prose-xl">
        <h2 className="text-black font-playfair">Our charity</h2>
        <p className="text-black font-dmsans">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <LearnMore />
      </div>
    </div>
  )
}
