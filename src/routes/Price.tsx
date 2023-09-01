import { useQuery } from "react-query";
import { fetchCoinTickers } from "../api";
import { styled } from "styled-components";

interface PriceProps {
  coinId: string;
}

interface IPriceHistory {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

const Priceinfo = styled.div`
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.divColor};
  color: ${(props) => props.theme.textColor};
  margin: 10px 0;
  padding: 20px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 10px;
`;

const Title = styled.span``;
const Content = styled.span<{ isMinus: boolean }>`
  color: ${(props) =>
    props.isMinus ? props.theme.plusColor : props.theme.minusColor};
`;

function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery<IPriceHistory>(
    ["price", coinId],
    () => fetchCoinTickers(coinId),
    { refetchInterval: 10000 }
  );
  return (
    <div>
      {isLoading ? (
        "Loading Price..."
      ) : (
        <Priceinfo>
          <Container>
            <Title>Price: </Title>
            <Content
              isMinus={data?.quotes.USD.price.toString().slice(0, 1) !== "-"}
            >{`$${data?.quotes.USD.price.toFixed(3)}`}</Content>
          </Container>
          <Container>
            <Title>1 Hour ago: </Title>
            <Content
              isMinus={
                data?.quotes.USD.percent_change_1h.toString().slice(0, 1) !==
                "-"
              }
            >{`${data?.quotes.USD.percent_change_1h}%`}</Content>
          </Container>
          <Container>
            <Title>6 Hours ago: </Title>
            <Content
              isMinus={
                data?.quotes.USD.percent_change_1h.toString().slice(0, 1) !==
                "-"
              }
            >{`${data?.quotes.USD.percent_change_1h}%`}</Content>
          </Container>
          <Container>
            <Title>12 Hours ago: </Title>
            <Content
              isMinus={
                data?.quotes.USD.percent_change_12h.toString().slice(0, 1) !==
                "-"
              }
            >{`${data?.quotes.USD.percent_change_12h}%`}</Content>
          </Container>
          <Container>
            <Title>24 Hours ago: </Title>
            <Content
              isMinus={
                data?.quotes.USD.percent_change_24h.toString().slice(0, 1) !==
                "-"
              }
            >{`${data?.quotes.USD.percent_change_24h}%`}</Content>
          </Container>
          <Container>
            <Title>Maximum Price: </Title>
            <Content
              isMinus={
                data?.quotes.USD.ath_price.toString().slice(0, 1) !== "-"
              }
            >{`$${data?.quotes.USD.ath_price.toFixed(3)}`}</Content>
          </Container>
        </Priceinfo>
      )}
    </div>
  );
}

export default Price;
