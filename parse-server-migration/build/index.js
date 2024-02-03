"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const moralis_1 = __importDefault(require("moralis"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./config"));
const parseServer_1 = require("./parseServer");
// @ts-ignore
const parse_server_1 = __importDefault(require("parse-server"));
const http_1 = __importDefault(require("http"));
const ngrok_1 = __importDefault(require("ngrok"));
const parse_server_2 = require("@moralisweb3/parse-server");
const transferSchema_1 = require("./mongoUtils/transferSchema");
const connectToMongo_1 = require("./mongoUtils/connectToMongo");
exports.app = (0, express_1.default)();
moralis_1.default.start({
    apiKey: config_1.default.MORALIS_API_KEY,
});
exports.app.use(express_1.default.urlencoded({ extended: true }));
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
exports.app.use((0, parse_server_2.streamsSync)(parseServer_1.parseServer, {
    apiKey: config_1.default.MORALIS_API_KEY,
    webhookUrl: '/streams',
}), async (req, res) => {
    const { body } = req;
    console.log(body, "ok then");
    console.log(body.logs, "logs");
    if (body.confirmed) {
        console.log("confirmed");
        // return res.status(200).json()
    }
    await (0, connectToMongo_1.connectDB)();
    // if(body.logs){
    // let event={
    //   sellerAddress:body.logs[0].address,
    //   nftAddress:body.logs[0].transactionHash,
    //   ethAmount:body.logs[0].logIndex,
    // }
    let event = {
        sellerAddress: "body.logs[0].address1",
        nftAddress: "body.logs[0].transactionHash1",
        ethAmount: "body.logs[0].logIndex1",
    };
    const newTransfer = new transferSchema_1.Transfers(event);
    await newTransfer.save();
    console.log("saved !!");
    // }
    // else{
    //   console.log("No logs found")
    // }
    return res.status(200).json();
});
// app.use("/streams",parseServer.app)
exports.app.use(`/server`, parseServer_1.parseServer.app);
const httpServer = http_1.default.createServer(exports.app);
httpServer.listen(config_1.default.PORT, async () => {
    if (config_1.default.USE_STREAMS) {
        const url = await ngrok_1.default.connect(config_1.default.PORT);
        // eslint-disable-next-line no-console
        console.log(`Moralis Server is running on port ${config_1.default.PORT} and stream webhook url ${url}${config_1.default.STREAMS_WEBHOOK_URL}`);
    }
    else {
        // eslint-disable-next-line no-console
        console.log(`Moralis Server is running on port ${config_1.default.PORT}.`);
    }
});
// This will enable the Live Query real-time server
parse_server_1.default.createLiveQueryServer(httpServer);
//# sourceMappingURL=index.js.map