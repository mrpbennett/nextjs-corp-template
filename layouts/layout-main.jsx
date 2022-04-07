import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'
import Footer from '../components/footer'

const Navigation = dynamic(() => import('../components/navigation'), {
  ssr: false,
})

export default function LayoutMain({title, children, bgImageUrl = ''}) {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundImage: `url(${bgImageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundCover: 'cover',
      }}
    >
      <Head>
        <title>{title} &bull; PNFB</title>
        <link rel="icon" href="/bighead.png" />
      </Head>

      <Navigation />

      <main id="layout-main" className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  )
}
