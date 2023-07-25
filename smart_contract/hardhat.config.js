require("@nomicfoundation/hardhat-toolbox");

const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://eth-goerli.g.alchemy.com/v2/zUoQKYUZ7xuWQmY8xhGyKiUyLXxhYQ35";
const NEXT_PUBLIC_PRIVATE_KEY = "290ab2fc8f779ba5db51a47e71534a3c54b272c0e4220b620d7587ddf16f3136";
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
      chainId:80001,
    },
    goerli: {
      url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
  solidity:{
    version: "0.8.17",
    settings:{
      optimizer:{
        enabled: true,
        runs: 200
      },
    }
  }


};
