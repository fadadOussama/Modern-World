"use client";
import Image from "next/image";
import arHero from "../public/architectureHero.jpg";
import arOne from "../public/architectureOne.jpg";
import arTwo from "../public/architectureTwo.jpg";
import arThree from "../public/architectureThree.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ArchitecturesSection() {
  const refTitle = useRef(null);
  const isTitleInView = useInView(refTitle);

  const refHeroImg = useRef(null);
  const isHeroImgInView = useInView(refHeroImg);

  const refSubImgs = useRef(null);
  const isSubImgsInView = useInView(refSubImgs);

  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "tween", delay: 0.4 } },
  };

  return (
    <div className="case mt-20" id="ArchitecturesSection">
      <div>
        <motion.div ref={refTitle} animate={isTitleInView ? "show" : "hidden"} variants={FADE_DOWN_ANIMATION_VARIANTS}>
          <motion.h1 className={`sectionTitle font-secondFont`}>Discover modern architectures</motion.h1>
          <motion.p className="text-sm font-medium text-center max-w-xl mx-auto mt-2 mb-12">
            Experience the seamless integration of creativity and aesthetics as architects push boundaries to create structures that captivate the eye
            and inspire the mind
          </motion.p>
        </motion.div>

        <div>
          <motion.div className="mb-10" ref={refHeroImg} animate={isHeroImgInView ? "show" : "hidden"} variants={FADE_DOWN_ANIMATION_VARIANTS}>
            <Image
              src={arHero}
              alt="architecture hero"
              className="rounded-3xl h-[526px] object-cover"
              placeholder="blur"
              sizes="(min-width: 1360px) 1200px, calc(91.15vw - 21px)"
            />
          </motion.div>

          <motion.div ref={refSubImgs} animate={isSubImgsInView ? "show" : "hidden"} variants={FADE_DOWN_ANIMATION_VARIANTS}>
            <div className="sm:grid grid-cols-3 gap-10 hidden">
              <Image
                src={arTwo}
                alt="architecture hero"
                className="rounded-3xl h-[344px] object-cover"
                placeholder="blur"
                sizes="(min-width: 640px) 50vw , 0vw"
              />
              <Image
                src={arThree}
                alt="architecture hero"
                className="rounded-3xl h-[344px] object-cover"
                placeholder="blur"
                sizes="(min-width: 640px) 50vw , 0vw"
              />
              <Image
                src={arOne}
                alt="architecture hero"
                className="rounded-3xl h-[344px] object-cover"
                placeholder="blur"
                sizes="(min-width: 640px) 50vw , 0vw"
              />
            </div>

            <div className="sm:hidden block">
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper rounded-3xl"
              >
                <SwiperSlide>
                  <Image
                    src={arTwo}
                    alt="architecture hero"
                    priority
                    placeholder="blur"
                    className="rounded-3xl h-[344px] object-cover"
                    sizes="(max-width: 640px) 97vw , 0vw"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={arThree}
                    alt="architecture hero"
                    priority
                    placeholder="blur"
                    className="rounded-3xl h-[344px] object-cover"
                    sizes="(max-width: 640px) 97vw , 0vw"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={arOne}
                    alt="architecture hero"
                    priority
                    placeholder="blur"
                    className="rounded-3xl h-[344px] object-cover"
                    sizes="(max-width: 640px) 97vw , 0vw"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
