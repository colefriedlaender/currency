import { createElement } from "../utils/createElement";

export function createInput() {
 return createElement("input",{
  className: "input",
  type: "number",
  placeholder: "Euro",

}
)
}