'use client';

import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.section
            className="w-full "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="my-20 mx-auto w-1/2 flex flex-col justify-center items-center">
                <motion.h2
                    className="text-6xl font-bold text-center"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Vinculação de Dados de Crédito
                </motion.h2>
            </div>
            <div className="w-full mx-auto px-20 max-w-screen-2xl grid grid-cols-1 md:grid-cols-2">
                <motion.div
                    className="md:border-0 md:odd:border-r md:border-solid  overflow-hidden"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <div className="text-center h-full flex flex-col items-center md:pt-20 md:mx-[2px]">
                        <div className="max-w-md flex-1 flex flex-col items-center md:px-10 lg:px-1/12 xl:px-2/12">
                            <motion.h1
                                className="mt-4 text-4xl font-bold"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                1. Fonte de dados de crédito
                            </motion.h1>
                            <motion.p
                                className="mt-4 font-bold"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                Os dados de crédito são obtidos a partir de fontes confiáveis, como bancos e agências de
                                crédito. A integridade dos dados é verificada antes da vinculação com o Soul Bound
                                Token.
                            </motion.p>
                        </div>
                        <div className="w-full border-b border-solid  h-20 border-0 md:border-b"></div>
                    </div>
                </motion.div>
                <motion.div
                    className="md:border-0 md:odd:border-r md:border-solid  overflow-hidden"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <div className="text-center h-full flex flex-col items-center md:pt-20 md:mx-[2px]">
                        <div className="max-w-md flex-1 flex flex-col md:px-10 lg:px-1/12 xl:px-2/12">
                            <motion.h1
                                className="mt-4 text-4xl font-bold"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                2. Processo de Vinculação
                            </motion.h1>
                            <motion.p
                                className="mt-4 font-bold"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                Um processo seguro de vinculação é estabelecido, envolvendo a verificação de identidade
                                e autenticação. Os dados de crédito são criptografados e vinculados ao token de forma
                                permanente.
                            </motion.p>
                        </div>
                        <div className="w-full border-b border-solid  h-20 border-0 md:border-b"></div>
                    </div>
                </motion.div>
                <motion.div
                    className="md:border-0 md:odd:border-r md:border-solid overflow-hidden"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <div className="text-center h-full flex flex-col items-center md:pt-20 md:mx-[2px]">
                        <div className="max-w-md flex-1 flex flex-col md:px-10 lg:px-1/12 xl:px-2/12">
                            <motion.h1
                                className="mt-4 text-4xl font-bold"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                3. Privacidade e Controle do Titular
                            </motion.h1>
                            <motion.p
                                className="mt-4 font-bold"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                Os titulares dos dados têm o controle total sobre quem pode acessar seus dados de
                                crédito vinculados ao token. Isso protege a privacidade e a segurança dos indivíduos,
                                permitindo-lhes compartilhar seus dados seletivamente.
                            </motion.p>
                        </div>
                        <div className="w-full border-0 border-solid  h-20 border-b md:border-0"></div>
                    </div>
                </motion.div>
                <motion.div
                    className="md:border-0 md:odd:border-r md:border-solid overflow-hidden"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <div className="text-center h-full flex flex-col items-center md:pt-20 md:mx-[2px]">
                        <div className="max-w-md flex-1 flex flex-col md:px-10 lg:px-1/12 xl:px-2/12">
                            <motion.h1
                                className="mt-4 text-4xl font-bold"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                4. Segurança e Imutabilidade
                            </motion.h1>
                            <motion.p
                                className="mt-4 font-bold"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                A blockchain garante que os dados de crédito vinculados sejam imutáveis e à prova de
                                adulteração. Isso cria uma base sólida para transações de crédito seguras e
                                transparentes.
                            </motion.p>
                        </div>
                        <div className="w-full border-0 border-solid h-20 border-b md:border-0"></div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default About;
