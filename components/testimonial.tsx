"use client";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export default function TestimonialSection() {
  const refTitle = useRef(null);
  const isTitleInView = useInView(refTitle);

  const refTestimonials = useRef(null);
  const isTestimonialsInView = useInView(refTestimonials);

  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "tween", delay: 0.4 } },
  };

  return (
    <div className="case mt-20" id="testimonialSection">
      <div>
        <motion.div ref={refTitle} animate={isTitleInView ? "show" : "hidden"} variants={FADE_DOWN_ANIMATION_VARIANTS}>
          <motion.h1 className={`sectionTitle font-secondFont`}>Clients Glittering Testimonials</motion.h1>
          <motion.p className="text-sm font-medium text-center max-w-xl mx-auto mt-2 mb-12">
            The voices of satisfaction as clients share their experiences with our cutting-edge modern buildings and visionary architectures
          </motion.p>
        </motion.div>

        <motion.div
          ref={refTestimonials}
          animate={isTestimonialsInView ? "show" : "hidden"}
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"
        >
          <div className="h-[350px] bg-secondBg py-6 px-8 rounded-3xl flex flex-col justify-between items-start transform hover:scale-105 hover:rotate-2 transition-all duration-300">
            <div>
              <span className="mb-2 block">
                <svg xmlns="http://www.w3.org/2000/svg" width="68" height="73" viewBox="0 0 68 73" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.028 22.6861C14.1115 22.4243 15.219 22.2925 16.3299 22.2931C25.1274 22.2931 32.2571 30.4411 32.2571 40.4881C32.2571 50.5381 25.1274 58.6861 16.3299 58.6861C7.5324 58.6861 0.399902 50.5411 0.399902 40.4881C0.399902 40.1941 0.405527 39.8971 0.41959 39.6031H0.399902C0.399902 24.4381 11.1999 12.0991 24.4749 12.0991V18.2071C20.169 18.2071 16.1977 19.8811 13.028 22.6861ZM48.6737 22.6861C49.7368 22.4281 50.8393 22.2931 51.9699 22.2931C60.7674 22.2931 67.8999 30.4411 67.8999 40.4881C67.8999 50.5381 60.7674 58.6861 51.9699 58.6861C43.1724 58.6861 36.0427 50.5411 36.0427 40.4881C36.0427 40.1941 36.0483 39.8971 36.0624 39.6031H36.0427C36.0427 24.4381 46.8427 12.0991 60.1177 12.0991V18.2071C55.809 18.2071 51.8433 19.8811 48.6737 22.6861Z"
                    fill="#06040A"
                  />
                </svg>
              </span>

              <p className="sm:text-2xl text-xl">The agency&apos;s architects have a unique ability to capture the essence of modern living</p>
            </div>

            <div>
              <h4 className="sm:text-sm text-xs">Greg, Canada</h4>
              <p className="sm:text-xs text-[10px] text-mainText/40 font-medium">on what he thinks about our architects</p>
            </div>
          </div>

          <div className="h-[350px] bg-secondBg py-6 px-8 rounded-3xl flex flex-col justify-between items-start transform hover:scale-105 hover:rotate-2 transition-all duration-300">
            <div>
              <span className="mb-2 block">
                <svg xmlns="http://www.w3.org/2000/svg" width="68" height="73" viewBox="0 0 68 73" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.028 22.6861C14.1115 22.4243 15.219 22.2925 16.3299 22.2931C25.1274 22.2931 32.2571 30.4411 32.2571 40.4881C32.2571 50.5381 25.1274 58.6861 16.3299 58.6861C7.5324 58.6861 0.399902 50.5411 0.399902 40.4881C0.399902 40.1941 0.405527 39.8971 0.41959 39.6031H0.399902C0.399902 24.4381 11.1999 12.0991 24.4749 12.0991V18.2071C20.169 18.2071 16.1977 19.8811 13.028 22.6861ZM48.6737 22.6861C49.7368 22.4281 50.8393 22.2931 51.9699 22.2931C60.7674 22.2931 67.8999 30.4411 67.8999 40.4881C67.8999 50.5381 60.7674 58.6861 51.9699 58.6861C43.1724 58.6861 36.0427 50.5411 36.0427 40.4881C36.0427 40.1941 36.0483 39.8971 36.0624 39.6031H36.0427C36.0427 24.4381 46.8427 12.0991 60.1177 12.0991V18.2071C55.809 18.2071 51.8433 19.8811 48.6737 22.6861Z"
                    fill="#06040A"
                  />
                </svg>
              </span>

              <p className="sm:text-2xl text-xl">An agency that blends aesthetics and functionality in their modern buildings.</p>
            </div>

            <div>
              <h4 className="sm:text-sm text-xs">Sara, Italy</h4>
              <p className="sm:text-xs text-[10px] text-mainText/40 font-medium">on how we capture the essence of modern living</p>
            </div>
          </div>

          <div className="h-[350px] bg-secondBg py-6 px-8 rounded-3xl flex flex-col justify-between items-start transform hover:scale-105 hover:rotate-2 transition-all duration-300">
            <div>
              <span className="mb-2 block">
                <svg xmlns="http://www.w3.org/2000/svg" width="68" height="73" viewBox="0 0 68 73" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.028 22.6861C14.1115 22.4243 15.219 22.2925 16.3299 22.2931C25.1274 22.2931 32.2571 30.4411 32.2571 40.4881C32.2571 50.5381 25.1274 58.6861 16.3299 58.6861C7.5324 58.6861 0.399902 50.5411 0.399902 40.4881C0.399902 40.1941 0.405527 39.8971 0.41959 39.6031H0.399902C0.399902 24.4381 11.1999 12.0991 24.4749 12.0991V18.2071C20.169 18.2071 16.1977 19.8811 13.028 22.6861ZM48.6737 22.6861C49.7368 22.4281 50.8393 22.2931 51.9699 22.2931C60.7674 22.2931 67.8999 30.4411 67.8999 40.4881C67.8999 50.5381 60.7674 58.6861 51.9699 58.6861C43.1724 58.6861 36.0427 50.5411 36.0427 40.4881C36.0427 40.1941 36.0483 39.8971 36.0624 39.6031H36.0427C36.0427 24.4381 46.8427 12.0991 60.1177 12.0991V18.2071C55.809 18.2071 51.8433 19.8811 48.6737 22.6861Z"
                    fill="#06040A"
                  />
                </svg>
              </span>

              <p className="sm:text-2xl text-xl">With you guys, living in the future will be way more aesthetic than I thought.</p>
            </div>

            <div>
              <h4 className="sm:text-sm text-xs">Antony, Spain</h4>
              <p className="sm:text-xs text-[10px] text-mainText/40 font-medium">on how aesthetic our buildings are</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
