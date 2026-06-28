'use client';

import React from "react";
import { motion, type Variants } from "framer-motion";

interface SectionWithMockupProps {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  primaryImageSrc: string;
  secondaryImageSrc: string;
  reverseLayout?: boolean;
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const SectionWithMockup: React.FC<SectionWithMockupProps> = ({
  title,
  description,
  primaryImageSrc,
  secondaryImageSrc,
  reverseLayout = false,
}) => {
  const layoutClasses = reverseLayout
    ? "md:grid-cols-2 md:grid-flow-col-dense"
    : "md:grid-cols-2";
  const textOrderClass = reverseLayout ? "md:col-start-2" : "";
  const imageOrderClass = reverseLayout ? "md:col-start-1" : "";

  return (
    <section className="relative py-24 md:py-48 overflow-hidden" style={{ backgroundColor: "#06080D" }}>
      <div className="container max-w-[1220px] w-full px-6 md:px-10 relative z-10 mx-auto">
        <motion.div
          className={`grid grid-cols-1 gap-16 md:gap-8 w-full items-center ${layoutClasses}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Text */}
          <motion.div
            className={`flex flex-col items-start gap-4 mt-10 md:mt-0 max-w-[546px] mx-auto md:mx-0 ${textOrderClass}`}
            variants={itemVariants}
          >
            <div className="space-y-2 md:space-y-1">
              <h2
                className="font-serif"
                style={{
                  color: "#F0F4FB",
                  fontSize: "clamp(28px, 3.5vw, 40px)",
                  fontWeight: 400,
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                }}
              >
                {title}
              </h2>
            </div>
            <p
              style={{
                color: "#6B7A95",
                fontSize: "15px",
                lineHeight: 1.7,
                fontFamily: "var(--font-sans)",
              }}
            >
              {description}
            </p>
          </motion.div>

          {/* Mockup */}
          <motion.div
            className={`relative mt-10 md:mt-0 mx-auto ${imageOrderClass} w-full max-w-[300px] md:max-w-[471px]`}
            variants={itemVariants}
          >
            {/* Decorative background card */}
            <motion.div
              className="absolute w-[300px] h-[317px] md:w-[472px] md:h-[500px] rounded-[32px] z-0"
              style={{
                top: reverseLayout ? "auto" : "10%",
                bottom: reverseLayout ? "10%" : "auto",
                left: reverseLayout ? "auto" : "-20%",
                right: reverseLayout ? "-20%" : "auto",
                filter: "blur(2px)",
                backgroundColor: "#090909",
              }}
              initial={{ y: 0 }}
              whileInView={{ y: reverseLayout ? -20 : -30 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              {secondaryImageSrc && (
                <div
                  className="relative w-full h-full bg-cover bg-center rounded-[32px]"
                  style={{ backgroundImage: `url(${secondaryImageSrc})` }}
                />
              )}
            </motion.div>

            {/* Main mockup card */}
            <motion.div
              className="relative w-full h-[405px] md:h-[637px] rounded-[32px] z-10 overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(15px)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
              initial={{ y: 0 }}
              whileInView={{ y: reverseLayout ? 20 : 30 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              {primaryImageSrc && (
                <div
                  className="w-full h-full bg-cover bg-top"
                  style={{ backgroundImage: `url(${primaryImageSrc})` }}
                />
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom separator line */}
      <div
        className="absolute w-full h-px bottom-0 left-0 z-0"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
        }}
      />
    </section>
  );
};

export default SectionWithMockup;
