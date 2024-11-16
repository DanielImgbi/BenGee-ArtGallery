import MaskText from '@/components/Common/MaskText';
import Image from 'next/image';
import React from 'react';

import ParallaxText from '@/components/Common/ScrollVelocity';


// images
import placeholder_1 from '@/benji-art-gallery/IMG-20240901-WA0026.jpg';
import placeholder_2 from '@/benji-art-gallery/IMG-20240901-WA0027.jpg';
import placeholder_3 from '@/benji-art-gallery/IMG-20240901-WA0028.jpg';
import placeholder_4 from '@/benji-art-gallery/IMG-20240901-WA0029.jpg';
import placeholder_5 from '@/benji-art-gallery/IMG-20240901-WA0030.jpg';




const team = [
  {
    image: placeholder_1,
    name: 'Customize T-shirt',
    role: 'General Manager',
  },
  {
    image: placeholder_2,
    name: 'Customize T-shirt',
    role: 'CEO',
  },
  {
    image: placeholder_3,
    name: 'Customize T-shirt',
    role: 'Social Media manager',
  },
  {
    image: placeholder_4,
    name: 'Customize T-shirt',
    role: 'Photographer',
  },
  {
    image: placeholder_5,
    name: 'Customize T-shirt',
    role: 'General Secetary',
  },
];

const TeamSection = () => {



  const headerArr = ['Checkout', 'Our Works.'];

  return (
    <section id='Works' className="py-[5rem] bg-freelancer_cream flex flex-col gap-[6.25rem] relative">
      <header className="w-[90%] mx-auto max-w-screen-xl text-freelancer_black font-medium text-[3rem] md:text-[5rem] leading-[4rem] md:leading-[5rem] tracking-[-0.1rem]">
        <MaskText phrases={headerArr} tag="h1" />
      </header>

      <div>
        <ParallaxText baseVelocity={1}>
          <div className="inline-flex gap-4 flex-shrink-0  py-3 px-2">
            {team.map((t, i) => (
              <article className="relative space-y-3 w-[16rem] md:w-[21.75rem]" key={i}>
                <Image
                  src={t.image}
                  alt={t.name}
                  quality={100}
                  placeholder="blur"
                  className="rounded-lg"
                />

                <div className="space-y-1">
                  <h3 className="!text-freelancer_black font-medium text-base leading-none tracking-[-0.02rem]">
                    {t.name}
                  </h3>
                  {/* <h4 className="!text-freelancer_gray font-normal tracking-[-0.02rem] leading-none">
                    {t.role}
                  </h4> */}
                </div>
              </article>
            ))}
          </div>
        </ParallaxText>
      </div>
    </section>
  );
};

export default TeamSection;
