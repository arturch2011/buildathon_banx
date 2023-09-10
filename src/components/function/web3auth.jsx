import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Web3Auth } from '@web3auth/modal';
import { CHAIN_NAMESPACES } from '@web3auth/base';
import RPC from './web3RPC';
import Image from 'next/image';

const Auth = () => {
    const PROJECT = process.env.NEXT_PUBLIC_PROJECT_ID;
    const [address, setAddress] = useState(null);
    const [web3auth, setWeb3auth] = useState(null);
    const [provider, setProvider] = useState(null);
    const [privateKey, setPrivateKey] = useState(null);
    const [picture, setPicture] = useState(null);

    const clientId = 'BF1CU7YcdEicaowe0Kuzu5nESkmao_GyXpUEUjnu4OPWSmZDodKaLWqrJZ4zIWZjWCLab2Vc0KGbSbcAJ7j9vEs';
    const target = `https://polygon-mumbai.infura.io/v3/${PROJECT}`;

    useEffect(() => {
        if (localStorage.getItem('address')) {
            setAddress(localStorage.getItem('address'));
            setPicture(localStorage.getItem('profilePic'));
        }
        const init = async () => {
            try {
                const chainConfig = {
                    chainNamespace: CHAIN_NAMESPACES.EIP155,
                    chainId: '0x13881',
                    rpcTarget: target, // This is the public RPC we have added, please pass on your own endpoint while creating an app
                };

                const web3auth = new Web3Auth({
                    clientId,
                    web3AuthNetwork: 'testnet', // mainnet, aqua,  cyan or testnet
                    chainConfig,
                    uiConfig: {
                        appName: 'Goals', // <-- Your dApp Name
                        //appLogo: 'https://web3auth.io/images/w3a-L-Favicon-1.svg', // Your dApp Logo URL
                        theme: 'dark', // "light" | "dark" | "auto"
                        primary: '#000000', // Primary color used for buttons, links, etc.
                        loginMethodsOrder: ['google', 'facebook', 'twitter', 'apple'],
                        defaultLanguage: 'pt', // en, de, ja, ko, zh, es, fr, pt, nl
                        loginGridCol: 3, // 2 | 3
                        primaryButton: 'externalLogin', // "externalLogin" | "socialLogin" | "emailLogin"
                    },
                });

                setWeb3auth(web3auth);
                await web3auth.initModal();

                setProvider(web3auth.provider);
            } catch (err) {
                console.log(err.message);
            }
        };
        init();
    }, []);

    const getUserInfo = async () => {
        if (!web3auth) {
            console.log('web3auth not initialized yet');
            return;
        }
        const user = await web3auth.getUserInfo();
        console.log(user);
        setPicture(user.profileImage);
        localStorage.setItem('name', user.name);
        localStorage.setItem('verifierId', user.verifierId);
        localStorage.setItem('profilePic', user.profileImage);
    };

    const getAccounts = async () => {
        if (!provider) {
            console.log('provider not initialized yet');
            return;
        }
        console.log(provider);
        const rpc = new RPC(provider);
        const addr = await rpc.getAccounts();
        localStorage.setItem('address', addr);
        setAddress(addr);
        console.log(addr);
    };

    const getBalance = async () => {
        if (!provider) {
            console.log('provider not initialized yet');
            return;
        }
        const rpc = new RPC(provider);
        const balance = await rpc.getBalance();
        localStorage.setItem('balance', balance);
        console.log(balance);
    };

    const getPrivateKey = async () => {
        if (!provider) {
            console.log('provider not initialized yet');
            return;
        }
        const rpc = new RPC(provider);
        const privKey = await rpc.getPrivateKey();
        localStorage.setItem('privateKey', privKey);
        console.log(privKey);
        setPrivateKey(privKey);
        return privKey;
    };

    const logout = async () => {
        if (!web3auth) {
            console.log('web3auth not initialized yet');
            return;
        }
        await web3auth.logout();
        setProvider(null);
        localStorage.removeItem('address');
        setAddress(null);
        localStorage.removeItem('profilePic');
    };

    const connectWalletHandler = async () => {
        if (!web3auth) {
            console.log('Web3Auth not initialized');
            return;
        }
        const web3authProvider = await web3auth.connect();
        setProvider(web3authProvider);
        await getUserInfo();
        await getAccounts();
        await getBalance();

        // setTimeout(function () {
        //     loged();
        // }, 1000);

        await getPrivateKey();
    };

    // const loged = async () => {
    //     if (web3auth) {
    //         const walletButton = document.getElementById('walletButtonn');
    //         walletButton.textContent = address.substring(0, 8) + '...';
    //     }
    // };

    const [showDrop, setShowDrop] = useState({
        drop1: false,
        drop2: false,
        drop3: false,
        drop4: false,
    });

    const handleDropClick = (drop) => {
        // Verificar o estado atual da div clicada
        const isCurrentlyOpen = showDrop[drop];

        // Fechar todas as divs
        const updatedShowDrop = {
            drop1: false,
        };

        // Abrir a div clicada, se ela estiver fechada
        if (!isCurrentlyOpen) {
            updatedShowDrop[drop] = true;
        }

        // Atualizar o estado
        setShowDrop(updatedShowDrop);
    };

    if (address) {
        return (
            <motion.button
                onClick={() => handleDropClick('drop1')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="py-1 px-1 relative  rounded-xl md:rounded-full bg-primary flex flex-col "
            >
                {/* <div className="bg-[url(../../public/profile.svg)] bg-contain bg-no-repeat bg-center h-10 w-14"></div> */}
                <img src={picture} alt="profilePicture" className="h-10 w-auto rounded-xl md:rounded-full"></img>
                {showDrop.drop1 && (
                    <div className="md:absolute md:right-0 md:top-[140%] flex flex-col items-center rounded-xl shadow-lg p-4 bg-dbase ">
                        <Link
                            href={`/${address}`}
                            className="py-1 px-5 bg-cbrown w-full rounded-xl mb-2 text-center hover:bg-cbase"
                        >
                            Profile
                        </Link>
                        <Link
                            href={"/form"}
                            className="py-1 px-5 bg-cbrown w-full rounded-xl mb-2 text-center hover:bg-cbase"
                        >
                            Credit Score Data
                        </Link>
                        <button
                            onClick={logout}
                            className="p-1 px-5 bg-cbrown w-full rounded-xl text-center hover:bg-cbase"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </motion.button>
        );
    }

    return (
        <div>
            <motion.button
                onClick={connectWalletHandler}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                id="walletButtonn"
                className="bg-primary hover:bg-dprimary font-bold py-2 px-4 rounded-lg"
            >
                Conectar
            </motion.button>
        </div>
    );
};

export default Auth;
