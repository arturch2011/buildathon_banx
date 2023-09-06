import Web3 from 'web3';

const { NEXT_PUBLIC_PROJECT_ID } = process.env;

let web3;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    web3 = new Web3(window.ethereum);
} else {
    const provider = new Web3.providers.HttpProvider(`https://polygon-mumbai.infura.io/v3/${NEXT_PUBLIC_PROJECT_ID}`);
    web3 = new Web3(provider);
}
export default web3;
