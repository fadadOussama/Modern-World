"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function FooterSection() {
  const refFooter = useRef(null);
  const isFooterInView = useInView(refFooter);

  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "tween", delay: 0.4 } },
  };

  return (
    <div className="bg-secondBg mt-20">
      <div className="case p-12">
        <motion.div
          ref={refFooter}
          animate={isFooterInView ? "show" : "hidden"}
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="flex md:flex-row flex-col justify-between items-center gap-y-4"
        >
          <div className="flex items-center gap-2">
            <a className="block" href="#heroSection">
              <span className="sr-only">Home</span>
              <Image src="/iconFooter.svg" alt="icon" width={30} height={30} sizes="100vw" />
            </a>

            <span className="w-[1px] h-6 bg-mainText"></span>

            <span className="text-sm">© {new Date().getFullYear()} Modern World. All rights reserved.</span>
          </div>

          <ul className="flex items-center gap-6 text-sm">
            <li className="relative group">
              <a className="hoverLinkFooter" href="#ArchitecturesSection">
                Architectures
              </a>
              <span className="hoverLinkDotFooter"></span>
            </li>

            <li className="relative group">
              <a className="hoverLinkFooter" href="#buildingsSection">
                Buildings
              </a>
              <span className="hoverLinkDotFooter"></span>
            </li>

            <li className="relative group">
              <a className="hoverLinkFooter" href="#TestimonialSection">
                Testimonial
              </a>
              <span className="hoverLinkDotFooter"></span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
