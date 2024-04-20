import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NounsDescriptor, NounsDescriptorInterface } from "../../contracts/NounsDescriptor";
declare type NounsDescriptorConstructorParams = [linkLibraryAddresses: NounsDescriptorLibraryAddresses, signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NounsDescriptor__factory extends ContractFactory {
    constructor(...args: NounsDescriptorConstructorParams);
    static linkBytecode(linkLibraryAddresses: NounsDescriptorLibraryAddresses): string;
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NounsDescriptor>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NounsDescriptor;
    connect(signer: Signer): NounsDescriptor__factory;
    static readonly bytecode = "0x60806040526000805460ff60a81b1916600160a81b17905534801561002357600080fd5b5061002d33610032565b610082565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b612269806100916000396000f3fe608060405234801561001057600080fd5b506004361061021c5760003560e01c8063715018a6116101255780639a796205116100ad578063ce2f4f531161007c578063ce2f4f531461045c578063dfe8478b14610470578063eba8180614610478578063f2fde38b14610480578063f9da88631461049357600080fd5b80639a7962051461041b578063a51e41241461042e578063b982d1b914610441578063cc2aa0911461045457600080fd5b8063839644da116100f4578063839644da146103b457806387db11bd146103c75780638a85a1e8146103da5780638da5cb5b146103ed57806391b7916a1461040857600080fd5b8063715018a614610362578063773b97711461036a5780637a34aad31461038e5780637ca94210146103a157600080fd5b80634531c0a8116101a85780635a503f13116101775780635a503f131461030e5780635e70664c14610321578063615bda1014610334578063638ac270146103475780636c0360eb1461035a57600080fd5b80634531c0a8146102d85780634daebac2146102e057806355f804b3146102e8578063598fa9da146102fb57600080fd5b80632a1d0769116101ef5780632a1d0769146102855780632ea043001461028d5780633cfdafd3146102a05780634479cef2146102b357806344cee73c146102c557600080fd5b80630475d8631461022157806304bde4dd1461023657806317b552ab1461025f5780632715c90e14610272575b600080fd5b61023461022f366004611849565b6104a6565b005b61024961024436600461188a565b610551565b60405161025691906118f3565b60405180910390f35b61023461026d366004611947565b6105fd565b610234610280366004611947565b61065f565b6102346106bd565b61024961029b366004611a6d565b61074d565b6102496102ae366004611a89565b6108a7565b6007545b604051908152602001610256565b6102496102d336600461188a565b610901565b6003546102b7565b6005546102b7565b6102346102f6366004611947565b610911565b610249610309366004611ac7565b610986565b61024961031c36600461188a565b6109be565b61023461032f366004611947565b6109ce565b610234610342366004611947565b610a2c565b610249610355366004611a89565b610a8a565b610249610af6565b610234610b03565b60005461037e90600160a01b900460ff1681565b6040519015158152602001610256565b61023461039c366004611849565b610b39565b6102496103af36600461188a565b610bd6565b6102346103c2366004611af1565b610be6565b6102496103d5366004611bc0565b610ca0565b6102346103e8366004611849565b610e08565b6000546040516001600160a01b039091168152602001610256565b610234610416366004611849565b610ea5565b610234610429366004611947565b610f42565b61023461043c366004611849565b610fa0565b61024961044f36600461188a565b61103d565b6006546102b7565b60005461037e90600160a81b900460ff1681565b61023461104d565b6004546102b7565b61023461048e366004611c34565b6110cd565b6102346104a1366004611c5d565b611168565b6000546001600160a01b031633146104d95760405162461bcd60e51b81526004016104d090611ca2565b60405180910390fd5b600054600160a01b900460ff16156105035760405162461bcd60e51b81526004016104d090611cd7565b60005b8181101561054c5761053a83838381811061052357610523611d01565b90506020028101906105359190611d17565b6111cf565b8061054481611d73565b915050610506565b505050565b6003818154811061056157600080fd5b90600052602060002001600091509050805461057c90611d8c565b80601f01602080910402602001604051908101604052809291908181526020018280546105a890611d8c565b80156105f55780601f106105ca576101008083540402835291602001916105f5565b820191906000526020600020905b8154815290600101906020018083116105d857829003601f168201915b505050505081565b6000546001600160a01b031633146106275760405162461bcd60e51b81526004016104d090611ca2565b600054600160a01b900460ff16156106515760405162461bcd60e51b81526004016104d090611cd7565b61065b82826111cf565b5050565b6000546001600160a01b031633146106895760405162461bcd60e51b81526004016104d090611ca2565b600054600160a01b900460ff16156106b35760405162461bcd60e51b81526004016104d090611cd7565b61065b828261120c565b6000546001600160a01b031633146106e75760405162461bcd60e51b81526004016104d090611ca2565b600054600160a01b900460ff16156107115760405162461bcd60e51b81526004016104d090611cd7565b6000805460ff60a01b1916600160a01b1781556040517f1680ee6d421f70ed6030d2fc4fcb50217a5dd617858d56562b119eca59172e579190a1565b60606000604051806040016040528061076585611249565b81526020016003856000015165ffffffffffff168154811061078957610789611d01565b90600052602060002001805461079e90611d8c565b80601f01602080910402602001604051908101604052809291908181526020018280546107ca90611d8c565b80156108175780601f106107ec57610100808354040283529160200191610817565b820191906000526020600020905b8154815290600101906020018083116107fa57829003601f168201915b5050505050815250905073__$e1d8844a0810dc0e87a665b1f2b5fa7c69$__6366b8c2418260026040518363ffffffff1660e01b815260040161085b929190611e1e565b600060405180830381865af4158015610878573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526108a09190810190611e67565b9392505050565b600054606090600160a81b900460ff16156108cd576108c68383610a8a565b90506108fb565b60016108d8846115c2565b6040516020016108e9929190611ed4565b60405160208183030381529060405290505b92915050565b6004818154811061056157600080fd5b6000546001600160a01b0316331461093b5760405162461bcd60e51b81526004016104d090611ca2565b6001610948828483611fa9565b507f6741b2fc379fad678116fe3d4d4b9a1a184ab53ba36b86ad0fa66340b1ab41ad828260405161097a929190612069565b60405180910390a15050565b600260205281600052604060002081815481106109a257600080fd5b9060005260206000200160009150915050805461057c90611d8c565b6006818154811061056157600080fd5b6000546001600160a01b031633146109f85760405162461bcd60e51b81526004016104d090611ca2565b600054600160a01b900460ff1615610a225760405162461bcd60e51b81526004016104d090611cd7565b61065b82826116ca565b6000546001600160a01b03163314610a565760405162461bcd60e51b81526004016104d090611ca2565b600054600160a01b900460ff1615610a805760405162461bcd60e51b81526004016104d090611cd7565b61065b8282611707565b60606000610a97846115c2565b9050600081604051602001610aac9190612098565b6040516020818303038152906040529050600082604051602001610ad091906120c5565b6040516020818303038152906040529050610aec828287610ca0565b9695505050505050565b6001805461057c90611d8c565b6000546001600160a01b03163314610b2d5760405162461bcd60e51b81526004016104d090611ca2565b610b376000611744565b565b6000546001600160a01b03163314610b635760405162461bcd60e51b81526004016104d090611ca2565b600054600160a01b900460ff1615610b8d5760405162461bcd60e51b81526004016104d090611cd7565b60005b8181101561054c57610bc4838383818110610bad57610bad611d01565b9050602002810190610bbf9190611d17565b611794565b80610bce81611d73565b915050610b90565b6005818154811061056157600080fd5b6000546001600160a01b03163314610c105760405162461bcd60e51b81526004016104d090611ca2565b60ff831660009081526002602052604090205461010090610c32908390612119565b1115610c505760405162461bcd60e51b81526004016104d09061212c565b60005b81811015610c9a57610c8884848484818110610c7157610c71611d01565b9050602002810190610c839190611d17565b6117d1565b80610c9281611d73565b915050610c53565b50505050565b606060006040518060800160405280868152602001858152602001610cc485611249565b81526020016003856000015165ffffffffffff1681548110610ce857610ce8611d01565b906000526020600020018054610cfd90611d8c565b80601f0160208091040260200160405190810160405280929190818152602001828054610d2990611d8c565b8015610d765780601f10610d4b57610100808354040283529160200191610d76565b820191906000526020600020905b815481529060010190602001808311610d5957829003601f168201915b5050505050815250905073__$e1d8844a0810dc0e87a665b1f2b5fa7c69$__63bf1deae28260026040518363ffffffff1660e01b8152600401610dba92919061216d565b600060405180830381865af4158015610dd7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610dff9190810190611e67565b95945050505050565b6000546001600160a01b03163314610e325760405162461bcd60e51b81526004016104d090611ca2565b600054600160a01b900460ff1615610e5c5760405162461bcd60e51b81526004016104d090611cd7565b60005b8181101561054c57610e93838383818110610e7c57610e7c611d01565b9050602002810190610e8e9190611d17565b61120c565b80610e9d81611d73565b915050610e5f565b6000546001600160a01b03163314610ecf5760405162461bcd60e51b81526004016104d090611ca2565b600054600160a01b900460ff1615610ef95760405162461bcd60e51b81526004016104d090611cd7565b60005b8181101561054c57610f30838383818110610f1957610f19611d01565b9050602002810190610f2b9190611d17565b6116ca565b80610f3a81611d73565b915050610efc565b6000546001600160a01b03163314610f6c5760405162461bcd60e51b81526004016104d090611ca2565b600054600160a01b900460ff1615610f965760405162461bcd60e51b81526004016104d090611cd7565b61065b8282611794565b6000546001600160a01b03163314610fca5760405162461bcd60e51b81526004016104d090611ca2565b600054600160a01b900460ff1615610ff45760405162461bcd60e51b81526004016104d090611cd7565b60005b8181101561054c5761102b83838381811061101457611014611d01565b90506020028101906110269190611d17565b611707565b8061103581611d73565b915050610ff7565b6007818154811061056157600080fd5b6000546001600160a01b031633146110775760405162461bcd60e51b81526004016104d090611ca2565b6000805460ff60a81b198116600160a81b9182900460ff1615918202179091556040518181527f360c3d72ee193226275b842f85231c259c934e85459fed80fa68e502ffa9dbde9060200160405180910390a150565b6000546001600160a01b031633146110f75760405162461bcd60e51b81526004016104d090611ca2565b6001600160a01b03811661115c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104d0565b61116581611744565b50565b6000546001600160a01b031633146111925760405162461bcd60e51b81526004016104d090611ca2565b60ff83811660009081526002602052604090205411156111c45760405162461bcd60e51b81526004016104d09061212c565b61054c8383836117d1565b600580546001810182556000919091527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db00161054c828483611fa9565b600480546001810182556000919091527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0161054c828483611fa9565b60408051600480825260a0820190925260609160009190816020015b60608152602001906001900390816112655790505090506004836020015165ffffffffffff168154811061129b5761129b611d01565b9060005260206000200180546112b090611d8c565b80601f01602080910402602001604051908101604052809291908181526020018280546112dc90611d8c565b80156113295780601f106112fe57610100808354040283529160200191611329565b820191906000526020600020905b81548152906001019060200180831161130c57829003601f168201915b50505050508160008151811061134157611341611d01565b60200260200101819052506005836040015165ffffffffffff168154811061136b5761136b611d01565b90600052602060002001805461138090611d8c565b80601f01602080910402602001604051908101604052809291908181526020018280546113ac90611d8c565b80156113f95780601f106113ce576101008083540402835291602001916113f9565b820191906000526020600020905b8154815290600101906020018083116113dc57829003601f168201915b50505050508160018151811061141157611411611d01565b60200260200101819052506006836060015165ffffffffffff168154811061143b5761143b611d01565b90600052602060002001805461145090611d8c565b80601f016020809104026020016040519081016040528092919081815260200182805461147c90611d8c565b80156114c95780601f1061149e576101008083540402835291602001916114c9565b820191906000526020600020905b8154815290600101906020018083116114ac57829003601f168201915b5050505050816002815181106114e1576114e1611d01565b60200260200101819052506007836080015165ffffffffffff168154811061150b5761150b611d01565b90600052602060002001805461152090611d8c565b80601f016020809104026020016040519081016040528092919081815260200182805461154c90611d8c565b80156115995780601f1061156e57610100808354040283529160200191611599565b820191906000526020600020905b81548152906001019060200180831161157c57829003601f168201915b5050505050816003815181106115b1576115b1611d01565b602090810291909101015292915050565b6060816000036115e95750506040805180820190915260018152600360fc1b602082015290565b8160005b811561161357806115fd81611d73565b915061160c9050600a836121f8565b91506115ed565b6000816001600160401b0381111561162d5761162d61197c565b6040519080825280601f01601f191660200182016040528015611657576020820181803683370190505b5090505b84156116c25761166c60018361220c565b9150611679600a8661221f565b611684906030612119565b60f81b81838151811061169957611699611d01565b60200101906001600160f81b031916908160001a9053506116bb600a866121f8565b945061165b565b949350505050565b600380546001810182556000919091527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0161054c828483611fa9565b600780546001810182556000919091527fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c6880161054c828483611fa9565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600680546001810182556000919091527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f0161054c828483611fa9565b60ff8316600090815260026020908152604082208054600181018255908352912001610c9a828483611fa9565b60008083601f84011261181057600080fd5b5081356001600160401b0381111561182757600080fd5b6020830191508360208260051b850101111561184257600080fd5b9250929050565b6000806020838503121561185c57600080fd5b82356001600160401b0381111561187257600080fd5b61187e858286016117fe565b90969095509350505050565b60006020828403121561189c57600080fd5b5035919050565b60005b838110156118be5781810151838201526020016118a6565b50506000910152565b600081518084526118df8160208601602086016118a3565b601f01601f19169290920160200192915050565b6020815260006108a060208301846118c7565b60008083601f84011261191857600080fd5b5081356001600160401b0381111561192f57600080fd5b60208301915083602082850101111561184257600080fd5b6000806020838503121561195a57600080fd5b82356001600160401b0381111561197057600080fd5b61187e85828601611906565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156119ba576119ba61197c565b604052919050565b803565ffffffffffff811681146119d857600080fd5b919050565b600060a082840312156119ef57600080fd5b60405160a081018181106001600160401b0382111715611a1157611a1161197c565b604052905080611a20836119c2565b8152611a2e602084016119c2565b6020820152611a3f604084016119c2565b6040820152611a50606084016119c2565b6060820152611a61608084016119c2565b60808201525092915050565b600060a08284031215611a7f57600080fd5b6108a083836119dd565b60008060c08385031215611a9c57600080fd5b82359150611aad84602085016119dd565b90509250929050565b803560ff811681146119d857600080fd5b60008060408385031215611ada57600080fd5b611ae383611ab6565b946020939093013593505050565b600080600060408486031215611b0657600080fd5b611b0f84611ab6565b925060208401356001600160401b03811115611b2a57600080fd5b611b36868287016117fe565b9497909650939450505050565b60006001600160401b03821115611b5c57611b5c61197c565b50601f01601f191660200190565b600082601f830112611b7b57600080fd5b8135611b8e611b8982611b43565b611992565b818152846020838601011115611ba357600080fd5b816020850160208301376000918101602001919091529392505050565b600080600060e08486031215611bd557600080fd5b83356001600160401b0380821115611bec57600080fd5b611bf887838801611b6a565b94506020860135915080821115611c0e57600080fd5b50611c1b86828701611b6a565b925050611c2b85604086016119dd565b90509250925092565b600060208284031215611c4657600080fd5b81356001600160a01b03811681146108a057600080fd5b600080600060408486031215611c7257600080fd5b611c7b84611ab6565b925060208401356001600160401b03811115611c9657600080fd5b611b3686828701611906565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526010908201526f14185c9d1cc8185c99481b1bd8dad95960821b604082015260600190565b634e487b7160e01b600052603260045260246000fd5b6000808335601e19843603018112611d2e57600080fd5b8301803591506001600160401b03821115611d4857600080fd5b60200191503681900382131561184257600080fd5b634e487b7160e01b600052601160045260246000fd5b600060018201611d8557611d85611d5d565b5060010190565b600181811c90821680611da057607f821691505b602082108103611dc057634e487b7160e01b600052602260045260246000fd5b50919050565b600082825180855260208086019550808260051b84010181860160005b84811015611e1157601f19868403018952611dff8383516118c7565b98840198925090830190600101611de3565b5090979650505050505050565b6040815260008351604080840152611e396080840182611dc6565b90506020850151603f19848303016060850152611e5682826118c7565b925050508260208301529392505050565b600060208284031215611e7957600080fd5b81516001600160401b03811115611e8f57600080fd5b8201601f81018413611ea057600080fd5b8051611eae611b8982611b43565b818152856020838501011115611ec357600080fd5b610dff8260208301602086016118a3565b6000808454611ee281611d8c565b60018281168015611efa5760018114611f0f57611f3e565b60ff1984168752821515830287019450611f3e565b8860005260208060002060005b85811015611f355781548a820152908401908201611f1c565b50505082870194505b505050508351611f528183602088016118a3565b01949350505050565b601f82111561054c57600081815260208120601f850160051c81016020861015611f825750805b601f850160051c820191505b81811015611fa157828155600101611f8e565b505050505050565b6001600160401b03831115611fc057611fc061197c565b611fd483611fce8354611d8c565b83611f5b565b6000601f8411600181146120085760008515611ff05750838201355b600019600387901b1c1916600186901b178355612062565b600083815260209020601f19861690835b828110156120395786850135825560209485019460019092019101612019565b50868210156120565760001960f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b6402737bab7160dd1b8152600082516120b88160058501602087016118a3565b9190910160050192915050565b6402737bab7160dd1b8152600082516120e58160058501602087016118a3565b7f2069732061206d656d626572206f6620746865204e6f756e732044414f0000006005939091019283015250602201919050565b808201808211156108fb576108fb611d5d565b60208082526021908201527f50616c65747465732063616e206f6e6c7920686f6c642032353620636f6c6f726040820152607360f81b606082015260800190565b60408152600083516080604084015261218960c08401826118c7565b90506020850151603f19808584030160608601526121a783836118c7565b925060408701519150808584030160808601526121c48383611dc6565b925060608701519150808584030160a086015250611e5682826118c7565b634e487b7160e01b600052601260045260246000fd5b600082612207576122076121e2565b500490565b818103818111156108fb576108fb611d5d565b60008261222e5761222e6121e2565b50069056fea2646970667358221220fe64e20879e140d417d8607f63b81429bbdea0fe86983ef94ca8b26a99e38b9164736f6c63430008130033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: ({
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
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): NounsDescriptorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NounsDescriptor;
}
export interface NounsDescriptorLibraryAddresses {
    ["contracts/libs/NFTDescriptor.sol:NFTDescriptor"]: string;
}
export {};
