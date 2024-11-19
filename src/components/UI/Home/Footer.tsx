'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { RiFacebookCircleFill, RiInstagramFill } from 'react-icons/ri';

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
    },
  }),
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Footer = () => {
  return (
    <footer
      className="bg-[#121620] h-[90vh] md:h-[48rem] relative"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
      id='Contact'
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        className="fixed bottom-0 lg:h-[800px] w-full py-[3rem] md:py-[5rem]"
        viewport={{ once: false, amount: 0.7 }}
      >
        <div className="max-w-screen-xl w-[90%] mx-auto flex flex-col justify-between h-full">
          <div className="flex max-md:flex-col justify-between gap-4 max-md:mb-8">
            <motion.p
              className="max-w-[31.9375rem] text-lg md:text-2xl font-light leading-normal tracking-[-0.03rem]"
              variants={sectionVariants}
            >
              We&apos;ve got you covered. <u>Reach us</u>
            </motion.p>

            <div className="max-w-[19rem] grid grid-cols-2 gap-6 w-full">
              <div className="flex flex-col gap-3 text-xs text-[#DCDCDC]">
                <motion.h3
                  className="uppercase text-white"
                  variants={textVariants}
                  custom={0}
                >
                  Menu
                </motion.h3>
                {['Home', 'About', 'Contact', "Testimonial", 'Works'].map((link, index) => (
                  <motion.a
                    key={index}
                    href={`/${link == "Home" ? "" : `#${link}`}`}
                    variants={textVariants}
                    custom={index + 1}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
              <div className="flex flex-col gap-3 text-xs text-[#DCDCDC]">
                <motion.h3
                  className="uppercase text-white"
                  variants={textVariants}
                  custom={0}
                >
                  Socials
                </motion.h3>
                {['Home', 'About', 'Contact', "Testimonial", 'Works'].map((link, index) => (
                  <motion.a
                    key={index}
                    href={`/${link == "Home" ? "" : `#${link}`}`}
                    variants={textVariants}
                    custom={index + 1}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="py-[3rem] md:py-[5rem] border-t border-b border-[#989898] mb-8">
              <h1 className="text-[4vw] leading-none flex lg:text-[8vw]">
                {'BenGee ArtGallery'.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    variants={textVariants}
                    custom={index}
                    className='m-2'
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>
            </div>

            <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
              <div className="flex items-center gap-5 md:gap-10">
                {['Term', 'Privacy'].map((link, index) => (
                  <motion.a
                    key={index}
                    href=""
                    className="text-xs md:text-base"
                    variants={textVariants}
                    custom={index}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>

              <motion.div
                className="flex flex-col items-center gap-2 md:gap-3 max-md:text-xs lg:flex-row"
                variants={sectionVariants}
              >


                <div className="flex items-center gap-3 justify-center flex-wrap my-4">
                  {/* <motion.a
                    href="https://www.x.com/demainc_"
                    target="_blank"
                    className="flex justify-center items-center w-[40px]"
                  >
                    <BsTwitterX className="text-2xl" />
                  </motion.a> */}
                  <motion.a
                    href="https://www.instagram.com/bengee_artgallery/profilecard/?igsh=MTExcjV0MjBjZ2wyNA=="
                    target="_blank"
                    className="flex justify-center items-center w-[40px]"
                  >
                    <RiInstagramFill className="text-3xl" />
                  </motion.a>
                  <motion.a
                    href="https://www.facebook.com/profile.php?id=100083589693457&mibextid=rS40aB7S9Ucbxw6V"
                    target="_blank"
                    className="flex justify-center items-center w-[40px]"
                  >
                    <RiFacebookCircleFill className="text-3xl" />
                  </motion.a>
                  <motion.a
                    href="https://wa.me/2347010053127"
                    target="_blank"
                    className="flex justify-center items-center w-[40px]"
                  >
                    <FaWhatsapp className="text-3xl" />
                  </motion.a>
                </div>

                <p className="flex gap-1 items-center text-light-200 justify-center tracking-wide my-12 font-light">
                  <span>{new Date().getFullYear()} .</span>

                  <span> &copy; BenGee ArtGallery</span>


                </p>



              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};




export default Footer;
