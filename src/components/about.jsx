'use client';

import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.section
            className="w-full text-purple"
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
                    Sistema de Blockchain para alcançar seus objetivos e doações
                </motion.h2>
            </div>
            <div className="w-full mx-auto px-20 max-w-screen-2xl grid grid-cols-1 md:grid-cols-2">
                <motion.div
                    className="md:border-0 md:odd:border-r md:border-solid md:border-purple overflow-hidden"
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
                                1. O que é GoalGame?
                            </motion.h1>
                            <motion.p
                                className="mt-4 font-bold"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                É um jogo emocionante baseado em blockchain que combina
                                as metas pessoais, incentivos financeiros e impacto social.
                                Nesta plataforma inovadora, os usuários são convidados
                                a depositar dinheiro e se desafiar a atingir
                                seus objetivos dentro de um prazo determinado. 
                                O jogo aproveita o poder da tecnologia blockchain para garantir
                                transparência, segurança e justiça em todas as transações.

                            </motion.p>
                        </div>
                        <div className="w-full border-b border-solid border-purple h-20 border-0 md:border-b"></div>
                    </div>
                </motion.div>
                <motion.div
                    className="md:border-0 md:odd:border-r md:border-solid md:border-purple overflow-hidden"
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
                                2. Campanhas de caridade e impacto social

                            </motion.h1>
                            <motion.p
                                className="mt-4 font-bold"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                Caso o jogador não consiga atingir seus objetivos, o dinheiro depositado será direcionado para campanhas beneficentes geradas no site GoalGame, também na blockchain. Essas campanhas serão criteriosamente selecionadas, com foco em causas sociais relevantes e impactantes. Dessa forma, o dinheiro que não foi resgatado pelos jogadores será convertido em recursos valiosos para ajudar quem precisa.
                            </motion.p>
                        </div>
                        <div className="w-full border-b border-solid border-purple h-20 border-0 md:border-b"></div>
                    </div>
                </motion.div>
                <motion.div
                    className="md:border-0 md:odd:border-r md:border-solid md:border-purple overflow-hidden"
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
                                3. Recompensas financeiras para o seu sucesso
                            </motion.h1>
                            <motion.p
                                className="mt-4 font-bold"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                Por outro lado, se o jogador atingir seus objetivos com sucesso dentro do prazo estabelecido, terá direito a receber uma parte do dinheiro depositado pelos jogadores que não conseguiram cumprir seus objetivos. Esta recompensa financeira serve como um incentivo adicional para motivar e encorajar os jogadores a darem o seu melhor para atingirem os seus objetivos. A distribuição dos ganhos será justa e transparente, levando em consideração o desempenho individual de cada jogador.

                            </motion.p>
                        </div>
                        <div className="w-full border-0 border-solid border-purple h-20 border-b md:border-0"></div>
                    </div>
                </motion.div>
                <motion.div
                    className="md:border-0 md:odd:border-r md:border-solid md:border-purple overflow-hidden"
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
                                4. Amei o Projeto, mas ao final BlockChain é confiável?
                            </motion.h1>
                            <motion.p
                                className="mt-4 font-bold"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                Blockchain é uma tecnologia que agrupa um conjunto de informações imutável que se conectam por meio de criptografia garantindo total segurança e a transparência. 
                            </motion.p>
                        </div>
                        <div className="w-full border-0 border-solid border-purple h-20 border-b md:border-0"></div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default About;
