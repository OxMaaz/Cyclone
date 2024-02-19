import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.16",
  
  networks: {
    
    openBNBtestnet: {
      url: process.env.OPENBNB_TESTNET_URL || "",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    }

   
  }
};

// SafeMath deployed at: 0x978E057C5126F7A3A55D6176dF45431B44135763
// ephKeyss deployed at: 0x14710fcD5d3D8a96b1A04ee3A0471ac1017473d2

export default config;



// ChainID	Currency
// 5611 (0x15eb)	tBNB




// Network name
// opBNB Testnet
// Network URL
// https://opbnb-testnet-rpc.bnbchain.org
// Chain ID
// 5611
// Currency symbol
// tBNB

