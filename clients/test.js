const contract = require('truffle-contract');
const artifacts = require('../build/contracts/HelloWorld.json');
const Web3 = require('web3')
if (typeof web3 !== 'undefined') {
    var web3 = new Web3(web3.currentProvider)
} else {
    var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
}
const LMS = contract(artifacts)
LMS.setProvider(web3.currentProvider)
const test = async() => {
    const accounts = await web3.eth.getAccounts();
    const lms = await LMS.deployed()
    console.log(await lms.SayHello())
}
test()