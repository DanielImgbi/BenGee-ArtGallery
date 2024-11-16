'use client';
import ParallaxText from '@/components/Common/ScrollVelocity';
import Image from 'next/image';

import MaskText from '@/components/Common/MaskText';

// images
import placeholder_1 from '@/benji-art-gallery/IMG-20240901-WA0026.jpg';
import placeholder_2 from '@/benji-art-gallery/IMG-20240901-WA0027.jpg';
import placeholder_3 from '@/benji-art-gallery/IMG-20240901-WA0028.jpg';
import placeholder_4 from '@/benji-art-gallery/IMG-20240901-WA0029.jpg';
import placeholder_5 from '@/benji-art-gallery/IMG-20240901-WA0030.jpg';
import placeholder_6 from '@/benji-art-gallery/IMG-20240901-WA0031.jpg';
import placeholder_7 from '@/benji-art-gallery/tinywow_change_bg_photo_68076902 (1).png';
import placeholder_8 from '@/benji-art-gallery/tinywow_change_bg_photo_68076902.png';


const AboutSection = () => {
  const rowOne = [placeholder_5, placeholder_1, placeholder_2, placeholder_6];
  const rowTwo = [placeholder_3, placeholder_4, placeholder_7, placeholder_8];

  const mainText = ['Your', 'Expectation', 'Meets', 'Excellence'];
  const paragraphText = [

    'We make Portrait (Frames).',
    'Both Drawing and picture Enlargements,',
    'Including customized birthday packages',
    'like mugs, pouch, pillow, shirts, pams, cakes, etc.',
    'we\'re at your service ',
    'like mugs, pouch, pillow, shirts, pams, cakes, etc.',
    'We also into phone, accessories and repaires.',
    'BenGee ArtGallery got you covered!',

  ];

  return (
    <section id='About' className="bg-freelancer_cream py-[4.5rem] md:py-[6.25rem] space-y-[6.25rem] md:space-y-[10rem]">
      <div className="flex flex-col md:flex-row items-start justify-between max-w-screen-xl mx-auto w-[90%]">
        <div className="max-w-[43.25rem] text-freelancer_orange font-medium text-[3rem] md:text-[5rem] lg:text-[8rem] leading-[4rem] lg:leading-[8.875rem] tracking-[-0.16rem]">
          <MaskText phrases={mainText} tag="h1" />
        </div>

        <div className="max-w-[22.75rem] text-freelancer_orange leading-[1.375rem] flex flex-col text-sm md:text-base">
          <MaskText phrases={paragraphText} tag="p" />
        </div>
      </div>

      <div className="space-y-4">
        <ParallaxText baseVelocity={1}>
          <div className="inline-flex gap-2 lg:gap-4 flex-shrink-0">
            {rowOne.map((image, i) => (
              <div
                key={i}
                className="w-[20rem] sm:w-[20rem] md:w-[24rem] lg:w-[26rem]"
              >
                <Image
                  src={image}
                  alt="placeholder"
                  className="object-contain w-full h-auto"
                  quality={100}
                />
              </div>
            ))}
          </div>
        </ParallaxText>
        <ParallaxText baseVelocity={-1}>
          <div className="inline-flex gap-4 flex-shrink-0">
            {rowTwo.map((image, i) => (
              <div
                key={i}
                className="w-[20rem] sm:w-[20rem] md:w-[24rem] lg:w-[26rem]"
              >
                <Image
                  src={image}
                  alt="placeholder"
                  className="object-contain w-full h-auto"
                  quality={100}
                />
              </div>
            ))}
          </div>
        </ParallaxText>
      </div>
    </section>
  );
};

export default AboutSection;
