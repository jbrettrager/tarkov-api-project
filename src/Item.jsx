import React from "react"
import checkHighestTrader from "./checkHighestTrader.jsx"

export default function Item(props) {
    const prices = checkHighestTrader(props.item)
    return (
        <tr>
          <td><img src={props.item.gridImageLink}></img></td>
          <td><div>{props.item.shortName}</div>
          <div className="long-name">{props.item.name}</div></td>
          <td><div>{prices.source}</div> 
          <img className="trader-img" src={prices.sourceImg}></img>
          <div>{prices.priceRUB}₽</div></td> 
          <td>{prices.fleaPriceRUB ? <div>{prices.fleaPriceRUB}₽</div> : <div className="flea-banned">CANNOT BE SOLD ON FLEA</div>}</td>
          <td><a href={props.item.wikiLink}>Wiki Page</a></td>
        </tr>
    )
}