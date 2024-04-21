import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { sepolia } from "viem/chains";

export const projectId = 'eea59af2d28a41be9e7d0bf97be06cd9';
export const address = '0x77620E9E0b72f3C8291Da36d09e5188783ecD39B';

export const config = getDefaultConfig({
  appName: 'Onchain Gumballs',
  projectId,
  chains: [sepolia],
  ssr: true,
});

export const abi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_gumballs",
        "type": "uint256"
      }
    ],
    "name": "addFreshGumballs",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getGumballs",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getNumGumballs",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
