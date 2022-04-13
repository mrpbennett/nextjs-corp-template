import {AnimatePresence, motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import React, {useState} from 'react'
import {HiX} from 'react-icons/hi'
import LogoDark from '../images/logo-dark.png'
import LogoLight from '../images/logo-light.png'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  const router = useRouter()

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
          className={`flex items-center justify-between px-4 md:container ${
            isScrolling ? 'py-4' : 'py-6'
          }`}
        >
          <div>
            <Link href="/" passHref>
              <div
                className={`relative   ${
                  isScrolling ? 'h-8 w-32' : ' h-8 w-20 md:h-12 md:w-40 '
                }`}
              >
                <Image
                  src={
                    isScrolling ||
                    router.pathname === 'privacy-policy' ||
                    router.pathname === 'cookie-policy'
                      ? LogoDark
                      : LogoLight
                  }
                  alt="PNFB logo"
                  layout="fill"
                  objectFit="contain"
                  className="hover:cursor-pointer"
                />
              </div>
            </Link>
          </div>
          <div>
            <motion.button onClick={openMenu} className="group">
              {!isOpen ? (
                <motion.span
                  className={`font-bold  ${
                    isScrolling ||
                    router.pathname === 'privacy-policy' ||
                    router.pathname === 'cookie-policy'
                      ? 'text-black text-base'
                      : 'text-white text-base md:text-xl'
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
              className="fixed top-0 right-0 z-50 h-fit w-full bg-white  p-6 md:p-16 text-white shadow-lg rounded-bl-[122px]"
            >
              <div className="container">
                <div className="flex items-center justify-between">
                  <div
                    className="relative w-24 md:w-48 h-12 md:h-20"
                    onClick={closeMenu}
                  >
                    <Link href="/" passHref>
                      <Image
                        src={isOpen ? LogoDark : null}
                        alt="PNFB logo"
                        layout="fill"
                        objectFit="contain"
                        className="hover:cursor-pointer"
                      />
                    </Link>
                  </div>
                  <motion.div
                    whileHover={{rotate: 360}}
                    onClick={closeMenu}
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-accent-green hover:cursor-pointer"
                  >
                    <HiX className="h-6 w-6 text-white" />
                  </motion.div>
                </div>

                <div className="grid grid-cols-12 gap-10 prose prose-xl mt-6">
                  <div className="text-black col-span-4 text-base hidden lg:block">
                    <h2 className="font-playfair">About us</h2>
                    <p>
                      We connect sustainable capital allocation to real world
                      economies by breaking down market barriers.
                    </p>
                  </div>

                  <div className="auto-cols-max">
                    <h2 className="font-playfair whitespace-nowrap">...</h2>
                    <Link href="/meet-the-team" passHref>
                      <a onClick={closeMenu}>meet the team </a>
                    </Link>
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
              className="fixed top-0 left-0 z-40 flex h-full w-full items-center justify-center bg-black/50 px-5"
            />
          </>
        ) : null}
      </AnimatePresence>
    </>
  )
}
