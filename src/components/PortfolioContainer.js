import React from "react";
import Stock from "./Stock";


function PortfolioContainer({stockList, onBuySellStock}) {
  console.log('Portforlio List:', stockList)
  const portfolioList = stockList.map((stock)=>
    <Stock key={stock.id} stock={stock} onBuySellStock={onBuySellStock}/>
  )
  return (
    <div>
      <h2>My Portfolio</h2>
      {
       portfolioList
      }
    </div>
  );
}

export default PortfolioContainer;
