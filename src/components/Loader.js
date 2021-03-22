import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className='loader'>
      <div className='loader-inner'>
        <ImageBlock
          width='400'
          posX='12'
          posY='12'
          img='https://images.unsplash.com/photo-1525896544042-354764aa27e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
        />
        <ImageBlock
          center
          width='900'
          posX='50'
          posY='50'
          img='https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80'
        />
        <ImageBlock
          width='500'
          posX='70'
          posY='10'
          img='https://images.unsplash.com/photo-1524758870432-af57e54afa26?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60'
        />
        <ImageBlock
          width='500'
          posX='15'
          posY='62'
          img='https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        />
        <ImageBlock
          width='500'
          posX='60'
          posY='70'
          img='https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80'
        />
      </div>
    </div>
  );
};

const ImageBlock = ({ width, img, posX, posY, center }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='image-block'
      style={{
        width: `${width}px`,
        transform: center
          ? `translate3d(-50%, -50%, 0)`
          : `translate3d(${posX}vw, ${posY}vh, 0)`,
        top: center ? "50%" : null,
        left: center ? "50%" : null,
      }}>
      <img src={img} />
    </motion.div>
  );
};
export default Loader;
