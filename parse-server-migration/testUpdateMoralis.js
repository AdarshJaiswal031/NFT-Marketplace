const Moralis = require("moralis").default;

try {
Moralis.start({
    apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjgxYzk0YWUxLWUyODgtNGQwNS1hNDkxLWY1ZDIyZTY1MTE3MiIsIm9yZ0lkIjoiMzQ3ODY4IiwidXNlcklkIjoiMzU3NTc0IiwidHlwZUlkIjoiZTBmODhhMzItNTI3NC00Nzg4LThkYjItY2VmZWE0Mzc1NjAzIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2ODkxNDg0NjEsImV4cCI6NDg0NDkwODQ2MX0.ryJHktmLrubGcz22I97SMrIoNx07ePbGsfxwpMrbSlo"
  });


  const response = Moralis.Streams.update({
    "id": "89c97b5e-314b-480b-b081-8cbc74c2aae2",
    "webhookUrl": "https://58e7-157-40-102-153.ngrok-free.app/streams",

  });

  console.log(response.raw);
} catch (e) {
  console.error(e);
}