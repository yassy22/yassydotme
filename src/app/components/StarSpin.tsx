"use client";
import React, { useState, useEffect } from "react";

import star from "../public/assets/images/home/star.png";
import Image from "next/image";

function StarSpin({
  classNameSize,
  ref,
}: {
  classNameSize: string;
  ref?: React.MutableRefObject<null>;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={`${classNameSize} object-cover`} ref={ref}>
      <Image src={star} alt="Star" />
    </div>
  );
}

export default StarSpin;
