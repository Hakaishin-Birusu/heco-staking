/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  OwnableUpgradeSafe,
  OwnableUpgradeSafeInterface,
} from "../OwnableUpgradeSafe";

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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610507806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063715018a6146100465780638da5cb5b14610050578063f2fde38b1461009a575b600080fd5b61004e6100de565b005b610058610269565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100dc600480360360208110156100b057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610293565b005b6100e66104a3565b73ffffffffffffffffffffffffffffffffffffffff16606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146101a8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000606560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61029b6104a3565b73ffffffffffffffffffffffffffffffffffffffff16606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461035d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156103e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806104ac6026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380606560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60003390509056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a26469706673582212204993ef8f2affaaef653325f069a0efa763a1c18b8a962ccc593ea2bb56238d6f64736f6c63430006090033";

export class OwnableUpgradeSafe__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OwnableUpgradeSafe> {
    return super.deploy(overrides || {}) as Promise<OwnableUpgradeSafe>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OwnableUpgradeSafe {
    return super.attach(address) as OwnableUpgradeSafe;
  }
  connect(signer: Signer): OwnableUpgradeSafe__factory {
    return super.connect(signer) as OwnableUpgradeSafe__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OwnableUpgradeSafeInterface {
    return new utils.Interface(_abi) as OwnableUpgradeSafeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OwnableUpgradeSafe {
    return new Contract(address, _abi, signerOrProvider) as OwnableUpgradeSafe;
  }
}
