import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Web3Auth } from '@web3auth/modal';
import { CHAIN_NAMESPACES } from '@web3auth/base';
import RPC from './web3RPC';
import Image from 'next/image';

const Auth = ({ myPropFunction }) => {
    const PROJECT = process.env.NEXT_PUBLIC_PROJECT_ID;
    const [address, setAddress] = useState(null);
    const [web3auth, setWeb3auth] = useState(null);
    const [provider, setProvider] = useState(null);
    const [privateKey, setPrivateKey] = useState(null);
    const [picture, setPicture] = useState(null);
    const [loged, setLoged] = useState(false);

    const clientId = 'BF1CU7YcdEicaowe0Kuzu5nESkmao_GyXpUEUjnu4OPWSmZDodKaLWqrJZ4zIWZjWCLab2Vc0KGbSbcAJ7j9vEs';
    const target = `https://polygon-mumbai.infura.io/v3/${PROJECT}`;

    useEffect(() => {
        const init = async () => {
            try {
                if (localStorage.getItem('loged')) {
                    setAddress(localStorage.getItem('address'));
                    setPicture(localStorage.getItem('profilePic'));
                    setLoged(true);
                }
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
                        appName: 'EventChain', // <-- Your dApp Name
                        //appLogo: 'https://web3auth.io/images/w3a-L-Favicon-1.svg', // Your dApp Logo URL
                        theme: 'dark', // "light" | "dark" | "auto"
                        primary: '#000000', // Primary color used for buttons, links, etc.
                        loginMethodsOrder: ['google', 'facebook', 'twitter', 'apple'],
                        defaultLanguage: 'en', // en, de, ja, ko, zh, es, fr, pt, nl
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
        localStorage.setItem('loged', true);
        setLoged(true);
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
        localStorage.setItem('provider', provider);
        return privKey;
    };

    const logout = async () => {
        setProvider(null);
        localStorage.removeItem('address');
        setAddress(null);
        localStorage.removeItem('loged');
        setLoged(false);
        if (!web3auth) {
            console.log('web3auth not initialized yet');
            return;
        }

        await web3auth.logout();
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

        await getPrivateKey();

        // const rec = await sendTransaction();
        // console.log(rec);
    };

    // const loged = async () => {
    //     if (web3auth) {
    //         const walletButton = document.getElementById('walletButtonn');
    //         walletButton.textContent = address.substring(0, 8) + '...';
    //     }
    // };

    const [showDrop, setShowDrop] = useState(false);
    const buttonRef = useRef(null);

    // Função para fechar o menu dropdown quando ocorrer um clique fora dele
    const handleClickOutside = (event) => {
        if (buttonRef.current && !buttonRef.current.contains(event.target)) {
            setShowDrop(false);
        }
    };

    // Adiciona um ouvinte de eventos de clique ao corpo do documento
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    if (loged) {
        return (
            <motion.button
                onClick={() => setShowDrop(!showDrop)}
                ref={buttonRef}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="py-1 px-1 relative  rounded-xl md:rounded-2xl bg-primary flex flex-col "
            >
                {/* <div className="bg-[url(../../public/profile.svg)] bg-contain bg-no-repeat bg-center h-10 w-14"></div> */}
                <div className="flex items-center self-center">
                    <img src={picture} alt="profilePicture" className="h-10 w-auto rounded-2xl"></img>
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 36 37"
                        fill="none"
                        className="transition-transform w-6 md:w-9"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: showDrop ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <path
                            d="M5.67578 12.5884L17.999 24.9116L30.3223 12.5884"
                            stroke="white"
                            strokeOpacity="0.6"
                            strokeWidth="3"
                        ></path>
                    </motion.svg>
                </div>

                {showDrop && (
                    <div className="md:absolute md:right-0 md:top-[140%] mt-2 md:mt-0 flex flex-col items-center rounded-2xl p-4 bg-dbase">
                        <Link
                            onClick={myPropFunction}
                            href={`/${address}`}
                            className="py-1 px-5 bg-cbrown w-full rounded-2xl mb-2 text-center hover:bg-cbase"
                        >
                            Profile
                        </Link>
                        <button
                            onClick={logout}
                            className="p-1 px-5 bg-cbrown w-full rounded-2xl text-center hover:bg-cbase"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </motion.button>
        );
    } else {
        return (
            <div>
                <motion.button
                    onClick={connectWalletHandler}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    id="walletButtonn"
                    className="bg-primary hover:bg-cprimary font-bold py-2 px-4 rounded-2xl"
                >
                    Connect
                </motion.button>
            </div>
        );
    }
};

export default Auth;