import { JSX, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/motion/motion-1")({
  component: RouteComponent
});

// https://www.youtube.com/watch?v=hjbxaYTMhy0&list=PLA4qBVt61k3Phpwt7uqaptIg9NYZ5aNu_&index=1&t=19s

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  slideColor: string;
}
export const Reveal = ({
  children,
  width = "fit-content",
  slideColor
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainAnimation = useAnimation();
  const slideAnimation = useAnimation();

  useEffect(() => {
    if (isInView) {
      // 触发动画
      mainAnimation.start("visible");
      slideAnimation.start("visible");
    }
  }, [isInView, mainAnimation, slideAnimation]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width,
        overflow: "hidden"
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainAnimation}
        transition={{
          duration: 0.5,
          delay: 0.25
        }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" }
        }}
        initial="hidden"
        animate={slideAnimation}
        transition={{
          duration: 0.5,
          ease: "easeIn"
        }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: slideColor,
          zIndex: 20
        }}
      />
    </div>
  );
};

function RouteComponent() {
  const slideColor = "#07FC9A";
  return (
    <div className="w-full min-h-screen bg-gray-800 flex flex-col gap-4 justify-center items-center">
      <div className="space-y-4 w-[600px]">
        <Reveal slideColor={slideColor}>
          <h1 className="text-6xl text-white">Hello Motion</h1>
        </Reveal>
        <Reveal slideColor={slideColor}>
          <h2 className="text-xl text-white">滚动显示动画</h2>
        </Reveal>
        <Reveal slideColor={slideColor}>
          <p className="text-white">
            这是一个滚动显示动画的例子，使用了 motion 库。 Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Laboriosam reiciendis, earum
            consequatur aspernatur cum architecto sequi nulla iusto nostrum
            accusantium nisi nemo dolor autem. Dolorum rem molestias tenetur
            tempora sunt.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
