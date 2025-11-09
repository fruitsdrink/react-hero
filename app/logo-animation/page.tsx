"use client";

import Image from "next/image";
import { motion } from "motion/react";
import udemy from "@/assets/images/udemy.png";
import fiverr from "@/assets/images/fiverr.png";
import elementor from "@/assets/images/elementor.png";
import logitech from "@/assets/images/logitech.png";
import oracle from "@/assets/images/oracle.png";

const images = [
  { src: udemy, alt: "ubemy" },
  { src: fiverr, alt: "fiverr" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "oracle" },
  { src: udemy, alt: "ubemy" },
  { src: fiverr, alt: "fiverr" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "oracle" },
  { src: udemy, alt: "ubemy" },
  { src: fiverr, alt: "fiverr" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "oracle" },
  { src: udemy, alt: "ubemy" },
  { src: fiverr, alt: "fiverr" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "oracle" },
];

export default function LogoAnimation() {
  return (
    <div className="min-h-screen bg-black">
      <div className="py-8 bg-purple-200/10 opacity-80">
        <div className="container mx-auto">
          <div className=" overflow-hidden [mask-image:linear-gradient(to_right, _transparent,_black_25%,_black_75%,_transparent)]">
            <motion.div
              className="flex gap-14 flex-none pr-14"
              animate={{
                translateX: "-50%",
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  height={30}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
