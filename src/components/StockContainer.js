import React from "react";
import Stock from "./Stock";

function StockContainer({stockList, onBuySellStock}) {
  const listOfStocks = stockList.map((stock)=>{
    return <Stock key={stock.id} stock={stock} onBuySellStock={onBuySellStock}/>
  })
  return (
    <div>
      <h2>Stocks</h2>
      {listOfStocks}
    </div>
  );
}

export default StockContainer;
