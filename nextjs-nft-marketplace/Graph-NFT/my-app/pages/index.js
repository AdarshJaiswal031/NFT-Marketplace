import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import NftBox from "../components/NftBox";
import { useWeb3Contract, useMoralis } from "react-moralis";
import networkMapping from "../constants/networkMapping.json";
import GET_ACTIVE_ITEMS from "../constants/subGraphQuries";
import { gql, useQuery } from "@apollo/client";

export default function Home() {
  const { chainId, account, isWeb3Enabled } = useMoralis();
  const [activeItems, setactiveItems] = useState([]);
  const [isFetching, setisFetching] = useState(true);
  const chainString = chainId ? parseInt(chainId).toString() : "31337";
  const marketplaceAddress = networkMapping[chainString].NftMarketplace[0];

  const { loading, error, data: listedNfts } = useQuery(GET_ACTIVE_ITEMS);

  const getActiveItems = () => {
    fetch("http://localhost:8000/activeItems")
      .then((response) => response.json())
      .then((data) => {
        setactiveItems(data);
        setisFetching(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getActiveItems();
  }, []);

  return (
    <div className="flex">
      {isWeb3Enabled ? (
        loading || !listedNfts ? (
          <div>Loading....</div>
        ) : (
          listedNfts.activeItems.map((nft) => {
            const { price, nftAddress, tokenId, seller } = nft;
            return (
              <div className="mx-5 my-5 flex flex-no-warp">
                <NftBox
                  nftMarketplace={marketplaceAddress}
                  seller={seller}
                  nftAddress={nftAddress}
                  tokenId={tokenId}
                  price={price}
                  key={`${nftAddress}${tokenId}`}
                />
              </div>
            );
          })
        )
      ) : (
        <div>Web3 currently not enabled</div>
      )}
    </div>
  );
}
