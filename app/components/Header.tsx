"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const Header = () => {
  const logoButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.set([logoButtonRef.current], {
      x: "50vw",
      y: 0,
      rotation: 0,
      opacity: 1,
    //   transformOrigin: "center center"
    });

    gsap.set([menuButtonRef.current], {
      x: "-50vw",
      y: 0,
      rotation: 0,
      opacity: 1,
    //   transformOrigin: "center center"
    });

    gsap.set(navLinksRef.current, {
      opacity: 0,
      scale: 0.8
    });

    // gsap.set([homeRef.current, aboutRef.current, contactRef.current], {
    //   y: 20,
    //   rotation: -5,
    //   opacity: 0
    // });

    tl
      .to(logoButtonRef.current, {
        x: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
        rotation: 0
      })
      .to(menuButtonRef.current, {
        x: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
        rotation: 360
      }, "<")
      
    //   .to(navLinksRef.current, {
    //     opacity: 1,
    //     scale: 1,
    //     duration: 0.8,
    //     ease: "elastic.out(1, 0.3)"
    //   }, "-=0.5")
      
    //   .to(homeRef.current, {
    //     y: 0,
    //     rotation: 0,
    //     opacity: 1,
    //     duration: 0.6,
    //     ease: "back.out(1.7)"
    //   }, "-=0.4")
    //   .to(aboutRef.current, {
    //     y: 0,
    //     rotation: 0,
    //     opacity: 1,
    //     duration: 0.6,
    //     ease: "back.out(1.7)"
    //   }, "-=0.3")
    //   .to(contactRef.current, {
    //     y: 0,
    //     rotation: 0,
    //     opacity: 1,
    //     duration: 0.6,
    //     ease: "back.out(1.7)"
    //   }, "-=0.3")
      
    //   .to([logoButtonRef.current, menuButtonRef.current], {
    //     rotation: 0,
    //     duration: 0.5,
    //     ease: "elastic.out(1, 0.3)"
    //   }, "-=0.2");

  }, []);

  return (
    <div 
      className="w-full flex justify-between items-center p-4 border-b border-yellow-200/30 bg-black  top-0 left-0 right-0 z-50 "
    >
      <button 
        ref={logoButtonRef}
        className="text-yellow-300 px-4 py-2 rounded-md text-2xl font-medium relative z-10"
      >
    Who Am I ?
      </button>
      
      {/* <div 
        ref={navLinksRef}
        className="flex gap-4 items-center absolute left-1/2 transform -translate-x-1/2"
      >
        <Link ref={homeRef} href="/" className="hover:text-blue-600 transition-colors">
          Home
        </Link>
        <Link ref={aboutRef} href="/about" className="hover:text-blue-600 transition-colors">
          About
        </Link>
        <Link ref={contactRef} href="/contact" className="hover:text-blue-600 transition-colors">
          Contact
        </Link>
      </div> */}

      <button 
        ref={menuButtonRef}
        className="text-yellow-800 px-4 rounded-md relative z-10"
      >
        <Image src="/batman-logo.png" alt="menu" width={40} height={40} className="invert"/>
      </button>
    </div>
  );
};

export default Header;
