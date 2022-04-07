import {AnimatePresence, motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import {HiX} from 'react-icons/hi'
import LogoDark from '../images/logo-dark.png'
import LogoLight from '../images/logo-light.png'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  function openMenu() {
    setIsOpen(true)
  }

  function closeMenu() {
    setIsOpen(false)
  }

  // changes the state of the menu when the user scrolls
  function windowScrolling() {
    if (window.scrollY >= 100) {
      setIsScrolling(true)
    } else {
      setIsScrolling(false)
    }
  }

  window.addEventListener('scroll', windowScrolling)

  return (
    <>
      <motion.div
        id="nav-bar"
        className={`sticky top-0 z-20 -mb-[100px] transition duration-75 ease-in-out ${
          isScrolling
            ? 'bg-white border-b border-gray-100 shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div
          className={`flex items-center justify-between container ${
            isScrolling ? 'py-4' : 'py-6'
          }`}
        >
          <div>
            <Link href="/" passHref>
              <div
                className={`relative w-40  hover:cursor-pointer ${
                  isScrolling ? 'h-8' : 'h-12'
                }`}
              >
                <Image
                  src={isScrolling ? LogoDark : LogoLight}
                  alt="PNFB logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Link>
          </div>
          <div>
            <motion.button onClick={openMenu} className="group">
              {!isOpen ? (
                <motion.span
                  className={`font-bold  ${
                    isScrolling ? 'text-black text-base' : 'text-white text-xl'
                  }`}
                >
                  Menu
                </motion.span>
              ) : null}
            </motion.button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.div
              initial={{y: '-100%'}}
              animate={{y: 0}}
              exit={{y: '-100%'}}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 50,
              }}
              className="fixed top-0 right-0 z-50 h-[50vh] w-full bg-[#111] py-10 text-white shadow-lg rounded-bl-[122px]"
            >
              <div className="container">
                <div className="flex items-center justify-between">
                  <div className="relative w-48 h-20">
                    <Image
                      src={isOpen ? LogoLight : null}
                      alt="PNFB logo"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <motion.div
                    whileHover={{rotate: 360}}
                    onClick={closeMenu}
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-white hover:cursor-pointer"
                  >
                    <HiX className="h-6 w-6 text-black" />
                  </motion.div>
                </div>

                <div className="grid grid-cols-12 gap-10 prose prose-xl mt-6">
                  <div className="text-white col-span-4 text-base">
                    <h2 className="text-white font-playfair">About us</h2>
                    <p>
                      We connect sustainable capital allocation to real world
                      economies by breaking down market barriers.
                    </p>
                  </div>

                  <div className="auto-cols-max">
                    <h2 className="font-playfair text-white whitespace-nowrap">
                      ...
                    </h2>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              id="overlay"
              initial={{opacity: 0}}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{type: 'spring', bounce: 0, duration: 0.2}}
              onClick={closeMenu}
              className="fixed top-0 left-0 z-40 flex h-full w-full items-center justify-center bg-black/30 px-5"
            />
          </>
        ) : null}
      </AnimatePresence>
    </>
  )
}
