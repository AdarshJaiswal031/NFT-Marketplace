const mongoose = require('mongoose');

// Define the schema
const ItemListedSchema = new mongoose.Schema(
  {
    nftMarketplace: {
      type: String,
      required: true,
    },
    seller: {
      type: String,
      required: true,
    },
    nftAddress: {
      type: String,
      required: true,
    },
    tokenId: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
const ItemCanceledSchema = new mongoose.Schema(
  {
    nftMarketplace: {
      type: String,
      required: true,
    },
    seller: {
      type: String,
      required: true,
    },
    nftAddress: {
      type: String,
      required: true,
    },
    tokenId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
const ItemBoughtSchema = new mongoose.Schema(
  {
    nftMarketplace: {
      type: String,
      required: true,
    },
    buyer: {
      type: String,
      required: true,
    },
    nftAddress: {
      type: String,
      required: true,
    },
    tokenId: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

// Create and export the model
const ItemListedModel =mongoose.model('ItemListed', ItemListedSchema);
const ActiveItemModel =mongoose.model('ActiveItem', ItemListedSchema);
const ItemCanceledModel =mongoose.model('ItemCanceled', ItemCanceledSchema);
const ItemBoughtModel =mongoose.model('ItemBought', ItemBoughtSchema);

module.exports = { ItemListedModel,ItemCanceledModel,ItemBoughtModel,ActiveItemModel };
