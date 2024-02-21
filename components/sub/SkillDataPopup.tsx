import { XMarkIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

interface Props {
  onClose: () => void;
  skillInfo: string[]
}

const Popup = ({ onClose, skillInfo }: Props) => {
  const popupVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.9 },
  };

  const popupContentVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="popup-container z-[101] fixed inset-0 flex items-center justify-center"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={popupVariants}
    >
      <motion.div
        className="popup-content bg-gradient-to-br from-purple-900 to-blue-900 rounded-lg p-8 w-2/3 h-3/4 max-w-md relative"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={popupContentVariants}
        transition={{ duration: 0.6 }}
      >
        <button className="popup-close absolute top-0 right-0 p-2" onClick={onClose}>
          <XMarkIcon className="h-6 w-6 text-white" />
        </button>
        <div className="popup-text" style={{ opacity: 1.0 }}>
          <motion.div className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'>{skillInfo[0]}</motion.div>
          <p className="text-white text-lg opacity-100">
            {skillInfo[1]}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Popup;
