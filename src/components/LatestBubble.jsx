import { motion } from "framer-motion";
import { useRef } from "react";

export default function LatestBubble({
  textMessage,
  delay,
}) {
  const constraintsRef = useRef(null);

  return (
    <>
          <motion.div
            className="drag-area w-fit new-message p-2 "
            ref={constraintsRef}
            initial={{ opacity: 0, scale: 0.1}}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              delay: delay,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <motion.div
              drag
              dragConstraints={constraintsRef}
              className="bg-[#872341] text-[#ffffff] w-fit p-4 rounded-lg"
            >
              {textMessage}
            </motion.div>
          </motion.div>
    
    </>
  );
}
