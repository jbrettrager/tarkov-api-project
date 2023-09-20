import React, { useState, useEffect } from "react";
import "./App.css";
import createDb from "./createDb.jsx";
import itemDb from "./itemDb.json";
import checkHighestTrader from "./checkHighestTrader.jsx"
import Item from "./Item.jsx"

function App() {
  const [itemData, setItemData] = useState(itemDb.data.items)
  const [searchText, setSearchText] = useState("");
  function searchFunction(e) {
    setSearchText(e.target.value);
  }
  return (
    <div>
      <div className="page-title">Tarkov Quick Sell Price Reference</div>
      <div className="title-search-title">Search By Name:</div>
      <input
        type="text"
        placeholder="検索"
        onChange={searchFunction}
        value={searchText}
        className="item-search"
      ></input>
      {searchText ? (itemData.length > 100) ? <h2>Too many results, please add more to your query.</h2> : <table className="item-table">
        <tr className="table-title">
          <th className="title">Icon</th>
          <th>Name</th>
          <th>Trader</th>
          <th>Flea</th>
          <th>Wiki</th>
        </tr>
        {itemData
        .filter(item => {
          return item.shortName.toLowerCase().includes(searchText)
        })
        .map(item => <Item item={item}/>)}
      </table> : <h2>Please enter text into the search box to display items.</h2>}
      <button onClick={createDb} className="submit-button" type="button">
        Log New DB to Console
      </button>
    </div>
  );
}

export default App;
