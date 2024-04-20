"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NounsDAOEventsFork__factory = void 0;
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
                name: "oldAdmin",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "NewAdmin",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "oldImplementation",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newImplementation",
                type: "address",
            },
        ],
        name: "NewImplementation",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "oldPendingAdmin",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newPendingAdmin",
                type: "address",
            },
        ],
        name: "NewPendingAdmin",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "ProposalCanceled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "proposer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address[]",
                name: "targets",
                type: "address[]",
            },
            {
                indexed: false,
                internalType: "uint256[]",
                name: "values",
                type: "uint256[]",
            },
            {
                indexed: false,
                internalType: "string[]",
                name: "signatures",
                type: "string[]",
            },
            {
                indexed: false,
                internalType: "bytes[]",
                name: "calldatas",
                type: "bytes[]",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "startBlock",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "endBlock",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "string",
                name: "description",
                type: "string",
            },
        ],
        name: "ProposalCreated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "proposer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address[]",
                name: "targets",
                type: "address[]",
            },
            {
                indexed: false,
                internalType: "uint256[]",
                name: "values",
                type: "uint256[]",
            },
            {
                indexed: false,
                internalType: "string[]",
                name: "signatures",
                type: "string[]",
            },
            {
                indexed: false,
                internalType: "bytes[]",
                name: "calldatas",
                type: "bytes[]",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "startBlock",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "endBlock",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "proposalThreshold",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "quorumVotes",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "string",
                name: "description",
                type: "string",
            },
        ],
        name: "ProposalCreatedWithRequirements",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "ProposalExecuted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "eta",
                type: "uint256",
            },
        ],
        name: "ProposalQueued",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "oldProposalThresholdBPS",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newProposalThresholdBPS",
                type: "uint256",
            },
        ],
        name: "ProposalThresholdBPSSet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "oldQuorumVotesBPS",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newQuorumVotesBPS",
                type: "uint256",
            },
        ],
        name: "QuorumVotesBPSSet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "voter",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "proposalId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint8",
                name: "support",
                type: "uint8",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "votes",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "string",
                name: "reason",
                type: "string",
            },
        ],
        name: "VoteCast",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "oldVotingDelay",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newVotingDelay",
                type: "uint256",
            },
        ],
        name: "VotingDelaySet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "oldVotingPeriod",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newVotingPeriod",
                type: "uint256",
            },
        ],
        name: "VotingPeriodSet",
        type: "event",
    },
];
const _bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220ad65d77c108c2e7728dc2a4569125da417f939b2bde1ef6f06bd237c1a8cc10564736f6c63430008130033";
const isSuperArgs = (xs) => xs.length > 1;
class NounsDAOEventsFork__factory extends ethers_1.ContractFactory {
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
exports.NounsDAOEventsFork__factory = NounsDAOEventsFork__factory;
NounsDAOEventsFork__factory.bytecode = _bytecode;
NounsDAOEventsFork__factory.abi = _abi;