
import dai from "../assets/dai.png"
import tBNB from "../assets/bnb.png"




interface Token {
    name: string;
    address: string;
    symbol: string;
}


interface chain {
    name: string;
    contract: string;
    chainId: string;
    symbol: string;
    currency: {
        symbol: string;
        decimals: number;

    }
    | any;
    rpcs: string[];
    url: string
    tokens: Token[]
}




export const chainOptions: chain[] = [
  

    {
        name: "opBNB Testnet", contract: '0x14710fcD5d3D8a96b1A04ee3A0471ac1017473d2', chainId: "0x15eb", symbol: tBNB, currency: { symbol: "tBNB", decimals: 18 }, rpcs: ['https://opbnb-testnet-rpc.bnbchain.org'], url: "https://testnet.blastscan.io/tx/", tokens: [

            { name: "tBNB", address: "", symbol: tBNB },
            { name: "DAI", address: "0x9440c3bb6adb5f0d5b8a460d8a8c010690dac2e8", symbol: dai },

        ]
    }
];


// Network name
// opBNB Testnet
// Network URL
// https://opbnb-testnet-rpc.bnbchain.org
// Chain ID
// 5611
// Currency symbol
// tBNB
