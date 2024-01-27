//import dailyImprovementsContract from '../../../Instances/DailyImprovements';
//import dailyImprovementsFactoryContract from '../../../Instances/DailyImprovementsFactory';
import web3 from '../../../Instances/web3';
import SoulbondNFTContract from '../../../Instances/SoulbondNFT';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { data } from 'autoprefixer';

const ProfileID = ({ data }) => {
    const [activeTab, setActiveTab] = useState('infos');
    const [name, setName] = useState(null);
    const [verifierId, setId] = useState(null);
    const [profilePic, setProPic] = useState(null);
    const [address, setAddr] = useState(null);
    const [balance, setBalance] = useState(null);

    const profile = data[1].attributes;
    const tokenId = data[2];
    const image = data[1].image;
    const nome = profile[0].value;
    const endenreco = profile[1].value;
    const CPF = profile[2].value;
    const birth = profile[3].value;
    const nationality = profile[4].value;
    const income = profile[5].value;
    const gender = profile[6].value;
    const civilState = profile[7].value;
    const profession = profile[8].value;
    const patrimony = profile[9].value;

    console.log(image);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const name = localStorage.getItem('name');
            setName(name);
            const verifierId = localStorage.getItem('verifierId');
            setId(verifierId);
            const profilePic = localStorage.getItem('profilePic');
            setProPic(profilePic);
            const address = localStorage.getItem('address');
            setAddr(address);
            getBal(address);
        }
    }, []);
    const getBal = async (addr) => {
        const bal = await web3.eth.getBalance(addr);
        const bal2 = web3.utils.fromWei(bal, 'ether');
        setBalance(bal2);
    }

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <>
            <section className="bg-[url(../../public/teiasbg.png)] bg-cover bg-fixed bg-center w-full">
                <div className="min-h-screen max-w-7xl py-40  w-full container mx-auto p-4">
                    <div className="grid grid-cols-12 gap-4">
                        {/* Parte Fixa do Perfil em Destaque */}
                        <motion.div
                            className="col-span-12 md:col-span-4 h-52 bg-dbase rounded-2xl p-6 shadow-lg"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    src={profilePic}
                                    alt="profilePicture"
                                    className="h-16 w-auto rounded-full mr-4"
                                ></img>
                                <div className="flex flex-col">
                                    <h2 className="text-xl font-bold whitespace-normal">{name}</h2>
                                    <p className="text-cbase truncate">{verifierId}</p>
                                </div>
                            </div>
                            <p className=" mb-2 truncate">Address: {address}</p>
                            <p className=" mb-2">BFT: {parseFloat(balance).toFixed(2)}</p>
                            {/* Outras informações do perfil aqui */}
                        </motion.div>

                        {/* Seção das Abas e Conteúdo */}
                        <div className="col-span-12 md:col-span-8">
                            <motion.div
                                className="bg-dbase  rounded-lg p-6 shadow-md mb-4"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <ul className="flex space-x-4">
                                    <li
                                        className={`text-xl p-2 rounded-lg font-bold cursor-pointer ${
                                            activeTab === 'infos' ? 'bg-primary' : 'text-white'
                                        }`}
                                        onClick={() => handleTabClick('infos')}
                                    >
                                        Minhas Informações
                                    </li>
                                    <li
                                        className={`text-xl p-2 rounded-lg font-bold cursor-pointer ${
                                            activeTab === 'projects' ? 'bg-primary' : 'text-white'
                                        }`}
                                        onClick={() => handleTabClick('projects')}
                                    >
                                        Score de Crédito
                                    </li>
                                    <li
                                        className={`text-xl p-2 rounded-lg font-bold cursor-pointer ${
                                            activeTab === 'wallet' ? 'bg-primary' : 'text-white'
                                        }`}
                                        onClick={() => handleTabClick('wallet')}
                                    >
                                        Carteira
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Conteúdo das Abas */}
                            {activeTab === 'infos' && (
                                <motion.div
                                    className="bg-dbase rounded-lg p-6 shadow-md"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {/* Informações Pessoais */}
                                    <div className="border-b py-4">
                                        <h2 className="text-xl font-semibold mb-2">Informações Pessoais</h2>
                                        <div>
                                            <label className="text-gray-600">Nome Completo:</label>
                                            <p>{nome}</p>
                                        </div>
                                        <div>
                                            <label className="text-gray-600">Data de Nascimento:</label>
                                            <p>{birth}</p>
                                        </div>
                                        <div>
                                            <label className="text-gray-600">Gênero:</label>
                                            <p>{gender}</p>
                                        </div>
                                        <div>
                                            <label className="text-gray-600">Estado Civil:</label>
                                            <p>{civilState}</p>
                                        </div>
                                        <div>
                                            <label className="text-gray-600">Nacionalidade:</label>
                                            <p>{nationality}</p>
                                        </div>
                                        <div>
                                            <label className="text-gray-600">Profissão:</label>
                                            <p>{profession}</p>
                                        </div>
                                    </div>

                                    {/* Informações de Endereço */}
                                    <div className="border-b py-4">
                                        <h2 className="text-xl font-semibold mb-2">Endereço</h2>
                                        <div>
                                            <label className="text-gray-600">Endereço:</label>
                                            <p>{endenreco}</p>
                                        </div>
                                    </div>

                                    {/* Informações Financeiras */}
                                    <div className="border-b py-4">
                                        <h2 className="text-xl font-semibold mb-2">Informações Financeiras</h2>
                                        <div>
                                            <label className="text-gray-600">CPF:</label>
                                            <p>{CPF}</p>
                                        </div>
                                        <div>
                                            <label className="text-gray-600">Renda:</label>
                                            <p>{income}</p>
                                        </div>
                                        <div>
                                            <label className="text-gray-600">Patrimônio:</label>
                                            <p>{patrimony}</p>
                                        </div>
                                    </div>

                                    <div className="border-b py-4">
                                        <h2 className="text-xl font-semibold mb-2">Informações do Token Soulbound</h2>
                                        <div>
                                            <label className="text-gray-600">SoulBound ID</label>
                                            <p>{tokenId}</p>
                                        </div>
                                        <div>
                                            <label className="text-gray-600">Sobre</label>
                                            <p>
                                                Este token está vinculado com a sua carteira e é intransferível. Ele
                                                contém todas as informações acima
                                            </p>
                                        </div>
                                    </div>
                                    <div className="border-b py-4">
                                        <h2 className="text-xl font-semibold mb-2">Documento de Identidade</h2>
                                        <div>
                                            <label className="text-gray-600">Documento</label>
                                            <img
                                                src={image}
                                                alt="Imagem"
                                                className="my-4 rounded-2xl w-full aspect-[2/1.5] object-cover"
                                            ></img>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                            {activeTab === 'projects' && (
                                <motion.div
                                    className="bg-dbase rounded-lg p-6 shadow-md"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <h1>Meus Score de Crédito</h1>
                                    <h1>
                                        {/*data.map((myDailyImprovements, index) => (
                                            <div key={index}>
                                                <Link href={`/games/`}>
                                                    <div className="h-full p-3 bg-dgold rounded-xl flex flex-col overflow-hidden">
                                                        <h1 className='font-bold text-4xl mb-4"'>{myDailyImprovements}</h1>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))*/}
                                    </h1>
                                </motion.div>
                            )}
                            {activeTab === 'wallet' && (
                                <motion.div
                                    className="bg-dbase rounded-lg p-6 shadow-md"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="border-b py-4">
                                        <h2 className="text-xl font-semibold mb-2">My Wallet</h2>
                                        <div className="mb-2">
                                            <label className="text-gray-600">Public Address:</label>
                                            <p className="truncate">{address}</p>
                                        </div>
                                        <div className="mb-2">
                                            <label className="text-gray-600">BFT Balance:</label>
                                            <p>{parseFloat(balance).toFixed(2)} BFT</p>
                                        </div>
                                    
                                        <div className="mb-2">
                                            <label className="text-gray-600">Transaction History:</label>
                                            <div>
                                                <Link
                                                    className="underline text-primary hover:text-cprimary active:text-primary"
                                                    href={`https://explorer.bitfinity.network/address/${address}`}
                                                >
                                                    bitfinity-block-explorer
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

//export const getServerSideProps = async ({ query }) => {
//    const addr = query.profileId;
//
//    const instance = await dailyImprovementsFactoryContract(web3);
//    const getMyDailyImprovements = await instance.methods.getMyDailyImprovements(addr).call();
//
//    const dataPromises = await getMyDailyImprovements.map(async (addr) => {
//        const dailyImprovementsInstance = await dailyImprovementsContract(web3, addr);
//        const name = await dailyImprovementsInstance.methods.name().call();
//        const goal = await dailyImprovementsInstance.methods.goal().call();
//        const description = await dailyImprovementsInstance.methods.description().call();
//        const creator = await dailyImprovementsInstance.methods.creator().call();
//        const isClosed = await dailyImprovementsInstance.methods.isClosed().call();
//        const start = await dailyImprovementsInstance.methods.inicio().call();
//        const end = await dailyImprovementsInstance.methods.fim().call();
//        const category = await dailyImprovementsInstance.methods.category().call();
//
//        return {
//            addr,
//            name,
//            goal,
//            description,
//            creator,
//            isClosed,
//            start: start.toString(),
//            end: end.toString(),
//            category,
//        };
//    });
//
//    // const data = await Promise.all(dataPromises());
//    const data = await Promise.all(dataPromises);
//
//    return { props: { data: data } };
//};

export const getServerSideProps = async ({ query }) => {
    const addr = query.profileId;
    console.log(addr);
    const instance = await SoulbondNFTContract(web3);
    let nftId = await instance.methods.getUserNFTs(addr).call();
    let tokenUri = '';
    let objectData = {
        image: '',
        attributes: [
            {
                trait_type: 'Nome',
                value: 'undefined',
            },
            {
                trait_type: 'Endereço',
                value: 'undefined',
            },
            {
                trait_type: 'CPF',
                value: 'undefined',
            },
            {
                trait_type: 'Data de Nascimento',
                value: 'undefined',
            },
            {
                trait_type: 'Nacionalidade',
                value: 'undefined',
            },
            {
                trait_type: 'Renda',
                value: 'undefined',
            },
            {
                trait_type: 'Gênero',
                value: 'undefined',
            },
            {
                trait_type: 'Estado Civil',
                value: 'undefined',
            },
            {
                trait_type: 'Profissão',
                value: 'undefined',
            },
            {
                trait_type: 'Patrimônio',
                value: 'undefined',
            },
        ],
    };
    console.log('Aquiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
    console.log('nftId: ', nftId);
    if (nftId.length === 0) {
        nftId = null;
    } else {
        nftId = nftId[0];
        tokenUri = await instance.methods.tokenURI(nftId).call();
        console.log('Aquiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
        // console.log(typeof addr);
        console.log(nftId);
        console.log(tokenUri);
        console.log(addr);

        const response = await fetch(tokenUri);
        objectData = await response.json();

        console.log('Object Data: ', objectData);
        console.log(objectData);
    }

    return { props: { data: [addr, objectData, nftId] } };
};

export default ProfileID;
