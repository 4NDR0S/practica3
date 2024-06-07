import React from 'react'
import Reset from '../Reset/Reset'

export default function ResultWrapper({reset, tipAmount, totalAmount, billR}) {
  return (
    <>
    <div className="result-wrapper">
      <div className="result-txt">
        <div className="text-amount">
          <div>
            <h2>Tip Amount</h2>
            <p>/ person</p>
          </div>
          <h3>$<span id="tip-amount">{tipAmount}</span></h3>
        </div>
        <div className="total-amount">
          <div>
            <h2>Total</h2>
            <p>/ person</p>
          </div>
          <h3>$<span id="total">{totalAmount}</span></h3>
        </div>
      </div>
      <Reset reset={reset} billR={billR}/>
    </div>
    </>
  )
}
