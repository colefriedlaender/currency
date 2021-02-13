import "./exchange.css";
import { createCard } from "./exchange";
import {getExchangeRateUSD} from "../utils/api"



  export const ExchangeRateAPI = ( { loaded: { rate } }) => {
    return createCard(rate);
  };
  
  ExchangeRateAPI.loaders = [
    async () => ({
      rate: await getExchangeRateUSD(),
    }),
  ];