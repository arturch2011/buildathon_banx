const addressBitfinity = '0xa742af622297a4c748225FBF07cfE4EC542e0796';
const addressSepolia = '0xa742af622297a4c748225FBF07cfE4EC542e0796';
const addressMumbai = '0xfd61A63Ee2D60Bc152f76ec9fC74219112C8Cb02';
const { abi } = require('../build/contracts/SoulbondNFT.json');

const SoulbondNFTContract = (web3) => {
    return new web3.eth.Contract(abi, addressBitfinity);
};

export default SoulbondNFTContract;
