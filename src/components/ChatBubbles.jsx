import { motion } from "framer-motion";

export default function ChatBubble({ textMessage, delay, id, x_pos, y_pos }) {
    // console.log(x_pos, y_pos);
  return (
    <motion.div
      key={id}
      className="bg-black w-fit p-4 rounded-lg"
      initial={{ opacity: 0, scale: 0.1, x: x_pos, y: y_pos }}
      animate={{ opacity: 1, scale: 1, x: x_pos, y: y_pos }}
      transition={{
        duration: 2,
        delay: delay,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {textMessage}
    </motion.div>
  );
}
