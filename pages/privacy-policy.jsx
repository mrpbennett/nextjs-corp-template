import * as React from 'react'
import LayoutMain from '../layouts/layout-main'

// markup
export default function Privacy() {
  return (
    <>
      <div className="container  mt-60">
        <h1 className="font-playfair">Privacy policy</h1>
        <h2 className="text-2xl md:text-3xl font-light leading-normal mb-8 font-dmsans">
          PNFB Ltd website does not store or capture personal information, but
          does utilise various cookies to help measure traffic and make
          improvements to the website.
        </h2>
        <p className="font-dmsans">
          The website will only record your personal information such as your
          name, address, or email address if volunteered to us by you. Such
          information shall be treated as private and confidential.
        </p>
      </div>
    </>
  )
}

Privacy.getLayout = function getLayout(page) {
  return <LayoutMain title="Main">{page}</LayoutMain>
}
