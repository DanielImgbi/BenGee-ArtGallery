'use client';
import MaskText from '@/components/Common/MaskText';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const AudienceSection = () => {
  const mainText = ['Quality,', 'Top nortch:', 'We\'ve got you covered.'];


  return (
    <section className="h-screen bg-[#665228] grid place-items-center relative audience-section">
      <div className="text-[3.5rem] md:text-[7.5rem] font-medium leading-[4rem] md:leading-[7.625rem] tracking-[-0.15rem] text-center">
        <MaskText phrases={mainText} tag="h1" />
      </div>
    </section>
  );
};

export default AudienceSection;
