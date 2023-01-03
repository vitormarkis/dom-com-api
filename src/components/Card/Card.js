import { createNodeElementByString } from "../../../scripts/functionals.js";

export function Card(props) {
    return createNodeElementByString(`
   <div class="div-card" data-id="${props.id}" title="${props.name}">
        <h1>${props.name}</h1>
        <div class="div-id"><p>${props.id}</p></div>
        <div class="div-gif"><img src="${props.gif}" alt="Gif do ${props.name}"></div>
   </div>
    `)
}