import Link from 'next/link'
import React from 'react'

const routes = [
  {
    name: 'Privacy policy',
    path: '/privacy-policy',
  },
  {
    name: 'Terms of use',
    path: '/',
  },
  {
    name: 'Cookie policy',
    path: '/cookie-policy',
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white relative z-40">
      <div className=" py-12 text-zinc-100 border-t border-gray-100/30">
        <div className="container flex justify-between px-6 md:px-0">
          <div className="flex flex-col md:flex-row">
            <div className="mb-16 md:mr-16 font-dmsans ">
              <strong>Head Office</strong>
              <br />
              41 Great Pulteney Street
              <br />
              London, W1F 9NZ
              <br />
              United Kingdom
            </div>
            <div>
              <strong>Contact Details</strong>
              <br />
              <a
                href="mailto:info@prco.com"
                className="font-dmsans hover:underline hover:decoration-accent-green hover:decoration-2"
              >
                info@prco.com
              </a>
              <br />
              <a
                href="mailto:enquiries@prco.com"
                className="font-dmsans hover:underline hover:decoration-accent-green hover:decoration-2"
              >
                enquiries@prco.com
              </a>
            </div>
          </div>

          <nav className="space-y-2 flex flex-col text-right">
            {routes.map(route => (
              <Link href={route.path} key={route.name} passHref>
                <a className="hover:underline hover:decoration-accent-green hover:decoration-2 font-dmsans">
                  {route.name}
                </a>
              </Link>
            ))}
          </nav>
        </div>
        <div className="container font-dmsans mt-20 px-6 md:px-0">
          Copyright © {currentYear} PNFB. All Rights Reserved
        </div>
      </div>
    </footer>
  )
}
