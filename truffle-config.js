const HTTPProviderRateLimitRetry = require('./lib/http-provider-rate-limit-retry')
const path = require("path");
var Web3 = require('web3');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  // kaleido connectionURL
  
  networks: {
    development: {
      provider: () => {
        const appCred = 'e0qhyuyiv1:Lz4Q9bvTGjvcDyKsLohcRe3nBQk9qBJzmU23i-Ac9K8'; // from application credential widget
        const connectionURL = 'e0ia9n3her-e0zefoza13-rpc.de0-aws.kaleido.io'; // without protocol (https://)
        return new HTTPProviderRateLimitRetry(`https://${appCred}@${connectionURL}`, 100000);
      },
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4500000,
      /* type: 'quorum' // Use this property for Quorum environments */
    },
  },
  mocha: {
    enableTimeouts: false,
    before_timeout: 600000,
    useColors: true
  },
  compilers: {
    solc: {
      version: "0.5.0",
      settings: {
        evmVersion: "byzantium"
      }
    },
  }
};
