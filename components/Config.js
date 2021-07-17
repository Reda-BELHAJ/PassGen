import { AnimateSharedLayout, motion } from 'framer-motion';
import { features } from '../data/information';
import Item from './Item';

export default function Config() {

    return (
        <>
            <AnimateSharedLayout >
                <motion.div layout initial={{ borderRadius: 25 }}>
                    {features.map(item =>{
                        return <Item key={item.id} feature={item} index={item.id}/>
                    })}
                </motion.div>
            </AnimateSharedLayout>
        </>
    )
}
