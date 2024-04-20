import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NFTDescriptorV2, NFTDescriptorV2Interface } from "../../../contracts/libs/NFTDescriptorV2";
declare type NFTDescriptorV2ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NFTDescriptorV2__factory extends ContractFactory {
    constructor(...args: NFTDescriptorV2ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NFTDescriptorV2>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NFTDescriptorV2;
    connect(signer: Signer): NFTDescriptorV2__factory;
    static readonly bytecode = "0x610a0761003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c806322cc1ad61461004557806392ba0e901461006e575b600080fd5b610058610053366004610516565b610081565b604051610065919061060a565b60405180910390f35b61005861007c36600461061d565b610105565b60606100fc836001600160a01b0316635ea01e63846040518263ffffffff1660e01b81526004016100b29190610709565b600060405180830381865afa1580156100cf573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526100f791908101906107b5565b61018a565b90505b92915050565b6060600061012f846040518060400160405280866060015181526020018660400151815250610081565b83516020808601516040519394506101629361014e9392869101610823565b60405160208183030381529060405261018a565b60405160200161017291906108ea565b60405160208183030381529060405291505092915050565b606081516000036101a957505060408051602081019091526000815290565b600060405180606001604052806040815260200161099260409139905060006003845160026101d89190610945565b6101e29190610958565b6101ed90600461097a565b905060006101fc826020610945565b67ffffffffffffffff8111156102145761021461030b565b6040519080825280601f01601f19166020018201604052801561023e576020820181803683370190505b509050818152600183018586518101602084015b818310156102aa576003830192508251603f8160121c168501518253600182019150603f81600c1c168501518253600182019150603f8160061c168501518253600182019150603f8116850151825350600101610252565b6003895106600181146102c457600281146102d5576102e1565b613d3d60f01b6001198301526102e1565b603d60f81b6000198301525b509398975050505050505050565b80356001600160a01b038116811461030657600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156103445761034461030b565b60405290565b6040516080810167ffffffffffffffff811182821017156103445761034461030b565b604051601f8201601f1916810167ffffffffffffffff811182821017156103965761039661030b565b604052919050565b600067ffffffffffffffff8211156103b8576103b861030b565b50601f01601f191660200190565b600082601f8301126103d757600080fd5b81356103ea6103e58261039e565b61036d565b8181528460208386010111156103ff57600080fd5b816020850160208301376000918101602001919091529392505050565b600082601f83011261042d57600080fd5b8135602067ffffffffffffffff8083111561044a5761044a61030b565b8260051b61045983820161036d565b938452858101830193838101908886111561047357600080fd5b84880192505b8583101561050a578235848111156104915760008081fd5b88016040818b03601f19018113156104a95760008081fd5b6104b1610321565b87830135878111156104c35760008081fd5b6104d18d8a838701016103c6565b8252509082013590868211156104e75760008081fd5b6104f58c89848601016103c6565b81890152845250509184019190840190610479565b98975050505050505050565b6000806040838503121561052957600080fd5b610532836102ef565b9150602083013567ffffffffffffffff8082111561054f57600080fd5b908401906040828703121561056357600080fd5b61056b610321565b82358281111561057a57600080fd5b6105868882860161041c565b82525060208301358281111561059b57600080fd5b6105a7888286016103c6565b6020830152508093505050509250929050565b60005b838110156105d55781810151838201526020016105bd565b50506000910152565b600081518084526105f68160208601602086016105ba565b601f01601f19169290920160200192915050565b6020815260006100fc60208301846105de565b6000806040838503121561063057600080fd5b610639836102ef565b9150602083013567ffffffffffffffff8082111561065657600080fd5b908401906080828703121561066a57600080fd5b61067261034a565b82358281111561068157600080fd5b61068d888286016103c6565b8252506020830135828111156106a257600080fd5b6106ae888286016103c6565b6020830152506040830135828111156106c657600080fd5b6106d2888286016103c6565b6040830152506060830135828111156106ea57600080fd5b6106f68882860161041c565b6060830152508093505050509250929050565b600060208083526060830184516040808487015282825180855260808801915060808160051b8901019450858401935060005b8181101561078c57888603607f1901835284518051858852610760868901826105de565b91890151888303898b015291905061077881836105de565b97505050938601939186019160010161073c565b50505092860151858303601f190193860193909352506107ac81836105de565b95945050505050565b6000602082840312156107c757600080fd5b815167ffffffffffffffff8111156107de57600080fd5b8201601f810184136107ef57600080fd5b80516107fd6103e58261039e565b81815285602083850101111561081257600080fd5b6107ac8260208301602086016105ba565b683d913730b6b2911d1160b91b815283516000906108488160098501602089016105ba565b71111610113232b9b1b934b83a34b7b7111d1160711b600991840191820152845161087a81601b8401602089016105ba565b6c1116101134b6b0b3b2911d101160991b601b92909101918201527f646174613a696d6167652f7376672b786d6c3b6261736536342c000000000000602882015283516108ce8160428401602088016105ba565b61227d60f01b6042929091019182015260440195945050505050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c00000081526000825161092281601d8501602087016105ba565b91909101601d0192915050565b634e487b7160e01b600052601160045260246000fd5b808201808211156100ff576100ff61092f565b60008261097557634e487b7160e01b600052601260045260246000fd5b500490565b80820281158282048414176100ff576100ff61092f56fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa26469706673582212209b26e914ed794c9298d1930e1bbd3bab17cbedec4c05256cf7bd473bfc87148064736f6c63430008130033";
    static readonly abi: {
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): NFTDescriptorV2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): NFTDescriptorV2;
}
export {};
