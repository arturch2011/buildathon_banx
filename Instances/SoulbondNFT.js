const addressBitfinity = '0x496E4d5cD534273891895AC23984F76461C8ef45';
const addressSepolia = '0xa742af622297a4c748225FBF07cfE4EC542e0796';
const { abi } = require('../build/contracts/SoulbondNFT.json');

const SoulbondNFTContract = (web3) => {
    return new web3.eth.Contract(abi, addressSepolia);
};

export default SoulbondNFTContract;
