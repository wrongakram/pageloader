import React from "react";

const Image = ({ src, fallback, type = "image/webp" }) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} />
    </picture>
  );
};

export default Image;
