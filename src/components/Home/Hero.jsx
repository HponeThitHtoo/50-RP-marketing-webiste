/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import { gamingPcOne, gamingPcTwo, gamingPcThree } from '../../assets/index';

function Hero() {
  const slides = [
    {
      url: gamingPcOne,
    },
    {
      url: gamingPcTwo,
    },
    {
      url: gamingPcThree,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <header className="container mx-auto px-6 sm:px-0 2xl:max-w-7xl">
      <div className="max-w-[1400px] w-full h-[60vh] m-auto relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        >
          <div
            className="w-full h-full 
             bg-blueSapphire/30 backdrop-brightness-75"
          />
        </div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft size={30} onClick={prevSlide} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight size={30} onClick={nextSlide} />
        </div>
        {/* Indicators */}
        <div className="flex justify-center absolute bottom-2 left-[50%] -translate-x-[50%] py-2">
          {slides.map((slide, slideIndex) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={slideIndex}
              className={`text-2xl cursor-pointer ${
                currentIndex === slideIndex ? 'text-red-500' : 'text-white'
              }`}
              aria-hidden="true"
              onClick={() => goToSlide(slideIndex)}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Hero;
