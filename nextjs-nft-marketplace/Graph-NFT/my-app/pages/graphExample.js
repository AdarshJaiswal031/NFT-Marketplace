import { gql, useQuery } from "@apollo/client";

const GET_ACTIVE_ITEMS = gql`
  {
    activeItems(
      first: 5
      where: { buyer: "0x000000000000000000000000000000000000dead" }
    ) {
      id
      buyer
      seller
      nftAddress
      tokenId
      price
    }
  }
`;
export default function GraphExample() {
  const { loading, error, data } = useQuery(GET_ACTIVE_ITEMS);
  console.log(data);
  return <div>Hi</div>;
}
