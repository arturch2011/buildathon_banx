const address = '0x9f41d6DB5f3a468E3C596f605FeC95facA782e64';
const { abi } = require('../build/contracts/SoulbondNFT.json');

const SoulbondNFTContract = (web3) => {
    return new web3.eth.Contract(abi, address);
};

export default SoulbondNFTContract;
