"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NounsAuctionHouseProxyAdmin__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "contract TransparentUpgradeableProxy",
                name: "proxy",
                type: "address",
            },
            {
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "changeProxyAdmin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract TransparentUpgradeableProxy",
                name: "proxy",
                type: "address",
            },
        ],
        name: "getProxyAdmin",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract TransparentUpgradeableProxy",
                name: "proxy",
                type: "address",
            },
        ],
        name: "getProxyImplementation",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract TransparentUpgradeableProxy",
                name: "proxy",
                type: "address",
            },
            {
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "upgrade",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract TransparentUpgradeableProxy",
                name: "proxy",
                type: "address",
            },
            {
                internalType: "address",
                name: "implementation",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "upgradeAndCall",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b61071c8061007e6000396000f3fe60806040526004361061007b5760003560e01c80639623609d1161004e5780639623609d1461011157806399a88ec414610124578063f2fde38b14610144578063f3b7dead1461016457600080fd5b8063204e1c7a14610080578063715018a6146100bc5780637eff275e146100d35780638da5cb5b146100f3575b600080fd5b34801561008c57600080fd5b506100a061009b3660046104ed565b610184565b6040516001600160a01b03909116815260200160405180910390f35b3480156100c857600080fd5b506100d1610215565b005b3480156100df57600080fd5b506100d16100ee366004610511565b610254565b3480156100ff57600080fd5b506000546001600160a01b03166100a0565b6100d161011f366004610560565b6102de565b34801561013057600080fd5b506100d161013f366004610511565b61036f565b34801561015057600080fd5b506100d161015f3660046104ed565b6103c7565b34801561017057600080fd5b506100a061017f3660046104ed565b610462565b6000806000836001600160a01b03166040516101aa90635c60da1b60e01b815260040190565b600060405180830381855afa9150503d80600081146101e5576040519150601f19603f3d011682016040523d82523d6000602084013e6101ea565b606091505b5091509150816101f957600080fd5b8080602001905181019061020d9190610636565b949350505050565b6000546001600160a01b031633146102485760405162461bcd60e51b815260040161023f90610653565b60405180910390fd5b6102526000610488565b565b6000546001600160a01b0316331461027e5760405162461bcd60e51b815260040161023f90610653565b6040516308f2839760e41b81526001600160a01b038281166004830152831690638f283970906024015b600060405180830381600087803b1580156102c257600080fd5b505af11580156102d6573d6000803e3d6000fd5b505050505050565b6000546001600160a01b031633146103085760405162461bcd60e51b815260040161023f90610653565b60405163278f794360e11b81526001600160a01b03841690634f1ef2869034906103389086908690600401610688565b6000604051808303818588803b15801561035157600080fd5b505af1158015610365573d6000803e3d6000fd5b5050505050505050565b6000546001600160a01b031633146103995760405162461bcd60e51b815260040161023f90610653565b604051631b2ce7f360e11b81526001600160a01b038281166004830152831690633659cfe6906024016102a8565b6000546001600160a01b031633146103f15760405162461bcd60e51b815260040161023f90610653565b6001600160a01b0381166104565760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161023f565b61045f81610488565b50565b6000806000836001600160a01b03166040516101aa906303e1469160e61b815260040190565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b038116811461045f57600080fd5b6000602082840312156104ff57600080fd5b813561050a816104d8565b9392505050565b6000806040838503121561052457600080fd5b823561052f816104d8565b9150602083013561053f816104d8565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060006060848603121561057557600080fd5b8335610580816104d8565b92506020840135610590816104d8565b9150604084013567ffffffffffffffff808211156105ad57600080fd5b818601915086601f8301126105c157600080fd5b8135818111156105d3576105d361054a565b604051601f8201601f19908116603f011681019083821181831017156105fb576105fb61054a565b8160405282815289602084870101111561061457600080fd5b8260208601602083013760006020848301015280955050505050509250925092565b60006020828403121561064857600080fd5b815161050a816104d8565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60018060a01b038316815260006020604081840152835180604085015260005b818110156106c4578581018301518582016060015282016106a8565b506000606082860101526060601f19601f83011685010192505050939250505056fea2646970667358221220e8c2803ca3b813ff6d4cbf5d9ea03f29c76e1d9db2a187581f320491f0ae72d664736f6c63430008130033";
const isSuperArgs = (xs) => xs.length > 1;
class NounsAuctionHouseProxyAdmin__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.NounsAuctionHouseProxyAdmin__factory = NounsAuctionHouseProxyAdmin__factory;
NounsAuctionHouseProxyAdmin__factory.bytecode = _bytecode;
NounsAuctionHouseProxyAdmin__factory.abi = _abi;
