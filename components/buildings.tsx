"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import b1 from "../public/b1.jpg";
import b2 from "../public/b2.jpg";
import b3 from "../public/b3.jpg";
import b4 from "../public/b4.jpg";
import b5 from "../public/b5.jpg";
import b6 from "../public/b6.jpg";
import b7 from "../public/b7.jpg";
import b8 from "../public/b8.jpg";
import b9 from "../public/b9.jpg";
import b10 from "../public/b10.jpg";

import Image from "next/image";
import SwiperNavButtons from "./buildingsComps/swiperNavButtons";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function BuildingsSection() {
  const refTitle = useRef(null);
  const isTitleInView = useInView(refTitle);

  const refSwiper = useRef(null);
  const isSwiperInView = useInView(refSwiper);

  const refSwiperMobile = useRef(null);
  const isSwiperMobileInView = useInView(refSwiperMobile);

  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "tween", delay: 0.4 } },
  };

  return (
    <div className="bg-secondBg mt-20" id="buildings">
      <div className="case pt-12 pb-8 relative">
        <motion.div
          ref={refTitle}
          animate={isTitleInView ? "show" : "hidden"}
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="flex lg:flex-row flex-col items-center justify-between gap-x-20 mb-10"
        >
          <h1 className={`font-secondFont sectionTitle lg:text-left`}>Futuristic buildings worldwide</h1>
          <p className="text-xs lg:text-right text-center max-w-md">
            In every corner of the world, we craft aesthetic buildings, each standing as a timeless work of art that captures the essence of modern
            and futuristic aesthetics
          </p>
        </motion.div>

        <motion.div ref={refSwiper} animate={isSwiperInView ? "show" : "hidden"} variants={FADE_DOWN_ANIMATION_VARIANTS} className="hidden sm:block">
          <Swiper
            slidesPerView={2}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperNavButtons />

            <SwiperSlide className="relative">
              <Image
                src={b1}
                alt="architecture hero"
                priority
                placeholder="blur"
                className=" h-[400px] object-cover"
                sizes="(min-width: 640px) 50vw , 0vw"
              />

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black  h-[150px] text-white flex flex-col justify-end">
                <div className="p-5">
                  <p className="font-medium text-[22px]">Cantardo House</p>
                  <p className="text-[15px] font-light">Marseille, France</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={b2}
                alt="architecture hero"
                priority
                placeholder="blur"
                className=" h-[400px] object-cover"
                sizes="(min-width: 640px) 50vw , 0vw"
              />

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black  h-[150px] text-white flex flex-col justify-end">
                <div className="p-5">
                  <p className="font-medium text-[22px]">Meyer Cube</p>
                  <p className="text-[15px] font-light">Tokyo, Japan</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={b3}
                alt="architecture hero"
                priority
                placeholder="blur"
                className="h-[400px] object-cover"
                sizes="(min-width: 640px) 50vw , 0vw"
              />

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black  h-[150px] text-white flex flex-col justify-end">
                <div className="p-5">
                  <p className="font-medium text-[22px]">Nebula Plaza</p>
                  <p className="text-[15px] font-light">Toronto, Canada</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={b4}
                alt="architecture hero"
                priority
                placeholder="blur"
                className=" h-[400px] object-cover"
                sizes="(min-width: 640px) 50vw , 0vw"
              />

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black  h-[150px] text-white flex flex-col justify-end">
                <div className="p-5">
                  <p className="font-medium text-[22px]">Elysium Skyscape</p>
                  <p className="text-[15px] font-light">Sydney, Australia</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={b5}
                alt="architecture hero"
                priority
                placeholder="blur"
                className=" h-[400px] object-cover"
                sizes="(min-width: 640px) 50vw , 0vw"
              />

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black  h-[150px] text-white flex flex-col justify-end">
                <div className="p-5">
                  <p className="font-medium text-[22px]">Dimensional Dwellings</p>
                  <p className="text-[15px] font-light">Chicago, United States</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={b6}
                alt="architecture hero"
                priority
                placeholder="blur"
                className="h-[400px] object-cover"
                sizes="(min-width: 640px) 50vw , 0vw"
              />

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black  h-[150px] text-white flex flex-col justify-end">
                <div className="p-5">
                  <p className="font-medium text-[22px]">Nebula Skyline</p>
                  <p className="text-[15px] font-light">Milan, Italy</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={b7}
                alt="architecture hero"
                priority
                placeholder="blur"
                className="h-[400px] object-cover"
                sizes="(min-width: 640px) 50vw , 0vw"
              />

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black  h-[150px] text-white flex flex-col justify-end">
                <div className="p-5">
                  <p className="font-medium text-[22px]">Quantum Tower</p>
                  <p className="text-[15px] font-light">Stellaris, Russia</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={b8}
                alt="architecture hero"
                priority
                placeholder="blur"
                className="h-[400px] object-cover"
                sizes="(min-width: 640px) 50vw , 0vw"
              />

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black  h-[150px] text-white flex flex-col justify-end">
                <div className="p-5">
                  <p className="font-medium text-[22px]">Solaris Spire</p>
                  <p className="text-[15px] font-light">Paris, France</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={b9}
                alt="architecture hero"
                priority
                placeholder="blur"
                className="h-[400px] object-cover"
                sizes="(min-width: 640px) 50vw , 0vw"
              />

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black  h-[150px] text-white flex flex-col justify-end">
                <div className="p-5">
                  <p className="font-medium text-[22px]">Luxuria Apartments</p>
                  <p className="text-[15px] font-light">Frankfurt, Germany</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={b10}
                alt="architecture hero"
                priority
                placeholder="blur"
                className="h-[400px] object-cover"
                sizes="(min-width: 640px) 50vw , 0vw"
              />

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black  h-[150px] text-white flex flex-col justify-end">
                <div className="p-5">
                  <p className="font-medium text-[22px]">Triangle House</p>
                  <p className="text-[15px] font-light">Mumbai, India</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>

        <motion.div
          ref={refSwiperMobile}
          animate={isSwiperMobileInView ? "show" : "hidden"}
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="block sm:hidden"
        >
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperNavButtons />

            <SwiperSlide>
              <Image
                src={b1}
                alt="architecture hero"
                priority
                placeholder="blur"
                className=" h-[400px] object-cover"
                sizes="(max-width: 640px) 97vw , 0vw"
              />

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black  h-[150px] text-white flex flex-col justify-end">
                <div className="p-5">
                  <p className="font-medium text-[22px]">Cantardo House</p>
                  <p className="text-[15px] font-light">Marseille, France</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={b2}
                alt="architecture hero"
                priority
                placeholder="blur"
                className=" h-[400px] object-cover"
                sizes="(max-width: 640px) 97vw , 0vw"
              />

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black  h-[150px] text-white flex flex-col justify-end">
                <div className="p-5">
                  <p className="font-medium text-[22px]">Meyer Cube</p>
                  <p className="text-[15px] font-light">Tokyo, Japan</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={b3}
                alt="architecture hero"
                priority
                placeholder="blur"
                className="h-[400px] object-cover"
                sizes="(max-width: 640px) 97vw , 0vw"
              />

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black  h-[150px] text-white flex flex-col justify-end">
                <div className="p-5">
                  <p className="font-medium text-[22px]">Nebula Plaza</p>
                  <p className="text-[15px] font-light">Toronto, Canada</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={b4}
                alt="architecture hero"
                priority
                placeholder="blur"
                className=" h-[400px] object-cover"
                sizes="(max-width: 640px) 97vw , 0vw"
              />

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black  h-[150px] text-white flex flex-col justify-end">
                <div className="p-5">
                  <p className="font-medium text-[22px]">Elysium Skyscape</p>
                  <p className="text-[15px] font-light">Sydney, Australia</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={b5}
                alt="architecture hero"
                priority
                placeholder="blur"
                className=" h-[400px] object-cover"
                sizes="(max-width: 640px) 97vw , 0vw"
              />

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black  h-[150px] text-white flex flex-col justify-end">
                <div className="p-5">
                  <p className="font-medium text-[22px]">Dimensional Dwellings</p>
                  <p className="text-[15px] font-light">Chicago, United States</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={b6}
                alt="architecture hero"
                priority
                placeholder="blur"
                className="h-[400px] object-cover"
                sizes="(max-width: 640px) 97vw , 0vw"
              />

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black  h-[150px] text-white flex flex-col justify-end">
                <div className="p-5">
                  <p className="font-medium text-[22px]">Nebula Skyline</p>
                  <p className="text-[15px] font-light">Milan, Italy</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={b7}
                alt="architecture hero"
                priority
                placeholder="blur"
                className="h-[400px] object-cover"
                sizes="(max-width: 640px) 97vw , 0vw"
              />

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black  h-[150px] text-white flex flex-col justify-end">
                <div className="p-5">
                  <p className="font-medium text-[22px]">Quantum Tower</p>
                  <p className="text-[15px] font-light">Stellaris, Russia</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={b8}
                alt="architecture hero"
                priority
                placeholder="blur"
                className="h-[400px] object-cover"
                sizes="(max-width: 640px) 97vw , 0vw"
              />

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black  h-[150px] text-white flex flex-col justify-end">
                <div className="p-5">
                  <p className="font-medium text-[22px]">Solaris Spire</p>
                  <p className="text-[15px] font-light">Paris, France</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={b9}
                alt="architecture hero"
                priority
                placeholder="blur"
                className="h-[400px] object-cover"
                sizes="(max-width: 640px) 97vw , 0vw"
              />

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black  h-[150px] text-white flex flex-col justify-end">
                <div className="p-5">
                  <p className="font-medium text-[22px]">Luxuria Apartments</p>
                  <p className="text-[15px] font-light">Frankfurt, Germany</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={b10}
                alt="architecture hero"
                priority
                placeholder="blur"
                className="h-[400px] object-cover"
                sizes="(max-width: 640px) 97vw , 0vw"
              />

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black  h-[150px] text-white flex flex-col justify-end">
                <div className="p-5">
                  <p className="font-medium text-[22px]">Triangle House</p>
                  <p className="text-[15px] font-light">Mumbai, India</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
}
