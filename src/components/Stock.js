import React from "react";

function Stock({stock, onBuySellStock}) {
  console.log('buy and sell:', typeof onBuySellStock)
  function selectStock(){
    onBuySellStock(stock)
  }
  return (
    <div>
      <div className="card" onClick={selectStock}>
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
