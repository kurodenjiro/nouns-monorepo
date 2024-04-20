"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NounsDAOV3Votes__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "CanOnlyVoteAgainstDuringObjectionPeriod",
        type: "error",
    },
    {
        inputs: [],
        name: "UnsafeUint16Cast",
        type: "error",
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
                name: "objectionPeriodEndBlock",
                type: "uint256",
            },
        ],
        name: "ProposalObjectionPeriodSet",
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
                indexed: false,
                internalType: "uint256",
                name: "refundAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "refundSent",
                type: "bool",
            },
        ],
        name: "RefundableVote",
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
                indexed: false,
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
        inputs: [],
        name: "BALLOT_TYPEHASH",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "DOMAIN_TYPEHASH",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "MAX_REFUND_BASE_FEE",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "MAX_REFUND_GAS_USED",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "MAX_REFUND_PRIORITY_FEE",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "REFUND_BASE_GAS",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x61180661003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100be5760003560e01c80637b784a491161007b5780637b784a49146101875780638e6a036e146101a757806392a364c9146101c7578063bc4cd084146101e7578063deaaa7cc146101f3578063fbfee8761461021a57600080fd5b8063042bc3de146100c357806306fdde03146100e057806320606b70146101155780633be8ef3f1461013c57806346742c7e1461014557806346aec09d14610167575b600080fd5b6100cd62030d4081565b6040519081526020015b60405180910390f35b610108604051806040016040528060098152602001684e6f756e732044414f60b81b81525081565b6040516100d791906114b8565b6100cd7f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a86681565b6100cd618ca081565b81801561015157600080fd5b506101656101603660046114e1565b610225565b005b81801561017357600080fd5b50610165610182366004611516565b610280565b81801561019357600080fd5b506101656101a23660046115aa565b6102c9565b8180156101b357600080fd5b506101656101c23660046114e1565b610528565b8180156101d357600080fd5b506101656101e2366004611516565b610548565b6100cd642e90edd00081565b6100cd7f150214d74d59b7d1e90c73fc22ef3d991dd0a76b046543d4d80ab92d2a50328f81565b6100cd637735940081565b336000805160206117b1833981519152838361024387858484610588565b6040805193845260ff90921660208401526001600160601b03169082015260806060820181905260009082015260a00160405180910390a2505050565b6102c285858585858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061066f92505050565b5050505050565b60408051808201825260098152684e6f756e732044414f60b81b60209182015281517f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a866818301527fe1dd93b3612547b4bb7c3d429f3df8508d84f5a4f63b5e2e44340b94698e6b3b81840152466060820152306080808301919091528351808303909101815260a0820184528051908301207f150214d74d59b7d1e90c73fc22ef3d991dd0a76b046543d4d80ab92d2a50328f60c083015260e0820189905260ff8816610100808401919091528451808403909101815261012083019094528351939092019290922061190160f01b6101408401526101428301829052610162830181905290916000906101820160408051601f198184030181528282528051602091820120600080855291840180845281905260ff8a169284019290925260608301889052608083018790529092509060019060a0016020604051602081039080840390855afa158015610442573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166104bd5760405162461bcd60e51b815260206004820152602a60248201527f4e6f756e7344414f3a3a63617374566f746542795369673a20696e76616c6964604482015269207369676e617475726560b01b60648201526084015b60405180910390fd5b806001600160a01b03166000805160206117b18339815191528a8a6104e48e868f8f610588565b6040805193845260ff90921660208401526001600160601b03169082015260806060820181905260009082015260a00160405180910390a250505050505050505050565b6105438383836040518060200160405280600081525061066f565b505050565b336000805160206117b1833981519152858561056689858484610588565b8686604051610579959493929190611602565b60405180910390a25050505050565b60008061059586856106d9565b9050600181600a8111156105ab576105ab611652565b036105c4576105bc868587866108db565b915050610667565b600981600a8111156105d8576105d8611652565b0361060a5760ff8316156105ff57604051639aeea66b60e01b815260040160405180910390fd5b6105bc868587610c82565b60405162461bcd60e51b815260206004820152602c60248201527f4e6f756e7344414f3a3a63617374566f7465496e7465726e616c3a20766f746960448201526b1b99c81a5cc818db1bdcd95960a21b60648201526084016104b4565b949350505050565b60005a9050600061068286338787610588565b9050336001600160a01b03166000805160206117b1833981519152868684876040516106b19493929190611668565b60405180910390a26001600160601b038116156106d1576106d182610e02565b505050505050565b6000818360080154101561073b5760405162461bcd60e51b8152602060048201526024808201527f4e6f756e7344414f3a3a73746174653a20696e76616c69642070726f706f73616044820152631b081a5960e21b60648201526084016104b4565b6000828152600b840160205260409020600e810154610100900460ff16156107675760089150506108d5565b600e81015460ff161561077e5760029150506108d5565b601181015468010000000000000000900467ffffffffffffffff1643116107a957600a9150506108d5565b806009015443116107be5760009150506108d5565b80600a015443116107d35760019150506108d5565b6011810154600160801b900467ffffffffffffffff1643116107f95760099150506108d5565b6108038482610ef0565b156108125760039150506108d5565b80600401546000036108285760049150506108d5565b600e81015462010000900460ff16156108455760079150506108d5565b61084f8482610f1c565b6001600160a01b031663c1a287e26040518163ffffffff1660e01b8152600401602060405180830381865afa15801561088c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b091906116a3565b81600401546108bf91906116d2565b42106108cf5760069150506108d5565b60059150505b92915050565b600060028260ff1611156109575760405162461bcd60e51b815260206004820152603f60248201527f4e6f756e7344414f3a3a63617374566f7465447572696e67566f74696e67506560448201527f72696f64496e7465726e616c3a20696e76616c696420766f746520747970650060648201526084016104b4565b6000848152600b8601602090815260408083206001600160a01b0387168452600f8101909252909120805460ff1615610a025760405162461bcd60e51b815260206004820152604160248201527f4e6f756e7344414f3a3a63617374566f7465447572696e67566f74696e67506560448201527f72696f64496e7465726e616c3a20766f74657220616c726561647920766f74656064820152601960fa1b608482015260a4016104b4565b600a8701546000906001600160a01b031663782d6fe187610a248b8b88610f54565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401602060405180830381865afa158015610a6d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a9191906116e5565b905060008560ff16600103610ac2576010890154600a85015463ffffffff90911690610abe90439061170e565b1090505b60008115610ad757610ad48a86610ef0565b90505b8660ff16600003610b0557826001600160601b031685600c0154610afb91906116d2565b600c860155610b5d565b8660ff16600103610b3357826001600160601b031685600b0154610b2991906116d2565b600b860155610b5d565b8660ff16600203610b5d57826001600160601b031685600d0154610b5791906116d2565b600d8601555b818015610b675750805b8015610b8657506011850154600160801b900467ffffffffffffffff16155b8015610b995750610b978a86610ef0565b155b15610c365760108a0154600a860154610bca91610bc59164010000000090910463ffffffff16906116d2565b610f8f565b60118601805467ffffffffffffffff60801b1916600160801b67ffffffffffffffff938416810291909117918290558754604051919092049092168252907f6553d98dd06f98670b24f69f718cdf9c8ec8e1cc42fb58b9c7908731322273479060200160405180910390a25b505081546001600160601b03821662010000026dffffffffffffffffffffffff00001960ff88166101000261ffff19909316929092176001179190911617909155915050949350505050565b6000828152600b8401602090815260408083206001600160a01b0385168452600f81019092528220805460ff1615610d145760405162461bcd60e51b815260206004820152602f60248201527f4e6f756e7344414f3a3a63617374566f7465496e7465726e616c3a20766f746560448201526e1c88185b1c9958591e481d9bdd1959608a1b60648201526084016104b4565b600a8601546000906001600160a01b031663782d6fe186610d368a8a88610f54565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401602060405180830381865afa158015610d7f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610da391906116e5565b825461ff001960ff196001600160601b038416620100008102919091166dffffffffffffffffffffffff00ff1990931692909217600117168455600c850154919250610dee916116d2565b600c909301929092555090505b9392505050565b476000819003610e10575050565b6000610e2148642e90edd000610ffc565b90506000610e353a63773594008401610ffc565b90506000610e4c618ca05a87030162030d40610ffc565b90506000610e5c82840286610ffc565b604051909150600090329083908381818185875af1925050503d8060008114610ea1576040519150601f19603f3d011682016040523d82523d6000602084013e610ea6565b606091505b505060408051848152821515602082015291925032917ffabef36fd46c4c3a6ad676521be5367a4dfdbf3faa68d8e826003b1752d68f4f910160405180910390a250505050505050565b600b810154600c820154600091908111158061066757508254610f14908590611012565b119392505050565b601381015460009060ff1615610f40575060188201546001600160a01b03166108d5565b5060098201546001600160a01b03166108d5565b601983015460009080841080610f68575080155b15610f83575050601181015467ffffffffffffffff16610dfb565b50506009015492915050565b600067ffffffffffffffff821115610ff85760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203660448201526534206269747360d01b60648201526084016104b4565b5090565b600081831061100b5781610dfb565b5090919050565b6000818152600b83016020526040812060108101548203611038576003015490506108d5565b600c8101546010820154601183015461066792919061106290889067ffffffffffffffff16611067565b61137c565b604080516060810182526000808252602082018190529181019190915260006110a88360405180606001604052806040815260200161177160409139611404565b600d85015490915060008190036110ff5760405180606001604052806110d18760070154611434565b61ffff1681526020016110e78760070154611434565b61ffff168152600060209091015292506108d5915050565b63ffffffff8216600d860161111560018461170e565b8154811061112557611125611721565b600091825260209091206002909102015463ffffffff16116111b857600d850161115060018361170e565b8154811061116057611160611721565b6000918252602091829020604080516060810182526002939093029091016001015461ffff8082168452620100008204169383019390935264010000000090920463ffffffff169181019190915292506108d5915050565b8163ffffffff1685600d016000815481106111d5576111d5611721565b600091825260209091206002909102015463ffffffff16111561120a5760405180606001604052806110d18760070154611434565b60008061121860018461170e565b90505b8181111561130e5760006002611231848461170e565b61123b9190611737565b611245908361170e565b9050600088600d01828154811061125e5761125e611721565b60009182526020918290206040805180820182526002909302909101805463ffffffff9081168452825160608101845260019092015461ffff8082168452620100008204168387015264010000000090048116928201929092529282019290925280519092508782169116036112df576020015195506108d5945050505050565b805163ffffffff808816911610156112f957819350611307565b61130460018361170e565b92505b505061121b565b86600d01828154811061132357611323611721565b6000918252602091829020604080516060810182526002939093029091016001015461ffff8082168452620100008204169383019390935264010000000090920463ffffffff1691810191909152979650505050505050565b6000808361138c86612710611759565b6113969190611737565b90506000620f424082856040015163ffffffff166113b49190611759565b6113be9190611737565b9050600081856000015161ffff166113d691906116d2565b905060006113ec866020015161ffff1683610ffc565b90506113f88188611459565b98975050505050505050565b60008163ffffffff84111561142c5760405162461bcd60e51b81526004016104b491906114b8565b509192915050565b600061ffff821115610ff85760405163555abf0160e11b815260040160405180910390fd5b60006127106114688484611759565b610dfb9190611737565b6000815180845260005b818110156114985760208185018101518683018201520161147c565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610dfb6020830184611472565b803560ff811681146114dc57600080fd5b919050565b6000806000606084860312156114f657600080fd5b833592506020840135915061150d604085016114cb565b90509250925092565b60008060008060006080868803121561152e57600080fd5b8535945060208601359350611545604087016114cb565b9250606086013567ffffffffffffffff8082111561156257600080fd5b818801915088601f83011261157657600080fd5b81358181111561158557600080fd5b89602082850101111561159757600080fd5b9699959850939650602001949392505050565b60008060008060008060c087890312156115c357600080fd5b86359550602087013594506115da604088016114cb565b93506115e8606088016114cb565b92506080870135915060a087013590509295509295509295565b85815260ff851660208201526001600160601b038416604082015260806060820152816080820152818360a0830137600081830160a090810191909152601f909201601f19160101949350505050565b634e487b7160e01b600052602160045260246000fd5b84815260ff841660208201526001600160601b03831660408201526080606082015260006116996080830184611472565b9695505050505050565b6000602082840312156116b557600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156108d5576108d56116bc565b6000602082840312156116f757600080fd5b81516001600160601b0381168114610dfb57600080fd5b818103818111156108d5576108d56116bc565b634e487b7160e01b600052603260045260246000fd5b60008261175457634e487b7160e01b600052601260045260246000fd5b500490565b80820281158282048414176108d5576108d56116bc56fe4e6f756e7344414f3a3a67657444796e616d696351756f72756d506172616d7341743a20626c6f636b206e756d62657220657863656564732033322062697473b8e138887d0aa13bab447e82de9d5c1777041ecd21ca36ba824ff1e6c07ddda4a2646970667358221220c3b17fc3a75ad998c335b66d0a28494074b8b20be5acefd676bf6d4ce11bb7d464736f6c63430008130033";
const isSuperArgs = (xs) => xs.length > 1;
class NounsDAOV3Votes__factory extends ethers_1.ContractFactory {
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
exports.NounsDAOV3Votes__factory = NounsDAOV3Votes__factory;
NounsDAOV3Votes__factory.bytecode = _bytecode;
NounsDAOV3Votes__factory.abi = _abi;