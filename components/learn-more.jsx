import {motion} from 'framer-motion'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React, {useState} from 'react'
import {HiArrowRight} from 'react-icons/hi'

LearnMore.propTypes = {
  href: PropTypes.string.isRequired,
}

export default function LearnMore({href}) {
  const [hover, setHover] = useState(false)
  return (
    <>
      <Link href={`/${href}`} passHref>
        <motion.a
          whileHover={{width: 175}}
          transition={{type: 'tween', duration: 0.15}}
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          className=" bg-black h-12 w-12 rounded-full flex items-center justify-center relative z-40 hover:cursor-pointer"
        >
          {hover ? (
            <span className="text-white ml-10 font-dmsans text-base">
              Learn more
            </span>
          ) : (
            <HiArrowRight className="h-5 w-5 absolute z-40 text-white" />
          )}
          <div className="h-12 w-12 rounded-full bg-accent-green absolute z-10 left-0" />
        </motion.a>
      </Link>
    </>
  )
}
