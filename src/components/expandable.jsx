'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

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
        <section className="w-full mb-60 text-purple">
            <div className="w-full mx-auto text-center max-w-screen-2xl my-16 md:pt-20">
                <h2 className="text-6xl font-bold">
                    Aumentando a Generosidade: Transformando as Doações em um Jogo com NFTs Especiais e Benefícios
                </h2>
            </div>

            {/* Div 1 */}
            <div className="w-full mx-auto my-5 px-20 max-w-screen-2xl">
                <div className="bg-dgold rounded-xl md:rounded-[32px] px-6 md:px-10 py-6 md:py-12">
                    <motion.button
                        onClick={() => handleDivClick('div1')}
                        className="w-full flex justify-between items-center bg-transparent appearance-none border-none p-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <h3 className="text-4xl font-bold mb-0">NFTs Exclusivos: Recompensas para Generosidade</h3>
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
                                    <p className="tw-lead text-2xl md:tw-title-sm mb-10 text-camber font-bold">
                                        GOal Game introduz um aspecto envolvente de gamificação na experiência de doação
                                        ao integrar tokens não fungíveis (NFTs) especiais. Quando os usuários contribuem
                                        para campanhas, eles ganham NFTs exclusivos e de edição limitada como símbolos
                                        de apreço.
                                    </p>
                                    <p className="tw-lead text-xl font-bold md:tw-title-sm mb-10">
                                        Esses NFTs representam sua generosidade e servem como testemunho de seu apoio a
                                        causas significativas. Ao desbloquear NFTs exclusivos, os doadores não apenas
                                        contribuem para uma mudança positiva, mas também obtêm colecionáveis digitais
                                        com valor intrínseco.
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
                <div className="bg-dgold rounded-xl md:rounded-[32px] px-6 md:px-10 py-6 md:py-12">
                    <motion.button
                        onClick={() => handleDivClick('div2')}
                        className="w-full flex justify-between items-center bg-transparent appearance-none border-none p-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <h3 className="text-4xl font-bold mb-0">
                            Benefícios dos NFTs: Desbloqueando Privilégios Únicos
                        </h3>
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
                                    <p className="tw-lead text-2xl md:tw-title-sm mb-10 text-camber font-bold">
                                        Os NFTs do GOal Game vão além de serem meros itens de colecionador - eles
                                        oferecem benefícios tangíveis aos seus detentores. Esses NFTs especiais concedem
                                        acesso a eventos exclusivos, prévias antecipadas de campanhas ou até mesmo
                                        descontos em produtos e serviços de parceiros.
                                    </p>
                                    <p className="tw-lead text-xl font-bold md:tw-title-sm mb-10">
                                        Ao possuir esses NFTs, os doadores se tornam parte de uma comunidade exclusiva
                                        que desfruta de privilégios e experiências únicas, adicionando uma camada extra
                                        de emoção e incentivos ao ato de doar.
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
                <div className="bg-dgold rounded-xl md:rounded-[32px] px-6 md:px-10 py-6 md:py-12">
                    <motion.button
                        onClick={() => handleDivClick('div3')}
                        className="w-full flex justify-between items-center bg-transparent appearance-none border-none p-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <h3 className="text-4xl font-bold mb-0">Exibição de Impacto: Perfis Personalizados de NFT</h3>
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
                                    <p className="tw-lead text-2xl md:tw-title-sm mb-10 text-camber font-bold">
                                        O GOal Game utiliza a tecnologia de NFT para criar perfis personalizados para os
                                        doadores. Cada perfil mostra o impacto que um indivíduo ou organização teve por
                                        meio de suas doações.
                                    </p>
                                    <p className="tw-lead text-xl font-bold md:tw-title-sm mb-10">
                                        Esses perfis apresentam distintivos de NFT, representando as campanhas apoiadas,
                                        os fundos doados e os resultados positivos alcançados. Ao exibir seus perfis de
                                        NFT, os doadores podem inspirar outras pessoas, promovendo um senso de orgulho e
                                        incentivando maior envolvimento na plataforma.
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
                <div className="bg-dgold rounded-xl md:rounded-[32px] px-6 md:px-10 py-6 md:py-12">
                    <motion.button
                        onClick={() => handleDivClick('div4')}
                        className="w-full flex justify-between items-center bg-transparent appearance-none border-none p-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <h3 className="text-4xl font-bold mb-0">Sucesso Coletivo: Classificações de NFT</h3>
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
                            className="transition-all overflow-hidden max-h-none"
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex flex-col md:flex-row">
                                <div className="flex-1 pt-5 md:pt-20 order-2 md:order-1 flex flex-col justify-center">
                                    <p className="tw-lead text-2xl md:tw-title-sm mb-10 text-camber font-bold">
                                        O GOal Game apresenta classificações de NFT, que exibem os doadores mais ativos
                                        e impactantes dentro da comunidade. Essas classificações classificam indivíduos
                                        e organizações com base em suas contribuições acumulativas, promovendo uma
                                        competição saudável e um senso de conquista coletiva..
                                    </p>
                                    <p className="tw-lead text-xl font-bold md:tw-title-sm mb-10">
                                        Os doadores se esforçam para subir nas classificações, ganhar distintivos
                                        especiais de NFT e obter reconhecimento por seus esforços filantrópicos. As
                                        classificações de NFT não apenas criam um ambiente envolvente e interativo, mas
                                        também incentivam maior participação e generosidade.
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
