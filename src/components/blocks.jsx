'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import quadv from '../../public/fakeimg.jpg';
import quadv2 from '../../public/fakeimg.jpg';
import quadl from '../../public/fakeimg.jpg';
import quada from '../../public/fakeimg.jpg';

const Blocks = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2,
                delayChildren: 0.4,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="flex flex-col items-center"
                >
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-8 text-center">
                        Nossos Objetivos
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <motion.div variants={itemVariants} className="shadow-md">
                            <Image src={quadv} alt="logo" className="w-auto rounded-xl" />
                        </motion.div>
                        <motion.div variants={itemVariants} className="shadow-md">
                            <Image src={quadv2} alt="logo" className="w-auto rounded-xl" />
                        </motion.div>
                        <motion.div variants={itemVariants} className="shadow-md">
                            <Image src={quadl} alt="logo" className="w-auto rounded-xl" />
                        </motion.div>
                        <motion.div variants={itemVariants} className="shadow-md">
                            <Image src={quada} alt="logo" className="w-auto rounded-xl" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Blocks;
