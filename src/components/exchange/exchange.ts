import { createElement } from "../utils/createElement";

export function createCard(rate, inputValue = 1) {
  console.log("The result is:" + Math.round((inputValue * rate) *100) /100 )
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
            onchange: (event) => createCard(rate, Number(event.target.value))
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
                  innerHTML: "$" + Number(inputValue * rate)  ,
                })
              ], 
            }),
          ]
        })
      }
