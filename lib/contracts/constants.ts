import { Address } from "viem";
import PredictionMarketJSON from "./PredictionMarket.json";

// Address of Trading Contract
export const CONTRACT_ADDRESSES: Record<number, Address> = {
  // Moonbase Alpha deployment
  1287: "0x1f3BDC315DF0e5C03Ef134FcB173D4607Cac460D", // Replace with actual contract address
};

// Token Address 
export const USDC_ADDRESSES: Record<number, Address> = {
  1287: "0x1f3BDC315DF0e5C03Ef134FcB173D4607Cac460D", // Replace with actual token address
};

// Use the actual contract ABI
export const PredictionMarket_ABI = [
  {
    inputs: [
      { internalType: "string", name: "countryId", type: "string" },
      {
        internalType: "enum PredictionMarket.PositionDirection",
        name: "direction",
        type: "uint8",
      },
      { internalType: "uint8", name: "leverage", type: "uint8" },
      { internalType: "uint256", name: "size", type: "uint256" },
    ],
    name: "openPosition",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "sender", type: "address" }],
    name: "closePosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getPosition",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "positionId", type: "uint256" },
          { internalType: "string", name: "countryId", type: "string" },
          { internalType: "address", name: "trader", type: "address" },
          {
            internalType: "enum PredictionMarket.PositionDirection",
            name: "direction",
            type: "uint8",
          },
          { internalType: "uint256", name: "size", type: "uint256" },
          { internalType: "uint8", name: "leverage", type: "uint8" },
          { internalType: "uint256", name: "entryPrice", type: "uint256" },
          { internalType: "uint256", name: "openTime", type: "uint256" },
          { internalType: "uint256", name: "takeProfit", type: "uint256" },
          { internalType: "uint256", name: "stopLoss", type: "uint256" },
          { internalType: "bool", name: "isOpen", type: "bool" },
          {
            internalType: "uint256",
            name: "liquidationPrice",
            type: "uint256",
          },
        ],
        internalType: "struct PredictionMarket.Position",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    type: "error",
    name: "ERC20InsufficientAllowance",
    inputs: [
      { name: "spender", type: "address", internalType: "address" },
      { name: "allowance", type: "uint256", internalType: "uint256" },
      { name: "needed", type: "uint256", internalType: "uint256" },
    ],
  },
] as const;

// Export MockUSDC_ABI for compatibility with existing code
export const MockUSDC_ABI = PredictionMarket_ABI;

// Export imported JSON if needed
export const USDC_ABI = PredictionMarketJSON;