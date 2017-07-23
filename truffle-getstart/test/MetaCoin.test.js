const Web3 = require('web3');
var provider = new Web3.providers.HttpProvider("http://localhost:8545");
var contract = require("truffle-contract");
const MetaCoin = contract(require('../build/contracts/MetaCoin.json'))

// 两种办法引入合约
// const MetaCoin = artifacts.require('MetaCoin');
contract('10000', function (accounts) {
  it('Shoul put 100 MetaCoin in first account', () => {
    return MetaCoin.deployed().then((instance) => {
      return instance.getBalance.call(accounts[0]);
    }).then((balance) => {
      assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
    });
  });

  it.only('TestMeta senCoin to B', async () => {
    let A,B;
    let instance = await MetaCoin.deployed(); // 获取合约对象
    A = accounts[0];  // 创世账号
    B = accounts[1];  // 第二个账号
    let result = await instance.sendCoin(B, 1000, { from: A }); // 交易
    console.log(result);
    let A_balance = await instance.getBalance.call(A);  // 获取余额
    let B_balance = await instance.getBalance.call(B);
    assert.equal(A_balance.valueOf(), 9000, "10000 wasn't in the A account");
    assert.equal(B_balance.valueOf(), 1000, "0 wasn't in the B account");
  });
})