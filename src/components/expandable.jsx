'use client';

import { useState } from 'react';
import { motion, spring, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import autoprefixer from 'autoprefixer';

const Expandable = () => {
    const [showContent, setShowContent] = useState({
        div1: false,
        div2: false,
        div3: false,
        div4: false,
    });

    const handleDivClick = (div) => {
        // Verificar o estado atual da div clicada
        const isCurrentlyOpen = showContent[div];

        // Fechar todas as divs
        const updatedShowContent = {
            div1: false,
            div2: false,
            div3: false,
            div4: false,
        };

        // Abrir a div clicada, se ela estiver fechada
        if (!isCurrentlyOpen) {
            updatedShowContent[div] = true;
        }

        // Atualizar o estado
        setShowContent(updatedShowContent);
    };

    return (
        <section className="w-full mb-60 ">
            <div className="w-full mx-auto text-center max-w-screen-2xl my-16 md:pt-20">
                <h2 className="text-6xl font-bold">Obtenção de Crédito com Base no Score</h2>
            </div>

            {/* Div 1 */}
            <div className="w-full mx-auto my-5 px-20 max-w-screen-2xl">
                <div className="bg-primary rounded-xl md:rounded-[32px] px-6 md:px-10 py-6 md:py-12">
                    <motion.button
                        onClick={() => handleDivClick('div1')}
                        className="w-full flex justify-between items-center bg-transparent appearance-none border-none p-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <h3 className="text-4xl font-bold mb-0">Avaliação de Crédito Automatizada</h3>
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="37"
                            viewBox="0 0 36 37"
                            fill="none"
                            className="transition-transform w-6 md:w-9"
                            initial={{ rotate: 0 }}
                            animate={{ rotate: showContent.div1 ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <path
                                d="M5.67578 12.5884L17.999 24.9116L30.3223 12.5884"
                                stroke="white"
                                strokeOpacity="0.6"
                                strokeWidth="3"
                            ></path>
                        </motion.svg>
                    </motion.button>

                    {showContent.div1 && (
                        <motion.div
                            className="transition-all overflow-hidden max-h-none"
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex flex-col md:flex-row">
                                <div className="flex-1 pt-5 md:pt-20 order-2 md:order-1 flex flex-col justify-center">
                                    <p className="tw-lead text-2xl md:tw-title-sm mb-10 text-camber font-bold text-white/75">
                                        A blockchain permite a criação de contratos inteligentes que avaliam
                                        automaticamente o score de crédito vinculado antes de conceder crédito.
                                    </p>
                                    <p className="tw-lead text-xl font-bold md:tw-title-sm mb-10 text-white/50">
                                        Isso agiliza o processo de tomada de decisão de crédito.
                                    </p>
                                </div>
                                <div className="flex-1 order-1 md:order-2 mt-10 md:mt-0 aspect-[821/750]">
                                    <div></div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Div 2 */}
            <div className="w-full mx-auto my-5 px-20 max-w-screen-2xl">
                <div className="bg-primary rounded-xl md:rounded-[32px] px-6 md:px-10 py-6 md:py-12">
                    <motion.button
                        onClick={() => handleDivClick('div2')}
                        className="w-full flex justify-between items-center bg-transparent appearance-none border-none p-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <h3 className="text-4xl font-bold mb-0">Transações de Crédito Descentralizadas</h3>
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="37"
                            viewBox="0 0 36 37"
                            fill="none"
                            className="transition-transform w-6 md:w-9"
                            initial={{ rotate: 0 }}
                            animate={{ rotate: showContent.div2 ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <path
                                d="M5.67578 12.5884L17.999 24.9116L30.3223 12.5884"
                                stroke="white"
                                strokeOpacity="0.6"
                                strokeWidth="3"
                            ></path>
                        </motion.svg>
                    </motion.button>

                    {showContent.div2 && (
                        <motion.div
                            className="transition-all overflow-hidden max-h-none"
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex flex-col md:flex-row">
                                <div className="flex-1 pt-5 md:pt-20 order-2 md:order-1 flex flex-col justify-center">
                                    <p className="tw-lead text-2xl md:tw-title-sm mb-10 text-camber font-bold text-white/75">
                                        A descentralização elimina intermediários, reduzindo custos e agilizando a
                                        aprovação de crédito.
                                    </p>
                                    <p className="tw-lead text-xl font-bold md:tw-title-sm mb-10 text-white/50">
                                        Os empréstimos e transações de crédito ocorrem diretamente entre as partes, de
                                        forma transparente.
                                    </p>
                                </div>
                                <div className="flex-1 order-1 md:order-2 mt-10 md:mt-0 aspect-[821/750]">
                                    <div></div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Div 3 */}
            <div className="w-full mx-auto my-5 px-20 max-w-screen-2xl">
                <div className="bg-primary rounded-xl md:rounded-[32px] px-6 md:px-10 py-6 md:py-12">
                    <motion.button
                        onClick={() => handleDivClick('div3')}
                        className="w-full flex justify-between items-center bg-transparent appearance-none border-none p-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <h3 className="text-4xl font-bold mb-0">Flexibilidade nas Condições de Empréstimo</h3>
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="37"
                            viewBox="0 0 36 37"
                            fill="none"
                            className="transition-transform w-6 md:w-9"
                            initial={{ rotate: 0 }}
                            animate={{ rotate: showContent.div3 ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <path
                                d="M5.67578 12.5884L17.999 24.9116L30.3223 12.5884"
                                stroke="white"
                                strokeOpacity="0.6"
                                strokeWidth="3"
                            ></path>
                        </motion.svg>
                    </motion.button>

                    {showContent.div3 && (
                        <motion.div
                            className="transition-all overflow-hidden max-h-none"
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex flex-col md:flex-row">
                                <div className="flex-1 pt-5 md:pt-20 order-2 md:order-1 flex flex-col justify-center">
                                    <p className="tw-lead text-2xl md:tw-title-sm mb-10 text-camber font-bold text-white/75">
                                        Os contratos inteligentes permitem a personalização das condições de empréstimo
                                        com base no score de crédito e nas necessidades do mutuário.
                                    </p>
                                    <p className="tw-lead text-xl font-bold md:tw-title-sm mb-10 text-white/50">
                                        Isso aumenta a inclusão financeira, permitindo que mais pessoas tenham acesso ao
                                        crédito.
                                    </p>
                                </div>
                                <div className="flex-1 order-1 md:order-2 mt-10 md:mt-0 aspect-[821/750]">
                                    <div></div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>

            <div className="w-full mx-auto my-5 px-20 max-w-screen-2xl">
                <div className="bg-primary rounded-xl md:rounded-[32px] px-6 md:px-10 py-6 md:py-12">
                    <motion.button
                        onClick={() => handleDivClick('div4')}
                        className="w-full flex justify-between items-center bg-transparent appearance-none border-none p-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <h3 className="text-4xl font-bold mb-0">Registro de Transações na Blockchain</h3>
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="37"
                            viewBox="0 0 36 37"
                            fill="none"
                            className="transition-transform w-6 md:w-9"
                            initial={{ rotate: 0 }}
                            animate={{ rotate: showContent.div4 ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <path
                                d="M5.67578 12.5884L17.999 24.9116L30.3223 12.5884"
                                stroke="white"
                                strokeOpacity="0.6"
                                strokeWidth="3"
                            ></path>
                        </motion.svg>
                    </motion.button>

                    {showContent.div4 && (
                        <motion.div
                            className="transition-all overflow-hidden"
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            transition={0.3}
                        >
                            <div className="flex flex-col md:flex-row">
                                <div className="flex-1 pt-5 md:pt-20 order-2 md:order-1 flex flex-col justify-center">
                                    <p className="tw-lead text-2xl md:tw-title-sm mb-10 text-camber font-bold text-white/75">
                                        Todas as transações de crédito são registradas de forma imutável na blockchain,
                                        criando um histórico confiável de crédito.
                                    </p>
                                    <p className="tw-lead text-xl font-bold md:tw-title-sm mb-10 text-white/50">
                                        Isso pode melhorar ainda mais o score de crédito do indivíduo ao longo do tempo.
                                    </p>
                                </div>
                                <div className="flex-1 order-1 md:order-2 mt-10 md:mt-0 aspect-[821/750]">
                                    <div></div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Expandable;
