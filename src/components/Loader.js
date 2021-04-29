import React, { useEffect } from "react";
import Image from "./Image";

const Loader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  });

  return (
    <div className='loader'>
      <div className='loader-inner'>
        <ImageBlock id='image-1' />
        <div className='transition-image'>
          <img
            src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
            alt='random alt'
          />
        </div>
        <ImageBlock id='image-3' />
        <ImageBlock id='image-4' />
        <ImageBlock id='image-5' />
      </div>
    </div>
  );
};

export const ImageBlock = ({ id }) => {
  return (
    <div className={`image-block ${id}`}>
      <Image
        src={process.env.PUBLIC_URL + `/images/${id}.webp`}
        fallback={process.env.PUBLIC_URL + `/images/${id}.jpg`}
        alt={id}
      />
    </div>
  );
};
export default Loader;
