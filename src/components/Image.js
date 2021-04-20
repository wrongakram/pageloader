import React from "react";

const Image = ({ src, fallback, type = "image/webp" }) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} alt={"basic image"} />
    </picture>
  );
};

export default Image;
