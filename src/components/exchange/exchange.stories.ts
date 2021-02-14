import "./exchange.css";
import { createCard } from "./exchange";
import {createInput} from "../exchange/exchange-input"
import {createElement} from "../utils/createElement"
import {getExchangeRateUSD,} from "../utils/api"

export default {
  title: "Components/Exchange",
  parameters: { layout: "centered" },
};


  export const ExchangeRateAPI = ( args, { loaded: { rate } }) => {
    console.log(rate, "2")
    return createCard(rate);

  };
  
  ExchangeRateAPI.loaders = [
    async () => ({
      rate: await getExchangeRateUSD(),
    }),
  ];


