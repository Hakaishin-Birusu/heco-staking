/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AccessControlUpgradeSafe",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControlUpgradeSafe__factory>;
    getContractFactory(
      name: "OwnableUpgradeSafe",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableUpgradeSafe__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "INodeStaking",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INodeStaking__factory>;
    getContractFactory(
      name: "IStaker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStaker__factory>;
    getContractFactory(
      name: "INodeStakingOriginal",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INodeStakingOriginal__factory>;
    getContractFactory(
      name: "NodeVoting",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NodeVoting__factory>;
    getContractFactory(
      name: "INodeStakingOriginal",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INodeStakingOriginal__factory>;
    getContractFactory(
      name: "NodeVoting",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NodeVoting__factory>;
    getContractFactory(
      name: "Staker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Staker__factory>;

    getContractAt(
      name: "AccessControlUpgradeSafe",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControlUpgradeSafe>;
    getContractAt(
      name: "OwnableUpgradeSafe",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableUpgradeSafe>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "INodeStaking",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INodeStaking>;
    getContractAt(
      name: "IStaker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStaker>;
    getContractAt(
      name: "INodeStakingOriginal",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INodeStakingOriginal>;
    getContractAt(
      name: "NodeVoting",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NodeVoting>;
    getContractAt(
      name: "INodeStakingOriginal",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INodeStakingOriginal>;
    getContractAt(
      name: "NodeVoting",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NodeVoting>;
    getContractAt(
      name: "Staker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Staker>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
