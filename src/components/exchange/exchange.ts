import { createElement } from "../utils/createElement";

export function createCard({ exchange__rate }) {
    return createElement("div", {
      className: "card",
      childs: [
          createElement("h2", {
              className: "rate",
              innerText: exchange__rate,
          })
        
      ],
    });
  }