import MaskText from '@/components/Common/MaskText';
import Image from 'next/image';
import React from 'react';

import ParallaxText from '@/components/Common/ScrollVelocity';


// // images
// import placeholder_1 from '@/benji-art-gallery/IMG-20240901-WA0026.jpg';
// import placeholder_2 from '@/benji-art-gallery/IMG-20240901-WA0027.jpg';
// import placeholder_3 from '@/benji-art-gallery/IMG-20240901-WA0028.jpg';
// import placeholder_4 from '@/benji-art-gallery/IMG-20240901-WA0029.jpg';
// import placeholder_5 from '@/benji-art-gallery/IMG-20240901-WA0030.jpg';


//works images
import works_1 from '@/works/IMG-20241116-WA0067.jpg';
import works_2 from '@/works/IMG-20241116-WA0068.jpg';
import works_3 from '@/works/IMG-20241116-WA0069.jpg';
import works_4 from '@/works/IMG-20241116-WA0070.jpg';
import works_5 from '@/works/IMG-20241116-WA0071.jpg';
import works_6 from '@/works/IMG-20241116-WA0072.jpg';
import works_7 from '@/works/IMG-20241116-WA0073.jpg';
import works_8 from '@/works/IMG-20241116-WA0074.jpg';
import works_9 from '@/works/IMG-20241116-WA0075.jpg';
import works_10 from '@/works/IMG-20241116-WA0076.jpg';
import works_11 from '@/works/IMG-20241116-WA0077.jpg';
import works_12 from '@/works/IMG-20241116-WA0126.jpg';
import works_13 from '@/works/IMG-20241116-WA0127.jpg';
import works_14 from '@/works/IMG-20241116-WA0129.jpg';
import works_15 from '@/works/IMG-20241116-WA0130.jpg';
import works_16 from '@/works/IMG-20241116-WA0132.jpg';
import works_17 from '@/works/IMG-20241116-WA0131.jpg';
import works_18 from '@/works/IMG-20241116-WA0133.jpg';
import works_20 from '@/works/IMG-20241116-WA0135.jpg';
import works_22 from '@/works/IMG-20241116-WA0137.jpg';
import works_23 from '@/works/IMG-20241116-WA0138.jpg';
import works_24 from '@/works/IMG-20241116-WA0139.jpg';
import works_25 from '@/works/IMG-20241116-WA0140.jpg';
import works_26 from '@/works/IMG-20241116-WA0141.jpg';
import works_27 from '@/works/IMG-20241116-WA0142.jpg';
import works_28 from '@/works/IMG-20241116-WA0143.jpg';
import works_29 from '@/works/IMG-20241116-WA0144.jpg';
import works_30 from '@/works/IMG-20241116-WA0145.jpg';
// import works_31 from '@/works/IMG-20241116-WA0165.jpg';





// const team = [
//   {
//     image: placeholder_1,
//     name: 'Customize T-shirt',
//     role: 'General Manager',
//   },
//   {
//     image: placeholder_2,
//     name: 'Customize T-shirt',
//     role: 'CEO',
//   },
//   {
//     image: placeholder_3,
//     name: 'Customize T-shirt',
//     role: 'Social Media manager',
//   },
//   {
//     image: placeholder_4,
//     name: 'Customize T-shirt',
//     role: 'Photographer',
//   },
//   {
//     image: placeholder_5,
//     name: 'Customize T-shirt',
//     role: 'General Secetary',
//   },
// ];

const works = [
  {
    image: works_1,
    name: 'Portrait',
    role: 'General Manager',
  },
  {
    image: works_2,
    name: 'Portrait',
    role: 'General Manager',
  },
  {
    image: works_3,
    name: 'Portrait',
    role: 'General Manager',
  },
  {
    image: works_4,
    name: 'Portrait',
    role: 'General Manager',
  },
  {
    image: works_5,
    name: 'Portrait',
    role: 'General Manager',
  },
  {
    image: works_6,
    name: 'Portrait',
    role: 'General Manager',
  },
  {
    image: works_7,
    name: 'Portrait',
    role: 'General Manager',
  },
  {
    image: works_8,
    name: 'Portrait',
    role: 'General Manager',
  },
  {
    image: works_9,
    name: 'Portrait',
    role: 'General Manager',
  },
  {
    image: works_10,
    name: 'Portrait',
    role: 'General Manager',
  },
  {
    image: works_11,
    name: 'Portrait',
    role: 'General Manager',
  },
  {
    image: works_12,
    name: 'Portrait',
    role: 'General Manager',
  },
  {
    image: works_13,
    name: 'Portrait',
    role: 'General Manager',
  },
  {
    image: works_14,
    name: 'Frame',
    role: 'General Manager',
  },
  {
    image: works_15,
    name: 'Frame',
    role: 'General Manager',
  },
  {
    image: works_16,
    name: 'Customized Towel and Mug',
    role: 'General Manager',
  },
  {
    image: works_17,
    name: 'Customized Towel',
    role: 'General Manager',
  },
  {
    image: works_18,
    name: 'Portrait',
    role: 'General Manager',
  },
  {
    image: works_20,
    name: 'Mug and Pouch',
    role: 'General Manager',
  },
  {
    image: works_22,
    name: 'Portrait',
    role: 'General Manager',
  },
  {
    image: works_23,
    name: 'Acrylic Frames',
    role: 'General Manager',
  },
  {
    image: works_24,
    name: 'Portrait',
    role: 'General Manager',
  },
  {
    image: works_25,
    name: 'Portrait',
    role: 'General Manager',
  },
  {
    image: works_26,
    name: 'Portrait',
    role: 'General Manager',
  },
  {
    image: works_27,
    name: 'Portrait',
    role: 'General Manager',
  },
  {
    image: works_28,
    name: 'Portrait',
    role: 'General Manager',
  },
  {
    image: works_29,
    name: 'Portrait',
    role: 'General Manager',
  },
  {
    image: works_30,
    name: 'Portrait',
    role: 'General Manager',
  },

]

const WorkSection = () => {



  const headerArr = ['Checkout', 'Our Works.'];

  return (
    <section id='Works' className="py-[5rem] bg-freelancer_cream flex flex-col gap-[6.25rem] relative">
      <header className="w-[90%] mx-auto max-w-screen-xl text-freelancer_black font-medium text-[3rem] md:text-[5rem] leading-[4rem] md:leading-[5rem] tracking-[-0.1rem]">
        <MaskText phrases={headerArr} tag="h1" />
      </header>

      <div>
        <ParallaxText baseVelocity={1}>
          <div className="inline-flex gap-4 flex-shrink-0  py-3 px-2">
            {works.map((t, i) => (
              <article className="relative space-y-3 w-[16rem] md:w-[21.75rem]" key={i}>
                <Image
                  src={t.image}
                  alt={t.name}
                  quality={100}
                  placeholder="blur"
                  className="rounded-lg"
                />

                {/* <div className="space-y-1">
                  <h3 className="!text-freelancer_orange font-medium text-base leading-none tracking-[-0.02rem]">
                    {t.name}
                  </h3>

                </div> */}
              </article>
            ))}
          </div>
        </ParallaxText>

      </div>
    </section>
  );
};

export default WorkSection;
