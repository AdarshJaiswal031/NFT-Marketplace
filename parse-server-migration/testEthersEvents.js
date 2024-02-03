const ethers = require('ethers');
const ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'buyer',
        type: 'address',
        'abi.0.inputs.0.type': 'address',
        'abi.0.inputs.0.name': 'buyer',
        'abi.0.inputs.0.internalType': 'address',
        'abi.0.inputs.0.abi.0.inputs.0.internalType': 'address',
        'abi.0.inputs.0.abi.0.inputs.0.name': 'buyer',
        'abi.0.inputs.0.abi.0.inputs.0.type': 'address',
        'abi.0.inputs.0.abi.0.inputs.0.abi.0.inputs.0.type': 'address',
        'abi.0.inputs.0.abi.0.inputs.0.abi.0.inputs.0.name': 'buyer',
        'abi.0.inputs.0.abi.0.inputs.0.abi.0.inputs.0.internalType': 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'nftAddress',
        type: 'address',
        'abi.0.inputs.1.type': 'address',
        'abi.0.inputs.1.name': 'nftAddress',
        'abi.0.inputs.1.internalType': 'address',
        'abi.0.inputs.1.abi.0.inputs.1.internalType': 'address',
        'abi.0.inputs.1.abi.0.inputs.1.name': 'nftAddress',
        'abi.0.inputs.1.abi.0.inputs.1.type': 'address',
        'abi.0.inputs.1.abi.0.inputs.1.abi.0.inputs.1.type': 'address',
        'abi.0.inputs.1.abi.0.inputs.1.abi.0.inputs.1.name': 'nftAddress',
        'abi.0.inputs.1.abi.0.inputs.1.abi.0.inputs.1.internalType': 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
        'abi.0.inputs.2.type': 'uint256',
        'abi.0.inputs.2.name': 'tokenId',
        'abi.0.inputs.2.internalType': 'uint256',
        'abi.0.inputs.2.abi.0.inputs.2.internalType': 'uint256',
        'abi.0.inputs.2.abi.0.inputs.2.name': 'tokenId',
        'abi.0.inputs.2.abi.0.inputs.2.type': 'uint256',
        'abi.0.inputs.2.abi.0.inputs.2.abi.0.inputs.2.type': 'uint256',
        'abi.0.inputs.2.abi.0.inputs.2.abi.0.inputs.2.name': 'tokenId',
        'abi.0.inputs.2.abi.0.inputs.2.abi.0.inputs.2.internalType': 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
        'abi.0.inputs.3.type': 'uint256',
        'abi.0.inputs.3.name': 'price',
        'abi.0.inputs.3.internalType': 'uint256',
        'abi.0.inputs.3.abi.0.inputs.3.internalType': 'uint256',
        'abi.0.inputs.3.abi.0.inputs.3.name': 'price',
        'abi.0.inputs.3.abi.0.inputs.3.type': 'uint256',
        'abi.0.inputs.3.abi.0.inputs.3.abi.0.inputs.3.type': 'uint256',
        'abi.0.inputs.3.abi.0.inputs.3.abi.0.inputs.3.name': 'price',
        'abi.0.inputs.3.abi.0.inputs.3.abi.0.inputs.3.internalType': 'uint256',
      },
    ],
    name: 'ItemBought',
    type: 'event',
    'abi.0.type': 'event',
    'abi.0.name': 'ItemBought',
    'abi.0.abi.0.name': 'ItemBought',
    'abi.0.abi.0.type': 'event',
    'abi.0.abi.0.abi.0.type': 'event',
    'abi.0.abi.0.abi.0.name': 'ItemBought',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'seller',
        type: 'address',
        'abi.1.inputs.0.type': 'address',
        'abi.1.inputs.0.name': 'seller',
        'abi.1.inputs.0.internalType': 'address',
        'abi.1.inputs.0.abi.1.inputs.0.internalType': 'address',
        'abi.1.inputs.0.abi.1.inputs.0.name': 'seller',
        'abi.1.inputs.0.abi.1.inputs.0.type': 'address',
        'abi.1.inputs.0.abi.1.inputs.0.abi.1.inputs.0.type': 'address',
        'abi.1.inputs.0.abi.1.inputs.0.abi.1.inputs.0.name': 'seller',
        'abi.1.inputs.0.abi.1.inputs.0.abi.1.inputs.0.internalType': 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'nftAddress',
        type: 'address',
        'abi.1.inputs.1.type': 'address',
        'abi.1.inputs.1.name': 'nftAddress',
        'abi.1.inputs.1.internalType': 'address',
        'abi.1.inputs.1.abi.1.inputs.1.internalType': 'address',
        'abi.1.inputs.1.abi.1.inputs.1.name': 'nftAddress',
        'abi.1.inputs.1.abi.1.inputs.1.type': 'address',
        'abi.1.inputs.1.abi.1.inputs.1.abi.1.inputs.1.type': 'address',
        'abi.1.inputs.1.abi.1.inputs.1.abi.1.inputs.1.name': 'nftAddress',
        'abi.1.inputs.1.abi.1.inputs.1.abi.1.inputs.1.internalType': 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
        'abi.1.inputs.2.type': 'uint256',
        'abi.1.inputs.2.name': 'tokenId',
        'abi.1.inputs.2.internalType': 'uint256',
        'abi.1.inputs.2.abi.1.inputs.2.internalType': 'uint256',
        'abi.1.inputs.2.abi.1.inputs.2.name': 'tokenId',
        'abi.1.inputs.2.abi.1.inputs.2.type': 'uint256',
        'abi.1.inputs.2.abi.1.inputs.2.abi.1.inputs.2.type': 'uint256',
        'abi.1.inputs.2.abi.1.inputs.2.abi.1.inputs.2.name': 'tokenId',
        'abi.1.inputs.2.abi.1.inputs.2.abi.1.inputs.2.internalType': 'uint256',
      },
    ],
    name: 'ItemCanceled',
    type: 'event',
    'abi.1.type': 'event',
    'abi.1.name': 'ItemCanceled',
    'abi.1.abi.1.name': 'ItemCanceled',
    'abi.1.abi.1.type': 'event',
    'abi.1.abi.1.abi.1.type': 'event',
    'abi.1.abi.1.abi.1.name': 'ItemCanceled',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'seller',
        type: 'address',
        'abi.2.inputs.0.type': 'address',
        'abi.2.inputs.0.name': 'seller',
        'abi.2.inputs.0.internalType': 'address',
        'abi.2.inputs.0.abi.2.inputs.0.internalType': 'address',
        'abi.2.inputs.0.abi.2.inputs.0.name': 'seller',
        'abi.2.inputs.0.abi.2.inputs.0.type': 'address',
        'abi.2.inputs.0.abi.2.inputs.0.abi.2.inputs.0.type': 'address',
        'abi.2.inputs.0.abi.2.inputs.0.abi.2.inputs.0.name': 'seller',
        'abi.2.inputs.0.abi.2.inputs.0.abi.2.inputs.0.internalType': 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'nftAddress',
        type: 'address',
        'abi.2.inputs.1.type': 'address',
        'abi.2.inputs.1.name': 'nftAddress',
        'abi.2.inputs.1.internalType': 'address',
        'abi.2.inputs.1.abi.2.inputs.1.internalType': 'address',
        'abi.2.inputs.1.abi.2.inputs.1.name': 'nftAddress',
        'abi.2.inputs.1.abi.2.inputs.1.type': 'address',
        'abi.2.inputs.1.abi.2.inputs.1.abi.2.inputs.1.type': 'address',
        'abi.2.inputs.1.abi.2.inputs.1.abi.2.inputs.1.name': 'nftAddress',
        'abi.2.inputs.1.abi.2.inputs.1.abi.2.inputs.1.internalType': 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
        'abi.2.inputs.2.type': 'uint256',
        'abi.2.inputs.2.name': 'tokenId',
        'abi.2.inputs.2.internalType': 'uint256',
        'abi.2.inputs.2.abi.2.inputs.2.internalType': 'uint256',
        'abi.2.inputs.2.abi.2.inputs.2.name': 'tokenId',
        'abi.2.inputs.2.abi.2.inputs.2.type': 'uint256',
        'abi.2.inputs.2.abi.2.inputs.2.abi.2.inputs.2.type': 'uint256',
        'abi.2.inputs.2.abi.2.inputs.2.abi.2.inputs.2.name': 'tokenId',
        'abi.2.inputs.2.abi.2.inputs.2.abi.2.inputs.2.internalType': 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
        'abi.2.inputs.3.type': 'uint256',
        'abi.2.inputs.3.name': 'price',
        'abi.2.inputs.3.internalType': 'uint256',
        'abi.2.inputs.3.abi.2.inputs.3.internalType': 'uint256',
        'abi.2.inputs.3.abi.2.inputs.3.name': 'price',
        'abi.2.inputs.3.abi.2.inputs.3.type': 'uint256',
        'abi.2.inputs.3.abi.2.inputs.3.abi.2.inputs.3.type': 'uint256',
        'abi.2.inputs.3.abi.2.inputs.3.abi.2.inputs.3.name': 'price',
        'abi.2.inputs.3.abi.2.inputs.3.abi.2.inputs.3.internalType': 'uint256',
      },
    ],
    name: 'ItemListed',
    type: 'event',
    'abi.2.type': 'event',
    'abi.2.name': 'ItemListed',
    'abi.2.abi.2.name': 'ItemListed',
    'abi.2.abi.2.type': 'event',
    'abi.2.abi.2.abi.2.type': 'event',
    'abi.2.abi.2.abi.2.name': 'ItemListed',
  },
];
const { connectDB } = require('./mongoJs/connectToMongo');
const { ItemListedModel, ItemCanceledModel, ItemBoughtModel, ActiveItemModel } = require('./mongoJs/transferSchema');
require('dotenv').config();
// console.log(ABI)
async function getTransfer() {
  const usdcAddress = '0xe67b929052c50ec5e145d27c99dbe088991e202f'; ///USDC Contract
  const provider = new ethers.providers.WebSocketProvider(
    `wss://eth-sepolia.g.alchemy.com/v2/LtU86OBKCLLibMEEHIo4C18GiMh9ZTzN`,
  );

  const contract = new ethers.Contract(usdcAddress, ABI, provider);
  await connectDB();

  contract.on('ItemListed', async (seller, nftAddress, tokenId, price, event) => {
    console.log('ItemListed Saving Data....');
    let eventObj = {
      nftMarketplace: event.address,
      seller: seller.toString(),
      nftAddress: nftAddress.toString(),
      tokenId: tokenId.toString(),
      price: price.toString(),
    };
    console.log('saved !!');
    const newItemListed = new ItemListedModel(eventObj);
    await newItemListed.save();
    let findData = await ActiveItemModel.find({ tokenId: tokenId });
    if (findData.length == 0) {
      const newActiveItem = new ActiveItemModel(eventObj);
      await newActiveItem.save();
      console.log('your item is active now');
    } else {
      findData[0].price = price;

      findData[0].save();
      console.log('Updated successfully');
    }
  });
  contract.on('ItemCanceled', async (seller, nftAddress, tokenId, event) => {
    console.log('ItemCanceled Saving Data....');
    let eventObj = {
      nftMarketplace: event.address,
      seller: seller.toString(),
      nftAddress: nftAddress.toString(),
      tokenId: tokenId.toString(),
    };
    const newItemListed = new ItemCanceledModel(eventObj);
    await newItemListed.save();
    console.log('saved!!');
    let findData = await ActiveItemModel.find({ tokenId: tokenId });
    if (
      findData.length != 0 &&
      findData[0].nftMarketplace === eventObj.nftMarketplace &&
      findData[0].seller === eventObj.seller &&
      findData[0].nftAddress === eventObj.nftAddress &&
      findData[0].tokenId === eventObj.tokenId
    ) {
      await ActiveItemModel.deleteOne({ _id: findData[0]._id });
      console.log('Deleted from active items !!');
    }
  });
  contract.on('ItemBought', async (buyer, nftAddress, tokenId, price, event) => {
    console.log('ItemBought Saving Data....');
    let eventObj = {
      nftMarketplace: event.address.toString(),
      buyer: buyer.toString(),
      nftAddress: nftAddress.toString(),
      tokenId: tokenId.toString(),
      price: price.toString(),
    };
    const newItemListed = new ItemBoughtModel(eventObj);
    await newItemListed.save();
    console.log('saved !!');
    let findData = await ActiveItemModel.find({ tokenId: tokenId });
    if (
      findData.length != 0 &&
      findData[0].nftMarketplace === eventObj.nftMarketplace &&
      findData[0].nftAddress === eventObj.nftAddress &&
      findData[0].tokenId === eventObj.tokenId
    ) {
      await ActiveItemModel.deleteOne({ _id: findData[0]._id });
      console.log('Deleted from active items !!');
    }
  });
}
getTransfer();

// console.log(ethers.providers.WebSocketProvider)
