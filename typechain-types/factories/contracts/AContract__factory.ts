/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { AContract, AContractInterface } from "../../contracts/AContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_tokenURI",
        type: "string",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620030de380380620030de833981810160405281019062000037919062000197565b818181600090805190602001906200005192919062000075565b5080600190805190602001906200006a92919062000075565b50505050506200037a565b82805462000083906200029f565b90600052602060002090601f016020900481019282620000a75760008555620000f3565b82601f10620000c257805160ff1916838001178555620000f3565b82800160010185558215620000f3579182015b82811115620000f2578251825591602001919060010190620000d5565b5b50905062000102919062000106565b5090565b5b808211156200012157600081600090555060010162000107565b5090565b60006200013c620001368462000233565b6200020a565b9050828152602081018484840111156200015557600080fd5b6200016284828562000269565b509392505050565b600082601f8301126200017c57600080fd5b81516200018e84826020860162000125565b91505092915050565b60008060408385031215620001ab57600080fd5b600083015167ffffffffffffffff811115620001c657600080fd5b620001d4858286016200016a565b925050602083015167ffffffffffffffff811115620001f257600080fd5b62000200858286016200016a565b9150509250929050565b60006200021662000229565b9050620002248282620002d5565b919050565b6000604051905090565b600067ffffffffffffffff8211156200025157620002506200033a565b5b6200025c8262000369565b9050602081019050919050565b60005b83811015620002895780820151818401526020810190506200026c565b8381111562000299576000848401525b50505050565b60006002820490506001821680620002b857607f821691505b60208210811415620002cf57620002ce6200030b565b5b50919050565b620002e08262000369565b810181811067ffffffffffffffff821117156200030257620003016200033a565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b612d54806200038a6000396000f3fe6080604052600436106100dd5760003560e01c806370a082311161007f578063b88d4fde11610059578063b88d4fde146102d0578063c87b56dd146102f9578063d3fc986414610336578063e985e9c514610366576100dd565b806370a082311461023f57806395d89b411461027c578063a22cb465146102a7576100dd565b8063095ea7b3116100bb578063095ea7b31461018757806323b872dd146101b057806342842e0e146101d95780636352211e14610202576100dd565b806301ffc9a7146100e257806306fdde031461011f578063081812fc1461014a575b600080fd5b3480156100ee57600080fd5b5061010960048036038101906101049190611d95565b6103a3565b60405161011691906121be565b60405180910390f35b34801561012b57600080fd5b50610134610485565b60405161014191906121d9565b60405180910390f35b34801561015657600080fd5b50610171600480360381019061016c9190611de7565b610517565b60405161017e9190612157565b60405180910390f35b34801561019357600080fd5b506101ae60048036038101906101a99190611cf2565b61059c565b005b3480156101bc57600080fd5b506101d760048036038101906101d29190611bec565b6106b4565b005b3480156101e557600080fd5b5061020060048036038101906101fb9190611bec565b610714565b005b34801561020e57600080fd5b5061022960048036038101906102249190611de7565b610734565b6040516102369190612157565b60405180910390f35b34801561024b57600080fd5b5061026660048036038101906102619190611b87565b6107e6565b604051610273919061241b565b60405180910390f35b34801561028857600080fd5b5061029161089e565b60405161029e91906121d9565b60405180910390f35b3480156102b357600080fd5b506102ce60048036038101906102c99190611cb6565b610930565b005b3480156102dc57600080fd5b506102f760048036038101906102f29190611c3b565b610946565b005b34801561030557600080fd5b50610320600480360381019061031b9190611de7565b6109a8565b60405161032d91906121d9565b60405180910390f35b610350600480360381019061034b9190611d2e565b610afa565b60405161035d91906121be565b60405180910390f35b34801561037257600080fd5b5061038d60048036038101906103889190611bb0565b610b7c565b60405161039a91906121be565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061046e57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061047e575061047d82610c10565b5b9050919050565b60606000805461049490612671565b80601f01602080910402602001604051908101604052809291908181526020018280546104c090612671565b801561050d5780601f106104e25761010080835404028352916020019161050d565b820191906000526020600020905b8154815290600101906020018083116104f057829003601f168201915b5050505050905090565b600061052282610c7a565b610561576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105589061239b565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006105a782610734565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610618576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060f906123db565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610637610ce6565b73ffffffffffffffffffffffffffffffffffffffff161480610666575061066581610660610ce6565b610b7c565b5b6106a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069c906122db565b60405180910390fd5b6106af8383610cee565b505050565b6106c56106bf610ce6565b82610da7565b610704576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106fb906123fb565b60405180910390fd5b61070f838383610e85565b505050565b61072f83838360405180602001604052806000815250610946565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156107dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d49061231b565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610857576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084e906122fb565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600180546108ad90612671565b80601f01602080910402602001604051908101604052809291908181526020018280546108d990612671565b80156109265780601f106108fb57610100808354040283529160200191610926565b820191906000526020600020905b81548152906001019060200180831161090957829003601f168201915b5050505050905090565b61094261093b610ce6565b83836110ec565b5050565b610957610951610ce6565b83610da7565b610996576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098d906123fb565b60405180910390fd5b6109a284848484611259565b50505050565b60606109b382610c7a565b6109f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e99061237b565b60405180910390fd5b6000600660008481526020019081526020016000208054610a1290612671565b80601f0160208091040260200160405190810160405280929190818152602001828054610a3e90612671565b8015610a8b5780601f10610a6057610100808354040283529160200191610a8b565b820191906000526020600020905b815481529060010190602001808311610a6e57829003601f168201915b505050505090506000610a9c6112b5565b9050600081511415610ab2578192505050610af5565b600082511115610ae7578082604051602001610acf929190612133565b60405160208183030381529060405292505050610af5565b610af0846112cc565b925050505b919050565b6000836000610b08826107e6565b14610b1257600080fd5b662386f26fc10000341015610b5c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b539061227b565b60405180910390fd5b610b668585611373565b610b708484611391565b60019150509392505050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610d6183610734565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610db282610c7a565b610df1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610de8906122bb565b60405180910390fd5b6000610dfc83610734565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610e3e5750610e3d8185610b7c565b5b80610e7c57508373ffffffffffffffffffffffffffffffffffffffff16610e6484610517565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610ea582610734565b73ffffffffffffffffffffffffffffffffffffffff1614610efb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ef29061221b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f6b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f629061225b565b60405180910390fd5b610f76838383611405565b610f81600082610cee565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610fd19190612587565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546110289190612500565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46110e783838361140a565b505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561115b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111529061229b565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161124c91906121be565b60405180910390a3505050565b611264848484610e85565b6112708484848461140f565b6112af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112a6906121fb565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606112d782610c7a565b611316576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161130d906123bb565b60405180910390fd5b60006113206112b5565b90506000815111611340576040518060200160405280600081525061136b565b8061134a846115a6565b60405160200161135b929190612133565b6040516020818303038152906040525b915050919050565b61138d828260405180602001604052806000815250611753565b5050565b61139a82610c7a565b6113d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113d09061233b565b60405180910390fd5b806006600084815260200190815260200160002090805190602001906114009291906119ab565b505050565b505050565b505050565b60006114308473ffffffffffffffffffffffffffffffffffffffff166117ae565b15611599578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611459610ce6565b8786866040518563ffffffff1660e01b815260040161147b9493929190612172565b602060405180830381600087803b15801561149557600080fd5b505af19250505080156114c657506040513d601f19601f820116820180604052508101906114c39190611dbe565b60015b611549573d80600081146114f6576040519150601f19603f3d011682016040523d82523d6000602084013e6114fb565b606091505b50600081511415611541576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611538906121fb565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505061159e565b600190505b949350505050565b606060008214156115ee576040518060400160405280600181526020017f3000000000000000000000000000000000000000000000000000000000000000815250905061174e565b600082905060005b60008214611620578080611609906126d4565b915050600a826116199190612556565b91506115f6565b60008167ffffffffffffffff811115611662577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156116945781602001600182028036833780820191505090505b5090505b60008514611747576001826116ad9190612587565b9150600a856116bc919061271d565b60306116c89190612500565b60f81b818381518110611704577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856117409190612556565b9450611698565b8093505050505b919050565b61175d83836117d1565b61176a600084848461140f565b6117a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117a0906121fb565b60405180910390fd5b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611841576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118389061235b565b60405180910390fd5b61184a81610c7a565b1561188a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118819061223b565b60405180910390fd5b61189660008383611405565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546118e69190612500565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46119a76000838361140a565b5050565b8280546119b790612671565b90600052602060002090601f0160209004810192826119d95760008555611a20565b82601f106119f257805160ff1916838001178555611a20565b82800160010185558215611a20579182015b82811115611a1f578251825591602001919060010190611a04565b5b509050611a2d9190611a31565b5090565b5b80821115611a4a576000816000905550600101611a32565b5090565b6000611a61611a5c8461245b565b612436565b905082815260208101848484011115611a7957600080fd5b611a8484828561262f565b509392505050565b6000611a9f611a9a8461248c565b612436565b905082815260208101848484011115611ab757600080fd5b611ac284828561262f565b509392505050565b600081359050611ad981612cc2565b92915050565b600081359050611aee81612cd9565b92915050565b600081359050611b0381612cf0565b92915050565b600081519050611b1881612cf0565b92915050565b600082601f830112611b2f57600080fd5b8135611b3f848260208601611a4e565b91505092915050565b600082601f830112611b5957600080fd5b8135611b69848260208601611a8c565b91505092915050565b600081359050611b8181612d07565b92915050565b600060208284031215611b9957600080fd5b6000611ba784828501611aca565b91505092915050565b60008060408385031215611bc357600080fd5b6000611bd185828601611aca565b9250506020611be285828601611aca565b9150509250929050565b600080600060608486031215611c0157600080fd5b6000611c0f86828701611aca565b9350506020611c2086828701611aca565b9250506040611c3186828701611b72565b9150509250925092565b60008060008060808587031215611c5157600080fd5b6000611c5f87828801611aca565b9450506020611c7087828801611aca565b9350506040611c8187828801611b72565b925050606085013567ffffffffffffffff811115611c9e57600080fd5b611caa87828801611b1e565b91505092959194509250565b60008060408385031215611cc957600080fd5b6000611cd785828601611aca565b9250506020611ce885828601611adf565b9150509250929050565b60008060408385031215611d0557600080fd5b6000611d1385828601611aca565b9250506020611d2485828601611b72565b9150509250929050565b600080600060608486031215611d4357600080fd5b6000611d5186828701611aca565b9350506020611d6286828701611b72565b925050604084013567ffffffffffffffff811115611d7f57600080fd5b611d8b86828701611b48565b9150509250925092565b600060208284031215611da757600080fd5b6000611db584828501611af4565b91505092915050565b600060208284031215611dd057600080fd5b6000611dde84828501611b09565b91505092915050565b600060208284031215611df957600080fd5b6000611e0784828501611b72565b91505092915050565b611e19816125bb565b82525050565b611e28816125cd565b82525050565b6000611e39826124bd565b611e4381856124d3565b9350611e5381856020860161263e565b611e5c8161280a565b840191505092915050565b6000611e72826124c8565b611e7c81856124e4565b9350611e8c81856020860161263e565b611e958161280a565b840191505092915050565b6000611eab826124c8565b611eb581856124f5565b9350611ec581856020860161263e565b80840191505092915050565b6000611ede6032836124e4565b9150611ee98261281b565b604082019050919050565b6000611f016025836124e4565b9150611f0c8261286a565b604082019050919050565b6000611f24601c836124e4565b9150611f2f826128b9565b602082019050919050565b6000611f476024836124e4565b9150611f52826128e2565b604082019050919050565b6000611f6a600f836124e4565b9150611f7582612931565b602082019050919050565b6000611f8d6019836124e4565b9150611f988261295a565b602082019050919050565b6000611fb0602c836124e4565b9150611fbb82612983565b604082019050919050565b6000611fd36038836124e4565b9150611fde826129d2565b604082019050919050565b6000611ff6602a836124e4565b915061200182612a21565b604082019050919050565b60006120196029836124e4565b915061202482612a70565b604082019050919050565b600061203c602e836124e4565b915061204782612abf565b604082019050919050565b600061205f6020836124e4565b915061206a82612b0e565b602082019050919050565b60006120826031836124e4565b915061208d82612b37565b604082019050919050565b60006120a5602c836124e4565b91506120b082612b86565b604082019050919050565b60006120c8602f836124e4565b91506120d382612bd5565b604082019050919050565b60006120eb6021836124e4565b91506120f682612c24565b604082019050919050565b600061210e6031836124e4565b915061211982612c73565b604082019050919050565b61212d81612625565b82525050565b600061213f8285611ea0565b915061214b8284611ea0565b91508190509392505050565b600060208201905061216c6000830184611e10565b92915050565b60006080820190506121876000830187611e10565b6121946020830186611e10565b6121a16040830185612124565b81810360608301526121b38184611e2e565b905095945050505050565b60006020820190506121d36000830184611e1f565b92915050565b600060208201905081810360008301526121f38184611e67565b905092915050565b6000602082019050818103600083015261221481611ed1565b9050919050565b6000602082019050818103600083015261223481611ef4565b9050919050565b6000602082019050818103600083015261225481611f17565b9050919050565b6000602082019050818103600083015261227481611f3a565b9050919050565b6000602082019050818103600083015261229481611f5d565b9050919050565b600060208201905081810360008301526122b481611f80565b9050919050565b600060208201905081810360008301526122d481611fa3565b9050919050565b600060208201905081810360008301526122f481611fc6565b9050919050565b6000602082019050818103600083015261231481611fe9565b9050919050565b600060208201905081810360008301526123348161200c565b9050919050565b600060208201905081810360008301526123548161202f565b9050919050565b6000602082019050818103600083015261237481612052565b9050919050565b6000602082019050818103600083015261239481612075565b9050919050565b600060208201905081810360008301526123b481612098565b9050919050565b600060208201905081810360008301526123d4816120bb565b9050919050565b600060208201905081810360008301526123f4816120de565b9050919050565b6000602082019050818103600083015261241481612101565b9050919050565b60006020820190506124306000830184612124565b92915050565b6000612440612451565b905061244c82826126a3565b919050565b6000604051905090565b600067ffffffffffffffff821115612476576124756127db565b5b61247f8261280a565b9050602081019050919050565b600067ffffffffffffffff8211156124a7576124a66127db565b5b6124b08261280a565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600061250b82612625565b915061251683612625565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561254b5761254a61274e565b5b828201905092915050565b600061256182612625565b915061256c83612625565b92508261257c5761257b61277d565b5b828204905092915050565b600061259282612625565b915061259d83612625565b9250828210156125b0576125af61274e565b5b828203905092915050565b60006125c682612605565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561265c578082015181840152602081019050612641565b8381111561266b576000848401525b50505050565b6000600282049050600182168061268957607f821691505b6020821081141561269d5761269c6127ac565b5b50919050565b6126ac8261280a565b810181811067ffffffffffffffff821117156126cb576126ca6127db565b5b80604052505050565b60006126df82612625565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156127125761271161274e565b5b600182019050919050565b600061272882612625565b915061273383612625565b9250826127435761274261277d565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4e6f7420656e6f7567682066756e640000000000000000000000000000000000600082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f45524337323155524953746f726167653a2055524920717565727920666f722060008201527f6e6f6e6578697374656e7420746f6b656e000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b612ccb816125bb565b8114612cd657600080fd5b50565b612ce2816125cd565b8114612ced57600080fd5b50565b612cf9816125d9565b8114612d0457600080fd5b50565b612d1081612625565b8114612d1b57600080fd5b5056fea2646970667358221220b8efd233b0f0243e8fb63014c567150c546c51be8591a6b63ca9d7a1b8f4350364736f6c63430008040033";

type AContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AContract__factory extends ContractFactory {
  constructor(...args: AContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AContract> {
    return super.deploy(_name, _symbol, overrides || {}) as Promise<AContract>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  override attach(address: string): AContract {
    return super.attach(address) as AContract;
  }
  override connect(signer: Signer): AContract__factory {
    return super.connect(signer) as AContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AContractInterface {
    return new utils.Interface(_abi) as AContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AContract {
    return new Contract(address, _abi, signerOrProvider) as AContract;
  }
}