"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.INounsSeeder__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "nounId",
                type: "uint256",
            },
            {
                internalType: "contract INounsDescriptorMinimal",
                name: "descriptor",
                type: "address",
            },
        ],
        name: "generateSeed",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint48",
                        name: "background",
                        type: "uint48",
                    },
                    {
                        internalType: "uint48",
                        name: "body",
                        type: "uint48",
                    },
                    {
                        internalType: "uint48",
                        name: "accessory",
                        type: "uint48",
                    },
                    {
                        internalType: "uint48",
                        name: "head",
                        type: "uint48",
                    },
                    {
                        internalType: "uint48",
                        name: "glasses",
                        type: "uint48",
                    },
                ],
                internalType: "struct INounsSeeder.Seed",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
class INounsSeeder__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.INounsSeeder__factory = INounsSeeder__factory;
INounsSeeder__factory.abi = _abi;
