import Web3 from 'web3';
const address = '0x4f7f1380239450AAD5af611DB3c3c1bb51049c29';
const contractAbi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[],"name":"getGroupIds","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_groupId","type":"uint256"}],"name":"getGroup","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256[]","name":"indexes","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_indexId","type":"uint256"}],"name":"getIndex","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"ethPriceInWei","type":"uint256"},{"internalType":"uint256","name":"usdPriceInCents","type":"uint256"},{"internalType":"uint256","name":"usdCapitalization","type":"uint256"},{"internalType":"int256","name":"percentageChange","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"}];

const web3 = new Web3("https://ropsten.infura.io/v3/265f6d314e3e44f998375e101e9cf6bb");

const contract = new web3.eth.Contract(contractAbi, address);

const getGroupsIds = async () => {
  const groupsID = contract.methods.getGroupIds().call();

  return groupsID;
}

const getGroups = async () => {
  const ids = await getGroupsIds();

  return Promise.all(ids.map(id => {
    return contract.methods.getGroup(id).call();
  }));
}

export const getIndexes = async () => {
  const groups = await getGroups();

  const groupIndexes = [].concat.apply([], groups.map(group => group.indexes));

  return groupIndexes;
}

export const getDataFromIndexes = async () => {
  const indexes = await getIndexes();
  const indexesData = Promise.all(indexes.map(index => {
     return contract.methods.getIndex(index).call();
   }))
 
   return indexesData;
}
