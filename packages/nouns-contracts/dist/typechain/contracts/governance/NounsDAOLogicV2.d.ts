import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare namespace NounsDAOStorageV2 {
    type DynamicQuorumParamsStruct = {
        minQuorumVotesBPS: BigNumberish;
        maxQuorumVotesBPS: BigNumberish;
        quorumCoefficient: BigNumberish;
    };
    type DynamicQuorumParamsStructOutput = [number, number, number] & {
        minQuorumVotesBPS: number;
        maxQuorumVotesBPS: number;
        quorumCoefficient: number;
    };
    type ProposalCondensedStruct = {
        id: BigNumberish;
        proposer: string;
        proposalThreshold: BigNumberish;
        quorumVotes: BigNumberish;
        eta: BigNumberish;
        startBlock: BigNumberish;
        endBlock: BigNumberish;
        forVotes: BigNumberish;
        againstVotes: BigNumberish;
        abstainVotes: BigNumberish;
        canceled: boolean;
        vetoed: boolean;
        executed: boolean;
        totalSupply: BigNumberish;
        creationBlock: BigNumberish;
    };
    type ProposalCondensedStructOutput = [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean,
        boolean,
        BigNumber,
        BigNumber
    ] & {
        id: BigNumber;
        proposer: string;
        proposalThreshold: BigNumber;
        quorumVotes: BigNumber;
        eta: BigNumber;
        startBlock: BigNumber;
        endBlock: BigNumber;
        forVotes: BigNumber;
        againstVotes: BigNumber;
        abstainVotes: BigNumber;
        canceled: boolean;
        vetoed: boolean;
        executed: boolean;
        totalSupply: BigNumber;
        creationBlock: BigNumber;
    };
}
export declare namespace NounsDAOStorageV1Adjusted {
    type ReceiptStruct = {
        hasVoted: boolean;
        support: BigNumberish;
        votes: BigNumberish;
    };
    type ReceiptStructOutput = [boolean, number, BigNumber] & {
        hasVoted: boolean;
        support: number;
        votes: BigNumber;
    };
}
export interface NounsDAOLogicV2Interface extends utils.Interface {
    functions: {
        "BALLOT_TYPEHASH()": FunctionFragment;
        "DOMAIN_TYPEHASH()": FunctionFragment;
        "MAX_PROPOSAL_THRESHOLD_BPS()": FunctionFragment;
        "MAX_QUORUM_VOTES_BPS()": FunctionFragment;
        "MAX_QUORUM_VOTES_BPS_UPPER_BOUND()": FunctionFragment;
        "MAX_REFUND_BASE_FEE()": FunctionFragment;
        "MAX_REFUND_GAS_USED()": FunctionFragment;
        "MAX_REFUND_PRIORITY_FEE()": FunctionFragment;
        "MAX_VOTING_DELAY()": FunctionFragment;
        "MAX_VOTING_PERIOD()": FunctionFragment;
        "MIN_PROPOSAL_THRESHOLD_BPS()": FunctionFragment;
        "MIN_QUORUM_VOTES_BPS_LOWER_BOUND()": FunctionFragment;
        "MIN_QUORUM_VOTES_BPS_UPPER_BOUND()": FunctionFragment;
        "MIN_VOTING_DELAY()": FunctionFragment;
        "MIN_VOTING_PERIOD()": FunctionFragment;
        "REFUND_BASE_GAS()": FunctionFragment;
        "_acceptAdmin()": FunctionFragment;
        "_acceptVetoer()": FunctionFragment;
        "_burnVetoPower()": FunctionFragment;
        "_setDynamicQuorumParams(uint16,uint16,uint32)": FunctionFragment;
        "_setMaxQuorumVotesBPS(uint16)": FunctionFragment;
        "_setMinQuorumVotesBPS(uint16)": FunctionFragment;
        "_setPendingAdmin(address)": FunctionFragment;
        "_setPendingVetoer(address)": FunctionFragment;
        "_setProposalThresholdBPS(uint256)": FunctionFragment;
        "_setQuorumCoefficient(uint32)": FunctionFragment;
        "_setVotingDelay(uint256)": FunctionFragment;
        "_setVotingPeriod(uint256)": FunctionFragment;
        "_withdraw()": FunctionFragment;
        "admin()": FunctionFragment;
        "cancel(uint256)": FunctionFragment;
        "castRefundableVote(uint256,uint8)": FunctionFragment;
        "castRefundableVoteWithReason(uint256,uint8,string)": FunctionFragment;
        "castVote(uint256,uint8)": FunctionFragment;
        "castVoteBySig(uint256,uint8,uint8,bytes32,bytes32)": FunctionFragment;
        "castVoteWithReason(uint256,uint8,string)": FunctionFragment;
        "dynamicQuorumVotes(uint256,uint256,(uint16,uint16,uint32))": FunctionFragment;
        "execute(uint256)": FunctionFragment;
        "getActions(uint256)": FunctionFragment;
        "getDynamicQuorumParamsAt(uint256)": FunctionFragment;
        "getReceipt(uint256,address)": FunctionFragment;
        "implementation()": FunctionFragment;
        "initialize(address,address,address,uint256,uint256,uint256,(uint16,uint16,uint32))": FunctionFragment;
        "latestProposalIds(address)": FunctionFragment;
        "maxQuorumVotes()": FunctionFragment;
        "minQuorumVotes()": FunctionFragment;
        "name()": FunctionFragment;
        "nouns()": FunctionFragment;
        "pendingAdmin()": FunctionFragment;
        "pendingVetoer()": FunctionFragment;
        "proposalCount()": FunctionFragment;
        "proposalMaxOperations()": FunctionFragment;
        "proposalThreshold()": FunctionFragment;
        "proposalThresholdBPS()": FunctionFragment;
        "proposals(uint256)": FunctionFragment;
        "propose(address[],uint256[],string[],bytes[],string)": FunctionFragment;
        "queue(uint256)": FunctionFragment;
        "quorumParamsCheckpoints(uint256)": FunctionFragment;
        "quorumVotes(uint256)": FunctionFragment;
        "quorumVotesBPS()": FunctionFragment;
        "state(uint256)": FunctionFragment;
        "timelock()": FunctionFragment;
        "veto(uint256)": FunctionFragment;
        "vetoer()": FunctionFragment;
        "votingDelay()": FunctionFragment;
        "votingPeriod()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "BALLOT_TYPEHASH" | "DOMAIN_TYPEHASH" | "MAX_PROPOSAL_THRESHOLD_BPS" | "MAX_QUORUM_VOTES_BPS" | "MAX_QUORUM_VOTES_BPS_UPPER_BOUND" | "MAX_REFUND_BASE_FEE" | "MAX_REFUND_GAS_USED" | "MAX_REFUND_PRIORITY_FEE" | "MAX_VOTING_DELAY" | "MAX_VOTING_PERIOD" | "MIN_PROPOSAL_THRESHOLD_BPS" | "MIN_QUORUM_VOTES_BPS_LOWER_BOUND" | "MIN_QUORUM_VOTES_BPS_UPPER_BOUND" | "MIN_VOTING_DELAY" | "MIN_VOTING_PERIOD" | "REFUND_BASE_GAS" | "_acceptAdmin" | "_acceptVetoer" | "_burnVetoPower" | "_setDynamicQuorumParams" | "_setMaxQuorumVotesBPS" | "_setMinQuorumVotesBPS" | "_setPendingAdmin" | "_setPendingVetoer" | "_setProposalThresholdBPS" | "_setQuorumCoefficient" | "_setVotingDelay" | "_setVotingPeriod" | "_withdraw" | "admin" | "cancel" | "castRefundableVote" | "castRefundableVoteWithReason" | "castVote" | "castVoteBySig" | "castVoteWithReason" | "dynamicQuorumVotes" | "execute" | "getActions" | "getDynamicQuorumParamsAt" | "getReceipt" | "implementation" | "initialize" | "latestProposalIds" | "maxQuorumVotes" | "minQuorumVotes" | "name" | "nouns" | "pendingAdmin" | "pendingVetoer" | "proposalCount" | "proposalMaxOperations" | "proposalThreshold" | "proposalThresholdBPS" | "proposals" | "propose" | "queue" | "quorumParamsCheckpoints" | "quorumVotes" | "quorumVotesBPS" | "state" | "timelock" | "veto" | "vetoer" | "votingDelay" | "votingPeriod"): FunctionFragment;
    encodeFunctionData(functionFragment: "BALLOT_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "DOMAIN_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_PROPOSAL_THRESHOLD_BPS", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_QUORUM_VOTES_BPS", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_QUORUM_VOTES_BPS_UPPER_BOUND", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_REFUND_BASE_FEE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_REFUND_GAS_USED", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_REFUND_PRIORITY_FEE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_VOTING_DELAY", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_VOTING_PERIOD", values?: undefined): string;
    encodeFunctionData(functionFragment: "MIN_PROPOSAL_THRESHOLD_BPS", values?: undefined): string;
    encodeFunctionData(functionFragment: "MIN_QUORUM_VOTES_BPS_LOWER_BOUND", values?: undefined): string;
    encodeFunctionData(functionFragment: "MIN_QUORUM_VOTES_BPS_UPPER_BOUND", values?: undefined): string;
    encodeFunctionData(functionFragment: "MIN_VOTING_DELAY", values?: undefined): string;
    encodeFunctionData(functionFragment: "MIN_VOTING_PERIOD", values?: undefined): string;
    encodeFunctionData(functionFragment: "REFUND_BASE_GAS", values?: undefined): string;
    encodeFunctionData(functionFragment: "_acceptAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "_acceptVetoer", values?: undefined): string;
    encodeFunctionData(functionFragment: "_burnVetoPower", values?: undefined): string;
    encodeFunctionData(functionFragment: "_setDynamicQuorumParams", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setMaxQuorumVotesBPS", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setMinQuorumVotesBPS", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setPendingAdmin", values: [string]): string;
    encodeFunctionData(functionFragment: "_setPendingVetoer", values: [string]): string;
    encodeFunctionData(functionFragment: "_setProposalThresholdBPS", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setQuorumCoefficient", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setVotingDelay", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setVotingPeriod", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_withdraw", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "cancel", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "castRefundableVote", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "castRefundableVoteWithReason", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "castVote", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "castVoteBySig", values: [BigNumberish, BigNumberish, BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "castVoteWithReason", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "dynamicQuorumVotes", values: [
        BigNumberish,
        BigNumberish,
        NounsDAOStorageV2.DynamicQuorumParamsStruct
    ]): string;
    encodeFunctionData(functionFragment: "execute", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getActions", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getDynamicQuorumParamsAt", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getReceipt", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "implementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        NounsDAOStorageV2.DynamicQuorumParamsStruct
    ]): string;
    encodeFunctionData(functionFragment: "latestProposalIds", values: [string]): string;
    encodeFunctionData(functionFragment: "maxQuorumVotes", values?: undefined): string;
    encodeFunctionData(functionFragment: "minQuorumVotes", values?: undefined): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "nouns", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingVetoer", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposalCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposalMaxOperations", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposalThreshold", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposalThresholdBPS", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposals", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "propose", values: [string[], BigNumberish[], string[], BytesLike[], string]): string;
    encodeFunctionData(functionFragment: "queue", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "quorumParamsCheckpoints", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "quorumVotes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "quorumVotesBPS", values?: undefined): string;
    encodeFunctionData(functionFragment: "state", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "timelock", values?: undefined): string;
    encodeFunctionData(functionFragment: "veto", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "vetoer", values?: undefined): string;
    encodeFunctionData(functionFragment: "votingDelay", values?: undefined): string;
    encodeFunctionData(functionFragment: "votingPeriod", values?: undefined): string;
    decodeFunctionResult(functionFragment: "BALLOT_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DOMAIN_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_PROPOSAL_THRESHOLD_BPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_QUORUM_VOTES_BPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_QUORUM_VOTES_BPS_UPPER_BOUND", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_REFUND_BASE_FEE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_REFUND_GAS_USED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_REFUND_PRIORITY_FEE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_VOTING_DELAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_VOTING_PERIOD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MIN_PROPOSAL_THRESHOLD_BPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MIN_QUORUM_VOTES_BPS_LOWER_BOUND", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MIN_QUORUM_VOTES_BPS_UPPER_BOUND", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MIN_VOTING_DELAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MIN_VOTING_PERIOD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "REFUND_BASE_GAS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_acceptAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_acceptVetoer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_burnVetoPower", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setDynamicQuorumParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setMaxQuorumVotesBPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setMinQuorumVotesBPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setPendingAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setPendingVetoer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setProposalThresholdBPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setQuorumCoefficient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setVotingDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setVotingPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castRefundableVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castRefundableVoteWithReason", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castVoteBySig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castVoteWithReason", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dynamicQuorumVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getActions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDynamicQuorumParamsAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReceipt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "implementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestProposalIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxQuorumVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minQuorumVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nouns", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingVetoer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalMaxOperations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalThresholdBPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "propose", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quorumParamsCheckpoints", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quorumVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quorumVotesBPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "timelock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "veto", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vetoer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votingDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votingPeriod", data: BytesLike): Result;
    events: {
        "MaxQuorumVotesBPSSet(uint16,uint16)": EventFragment;
        "MinQuorumVotesBPSSet(uint16,uint16)": EventFragment;
        "NewAdmin(address,address)": EventFragment;
        "NewImplementation(address,address)": EventFragment;
        "NewPendingAdmin(address,address)": EventFragment;
        "NewPendingVetoer(address,address)": EventFragment;
        "NewVetoer(address,address)": EventFragment;
        "ProposalCanceled(uint256)": EventFragment;
        "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)": EventFragment;
        "ProposalCreatedWithRequirements(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,uint256,uint256,string)": EventFragment;
        "ProposalExecuted(uint256)": EventFragment;
        "ProposalQueued(uint256,uint256)": EventFragment;
        "ProposalThresholdBPSSet(uint256,uint256)": EventFragment;
        "ProposalVetoed(uint256)": EventFragment;
        "QuorumCoefficientSet(uint32,uint32)": EventFragment;
        "QuorumVotesBPSSet(uint256,uint256)": EventFragment;
        "RefundableVote(address,uint256,bool)": EventFragment;
        "VoteCast(address,uint256,uint8,uint256,string)": EventFragment;
        "VotingDelaySet(uint256,uint256)": EventFragment;
        "VotingPeriodSet(uint256,uint256)": EventFragment;
        "Withdraw(uint256,bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "MaxQuorumVotesBPSSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MinQuorumVotesBPSSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewAdmin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewImplementation"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewPendingAdmin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewPendingVetoer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewVetoer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCanceled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCreatedWithRequirements"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalQueued"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalThresholdBPSSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalVetoed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "QuorumCoefficientSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "QuorumVotesBPSSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RefundableVote"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VoteCast"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VotingDelaySet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VotingPeriodSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}
export interface MaxQuorumVotesBPSSetEventObject {
    oldMaxQuorumVotesBPS: number;
    newMaxQuorumVotesBPS: number;
}
export declare type MaxQuorumVotesBPSSetEvent = TypedEvent<[
    number,
    number
], MaxQuorumVotesBPSSetEventObject>;
export declare type MaxQuorumVotesBPSSetEventFilter = TypedEventFilter<MaxQuorumVotesBPSSetEvent>;
export interface MinQuorumVotesBPSSetEventObject {
    oldMinQuorumVotesBPS: number;
    newMinQuorumVotesBPS: number;
}
export declare type MinQuorumVotesBPSSetEvent = TypedEvent<[
    number,
    number
], MinQuorumVotesBPSSetEventObject>;
export declare type MinQuorumVotesBPSSetEventFilter = TypedEventFilter<MinQuorumVotesBPSSetEvent>;
export interface NewAdminEventObject {
    oldAdmin: string;
    newAdmin: string;
}
export declare type NewAdminEvent = TypedEvent<[string, string], NewAdminEventObject>;
export declare type NewAdminEventFilter = TypedEventFilter<NewAdminEvent>;
export interface NewImplementationEventObject {
    oldImplementation: string;
    newImplementation: string;
}
export declare type NewImplementationEvent = TypedEvent<[
    string,
    string
], NewImplementationEventObject>;
export declare type NewImplementationEventFilter = TypedEventFilter<NewImplementationEvent>;
export interface NewPendingAdminEventObject {
    oldPendingAdmin: string;
    newPendingAdmin: string;
}
export declare type NewPendingAdminEvent = TypedEvent<[
    string,
    string
], NewPendingAdminEventObject>;
export declare type NewPendingAdminEventFilter = TypedEventFilter<NewPendingAdminEvent>;
export interface NewPendingVetoerEventObject {
    oldPendingVetoer: string;
    newPendingVetoer: string;
}
export declare type NewPendingVetoerEvent = TypedEvent<[
    string,
    string
], NewPendingVetoerEventObject>;
export declare type NewPendingVetoerEventFilter = TypedEventFilter<NewPendingVetoerEvent>;
export interface NewVetoerEventObject {
    oldVetoer: string;
    newVetoer: string;
}
export declare type NewVetoerEvent = TypedEvent<[string, string], NewVetoerEventObject>;
export declare type NewVetoerEventFilter = TypedEventFilter<NewVetoerEvent>;
export interface ProposalCanceledEventObject {
    id: BigNumber;
}
export declare type ProposalCanceledEvent = TypedEvent<[
    BigNumber
], ProposalCanceledEventObject>;
export declare type ProposalCanceledEventFilter = TypedEventFilter<ProposalCanceledEvent>;
export interface ProposalCreatedEventObject {
    id: BigNumber;
    proposer: string;
    targets: string[];
    values: BigNumber[];
    signatures: string[];
    calldatas: string[];
    startBlock: BigNumber;
    endBlock: BigNumber;
    description: string;
}
export declare type ProposalCreatedEvent = TypedEvent<[
    BigNumber,
    string,
    string[],
    BigNumber[],
    string[],
    string[],
    BigNumber,
    BigNumber,
    string
], ProposalCreatedEventObject>;
export declare type ProposalCreatedEventFilter = TypedEventFilter<ProposalCreatedEvent>;
export interface ProposalCreatedWithRequirementsEventObject {
    id: BigNumber;
    proposer: string;
    targets: string[];
    values: BigNumber[];
    signatures: string[];
    calldatas: string[];
    startBlock: BigNumber;
    endBlock: BigNumber;
    proposalThreshold: BigNumber;
    quorumVotes: BigNumber;
    description: string;
}
export declare type ProposalCreatedWithRequirementsEvent = TypedEvent<[
    BigNumber,
    string,
    string[],
    BigNumber[],
    string[],
    string[],
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string
], ProposalCreatedWithRequirementsEventObject>;
export declare type ProposalCreatedWithRequirementsEventFilter = TypedEventFilter<ProposalCreatedWithRequirementsEvent>;
export interface ProposalExecutedEventObject {
    id: BigNumber;
}
export declare type ProposalExecutedEvent = TypedEvent<[
    BigNumber
], ProposalExecutedEventObject>;
export declare type ProposalExecutedEventFilter = TypedEventFilter<ProposalExecutedEvent>;
export interface ProposalQueuedEventObject {
    id: BigNumber;
    eta: BigNumber;
}
export declare type ProposalQueuedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], ProposalQueuedEventObject>;
export declare type ProposalQueuedEventFilter = TypedEventFilter<ProposalQueuedEvent>;
export interface ProposalThresholdBPSSetEventObject {
    oldProposalThresholdBPS: BigNumber;
    newProposalThresholdBPS: BigNumber;
}
export declare type ProposalThresholdBPSSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], ProposalThresholdBPSSetEventObject>;
export declare type ProposalThresholdBPSSetEventFilter = TypedEventFilter<ProposalThresholdBPSSetEvent>;
export interface ProposalVetoedEventObject {
    id: BigNumber;
}
export declare type ProposalVetoedEvent = TypedEvent<[
    BigNumber
], ProposalVetoedEventObject>;
export declare type ProposalVetoedEventFilter = TypedEventFilter<ProposalVetoedEvent>;
export interface QuorumCoefficientSetEventObject {
    oldQuorumCoefficient: number;
    newQuorumCoefficient: number;
}
export declare type QuorumCoefficientSetEvent = TypedEvent<[
    number,
    number
], QuorumCoefficientSetEventObject>;
export declare type QuorumCoefficientSetEventFilter = TypedEventFilter<QuorumCoefficientSetEvent>;
export interface QuorumVotesBPSSetEventObject {
    oldQuorumVotesBPS: BigNumber;
    newQuorumVotesBPS: BigNumber;
}
export declare type QuorumVotesBPSSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], QuorumVotesBPSSetEventObject>;
export declare type QuorumVotesBPSSetEventFilter = TypedEventFilter<QuorumVotesBPSSetEvent>;
export interface RefundableVoteEventObject {
    voter: string;
    refundAmount: BigNumber;
    refundSent: boolean;
}
export declare type RefundableVoteEvent = TypedEvent<[
    string,
    BigNumber,
    boolean
], RefundableVoteEventObject>;
export declare type RefundableVoteEventFilter = TypedEventFilter<RefundableVoteEvent>;
export interface VoteCastEventObject {
    voter: string;
    proposalId: BigNumber;
    support: number;
    votes: BigNumber;
    reason: string;
}
export declare type VoteCastEvent = TypedEvent<[
    string,
    BigNumber,
    number,
    BigNumber,
    string
], VoteCastEventObject>;
export declare type VoteCastEventFilter = TypedEventFilter<VoteCastEvent>;
export interface VotingDelaySetEventObject {
    oldVotingDelay: BigNumber;
    newVotingDelay: BigNumber;
}
export declare type VotingDelaySetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], VotingDelaySetEventObject>;
export declare type VotingDelaySetEventFilter = TypedEventFilter<VotingDelaySetEvent>;
export interface VotingPeriodSetEventObject {
    oldVotingPeriod: BigNumber;
    newVotingPeriod: BigNumber;
}
export declare type VotingPeriodSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], VotingPeriodSetEventObject>;
export declare type VotingPeriodSetEventFilter = TypedEventFilter<VotingPeriodSetEvent>;
export interface WithdrawEventObject {
    amount: BigNumber;
    sent: boolean;
}
export declare type WithdrawEvent = TypedEvent<[
    BigNumber,
    boolean
], WithdrawEventObject>;
export declare type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;
export interface NounsDAOLogicV2 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NounsDAOLogicV2Interface;
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
        BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        MAX_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_QUORUM_VOTES_BPS(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_QUORUM_VOTES_BPS_UPPER_BOUND(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_REFUND_BASE_FEE(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_REFUND_GAS_USED(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_REFUND_PRIORITY_FEE(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_VOTING_DELAY(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_VOTING_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;
        MIN_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<[BigNumber]>;
        MIN_QUORUM_VOTES_BPS_LOWER_BOUND(overrides?: CallOverrides): Promise<[BigNumber]>;
        MIN_QUORUM_VOTES_BPS_UPPER_BOUND(overrides?: CallOverrides): Promise<[BigNumber]>;
        MIN_VOTING_DELAY(overrides?: CallOverrides): Promise<[BigNumber]>;
        MIN_VOTING_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;
        REFUND_BASE_GAS(overrides?: CallOverrides): Promise<[BigNumber]>;
        _acceptAdmin(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _acceptVetoer(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _burnVetoPower(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setDynamicQuorumParams(newMinQuorumVotesBPS: BigNumberish, newMaxQuorumVotesBPS: BigNumberish, newQuorumCoefficient: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setMaxQuorumVotesBPS(newMaxQuorumVotesBPS: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setMinQuorumVotesBPS(newMinQuorumVotesBPS: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setPendingAdmin(newPendingAdmin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setPendingVetoer(newPendingVetoer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setProposalThresholdBPS(newProposalThresholdBPS: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setQuorumCoefficient(newQuorumCoefficient: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setVotingDelay(newVotingDelay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setVotingPeriod(newVotingPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _withdraw(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        admin(overrides?: CallOverrides): Promise<[string]>;
        cancel(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        castRefundableVote(proposalId: BigNumberish, support: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        castRefundableVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        castVote(proposalId: BigNumberish, support: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        castVoteBySig(proposalId: BigNumberish, support: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        castVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        dynamicQuorumVotes(againstVotes: BigNumberish, totalSupply: BigNumberish, params: NounsDAOStorageV2.DynamicQuorumParamsStruct, overrides?: CallOverrides): Promise<[BigNumber]>;
        execute(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getActions(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[],
            string[],
            string[]
        ] & {
            targets: string[];
            values: BigNumber[];
            signatures: string[];
            calldatas: string[];
        }>;
        getDynamicQuorumParamsAt(blockNumber_: BigNumberish, overrides?: CallOverrides): Promise<[NounsDAOStorageV2.DynamicQuorumParamsStructOutput]>;
        getReceipt(proposalId: BigNumberish, voter: string, overrides?: CallOverrides): Promise<[NounsDAOStorageV1Adjusted.ReceiptStructOutput]>;
        implementation(overrides?: CallOverrides): Promise<[string]>;
        initialize(timelock_: string, nouns_: string, vetoer_: string, votingPeriod_: BigNumberish, votingDelay_: BigNumberish, proposalThresholdBPS_: BigNumberish, dynamicQuorumParams_: NounsDAOStorageV2.DynamicQuorumParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        latestProposalIds(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        maxQuorumVotes(overrides?: CallOverrides): Promise<[BigNumber]>;
        minQuorumVotes(overrides?: CallOverrides): Promise<[BigNumber]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        nouns(overrides?: CallOverrides): Promise<[string]>;
        pendingAdmin(overrides?: CallOverrides): Promise<[string]>;
        pendingVetoer(overrides?: CallOverrides): Promise<[string]>;
        proposalCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        proposalMaxOperations(overrides?: CallOverrides): Promise<[BigNumber]>;
        proposalThreshold(overrides?: CallOverrides): Promise<[BigNumber]>;
        proposalThresholdBPS(overrides?: CallOverrides): Promise<[BigNumber]>;
        proposals(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[NounsDAOStorageV2.ProposalCondensedStructOutput]>;
        propose(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        queue(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        quorumParamsCheckpoints(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            number,
            NounsDAOStorageV2.DynamicQuorumParamsStructOutput
        ] & {
            fromBlock: number;
            params: NounsDAOStorageV2.DynamicQuorumParamsStructOutput;
        }>;
        quorumVotes(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        quorumVotesBPS(overrides?: CallOverrides): Promise<[BigNumber]>;
        state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[number]>;
        timelock(overrides?: CallOverrides): Promise<[string]>;
        veto(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        vetoer(overrides?: CallOverrides): Promise<[string]>;
        votingDelay(overrides?: CallOverrides): Promise<[BigNumber]>;
        votingPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    MAX_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_QUORUM_VOTES_BPS(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_QUORUM_VOTES_BPS_UPPER_BOUND(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_REFUND_BASE_FEE(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_REFUND_GAS_USED(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_REFUND_PRIORITY_FEE(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_VOTING_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_VOTING_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
    MIN_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<BigNumber>;
    MIN_QUORUM_VOTES_BPS_LOWER_BOUND(overrides?: CallOverrides): Promise<BigNumber>;
    MIN_QUORUM_VOTES_BPS_UPPER_BOUND(overrides?: CallOverrides): Promise<BigNumber>;
    MIN_VOTING_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
    MIN_VOTING_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
    REFUND_BASE_GAS(overrides?: CallOverrides): Promise<BigNumber>;
    _acceptAdmin(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _acceptVetoer(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _burnVetoPower(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setDynamicQuorumParams(newMinQuorumVotesBPS: BigNumberish, newMaxQuorumVotesBPS: BigNumberish, newQuorumCoefficient: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setMaxQuorumVotesBPS(newMaxQuorumVotesBPS: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setMinQuorumVotesBPS(newMinQuorumVotesBPS: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setPendingAdmin(newPendingAdmin: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setPendingVetoer(newPendingVetoer: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setProposalThresholdBPS(newProposalThresholdBPS: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setQuorumCoefficient(newQuorumCoefficient: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setVotingDelay(newVotingDelay: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setVotingPeriod(newVotingPeriod: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _withdraw(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    admin(overrides?: CallOverrides): Promise<string>;
    cancel(proposalId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    castRefundableVote(proposalId: BigNumberish, support: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    castRefundableVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    castVote(proposalId: BigNumberish, support: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    castVoteBySig(proposalId: BigNumberish, support: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    castVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    dynamicQuorumVotes(againstVotes: BigNumberish, totalSupply: BigNumberish, params: NounsDAOStorageV2.DynamicQuorumParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
    execute(proposalId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getActions(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[
        string[],
        BigNumber[],
        string[],
        string[]
    ] & {
        targets: string[];
        values: BigNumber[];
        signatures: string[];
        calldatas: string[];
    }>;
    getDynamicQuorumParamsAt(blockNumber_: BigNumberish, overrides?: CallOverrides): Promise<NounsDAOStorageV2.DynamicQuorumParamsStructOutput>;
    getReceipt(proposalId: BigNumberish, voter: string, overrides?: CallOverrides): Promise<NounsDAOStorageV1Adjusted.ReceiptStructOutput>;
    implementation(overrides?: CallOverrides): Promise<string>;
    initialize(timelock_: string, nouns_: string, vetoer_: string, votingPeriod_: BigNumberish, votingDelay_: BigNumberish, proposalThresholdBPS_: BigNumberish, dynamicQuorumParams_: NounsDAOStorageV2.DynamicQuorumParamsStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    latestProposalIds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    maxQuorumVotes(overrides?: CallOverrides): Promise<BigNumber>;
    minQuorumVotes(overrides?: CallOverrides): Promise<BigNumber>;
    name(overrides?: CallOverrides): Promise<string>;
    nouns(overrides?: CallOverrides): Promise<string>;
    pendingAdmin(overrides?: CallOverrides): Promise<string>;
    pendingVetoer(overrides?: CallOverrides): Promise<string>;
    proposalCount(overrides?: CallOverrides): Promise<BigNumber>;
    proposalMaxOperations(overrides?: CallOverrides): Promise<BigNumber>;
    proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;
    proposalThresholdBPS(overrides?: CallOverrides): Promise<BigNumber>;
    proposals(proposalId: BigNumberish, overrides?: CallOverrides): Promise<NounsDAOStorageV2.ProposalCondensedStructOutput>;
    propose(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    queue(proposalId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    quorumParamsCheckpoints(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
        number,
        NounsDAOStorageV2.DynamicQuorumParamsStructOutput
    ] & {
        fromBlock: number;
        params: NounsDAOStorageV2.DynamicQuorumParamsStructOutput;
    }>;
    quorumVotes(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    quorumVotesBPS(overrides?: CallOverrides): Promise<BigNumber>;
    state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<number>;
    timelock(overrides?: CallOverrides): Promise<string>;
    veto(proposalId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    vetoer(overrides?: CallOverrides): Promise<string>;
    votingDelay(overrides?: CallOverrides): Promise<BigNumber>;
    votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        MAX_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_QUORUM_VOTES_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_QUORUM_VOTES_BPS_UPPER_BOUND(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_REFUND_BASE_FEE(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_REFUND_GAS_USED(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_REFUND_PRIORITY_FEE(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_VOTING_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_VOTING_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_QUORUM_VOTES_BPS_LOWER_BOUND(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_QUORUM_VOTES_BPS_UPPER_BOUND(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_VOTING_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_VOTING_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        REFUND_BASE_GAS(overrides?: CallOverrides): Promise<BigNumber>;
        _acceptAdmin(overrides?: CallOverrides): Promise<void>;
        _acceptVetoer(overrides?: CallOverrides): Promise<void>;
        _burnVetoPower(overrides?: CallOverrides): Promise<void>;
        _setDynamicQuorumParams(newMinQuorumVotesBPS: BigNumberish, newMaxQuorumVotesBPS: BigNumberish, newQuorumCoefficient: BigNumberish, overrides?: CallOverrides): Promise<void>;
        _setMaxQuorumVotesBPS(newMaxQuorumVotesBPS: BigNumberish, overrides?: CallOverrides): Promise<void>;
        _setMinQuorumVotesBPS(newMinQuorumVotesBPS: BigNumberish, overrides?: CallOverrides): Promise<void>;
        _setPendingAdmin(newPendingAdmin: string, overrides?: CallOverrides): Promise<void>;
        _setPendingVetoer(newPendingVetoer: string, overrides?: CallOverrides): Promise<void>;
        _setProposalThresholdBPS(newProposalThresholdBPS: BigNumberish, overrides?: CallOverrides): Promise<void>;
        _setQuorumCoefficient(newQuorumCoefficient: BigNumberish, overrides?: CallOverrides): Promise<void>;
        _setVotingDelay(newVotingDelay: BigNumberish, overrides?: CallOverrides): Promise<void>;
        _setVotingPeriod(newVotingPeriod: BigNumberish, overrides?: CallOverrides): Promise<void>;
        _withdraw(overrides?: CallOverrides): Promise<[BigNumber, boolean]>;
        admin(overrides?: CallOverrides): Promise<string>;
        cancel(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        castRefundableVote(proposalId: BigNumberish, support: BigNumberish, overrides?: CallOverrides): Promise<void>;
        castRefundableVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: CallOverrides): Promise<void>;
        castVote(proposalId: BigNumberish, support: BigNumberish, overrides?: CallOverrides): Promise<void>;
        castVoteBySig(proposalId: BigNumberish, support: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        castVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: CallOverrides): Promise<void>;
        dynamicQuorumVotes(againstVotes: BigNumberish, totalSupply: BigNumberish, params: NounsDAOStorageV2.DynamicQuorumParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        execute(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getActions(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[],
            string[],
            string[]
        ] & {
            targets: string[];
            values: BigNumber[];
            signatures: string[];
            calldatas: string[];
        }>;
        getDynamicQuorumParamsAt(blockNumber_: BigNumberish, overrides?: CallOverrides): Promise<NounsDAOStorageV2.DynamicQuorumParamsStructOutput>;
        getReceipt(proposalId: BigNumberish, voter: string, overrides?: CallOverrides): Promise<NounsDAOStorageV1Adjusted.ReceiptStructOutput>;
        implementation(overrides?: CallOverrides): Promise<string>;
        initialize(timelock_: string, nouns_: string, vetoer_: string, votingPeriod_: BigNumberish, votingDelay_: BigNumberish, proposalThresholdBPS_: BigNumberish, dynamicQuorumParams_: NounsDAOStorageV2.DynamicQuorumParamsStruct, overrides?: CallOverrides): Promise<void>;
        latestProposalIds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        maxQuorumVotes(overrides?: CallOverrides): Promise<BigNumber>;
        minQuorumVotes(overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        nouns(overrides?: CallOverrides): Promise<string>;
        pendingAdmin(overrides?: CallOverrides): Promise<string>;
        pendingVetoer(overrides?: CallOverrides): Promise<string>;
        proposalCount(overrides?: CallOverrides): Promise<BigNumber>;
        proposalMaxOperations(overrides?: CallOverrides): Promise<BigNumber>;
        proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        proposalThresholdBPS(overrides?: CallOverrides): Promise<BigNumber>;
        proposals(proposalId: BigNumberish, overrides?: CallOverrides): Promise<NounsDAOStorageV2.ProposalCondensedStructOutput>;
        propose(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: CallOverrides): Promise<BigNumber>;
        queue(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        quorumParamsCheckpoints(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            number,
            NounsDAOStorageV2.DynamicQuorumParamsStructOutput
        ] & {
            fromBlock: number;
            params: NounsDAOStorageV2.DynamicQuorumParamsStructOutput;
        }>;
        quorumVotes(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        quorumVotesBPS(overrides?: CallOverrides): Promise<BigNumber>;
        state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<number>;
        timelock(overrides?: CallOverrides): Promise<string>;
        veto(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        vetoer(overrides?: CallOverrides): Promise<string>;
        votingDelay(overrides?: CallOverrides): Promise<BigNumber>;
        votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "MaxQuorumVotesBPSSet(uint16,uint16)"(oldMaxQuorumVotesBPS?: null, newMaxQuorumVotesBPS?: null): MaxQuorumVotesBPSSetEventFilter;
        MaxQuorumVotesBPSSet(oldMaxQuorumVotesBPS?: null, newMaxQuorumVotesBPS?: null): MaxQuorumVotesBPSSetEventFilter;
        "MinQuorumVotesBPSSet(uint16,uint16)"(oldMinQuorumVotesBPS?: null, newMinQuorumVotesBPS?: null): MinQuorumVotesBPSSetEventFilter;
        MinQuorumVotesBPSSet(oldMinQuorumVotesBPS?: null, newMinQuorumVotesBPS?: null): MinQuorumVotesBPSSetEventFilter;
        "NewAdmin(address,address)"(oldAdmin?: null, newAdmin?: null): NewAdminEventFilter;
        NewAdmin(oldAdmin?: null, newAdmin?: null): NewAdminEventFilter;
        "NewImplementation(address,address)"(oldImplementation?: null, newImplementation?: null): NewImplementationEventFilter;
        NewImplementation(oldImplementation?: null, newImplementation?: null): NewImplementationEventFilter;
        "NewPendingAdmin(address,address)"(oldPendingAdmin?: null, newPendingAdmin?: null): NewPendingAdminEventFilter;
        NewPendingAdmin(oldPendingAdmin?: null, newPendingAdmin?: null): NewPendingAdminEventFilter;
        "NewPendingVetoer(address,address)"(oldPendingVetoer?: null, newPendingVetoer?: null): NewPendingVetoerEventFilter;
        NewPendingVetoer(oldPendingVetoer?: null, newPendingVetoer?: null): NewPendingVetoerEventFilter;
        "NewVetoer(address,address)"(oldVetoer?: null, newVetoer?: null): NewVetoerEventFilter;
        NewVetoer(oldVetoer?: null, newVetoer?: null): NewVetoerEventFilter;
        "ProposalCanceled(uint256)"(id?: null): ProposalCanceledEventFilter;
        ProposalCanceled(id?: null): ProposalCanceledEventFilter;
        "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)"(id?: null, proposer?: null, targets?: null, values?: null, signatures?: null, calldatas?: null, startBlock?: null, endBlock?: null, description?: null): ProposalCreatedEventFilter;
        ProposalCreated(id?: null, proposer?: null, targets?: null, values?: null, signatures?: null, calldatas?: null, startBlock?: null, endBlock?: null, description?: null): ProposalCreatedEventFilter;
        "ProposalCreatedWithRequirements(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,uint256,uint256,string)"(id?: null, proposer?: null, targets?: null, values?: null, signatures?: null, calldatas?: null, startBlock?: null, endBlock?: null, proposalThreshold?: null, quorumVotes?: null, description?: null): ProposalCreatedWithRequirementsEventFilter;
        ProposalCreatedWithRequirements(id?: null, proposer?: null, targets?: null, values?: null, signatures?: null, calldatas?: null, startBlock?: null, endBlock?: null, proposalThreshold?: null, quorumVotes?: null, description?: null): ProposalCreatedWithRequirementsEventFilter;
        "ProposalExecuted(uint256)"(id?: null): ProposalExecutedEventFilter;
        ProposalExecuted(id?: null): ProposalExecutedEventFilter;
        "ProposalQueued(uint256,uint256)"(id?: null, eta?: null): ProposalQueuedEventFilter;
        ProposalQueued(id?: null, eta?: null): ProposalQueuedEventFilter;
        "ProposalThresholdBPSSet(uint256,uint256)"(oldProposalThresholdBPS?: null, newProposalThresholdBPS?: null): ProposalThresholdBPSSetEventFilter;
        ProposalThresholdBPSSet(oldProposalThresholdBPS?: null, newProposalThresholdBPS?: null): ProposalThresholdBPSSetEventFilter;
        "ProposalVetoed(uint256)"(id?: null): ProposalVetoedEventFilter;
        ProposalVetoed(id?: null): ProposalVetoedEventFilter;
        "QuorumCoefficientSet(uint32,uint32)"(oldQuorumCoefficient?: null, newQuorumCoefficient?: null): QuorumCoefficientSetEventFilter;
        QuorumCoefficientSet(oldQuorumCoefficient?: null, newQuorumCoefficient?: null): QuorumCoefficientSetEventFilter;
        "QuorumVotesBPSSet(uint256,uint256)"(oldQuorumVotesBPS?: null, newQuorumVotesBPS?: null): QuorumVotesBPSSetEventFilter;
        QuorumVotesBPSSet(oldQuorumVotesBPS?: null, newQuorumVotesBPS?: null): QuorumVotesBPSSetEventFilter;
        "RefundableVote(address,uint256,bool)"(voter?: string | null, refundAmount?: null, refundSent?: null): RefundableVoteEventFilter;
        RefundableVote(voter?: string | null, refundAmount?: null, refundSent?: null): RefundableVoteEventFilter;
        "VoteCast(address,uint256,uint8,uint256,string)"(voter?: string | null, proposalId?: null, support?: null, votes?: null, reason?: null): VoteCastEventFilter;
        VoteCast(voter?: string | null, proposalId?: null, support?: null, votes?: null, reason?: null): VoteCastEventFilter;
        "VotingDelaySet(uint256,uint256)"(oldVotingDelay?: null, newVotingDelay?: null): VotingDelaySetEventFilter;
        VotingDelaySet(oldVotingDelay?: null, newVotingDelay?: null): VotingDelaySetEventFilter;
        "VotingPeriodSet(uint256,uint256)"(oldVotingPeriod?: null, newVotingPeriod?: null): VotingPeriodSetEventFilter;
        VotingPeriodSet(oldVotingPeriod?: null, newVotingPeriod?: null): VotingPeriodSetEventFilter;
        "Withdraw(uint256,bool)"(amount?: null, sent?: null): WithdrawEventFilter;
        Withdraw(amount?: null, sent?: null): WithdrawEventFilter;
    };
    estimateGas: {
        BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_QUORUM_VOTES_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_QUORUM_VOTES_BPS_UPPER_BOUND(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_REFUND_BASE_FEE(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_REFUND_GAS_USED(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_REFUND_PRIORITY_FEE(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_VOTING_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_VOTING_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_QUORUM_VOTES_BPS_LOWER_BOUND(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_QUORUM_VOTES_BPS_UPPER_BOUND(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_VOTING_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_VOTING_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        REFUND_BASE_GAS(overrides?: CallOverrides): Promise<BigNumber>;
        _acceptAdmin(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _acceptVetoer(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _burnVetoPower(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setDynamicQuorumParams(newMinQuorumVotesBPS: BigNumberish, newMaxQuorumVotesBPS: BigNumberish, newQuorumCoefficient: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setMaxQuorumVotesBPS(newMaxQuorumVotesBPS: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setMinQuorumVotesBPS(newMinQuorumVotesBPS: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setPendingAdmin(newPendingAdmin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setPendingVetoer(newPendingVetoer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setProposalThresholdBPS(newProposalThresholdBPS: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setQuorumCoefficient(newQuorumCoefficient: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setVotingDelay(newVotingDelay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setVotingPeriod(newVotingPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _withdraw(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        cancel(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        castRefundableVote(proposalId: BigNumberish, support: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        castRefundableVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        castVote(proposalId: BigNumberish, support: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        castVoteBySig(proposalId: BigNumberish, support: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        castVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        dynamicQuorumVotes(againstVotes: BigNumberish, totalSupply: BigNumberish, params: NounsDAOStorageV2.DynamicQuorumParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        execute(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getActions(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getDynamicQuorumParamsAt(blockNumber_: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getReceipt(proposalId: BigNumberish, voter: string, overrides?: CallOverrides): Promise<BigNumber>;
        implementation(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(timelock_: string, nouns_: string, vetoer_: string, votingPeriod_: BigNumberish, votingDelay_: BigNumberish, proposalThresholdBPS_: BigNumberish, dynamicQuorumParams_: NounsDAOStorageV2.DynamicQuorumParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        latestProposalIds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        maxQuorumVotes(overrides?: CallOverrides): Promise<BigNumber>;
        minQuorumVotes(overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        nouns(overrides?: CallOverrides): Promise<BigNumber>;
        pendingAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        pendingVetoer(overrides?: CallOverrides): Promise<BigNumber>;
        proposalCount(overrides?: CallOverrides): Promise<BigNumber>;
        proposalMaxOperations(overrides?: CallOverrides): Promise<BigNumber>;
        proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        proposalThresholdBPS(overrides?: CallOverrides): Promise<BigNumber>;
        proposals(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        propose(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        queue(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        quorumParamsCheckpoints(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        quorumVotes(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        quorumVotesBPS(overrides?: CallOverrides): Promise<BigNumber>;
        state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        timelock(overrides?: CallOverrides): Promise<BigNumber>;
        veto(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        vetoer(overrides?: CallOverrides): Promise<BigNumber>;
        votingDelay(overrides?: CallOverrides): Promise<BigNumber>;
        votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_QUORUM_VOTES_BPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_QUORUM_VOTES_BPS_UPPER_BOUND(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_REFUND_BASE_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_REFUND_GAS_USED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_REFUND_PRIORITY_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_VOTING_DELAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_VOTING_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MIN_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MIN_QUORUM_VOTES_BPS_LOWER_BOUND(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MIN_QUORUM_VOTES_BPS_UPPER_BOUND(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MIN_VOTING_DELAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MIN_VOTING_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        REFUND_BASE_GAS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _acceptAdmin(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _acceptVetoer(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _burnVetoPower(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setDynamicQuorumParams(newMinQuorumVotesBPS: BigNumberish, newMaxQuorumVotesBPS: BigNumberish, newQuorumCoefficient: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setMaxQuorumVotesBPS(newMaxQuorumVotesBPS: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setMinQuorumVotesBPS(newMinQuorumVotesBPS: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setPendingAdmin(newPendingAdmin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setPendingVetoer(newPendingVetoer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setProposalThresholdBPS(newProposalThresholdBPS: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setQuorumCoefficient(newQuorumCoefficient: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setVotingDelay(newVotingDelay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setVotingPeriod(newVotingPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _withdraw(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cancel(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        castRefundableVote(proposalId: BigNumberish, support: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        castRefundableVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        castVote(proposalId: BigNumberish, support: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        castVoteBySig(proposalId: BigNumberish, support: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        castVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        dynamicQuorumVotes(againstVotes: BigNumberish, totalSupply: BigNumberish, params: NounsDAOStorageV2.DynamicQuorumParamsStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        execute(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getActions(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDynamicQuorumParamsAt(blockNumber_: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReceipt(proposalId: BigNumberish, voter: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(timelock_: string, nouns_: string, vetoer_: string, votingPeriod_: BigNumberish, votingDelay_: BigNumberish, proposalThresholdBPS_: BigNumberish, dynamicQuorumParams_: NounsDAOStorageV2.DynamicQuorumParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        latestProposalIds(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxQuorumVotes(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minQuorumVotes(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nouns(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingVetoer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalMaxOperations(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalThresholdBPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposals(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        propose(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        queue(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        quorumParamsCheckpoints(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quorumVotes(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quorumVotesBPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        timelock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        veto(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        vetoer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        votingDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        votingPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
