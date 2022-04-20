/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface INodeStakingOriginalInterface extends ethers.utils.Interface {
  functions: {
    "getValidatorCandidateStakingStatus(address)": FunctionFragment;
    "isValidatorCandidate(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getValidatorCandidateStakingStatus",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidatorCandidate",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getValidatorCandidateStakingStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidatorCandidate",
    data: BytesLike
  ): Result;

  events: {};
}

export class INodeStakingOriginal extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: INodeStakingOriginalInterface;

  functions: {
    getValidatorCandidateStakingStatus(
      _validatorCandidate: string,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber, number, BigNumber, BigNumber, BigNumber]>;

    isValidatorCandidate(
      _validatorCandidate: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  getValidatorCandidateStakingStatus(
    _validatorCandidate: string,
    overrides?: CallOverrides
  ): Promise<[boolean, BigNumber, number, BigNumber, BigNumber, BigNumber]>;

  isValidatorCandidate(
    _validatorCandidate: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    getValidatorCandidateStakingStatus(
      _validatorCandidate: string,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber, number, BigNumber, BigNumber, BigNumber]>;

    isValidatorCandidate(
      _validatorCandidate: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    getValidatorCandidateStakingStatus(
      _validatorCandidate: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isValidatorCandidate(
      _validatorCandidate: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getValidatorCandidateStakingStatus(
      _validatorCandidate: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isValidatorCandidate(
      _validatorCandidate: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
