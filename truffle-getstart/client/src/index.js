import dva from 'dva';
import './index.css';
import Web3 from 'web3';
import contract from 'truffle-contract';
import metacoin_artifacts from '../../build/contracts/MetaCoin.json';

const MetaCoin = contract(metacoin_artifacts);


const config = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // Match any network id
    },
  },
};

// 1. Initialize
const app = dva();


// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));


// load contract
window.addEventListener('load', async () => {
  if (typeof web3 !== 'undefined') {
    console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MetaCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask");
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    const url = `http://${config.networks.development.host}:${config.networks.development.port}`;
    console.log(url);
    window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
  }
  let accounts;
  let account;
  MetaCoin.setProvider(web3.currentProvider);

  function refreshBalance() {
    const self = this;

    let meta;
    MetaCoin.deployed().then((instance) => {
      meta = instance;
      return meta.getBalance.call(account, { from: account });
    }).then((value) => {
      console.log(value.valueOf());
      return meta.sendCoin('0xba44feaec187ed21b1f562822b555947c309d462', 1000, { from: '0x639e1a2b0095f03faf74466efba97b03d70ae47a' });
    }).catch((e) => {
      console.log(e);
    });
  }
  // Get the initial account balance so it can be displayed.
  web3.eth.getAccounts((err, accs) => {
    if (err != null) {
      alert('There was an error fetching your accounts.');
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;
    account = accounts[0];

    refreshBalance();
    app.start('#root');
  });
});
