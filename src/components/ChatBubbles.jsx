import { motion } from "framer-motion";
import { useRef } from "react";

export default function ChatBubble({
  textMessage,
  delay,
  id,
  x_pos,
  y_pos,
}) {
  const constraintsRef = useRef(null);

  return (
    <>
          <motion.div
            className="drag-area w-fit grid place-content-center new-message  "
            ref={constraintsRef}
            initial={{ opacity: 0, scale: 0.1, x: x_pos, y: y_pos }}
            animate={{ opacity: 1, scale: 1, x: x_pos, y: y_pos }}
            transition={{
              duration: 2,
              delay: delay,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <motion.div
              drag
              dragConstraints={constraintsRef}
              className="bg-[#0f0f0f] text-[#FFD700] w-fit p-4 rounded-lg"
            >
              {textMessage}
            </motion.div>
          </motion.div>

    
    </>
  );
}
