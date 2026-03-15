import React from "react";
import { forwardRef, useEffect, useState } from "react";
import "@/components/ui/image.css";

const FALLBACK_IMAGE_URL =
  "https://static.wixstatic.com/media/12d367_4f26ccd17f8f4e3a8958306ea08c2332~mv2.png";

export const Image = forwardRef(function Image({ src, alt = "", ...props }, ref) {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  if (!imgSrc) {
    return <div data-empty-image ref={ref} {...props} />;
  }

  return (
    <img
      ref={ref}
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(FALLBACK_IMAGE_URL)}
      {...props}
    />
  );
});


