/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('@nomiclabs/hardhat-waffle');
require("hardhat-gas-reporter");
// require('hardhat-tracer');


// private key from the pre-funded account
const { privateKey1, privateKey2 } = require('./secrets.json');

// module.exports = {
//   solidity: "0.8.0",
//   gasReporter: {
//     currency: 'USD',
//     gasPrice: 50
//   }
// };

module.exports = {
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: false
      }
    }
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 50
  },
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/glTY8Ke8ofAAtu8SelBdzE0bwtEeX0KB",
      accounts: [privateKey1, privateKey2]
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 600000
  }
};