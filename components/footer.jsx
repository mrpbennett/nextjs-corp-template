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
    path: '/',
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black">
      <div className=" py-12 text-white border-t border-gray-100/30">
        <div className="container flex items-center justify-between">
          <div className="text-sm">
            Copyright © {currentYear} PNFB.
            <br /> All Rights Reserved
          </div>

          <div className="space-x-20 text-xl">
            {routes.map(route => (
              <Link href={route.path} key={route.name} passHref>
                <a>{route.name}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
