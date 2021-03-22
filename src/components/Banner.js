import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useAnimation } from "framer-motion";

const Banner = () => {
  return (
    <div className='banner'>
      <BannerRow title={"brand"} hasMessage />
      <BannerRowAnimated title={"experience"} />
      <BannerRow title={"studio"} position='center' />
    </div>
  );
};

const BannerRow = ({ title, hasMessage, position }) => {
  return (
    <>
      <div className={`banner-row ${position}`}>
        <div className='row-col'>
          <span className='row-title'>{title}</span>
        </div>

        {hasMessage && (
          <div className='row-col'>
            <span className='row-message'>
              We are specialised in setting up the foundation of your brand and
              setting you up for success.
            </span>
          </div>
        )}
      </div>
    </>
  );
};

const BannerRowAnimated = () => {
  return (
    <>
      <div className={`banner-row marquee`}>
        <div className='marquee__inner'>
          <span className='row-title'>experience</span>
          <span className='row-title'>experience </span>
          <span className='row-title'>experience </span>
          <span className='row-title'>experience </span>
        </div>
      </div>
    </>
  );
};

export default Banner;
