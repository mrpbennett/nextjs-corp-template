import * as React from 'react'
import LayoutMain from '../layouts/layout-main'

// markup
export default function Cookie() {
  return (
    <>
      <div className="container  prose prose-lg mt-60">
        <h1 className="font-playfair">Cookie policy</h1>
        <h2 className="text-2xl md:text-3xl font-light leading-normal mb-8 font-dmsans">
          When you browse the PNFB website we use cookies to collect information
          about your online preferences and to enhance your browsing experience.
        </h2>
        <p className="font-dmsans">
          The cookies we use do not capture information that can identify you
          and do not give us access to your computer. You can delete/control
          cookies via your browser settings by following these instructions,
          however if you choose to block cookies then your browsing experience
          may be affected.
        </p>
      </div>
    </>
  )
}

Cookie.getLayout = function getLayout(page) {
  return <LayoutMain title="Cookie policy">{page}</LayoutMain>
}
