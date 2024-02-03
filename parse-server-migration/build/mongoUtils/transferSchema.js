"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transfers = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Define the schema
const transactionSchema = new mongoose_1.default.Schema({
    sellerAddress: {
        type: String,
        required: true,
    },
    nftAddress: {
        type: String,
        required: true,
    },
    ethAmount: {
        type: String,
        required: true,
    },
}, { timestamps: true });
// Create and export the model
const Transfers = mongoose_1.default.models.Transfers || mongoose_1.default.model('Transfers', transactionSchema);
exports.Transfers = Transfers;
//# sourceMappingURL=transferSchema.js.map