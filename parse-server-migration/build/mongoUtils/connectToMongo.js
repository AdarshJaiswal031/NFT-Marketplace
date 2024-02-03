"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../config"));
const connectDB = async () => {
    if (mongoose_1.default.connections[0].readyState) {
        console.log("Already Connected !!");
    }
    mongoose_1.default.connect(config_1.default.DATABASE_URI).then((res) => {
        console.log("Connect Successfully ");
    }).catch((error) => {
        console.log("Error occured while connecting !!");
    });
};
exports.connectDB = connectDB;
//# sourceMappingURL=connectToMongo.js.map