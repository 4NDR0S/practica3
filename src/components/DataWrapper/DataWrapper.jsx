// import { useEffect, useState } from 'react'
import React from 'react'
const tip_values = [5, 10, 15, 25, 50]

export default function DataWrapper({tipButton, dataTip, custom, people, peopleValue, bill, billValue}) {
  return (
    <>
    <div className="data-wrapper">
      <h1>Bill</h1><label htmlFor="input-bill">
        <input onChange = {bill} className="input-bill" id="input-bill" type="number" value={billValue}
          min="0"/></label>
      <h2>Select Tip %</h2>
      <ul onClick={tipButton}>
        {
          tip_values.map(value => 
            <li key={value} >
              <button type="button" className={`percentage-button ${dataTip === value && 'active'}`} value={value}>{value}%</button>
            </li>
          )
        }
        {/* <li id="percentage-5"><button type="button" className={`percentage-button ${dataTip === 5 && 'active'}`} value="5">5%</button></li>
        <li id="percentage-10"><button type="button" className={`percentage-button ${dataTip === 10 && 'active'}`} value="10">10%</button></li>
        <li id="percentage-15"><button type="button" className={`percentage-button ${dataTip === 15 && 'active'}`} value="15">15%</button></li>
        <li id="percentage-25"><button type="button" className={`percentage-button ${dataTip === 25 && 'active'}`} value="25">25%</button></li>
        <li id="percentage-50"><button type="button" className={`percentage-button ${dataTip === 50 && 'active'}`} value="50">50%</button></li> */}
        <li>
          <input onChange={custom} type="number" placeholder="Custom" id="custom-percentage-button" className="percentage-button"/>
        </li>
      </ul>
      <h2>Number of People</h2>
      <label htmlFor="input-people">
        <input onChange={people} id="input-people" className="input-people" type="number" value={peopleValue} min="1"/></label>
    </div>
    </>
  )
}
