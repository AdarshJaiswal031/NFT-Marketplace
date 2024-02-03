import mongoose from 'mongoose';

// Define the schema
const ItemListedSchema = new mongoose.Schema(
  {
    sellerAddress: {
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
    ethAmount: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

// Create and export the model
const ItemListed = mongoose.models.Transfers || mongoose.model('ItemListed', ItemListedSchema);

export { ItemListed };
