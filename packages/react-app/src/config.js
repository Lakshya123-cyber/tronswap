import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xc9bEbdb3e21dB90ad079f37711846645A33801d4"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/yra9CuNulHWLgm_rQZq3WV9qbPW4iseb",
  },
};