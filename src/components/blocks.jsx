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
        <section className="bg-cbase py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="flex flex-col items-center"
                >
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-8 text-center">
                        Visão Geral
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <motion.div variants={itemVariants} className="bg-gray-500 p-8 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4">Compreendendo o Serviço</h3>
                            <p>
                                O nosso serviço utiliza tecnologia blockchain para transformar a maneira como as
                                transações de crédito são gerenciadas e acessadas.
                            </p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-gray-500 p-8 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4">Simplificando o Acesso ao Crédito</h3>
                            <p>
                                Nós simplificamos o processo de obtenção de crédito, tornando-o mais acessível e
                                eficiente para os indivíduos.
                            </p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-gray-500 p-8 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4"> Protegendo a Privacidade e a Segurança</h3>
                            <p>
                                Valorizamos a privacidade e a segurança dos dados dos nossos usuários, utilizando a
                                tecnologia Soul Bound Token para proteger os dados de crédito.
                            </p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-gray-500 p-8 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4">Transformando a Indústria Financeira</h3>
                            <p>
                                O nosso serviço tem o potencial de revolucionar a indústria financeira, tornando-a mais
                                inclusiva, segura e transparente.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Blocks;
