import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Web3 from 'web3';
import axios from 'axios';
import SoulbondNFTContract from '../../../Instances/SoulbondNFT';

const HDWalletProvider = require('@truffle/hdwallet-provider');

const PROJECT = process.env.NEXT_PUBLIC_PROJECT_ID;

const Create = () => {
    const [privateKey, setPrivateKey] = useState(null);
    const [accounts, setAccounts] = useState(null);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const address = localStorage.getItem('address');
            setAccounts(address);
            console.log(address);
            const privKey = localStorage.getItem('privateKey');
            setPrivateKey(privKey);
        }
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const [name, setName] = useState('');
    const [paddress, setPaddress] = useState('');
    const [cpf, setCpf] = useState('');
    const [birth, setBirth] = useState('');
    const [nationality, setNationality] = useState('');
    const [renda, setRenda] = useState('');
    const [genre, setGenre] = useState('');
    const [civil, setCivil] = useState('');
    const [profession, setProfession] = useState('');
    const [patrimony, setPatrimony] = useState('');
    const [file, setFile] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const fetchData = async (img) => {
        const obj = {
            nome: name,
            endereco: paddress,
            CPF: cpf,
            nascimento: birth,
            nacionalidade: nationality,
            rend: renda,
            genero: genre,
            estadoCiv: civil,
            proficao: profession,
            patrimonio: patrimony,
            img: img,
        };

        const req = await fetch('/api/backend', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        });
        const result = await req.json();

        console.log(result.resultado.IpfsHash);
        return result.resultado.IpfsHash;
    };

    const uploadToServer = async () => {
        const formData = new FormData();
        formData.append('file', file);
        const result = axios.post('/api/image2', formData);
        return result.data.resultado.IpfsHash;
    };

    const createCampaignHanddler = async () => {
        const urlMumbai = `https://polygon-mumbai.infura.io/v3/${PROJECT}`;
        const urlSepolia = `https://sepolia.infura.io/v3/${PROJECT}`;
        const urlBitfinity = `https://testnet.bitfinity.network`;

        const provider = new HDWalletProvider(privateKey, urlMumbai);
        const web = await new Web3(provider);
        const img = await uploadToServer();
        const data = await fetchData(img);
        console.log(data);
        const soulbondNFT = await SoulbondNFTContract(web);

        console.log(accounts);
        console.log(privateKey);
        const transact = await soulbondNFT.methods
            .safeMint(`https://tomato-secure-lobster-753.mypinata.cloud/ipfs/${data}`)
            .send({ from: accounts });
        console.log(transact);

        //await dailyImprovementsFactory.methods
        // .createDailyImprovements(name, paddress, cpf, birth, nationality, renda, genre, civil, profession, patrimony)
        //.send({ from: accounts });
    };

    return (
        <section className="bg-[url(../../public/teiasbg.png)] bg-cover bg-fixed bg-center py-28 flex flex-col items-center justify-center min-h-screen">
            <div className="container mx-auto px-4">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="max-w-3xl mx-auto"
                >
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-8 text-center">
                        Adicionar infos de CreditScore
                    </motion.h2>
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-lines-7 bg-dbase drop-shadow-lg rounded-2xl p-8 md:p-14 shadow-md"
                    >
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-xl font-medium mb-2">
                                Nome Completo
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Seu nome completo"
                                className="w-full bg-base border-cbase focus:outline-none focus:ring focus:border-primary border-solid border-2 rounded-xl p-3 placeholder:italic"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="goal" className="block text-xl font-medium mb-2">
                                Endereço
                            </label>
                            <input
                                type="text"
                                id="goal"
                                placeholder="Rua, número, bairro, cidade, estado"
                                className="w-full bg-base border-cbase focus:outline-none focus:ring focus:border-primary border-solid border-2 rounded-xl p-3 placeholder:italic"
                                onChange={(e) => setPaddress(e.target.value)}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                            <div className="mb-6">
                                <label htmlFor="start" className="block text-xl font-medium mb-2">
                                    CPF
                                </label>
                                <input
                                    type="text"
                                    id="start"
                                    placeholder="CPF (somente números))"
                                    className="w-full bg-base border-cbase focus:outline-none focus:ring focus:border-primary border-solid border-2 rounded-xl p-3 placeholder:italic"
                                    onChange={(e) => setCpf(e.target.value)}
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="end" className="block text-xl font-medium mb-2">
                                    Data de Nascimento
                                </label>
                                <input
                                    type="date"
                                    id="end"
                                    placeholder="ddmmyyyy"
                                    className="w-full bg-base border-cbase focus:outline-none focus:ring focus:border-primary border-solid border-2 rounded-xl p-3 placeholder:italic"
                                    onChange={(e) => setBirth(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-10">
                            <div className="mb-6">
                                <label htmlFor="genero" className="block text-xl font-medium mb-2">
                                    Gênero
                                </label>
                                <select
                                    id="genero"
                                    className="w-full bg-base border-cbase focus:outline-none focus:ring focus:border-primary border-solid border-2 rounded-xl p-3 placeholder:italic"
                                    onChange={(e) => setGenre(e.target.value)}
                                >
                                    <option value="">Escolha seu gênero</option>
                                    <option value="Solteiro">Masculino</option>
                                    <option value="Casado">Feminino</option>
                                    <option value="Separado">Outro</option>
                                </select>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="category" className="block text-xl font-medium mb-2">
                                    Estado Civil
                                </label>
                                <select
                                    id="category"
                                    className="w-full bg-base border-cbase focus:outline-none focus:ring focus:border-primary border-solid border-2 rounded-xl p-3 placeholder:italic"
                                    onChange={(e) => setCivil(e.target.value)}
                                >
                                    <option value="">Escolha seu estado Civil</option>
                                    <option value="Solteiro">Solteiro</option>
                                    <option value="Casado">Casado</option>
                                    <option value="Separado">Separado</option>
                                    <option value="Divorciado">Divorciado</option>
                                    <option value="Viúvo">Viúvo</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                            <div className="mb-6">
                                <label htmlFor="nacionalidade" className="block text-xl font-medium mb-2">
                                    Nacionalidade
                                </label>
                                <select
                                    id="nacionalidade"
                                    className="w-full bg-base border-cbase focus:outline-none focus:ring focus:border-primary border-solid border-2 rounded-xl p-3 placeholder:italic"
                                    onChange={(e) => setNationality(e.target.value)}
                                >
                                    <option value="">Escolha sua nacionalidade</option>
                                    <option value="Brasileiro">Brasileiro</option>
                                    <option value="Extrangeiro">Extrangeiro</option>
                                </select>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="renda" className="block text-xl font-medium mb-2">
                                    Renda
                                </label>
                                <input
                                    type="text"
                                    id="renda"
                                    placeholder="Renda em R$ (somente números)"
                                    className="w-full bg-base border-cbase focus:outline-none focus:ring focus:border-primary border-solid border-2 rounded-xl p-3 placeholder:italic"
                                    onChange={(e) => setRenda(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                            <div className="mb-6">
                                <label htmlFor="profissao" className="block text-xl font-medium mb-2">
                                    Profissão
                                </label>
                                <input
                                    type="text"
                                    id="profissao"
                                    placeholder="Sua profissão atual"
                                    className="w-full bg-base border-cbase focus:outline-none focus:ring focus:border-primary border-solid border-2 rounded-xl p-3 placeholder:italic"
                                    onChange={(e) => setProfession(e.target.value)}
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="patrimonio" className="block text-xl font-medium mb-2">
                                    Patrimônio
                                </label>
                                <input
                                    type="text"
                                    id="patrimonio"
                                    placeholder="Valor patrimonios em R$ (somente números)"
                                    className="w-full bg-base border-cbase focus:outline-none focus:ring focus:border-primary border-solid border-2 rounded-xl p-3 placeholder:italic"
                                    onChange={(e) => setPatrimony(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                                <label htmlFor="image" className="block text-xl font-medium mb-2">
                                    Upload Image
                                </label>

                                {selectedImage ? (
                                    <div className="mt-4">
                                        <img
                                            src={selectedImage}
                                            alt="Selected"
                                            className="w-full aspect-[4/3] rounded-2xl object-cover"
                                        ></img>
                                    </div>
                                ) : (
                                    <input
                                        onChange={(e) => {
                                            const file = e.target.files[0];
                                            setSelectedImage(URL.createObjectURL(file));
                                            setFile(file);
                                        }}
                                        type="file"
                                        className="w-full aspect-[4/3] 
                                        file:border-0
                                        file:text-lg file:font-semibold 
                                        file:bg-transparent file:text-cprimary
                                        hover:bg-base/75 bg-base border-cbase border-solid border-2 rounded-2xl p-5 "
                                        id="image"
                                    />
                                )}
                            </div>

                        <motion.button
                            type="submit"
                            className="bg-primary text-white mt-4 px-12 py-3 justify-self-center rounded-md font-bold text-lg shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={createCampaignHanddler}
                        >
                            Enviar Meus Dados
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Create;
