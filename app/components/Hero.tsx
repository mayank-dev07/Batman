"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const batmanLogoRef = useRef<SVGSVGElement>(null);
  const batmanImageRef = useRef<HTMLImageElement>(null);
  const bikeImageRef = useRef<HTMLImageElement>(null);
  const bikeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a timeline for the logo animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroContainerRef.current,
        start: "top top",
        end: "bottom+=1600vh bottom", // Extended to cover all three sections
        scrub: 1, // Smooth but responsive transitions
        // markers: true,
       
      },
    });


    // Phase 1: Move and rotate (second section)
    tl.to(batmanLogoRef.current, {
      x: "-25vw",
      rotation: 360,
      scale: 1.4,
      opacity: 1,
      ease: "none",
      duration: 2,
    })
      // Phase 2: Continue to right side (third section)
      .to(batmanLogoRef.current, {
        x: "25vw", // Move to right side
        rotation: 720, // Additional rotation
        scale: .9,
        opacity: 1,
        ease: "none",
        duration: 2,
      });
      

      const tl2 = gsap.timeline()
      tl2.to(batmanLogoRef.current, {
        opacity: 1,
        ease: "none",
        duration: 2,
      })

  }, []);

  return (
    <>
        <div ref={heroContainerRef} className=" w-full min-h-screen flex flex-col md:flex-row items-center justify-center relative">
          <div 
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
            style={{
              mixBlendMode: "difference",
              pointerEvents: "none"
            }}
          >
           
            <svg 
              ref={batmanLogoRef} 
              version="1.1" 
              id="Layer_1" 
              xmlns="http://www.w3.org/2000/svg" 
              xmlnsXlink="http://www.w3.org/1999/xlink" 
              x="0px" 
              y="120px"
              viewBox="0 0 200 200"
              width="1000px"
              height="1000px"
              enableBackground="new 0 0 512 512" 
              xmlSpace="preserve"
              className="cursor-pointer -mt-60 transition-all duration-300 ease-out"
              style={{
                background: "transparent",
                pointerEvents: "auto",
                opacity: 0
              }}
             
            >
                          <path
        d="m 6.817397,110.30549 66.132008,-0.12543 c 1.772148,13.63157 11.774171,14.67626 21.922618,15.49702 2.215955,0.32608 2.741,-1.03876 3.212798,-2.45684 l 1.889879,-10.58334 1.76771,7.19203 c 2.13106,-0.4924 4.92423,-0.42092 6.92574,-0.0105 l 1.7009,-7.18155 2.07887,10.77232 c 0.18145,1.91505 1.42533,2.50207 3.0238,2.64584 12.28491,-0.28694 20.63439,-4.3382 21.35566,-15.68601 l 66.96362,-0.0636 c -22.06084,8.59173 -36.80376,19.87954 -30.29993,38.9951 -27.65405,-3.14807 -59.86863,-0.31098 -68.41369,27.78125 -6.790066,-30.87074 -50.334728,-29.62987 -68.602679,-28.15922 5.040103,-13.72527 0.412378,-26.89809 -29.657304,-38.61709 z"
        id="path1224"
        />
 
            </svg>
          </div>
          <p className="text-8xl font-medium leading-[100px] tracking-widest text-center text-white -mt-0 md:-mt-32">
            <span className=" text-4xl ">WHO AM I ?</span>
            <br />I AM BATMAN
          </p>
        </div>
        <div className="text-section w-full min-h-screen flex flex-col md:flex-row items-center justify-between relative">
          <div className="px-5 text-center w-full md:w-1/2 ">
            <p className="text-xl md:text-5xl font-medium leading-[60px] tracking-widest text-center text-white">
              You either die a hero or live long enough to see yourself become
              the villain
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-end">
            <Image
              ref={batmanImageRef}
              src="/batman.png"
              alt="batman image"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
        <div
          ref={bikeContainerRef}
          className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-center relative "
        >
          <div className="w-full md:w-1/2 ">
            <Image
              ref={bikeImageRef}
              src="/bike.png"
              alt="bike image"
              width={600}
              height={600}
              className="object-cover"
            />
          </div>
          <div className="px-5 text-center w-full md:w-1/2 ">
            <p className="text-xl md:text-5xl font-medium leading-[60px] tracking-widest text-center text-white ">
              Gotham City is a dark and dangerous place.
            </p>
          </div>
        </div>

    </>
  );
};
export default Hero;
