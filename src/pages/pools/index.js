import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Web3 from 'web3';

const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Pools = () => {
    const poollist = require('../../assets/poollist');
    return (
        <>
            <section className="bg-[url(../../public/teiasbg.png)] bg-cover bg-fixed bg-center py-28 flex flex-col items-center justify-center min-h-screen">
                <motion.div
                    className="bg-cbase container shadow-lg rounded-3xl w-full"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <div className="bg-dbase rounded-t-3xl p-8">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-semibold ">Credit Pools</h1>
                            <div className="flex items-center py-2">
                                <input
                                    className="h-10 pl-4 pr-12 py-2 rounded-l-full bg-cbase focus:border-primary focus:border-2 focus:outline-none"
                                    placeholder="Pesquisar"
                                    onChange={(e) => setSname(e.target.value)}
                                    onKeyUp={(e) => {
                                        if (e.key === 'Enter') {
                                            setSvalue(sname);
                                        }
                                    }}
                                />
                                <button
                                    onClick={() => setSvalue(sname)}
                                    className="h-10 p-2 rounded-r-full bg-primary hover:bg-cprimary active:bg-primary"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-search h-5 w-5"
                                    >
                                        <circle cx="11" cy="11" r="8" />
                                        <path d="M21 21l-4.35-4.35" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="p-8">
                        {poollist.map((pool, index) => (
                            <div key={index}>
                                <div className="bg-dbase rounded-3xl p-8 mb-4">
                                    <h1 className='font-bold text-4xl mb-4"'>{pool.name}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>
        </>
    );
};

export default Pools;
