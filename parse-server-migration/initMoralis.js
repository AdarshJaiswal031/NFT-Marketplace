// import Moralis from 'moralis';
// import { EvmChain } from '@moralisweb3/evm-utils';
// import config from './src/config';
const Moralis = require("moralis").default;
const {EvmChain}=require('@moralisweb3/evm-utils')


Moralis.start({
  apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjgxYzk0YWUxLWUyODgtNGQwNS1hNDkxLWY1ZDIyZTY1MTE3MiIsIm9yZ0lkIjoiMzQ3ODY4IiwidXNlcklkIjoiMzU3NTc0IiwidHlwZUlkIjoiZTBmODhhMzItNTI3NC00Nzg4LThkYjItY2VmZWE0Mzc1NjAzIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2ODkxNDg0NjEsImV4cCI6NDg0NDkwODQ2MX0.ryJHktmLrubGcz22I97SMrIoNx07ePbGsfxwpMrbSlo"
});
const createStreamfunc = async () => {
  // const stream = {
  //   chains: [EvmChain.POLYGON], // List of blockchains to monitor
  //   description: 'monitor Bobs wallet', // Your description
  //   tag: 'bob', // Give it a tag
  //   webhookUrl: 'https://780e-157-40-101-40.ngrok-free.app/streams', // Webhook URL to receive events
  // };

  const stream = {
    // chains: [EvmChain.POLYGON], // List of blockchains to monitor
    // description: 'monitor Bobs wallet', // Your description
    // tag: 'bob', // Give it a tag
    webhookUrl: 'https://780e-157-40-101-40.ngrok-free.app/streams', // Webhook URL to receive events
  };

  // const newStream = await Moralis.Streams.add(stream);
  const ourMoralis=await Moralis.Streams.getById("89c97b5e-314b-480b-b081-8cbc74c2aae2")
  // ourMoralis.Streams.add(stream)
  console.log(ourMoralis)
  // const { id } = newStream.toJSON(); // { id: 'YOUR_STREAM_ID', ...newStream }
  // console.log('Inside stream');

  // Now we attach Bobs address to the stream
  // const address = '0xe67b929052c50ec5e145d27c99dbe088991e202f';

  // await Moralis.Streams.addAddress({ address, id });
};
createStreamfunc()