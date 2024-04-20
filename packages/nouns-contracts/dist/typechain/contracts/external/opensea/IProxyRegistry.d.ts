import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface IProxyRegistryInterface extends utils.Interface {
    functions: {
        "proxies(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "proxies"): FunctionFragment;
    encodeFunctionData(functionFragment: "proxies", values: [string]): string;
    decodeFunctionResult(functionFragment: "proxies", data: BytesLike): Result;
    events: {};
}
export interface IProxyRegistry extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IProxyRegistryInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        proxies(arg0: string, overrides?: CallOverrides): Promise<[string]>;
    };
    proxies(arg0: string, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        proxies(arg0: string, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        proxies(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        proxies(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
