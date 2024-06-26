import Image from "next/image";
import React, { useState } from "react";

export default function ThemeImage({ height, src, alt, ...wrapperProps }) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <div
        className={`image-container ${isLoaded ? "image-loaded" : ""}`}
        {...wrapperProps}
      >
        <Image
          src={src}
          // src="https://images.unsplash.com/photo-1715520045597-de56a8639058?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={alt}
          fill
          className="image"
          onLoad={() => setIsLoaded(true)}
        />
        {!isLoaded && (
          <div
            className="skeleton-wrapper"
            style={{
              height: `100%`,
            }}
          >
            <div className="c-skeleton-square" />
          </div>
        )}
      </div>
    </>
  );
}
