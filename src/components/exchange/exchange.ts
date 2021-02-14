import { createElement } from "../utils/createElement";

export function createCard(rate) {
  let inputValue = 1;
  console.log(rate, inputValue)
  return createElement("div",{
    className: "container",
    childs: [
      createElement("div",{
        className: "input-container",
        childs:[
          createElement("input",{
            className: "input",
            type: "number",
            placeholder: "Euro",
            onchange: (event) =>  inputValue = Number(event.target.value)
          })
        ],
      }),
      createElement("div", {
              className: "card",
              childs: [
                createElement("h2", {
                  className: "rate",
                  innerText: "*" + rate ,
                }),
                createElement("h3",{
                  className: "dollar",
                  innerText: inputValue  + "$",
                })
              ], 
            }),
          ]
        })
      }
