import React from "react";
import { motion } from "framer-motion";

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const Loader = ({ setLoading }) => {
  return (
    <motion.div className='loader'>
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial='hidden'
        animate='show'
        exit='exit'
        className='loader-inner'>
        <ImageBlock
          variants={item}
          width='500'
          posX='15'
          posY='62'
          img='https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        />
        <div className='main-image-parent'>
          <motion.img
            variants={item}
            src={
              "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80"
            }
            className='img-test'
            layoutId={"main-image-1"}
          />
        </div>

        <ImageBlock
          variants={item}
          width='500'
          posX='70'
          posY='10'
          img='https://images.unsplash.com/photo-1524758870432-af57e54afa26?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60'
        />
        <ImageBlock
          variants={item}
          width='500'
          posX='60'
          posY='70'
          img='https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80'
        />
        <ImageBlock
          variants={item}
          width='400'
          posX='12'
          posY='12'
          img='https://images.unsplash.com/photo-1525896544042-354764aa27e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
        />
      </motion.div>
    </motion.div>
  );
};

export const ImageBlock = ({ width, img, posX, posY, variants }) => {
  return (
    <motion.div
      variants={variants}
      className={`image-block`}
      style={{
        width: `${width}px`,
        top: `${posY}vh`,
        left: `${posX}vw `,
      }}>
      <img src={img} />
    </motion.div>
  );
};
export default Loader;
