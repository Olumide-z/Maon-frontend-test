"use client";

import Image from "next/image";
import React from "react";
import News from "../news/News";

const LandingPage = () => {
  
  return (
    <div className="bg-[var(--color-background)] min-h-screen md:px-8 px-4">
      <div className="flex items-center justify-center py-8">
        <Image
          src="/images/logo.png"
          width={170}
          height={48.2}
          alt="Blott Logo"
        />
      </div>
      <News />
    </div>
  );
};

export default LandingPage;
