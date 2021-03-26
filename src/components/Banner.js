import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Banner = () => {
  return (
    <motion.div className='banner' variants={banner}>
      <BannerRow title={"brand"} hasMessage title={"brand"} />
      <BannerRowAnimated />
      <BannerRow title={"studio"} position='center' />
    </motion.div>
  );
};

const BannerRow = ({ title, hasMessage, position }) => {
  return (
    <motion.div className={`banner-row ${position}`}>
      {position && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
          className='scroll'>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.8,
            }}>
            scroll
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.8,
            }}>
            down
          </motion.span>
        </motion.div>
      )}
      <motion.div
        style={{ width: hasMessage ? "50%" : "100%" }}
        className='row-col'>
        <motion.span
          className='row-title'
          variants={banner}
          initial='initial'
          animate='animate'>
          {[...title].map((letter) => (
            <motion.span className='row-letter' variants={letterAni}>
              {letter}
            </motion.span>
          ))}
        </motion.span>
      </motion.div>
      {hasMessage && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.4,
          }}
          className='row-col'>
          <span className='row-message'>
            We are specialised in setting up the foundation of your brand and
            setting you up for success.
          </span>
        </motion.div>
      )}
    </motion.div>
  );
};

const BannerRowAnimated = () => {
  const [playMarquee, setPlayMarquee] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);
  return (
    <>
      <div className={`banner-row marquee ${playMarquee && "animate"}`}>
        <motion.div
          initial={{ y: 310 }}
          animate={{ y: 0 }}
          transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
          className='marquee__inner'>
          <BannerRow title={"experience"} />
          <span className='row-title'>experience</span>
          <span className='row-title'>experience</span>
          <span className='row-title'>experience</span>
        </motion.div>
      </div>
    </>
  );
};

export default Banner;
