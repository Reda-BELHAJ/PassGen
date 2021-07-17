import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Content from './Content';

export default function Item({feature, setPosition, moveItem,}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.button 
            layout onClick={toggleOpen} initial={{ borderRadius: 10 }}
            className="border border-red-200 rounded p-6 my-4 w-full dark:border-red-900 bg-red-50 dark:bg-red-opaque">

                <motion.div layout className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 text-left">
                    {feature.title}
                </motion.div>
                <AnimatePresence>{isOpen && <Content feature={feature} />}</AnimatePresence>
        </motion.button>
    );
  }