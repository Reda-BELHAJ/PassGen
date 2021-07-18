import { motion } from 'framer-motion';

export default function Content({feature}) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut" }}
        >
            <div className="my-1 text-gray-800 dark:text-gray-200 text-justify">
                {feature.description}
                {feature.id == 4 ? <a href="https://github.com/Reda-BELHAJ/PassGen" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"> Github repository</a> : ""}
            </div>
        </motion.div>
    );
  } 
