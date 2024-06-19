import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import Image from 'react-image-enlarger'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const ProjectSingle = ({
  title,
  category,
  image,
  description,
  skills,
  link,
  youtubeLink,
}) => {
  console.log(youtubeLink)
  // const [zoomed, setZoomed] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.7,
        delay: 0.15,
      }}
    >
      {/* <Link to="/projects/single-project" aria-label="Single Project"> */}
      <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
        <div className="flex flex-col">
          {youtubeLink ? (
            <iframe
              className="rounded-t-xl w-full"
              title={title}
              height="650"
              allowfullscreen="true"
              frameborder="0"
              src={`https://youtube.com/embed/${youtubeLink}?loop=1&playlist=xGu3qIIDqaw&controls=0`}
            ></iframe>
          ) : (
            <a href={image}>
              <img
                src={image}
                className="rounded-t-xl border-none"
                // zoomed={zoomed}
                alt="Single Project"
                // onClick={() => setZoomed(true)}
                // onRequestClose={() => setZoomed(false)}
              ></img>
            </a>
          )}
        </div>
        <div className="text-center px-4 py-6">
          <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
            {title}
          </p>
          {/* <span className="text-lg text-ternary-dark dark:text-ternary-light">
            {category}
          </span> */}
          {link ? (
            <a href={link}>
              <p className="text-sm text-ternary-dark dark:text-ternary-light">
                Source Code
              </p>
            </a>
          ) : null}
        </div>
        {description?.map((paragraph) => (
          <>
            <p className="text-primary-dark dark:text-primary-light">
              {paragraph}
            </p>
            <br />
          </>
        ))}
        <p className="text-primary-dark dark:text-primary-light font-bold">
          Tools:
        </p>
        <p className="text-primary-dark dark:text-primary-light">{skills}</p>
      </div>
      {/* </Link> */}
    </motion.div>
  )
}

export default ProjectSingle
