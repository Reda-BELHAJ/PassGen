import { motion } from 'framer-motion';

export default function Content({feature}) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="my-1 text-gray-800 dark:text-gray-200 text-justify">
                {feature.description}
            </div>
        </motion.div>
    );
  } 
