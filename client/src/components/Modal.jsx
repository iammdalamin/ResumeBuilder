import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "modal") return onClose();
  };
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 1,
          }}
          transition={{
            duration: 0.2,
          }}
          id="modal"
          className="fixed inset-0  bg-white  bg-opacity-25  backdrop-blur-lg	 flex justify-center items-center "
          onClick={(e) => handleClose(e)}
        >
          <div className="w-[600px] flex flex-col">
            <div className=" rounded">{children}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
