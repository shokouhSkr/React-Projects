import React, { useState, useEffect } from "react";

const SingleColor = ({ weight, rgb, hexColor, index }) => {
  const [isCopied, setIsCopied] = useState(false);

  // rgb in this library comes in array, like [256,0,0]
  const bcg = rgb.join(","); // for insert in style
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsCopied(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isCopied]);

  const copyHandler = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(hexValue);
  };

  return (
    <article
      className={`color ${index > 10 && "color-light"}`} // to better see the color number in darker colors
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={copyHandler}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {isCopied && <p className="alert">Copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
