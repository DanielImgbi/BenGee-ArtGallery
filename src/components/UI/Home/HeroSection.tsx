'use client';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { usePreloader } from '@/context/preloader';
import { TopbarSection } from './TopbarSection';
import MaskText from '@/components/Common/MaskText';


// {/* 
//     

// */}


const HeroSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const { isPreloaderDone } = usePreloader();

  const paragraphText = [
    'Transforming faces and spaces into stunning works of art.',
    'Specializing in bespoke portrait and handcrafted fames.',
    'A visual storyteller capturing moments in time.',
    'Crafting timeless pieces that blend artistry and function..',
    'BenGee ArtGallery got you covered!',

  ];

  return (
    <main
      className=" flex flex-col w-full bg-[#665228]"
      ref={ref}
    >
      <TopbarSection />


      <div className='flex  justify-center items-center overflow-y-hidden'>
        <div className=" flex flex-col w-screen relative  lg:flex-row lg:w-[1279px] lg:h-[742px]">

          <div className=" flex flex-col items-start  p-8 w-full mb-6 lg:w-2/3 ">
            <motion.h1
              initial="hidden"
              animate={isPreloaderDone && inView ? 'visible' : 'hidden'}
              variants={headingContainerVariants}
              className="text-6xl text-freelancer_orange  w-[100%] font-bold text-primary mb-4 lg:text-9xl  lg:w-[668px] lg:mb-4">BenGee ArtGallery</motion.h1>
            <p className="text-muted-foreground mb-4">
              <MaskText phrases={paragraphText} tag="p" />
            </p>
            <button className="py-[0.625rem] px-4 rounded-lg w-[50%] bg-freelancer_black font-medium lg:w-[30%]">Learn more</button>
          </div>


          <div className='relative w-full h-[400px] right-0 top-0 overflow-y-hidden  lg:h-[552px] lg:w-1/3 '>
            <Image
              src={'/benji-art-gallery/tinywow_change_bg_photo_69317445.png'}
              alt="hero banner"
              layout='fill'
              quality={100}
              objectFit='contain'
              className="absolute top-0 w-[100%] h-[100%]"
            />
          </div>


        </div>
      </div>
      {/* 
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">
        <motion.h1
          className="flex flex-col text-center items-center font-normal"
          initial="hidden"
          animate={isPreloaderDone && inView ? 'visible' : 'hidden'}
          variants={headingContainerVariants}
        >

         
          {['BenGee', 'ArtGallery'].map((text, index) => (
            <motion.span
              key={text}
              variants={wordContainerVariants}
              className={`text-freelancer_orange ${index === 2 ? 'ml-[5rem] lg:ml-[10rem]' : ''
                } overflow-hidden`}
            >
              <motion.span
                className={`inline-flex text-[4rem] md:text-[5rem] lg:text-[8rem] tracking-[-0.16rem] ${index === 0
                  ? 'max-h-[7.75rem] -mt-0 lg:-mt-8'
                  : index === 1
                    ? 'max-h-[7.75rem] -mt-5 lg:-mt-10'
                    : 'max-h-[7.75rem] -mt-4 lg:-mt-6'
                  }`}
                variants={wordVariants}
              >
                {text}
              </motion.span>
            </motion.span>
          ))}
        </motion.h1>
      </div> */}


    </main>
  );
};

export default HeroSection;


{/* <motion.div
        className="h-screen w-screen inset-0 -z-10 bg-yellow-500"
      // initial={{ scale: 1.2 }}
      // animate={isPreloaderDone && inView ? { scale: 1 } : {}}
      // transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <span>

          hello world
        </span>

         <Image
          src={'/benji-art-gallery/IMG-20240901-WA0030.jpg'}
          alt="hero banner"
          fill
          priority
          quality={100}
          className="object-cover"
        /> 
      </motion.div> */}



export const headingContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1,
    },
  },
};

export const wordContainerVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const wordVariants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};
