'use client';
import web3 from '../../../Instances/web3';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const WalletButton = () => {
    const [error, setError] = useState('');
    const [address, setAddress] = useState(null);
    //const walletButton = document.getElementById('walletButton');

    useEffect(() => {
        const getAddress = async () => {
            try {
                const accounts = await web3.eth.getAccounts();
                setAddress(accounts[0]);
                documentgetElementById('walletButton').textContent = address.substring(0, 8) + '...';
            } catch (err) {
                setError(err.message);
            }
        };
        getAddress();
    }, [address]);

    const connectWalletHandler = async () => {
        /* verificar se a metamask esta disponivel */
        try {
            /* pedir o wallet connect */
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            /* pegar a lista de contas */
            const accounts = await web3.eth.getAccounts();
            console.log(accounts);
            setAddress(accounts[0]);

            /* criar uma copia local dos contratos */

            // Atualizar o texto do botão com o endereço da carteira
            const walletButton = document.getElementById('walletButton');
            walletButton.textContent = address.substring(0, 8) + '...';
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <motion.button
            onClick={connectWalletHandler}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            id="walletButton"
            className="bg-cblue hover:bg-gold font-bold py-2 px-4 rounded-lg"
        >
            Conectar
        </motion.button>
    );
};

export default WalletButton;
