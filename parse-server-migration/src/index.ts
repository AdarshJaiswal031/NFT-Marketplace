import Moralis from 'moralis';
import express from 'express';
import cors from 'cors';
import config from './config';
import { parseServer } from './parseServer';
import { EvmChain } from '@moralisweb3/evm-utils';
// @ts-ignore
import ParseServer from 'parse-server';
import http from 'http';
import ngrok from 'ngrok';
import { streamsSync } from '@moralisweb3/parse-server';
import { ItemListed } from './mongoUtils/transferSchema';
import { connectDB } from './mongoUtils/connectToMongo';
export const app = express();

Moralis.start({
  apiKey: config.MORALIS_API_KEY,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/streams', async (req, res) => {
  interface URI {
    seller: string;
    nftAddress: string;
    tokenId: Number;
    price: Number;
  }
  const { body } = req;
  if (!body.confirmed) {
    console.log('not confirmed');
    return res.status(200).json();
  }
  await connectDB();
  if (body.logs.length > 0) {
    const decodedLogs = Moralis.Streams.parsedLogs<URI>(body);
    let event = {
      sellerAddress: decodedLogs[0].seller.toString(),
      nftAddress: decodedLogs[0].nftAddress.toString(),
      tokenId: decodedLogs[0].tokenId.toString(),
      ethAmount: decodedLogs[0].price.toString(),
    };
    const newItemListed = new ItemListed(event);
    await newItemListed.save();
    console.log('saved !!');
  } else {
    console.log('No logs found');
  }

  res.status(200).json();
});
app.use(`/server`, parseServer.app);

const httpServer = http.createServer(app);
httpServer.listen(config.PORT, async () => {
  if (config.USE_STREAMS) {
    const url = await ngrok.connect(config.PORT);
    // eslint-disable-next-line no-consoled
    const finalUrl = url + config.STREAMS_WEBHOOK_URL;
    const id = '89c97b5e-314b-480b-b081-8cbc74c2aae2';
    Moralis.Streams.update({
      id: id,
      webhookUrl: finalUrl,
    });
    console.log(`Moralis Server is running on port ${config.PORT} and stream webhook url ${finalUrl}`);
  } else {
    // eslint-disable-next-line no-console
    console.log(`Moralis Server is running on port ${config.PORT}.`);
  }
});
// This will enable the Live Query real-time server
ParseServer.createLiveQueryServer(httpServer);
