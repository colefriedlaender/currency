import "./exchange.css";
import { createCard } from "./exchange";
import {getExchangeRateUSD,} from "../utils/api"

export default {
  title: "Components/Exchange",
  parameters: { layout: "centered" }
};


  export const ExchangeRateAPI = ( args, { loaded: { rate } }) => {
    
    return createCard(rate);

  };
  
  ExchangeRateAPI.loaders = [
    async () => ({
      rate: await getExchangeRateUSD(),
    }),
  ];


