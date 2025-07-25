// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function ToggleButton({ setOpen }) {
  return (
    <button
      onClick={() => {
        setOpen((prev) => !prev);
      }}
    >
      <svg width={22} height={22} viewBox="0 0 23 23">
        <motion.path
          strokeWidth={3}
          stroke="black"
          strokeLinecap="round"
          variants={{
            open: { d: "M 3 20 L 20 2.5" },
            closed: { d: "M 2 2.5 L 20 2.5" },
          }}
        />
        <motion.path
          strokeWidth={3}
          stroke="black"
          strokeLinecap="round"
          variants={{
            open: { d:"M 10 11 L 10 11" },
            closed: { d:"M 2 11 L 20 11" },
          }}
        />
        <motion.path
          strokeWidth={3}
          stroke="black"
          strokeLinecap="round"
          variants={{
            open: { d: "M 3 2 L 20 20" },
            closed: { d: "M 2 20 L 20 20" },
          }}
        />
      </svg>
    </button>
  );
}
