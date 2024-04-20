import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NounsDAOV3Admin, NounsDAOV3AdminInterface } from "../../../contracts/governance/NounsDAOV3Admin";
declare type NounsDAOV3AdminConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NounsDAOV3Admin__factory extends ContractFactory {
    constructor(...args: NounsDAOV3AdminConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NounsDAOV3Admin>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NounsDAOV3Admin;
    connect(signer: Signer): NounsDAOV3Admin__factory;
    static readonly bytecode = "0x6123d861003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106102265760003560e01c806393c5f2de1161012f578063cbff4a13116100b7578063e240e6e011610086578063e240e6e014610547578063e7951bb914610567578063ee18655914610523578063f2d0e3aa14610570578063fd22b60a1461053d57600080fd5b8063cbff4a1314610523578063ccfa51c91461052c578063db725e1714610534578063dfcda1ef1461053d57600080fd5b8063a79aaf27116100fe578063a79aaf27146104a3578063adb83557146104c3578063aea44076146104e3578063bd43440714610503578063c82fbd081461035157600080fd5b806393c5f2de14610439578063a1ef30a114610459578063a267a3d114610479578063a77238a51461048357600080fd5b80634762cea1116101b257806380ffd06b1161018157806380ffd06b146103995780638474893a146103b9578063850da8bf146103d957806385a38d34146103f9578063931938d91461041957600080fd5b80634762cea11461033157806351e313e01461035157806354afee21146103595780635c9776491461037957600080fd5b806326e6dcb0116101f957806326e6dcb0146102a957806327126e67146102b257806327b5eff5146102bc5780632a38c7b1146102dc5780633fba3595146102fc57600080fd5b806302d548bf1461022b578063117f658d1461024d5780631e7b5d3a1461026d57806325b40fcc14610289575b600080fd5b81801561023757600080fd5b5061024b610246366004611fd4565b610590565b005b81801561025957600080fd5b5061024b610268366004612000565b61061f565b6102766103e881565b6040519081526020015b60405180910390f35b81801561029557600080fd5b5061024b6102a4366004612000565b610747565b61027661177081565b6102766212750081565b8180156102c857600080fd5b5061024b6102d736600461203f565b610869565b8180156102e857600080fd5b5061024b6102f736600461208c565b610a46565b81801561030857600080fd5b5061031c610317366004612000565b610be7565b60408051928352901515602083015201610280565b81801561033d57600080fd5b5061024b61034c3660046120af565b610cab565b610276600181565b81801561036557600080fd5b5061024b610374366004611fd4565b610d34565b81801561038557600080fd5b5061024b61039436600461212e565b610db5565b8180156103a557600080fd5b5061024b6103b436600461208c565b610e5e565b8180156103c557600080fd5b5061024b6103d4366004612170565b611004565b8180156103e557600080fd5b5061024b6103f4366004611fd4565b6110bf565b81801561040557600080fd5b5061024b610414366004612170565b61115a565b81801561042557600080fd5b5061024b610434366004612170565b6111dc565b81801561044557600080fd5b5061024b610454366004612193565b61129f565b81801561046557600080fd5b5061024b610474366004612000565b611312565b6102766202a30081565b81801561048f57600080fd5b5061024b61049e366004611fd4565b6113e4565b8180156104af57600080fd5b5061024b6104be366004612193565b611491565b8180156104cf57600080fd5b5061024b6104de366004612193565b611575565b8180156104ef57600080fd5b5061024b6104fe366004612193565b61165c565b81801561050f57600080fd5b5061024b61051e366004612170565b611717565b61027661c4e081565b61027660c881565b610276611c2081565b610276620189c081565b81801561055357600080fd5b5061024b610562366004612000565b6117a9565b6102766107d081565b81801561057c57600080fd5b5061024b61058b366004612193565b61184c565b815482906001600160a01b031633146105bc57604051633057182d60e21b815260040160405180910390fd5b6011830180546001600160a01b038481166001600160a01b03198316179092556040519116907f5f317d96631add203c522c8ecc74fd6144c936367e2205ac922331fb12b670b49061061190839086906121b5565b60405180910390a150505050565b60038101546001600160a01b0316331461068e5760405162461bcd60e51b815260206004820152602560248201527f4e6f756e7344414f3a3a5f6275726e5665746f506f7765723a207665746f6572604482015264206f6e6c7960d81b60648201526084015b60405180910390fd5b60038101546040517fc5644f3588a066b15dcf6b636b74aadca57cfaccf608d9de7d8786364b7a8d02916106d0916001600160a01b03909116906000906121b5565b60405180910390a16003810180546001600160a01b0319169055600e8101546040517f7ad92e57a52c4e3e83ba624622b14e3a5efa0160dd6f9a7975c43ea66bad79ea9161072c916001600160a01b03909116906000906121b5565b60405180910390a1600e0180546001600160a01b0319169055565b60018101546001600160a01b03163314801561076257503315155b6107c15760405162461bcd60e51b815260206004820152602a60248201527f4e6f756e7344414f3a3a5f61636365707441646d696e3a2070656e64696e672060448201526961646d696e206f6e6c7960b01b6064820152608401610685565b80546001820180546001600160a01b038082166001600160a01b0319808616821787559092169092556040519190921691907ff9ffabca9c8276e99321725bcb43fb076a6c66a54b7f21c4e8146d8519b417dc9061082290849084906121b5565b60405180910390a17fca4f2f25d0898edd99413412fb94012f9e54ec8142f9b093e7720646a95b16a981600060405161085c9291906121b5565b60405180910390a1505050565b835484906001600160a01b0316331461089557604051633057182d60e21b815260040160405180910390fd5b60c88461ffff1610806108ad57506107d08461ffff16115b156108cb5760405163db8a74af60e01b815260040160405180910390fd5b6117708361ffff1611156108f25760405163143abf4360e21b815260040160405180910390fd5b8261ffff168461ffff16111561091b576040516362c564d560e11b815260040160405180910390fd5b6000610927864361193d565b9050600060405180606001604052808761ffff1681526020018661ffff1681526020018563ffffffff1681525090506109608782611c54565b815181516040805161ffff93841681529290911660208301527ffaeebe30d875e399189096ea49fea81bd41fe6dfc86ad3550639063219e60778910160405180910390a17f4bfb1235074b38f02e5cf8ba90f535905417c196a12654f65ee0584512d70642826020015182602001516040516109ed92919061ffff92831681529116602082015260400190565b60405180910390a160408083015182820151825163ffffffff9283168152911660208201527f5e3adb1066359dafa23c629f245d93543856115700821dcb4debc416f393c469910160405180910390a150505050505050565b815482906001600160a01b03163314610a7257604051633057182d60e21b815260040160405180910390fd5b6000610a7e844361193d565b90506117708361ffff161115610afc5760405162461bcd60e51b815260206004820152603d60248201527f4e6f756e7344414f3a3a5f7365744d617851756f72756d566f7465734250533a60448201527f20696e76616c6964206d61782071756f72756d20766f746573206270730000006064820152608401610685565b805161ffff80851691161115610b895760405162461bcd60e51b815260206004820152604660248201527f4e6f756e7344414f3a3a5f7365744d617851756f72756d566f7465734250533a60448201527f206d696e2071756f72756d20766f7465732062707320677265617465722074686064820152650c2dc40dac2f60d31b608482015260a401610685565b60208101805161ffff8516909152610ba18583611c54565b6040805161ffff8084168252861660208201527f4bfb1235074b38f02e5cf8ba90f535905417c196a12654f65ee0584512d7064291015b60405180910390a15050505050565b8054600090819083906001600160a01b03163314610c1857604051633057182d60e21b815260040160405180910390fd5b6040514790600090339083908381818185875af1925050503d8060008114610c5c576040519150601f19603f3d011682016040523d82523d6000602084013e610c61565b606091505b50506040805184815282151560208201529192507f2aeb20ed0ead73e7bc740154a0b979547bc9e00691d84a700e6454ada9fe4679910160405180910390a1909350915050915091565b825483906001600160a01b03163314610cd757604051633057182d60e21b815260040160405180910390fd5b610ce18383611e0e565b7f6158953ac4c84a0a8642793ade32098d1ecd12702db9ce2eb7c72c4463a8fb07846012018484604051610d17939291906121cf565b60405180910390a1610d2d601285018484611f49565b5050505050565b815482906001600160a01b03163314610d6057604051633057182d60e21b815260040160405180910390fd5b6001830180546001600160a01b038481166001600160a01b03198316179092556040519116907fca4f2f25d0898edd99413412fb94012f9e54ec8142f9b093e7720646a95b16a99061061190839086906121b5565b835484906001600160a01b03163314610de157604051633057182d60e21b815260040160405180910390fd5b6009850180546001600160a01b038681166001600160a01b03199283168117909355601888018054878316908416811790915588549186169190921681178855604080519384526020840192909252908201527f13c01549e11ee7e3b2c89b08a2fd55875d85aaf1aa217bf18d1ab0f88f959d2490606001610bd8565b815482906001600160a01b03163314610e8a57604051633057182d60e21b815260040160405180910390fd5b6000610e96844361193d565b905060c88361ffff1610158015610eb357506107d08361ffff1611155b610f255760405162461bcd60e51b815260206004820152603d60248201527f4e6f756e7344414f3a3a5f7365744d696e51756f72756d566f7465734250533a60448201527f20696e76616c6964206d696e2071756f72756d20766f746573206270730000006064820152608401610685565b806020015161ffff168361ffff161115610fb65760405162461bcd60e51b815260206004820152604660248201527f4e6f756e7344414f3a3a5f7365744d696e51756f72756d566f7465734250533a60448201527f206d696e2071756f72756d20766f7465732062707320677265617465722074686064820152650c2dc40dac2f60d31b608482015260a401610685565b805161ffff84168252610fc98583611c54565b6040805161ffff8084168252861660208201527ffaeebe30d875e399189096ea49fea81bd41fe6dfc86ad3550639063219e607789101610bd8565b815482906001600160a01b0316331461103057604051633057182d60e21b815260040160405180910390fd5b61c4e08263ffffffff1611156110595760405163024c1d4b60e31b815260040160405180910390fd5b60108301805463ffffffff84811664010000000081810267ffffffff000000001985161790945560408051949093049091168084526020840191909152917ff860ba522a6e820ac6577b201d9314604a19ad2e264913d8361821e3659568db9101610611565b60038201546001600160a01b031633146110ec57604051631387214760e01b815260040160405180910390fd5b600e8201546040517f7ad92e57a52c4e3e83ba624622b14e3a5efa0160dd6f9a7975c43ea66bad79ea9161112d916001600160a01b039091169084906121b5565b60405180910390a1600e9190910180546001600160a01b0319166001600160a01b03909216919091179055565b815482906001600160a01b0316331461118657604051633057182d60e21b815260040160405180910390fd5b60108301805463ffffffff84811663ffffffff1983168117909355604080519190921680825260208201939093527f581878c50ce0b9e3ff58adfe29b7a807191bef3c1623340a0ad1d0d8433ebf869101610611565b815482906001600160a01b0316331461120857604051633057182d60e21b815260040160405180910390fd5b61c4e08263ffffffff161115611231576040516388a79ca760e01b815260040160405180910390fd5b60108301805463ffffffff848116680100000000000000008181026bffffffff00000000000000001985161790945560408051949093049091168084526020840191909152917fd185da00ceb738d5e65ef6936975bcb81fe742adc63d901592003d7bc22f4dfa9101610611565b815482906001600160a01b031633146112cb57604051633057182d60e21b815260040160405180910390fd5b601783015460408051918252602082018490527f8008239436e26bac1476fd338f5a2ec6415794efc1afa04145a4845547f37adc910160405180910390a150601790910155565b600e8101546001600160a01b0316331461133f57604051631bd9bb1b60e31b815260040160405180910390fd5b6003810154600e8201546040517fc5644f3588a066b15dcf6b636b74aadca57cfaccf608d9de7d8786364b7a8d0292611386926001600160a01b03918216929116906121b5565b60405180910390a1600e8101546003820180546001600160a01b0319166001600160a01b0390921691821790556040517f7ad92e57a52c4e3e83ba624622b14e3a5efa0160dd6f9a7975c43ea66bad79ea9161072c916000906121b5565b815482906001600160a01b0316331461141057604051633057182d60e21b815260040160405180910390fd5b7ff890a07a97cb2de686a62235272191a50a2113c4fda17ce6ab5ffd20a06d56d383601001600c9054906101000a90046001600160a01b0316836040516114589291906121b5565b60405180910390a150601090910180546001600160a01b03909216600160601b026bffffffffffffffffffffffff909216919091179055565b815482906001600160a01b031633146114bd57604051633057182d60e21b815260040160405180910390fd5b600182101580156114d15750620189c08211155b6115355760405162461bcd60e51b815260206004820152602f60248201527f4e6f756e7344414f3a3a5f736574566f74696e6744656c61793a20696e76616c60448201526e696420766f74696e672064656c617960881b6064820152608401610685565b6004830180549083905560408051828152602081018590527fc565b045403dc03c2eea82b81a0465edad9e2e7fc4d97e11421c209da93d7a939101610611565b815482906001600160a01b031633146115a157604051633057182d60e21b815260040160405180910390fd5b611c2082101580156115b65750620189c08211155b61161c5760405162461bcd60e51b815260206004820152603160248201527f4e6f756e7344414f3a3a5f736574566f74696e67506572696f643a20696e76616044820152701b1a59081d9bdd1a5b99c81c195c9a5bd9607a1b6064820152608401610685565b6005830180549083905560408051828152602081018590527f7e3f7f0708a84de9203036abaa450dccc85ad5ff52f78c170f3edb55cf5e88289101610611565b815482906001600160a01b0316331461168857604051633057182d60e21b815260040160405180910390fd5b621275008211156116ac57604051637762590b60e01b815260040160405180910390fd5b6202a3008210156116d057604051633430477560e11b815260040160405180910390fd5b601683015460408051918252602082018490527ffa0345f15af4cde74f214a8800528bd12cb260c12d8669007af35d869cb68773910160405180910390a150601690910155565b815482906001600160a01b0316331461174357604051633057182d60e21b815260040160405180910390fd5b600061174f844361193d565b60408101805163ffffffff861690915290915061176c8583611c54565b6040805163ffffffff8084168252861660208201527f5e3adb1066359dafa23c629f245d93543856115700821dcb4debc416f393c4699101610bd8565b805481906001600160a01b031633146117d557604051633057182d60e21b815260040160405180910390fd5b601982015480156117f957604051630de9f2b560e31b815260040160405180910390fd5b60008360080154600161180c919061227b565b6019850181905560408051848152602081018390529192507f69f8a883ff1f195172e77f3afad37131381b16fd3e6eed0b42e92347af5d3b499101610611565b815482906001600160a01b0316331461187857604051633057182d60e21b815260040160405180910390fd5b6001821015801561188b57506103e88211155b6118fd5760405162461bcd60e51b815260206004820152603f60248201527f4e6f756e7344414f3a3a5f73657450726f706f73616c5468726573686f6c643a60448201527f20696e76616c69642070726f706f73616c207468726573686f6c6420627073006064820152608401610685565b6006830180549083905560408051828152602081018590527ffc216faa269bf440fb06aa490693f409461bde9cdcb949c7b9f2cb79589e7a589101610611565b6040805160608101825260008082526020820181905291810191909152600061197e8360405180606001604052806040815260200161236360409139611ef0565b600d85015490915060008190036119d55760405180606001604052806119a78760070154611f20565b61ffff1681526020016119bd8760070154611f20565b61ffff16815260006020909101529250611c4e915050565b63ffffffff8216600d86016119eb60018461228e565b815481106119fb576119fb6122a1565b600091825260209091206002909102015463ffffffff1611611a8e57600d8501611a2660018361228e565b81548110611a3657611a366122a1565b6000918252602091829020604080516060810182526002939093029091016001015461ffff8082168452620100008204169383019390935264010000000090920463ffffffff16918101919091529250611c4e915050565b8163ffffffff1685600d01600081548110611aab57611aab6122a1565b600091825260209091206002909102015463ffffffff161115611ae05760405180606001604052806119a78760070154611f20565b600080611aee60018461228e565b90505b81811115611be45760006002611b07848461228e565b611b1191906122b7565b611b1b908361228e565b9050600088600d018281548110611b3457611b346122a1565b60009182526020918290206040805180820182526002909302909101805463ffffffff9081168452825160608101845260019092015461ffff808216845262010000820416838701526401000000009004811692820192909252928201929092528051909250878216911603611bb557602001519550611c4e945050505050565b805163ffffffff80881691161015611bcf57819350611bdd565b611bda60018361228e565b92505b5050611af1565b86600d018281548110611bf957611bf96122a1565b6000918252602091829020604080516060810182526002939093029091016001015461ffff8082168452620100008204169383019390935264010000000090920463ffffffff16918101919091529450505050505b92915050565b6000611c95436040518060400160405280601c81526020017f626c6f636b206e756d6265722065786365656473203332206269747300000000815250611ef0565b600d8401549091508015801590611ce6575063ffffffff8216600d8501611cbd60018461228e565b81548110611ccd57611ccd6122a1565b600091825260209091206002909102015463ffffffff16145b15611d755782600d8501611cfb60018461228e565b81548110611d0b57611d0b6122a1565b60009182526020918290208351600160029093029091019190910180549284015160409094015163ffffffff166401000000000267ffffffff000000001961ffff958616620100000263ffffffff1990951695909316949094179290921716919091179055611e08565b60408051808201825263ffffffff80851682526020808301878152600d890180546001818101835560009283529184902095516002909102909501805495851663ffffffff19968716178155915180519290910180549382015191909601519093166401000000000267ffffffff000000001961ffff948516620100000293909516939091169290921717919091161790555b50505050565b6000819003611e1b575050565b60005b611e2960018361228e565b811015611eeb576000611e3d82600161227b565b90505b82811015611ed857838382818110611e5a57611e5a6122a1565b9050602002016020810190611e6f91906122d9565b6001600160a01b0316848484818110611e8a57611e8a6122a1565b9050602002016020810190611e9f91906122d9565b6001600160a01b031603611ec657604051630254983f60e41b815260040160405180910390fd5b80611ed0816122fb565b915050611e40565b5080611ee3816122fb565b915050611e1e565b505050565b60008163ffffffff841115611f185760405162461bcd60e51b81526004016106859190612314565b509192915050565b600061ffff821115611f455760405163555abf0160e11b815260040160405180910390fd5b5090565b828054828255906000526020600020908101928215611f9c579160200282015b82811115611f9c5781546001600160a01b0319166001600160a01b03843516178255602090920191600190910190611f69565b50611f459291505b80821115611f455760008155600101611fa4565b80356001600160a01b0381168114611fcf57600080fd5b919050565b60008060408385031215611fe757600080fd5b82359150611ff760208401611fb8565b90509250929050565b60006020828403121561201257600080fd5b5035919050565b803561ffff81168114611fcf57600080fd5b803563ffffffff81168114611fcf57600080fd5b6000806000806080858703121561205557600080fd5b8435935061206560208601612019565b925061207360408601612019565b91506120816060860161202b565b905092959194509250565b6000806040838503121561209f57600080fd5b82359150611ff760208401612019565b6000806000604084860312156120c457600080fd5b83359250602084013567ffffffffffffffff808211156120e357600080fd5b818601915086601f8301126120f757600080fd5b81358181111561210657600080fd5b8760208260051b850101111561211b57600080fd5b6020830194508093505050509250925092565b6000806000806080858703121561214457600080fd5b8435935061215460208601611fb8565b925061216260408601611fb8565b915061208160608601611fb8565b6000806040838503121561218357600080fd5b82359150611ff76020840161202b565b600080604083850312156121a657600080fd5b50508035926020909101359150565b6001600160a01b0392831681529116602082015260400190565b6000604082016040835280865480835260608501915087600052602092508260002060005b828110156122195781546001600160a01b0316845292840192600191820191016121f4565b505050838103828501528481528590820160005b86811015612259576001600160a01b0361224684611fb8565b168252918301919083019060010161222d565b50979650505050505050565b634e487b7160e01b600052601160045260246000fd5b80820180821115611c4e57611c4e612265565b81810381811115611c4e57611c4e612265565b634e487b7160e01b600052603260045260246000fd5b6000826122d457634e487b7160e01b600052601260045260246000fd5b500490565b6000602082840312156122eb57600080fd5b6122f482611fb8565b9392505050565b60006001820161230d5761230d612265565b5060010190565b600060208083528351808285015260005b8181101561234157858101830151858201604001528201612325565b506000604082860101526040601f19601f830116850101925050509291505056fe4e6f756e7344414f3a3a67657444796e616d696351756f72756d506172616d7341743a20626c6f636b206e756d62657220657863656564732033322062697473a2646970667358221220f4aa0fa801f589d6d18bbdb2f84bb3b7493b8c96c74be3d7eeb85eba4d33934164736f6c63430008130033";
    static readonly abi: ({
        inputs: never[];
        name: string;
        type: string;
        anonymous?: undefined;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
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
        inputs: never[];
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
    static createInterface(): NounsDAOV3AdminInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NounsDAOV3Admin;
}
export {};
