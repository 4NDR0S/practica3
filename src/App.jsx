import { useEffect, useState } from 'react'
import DataWrapper from './components/DataWrapper/DataWrapper'
import ResultWrapper from './components/ResultWrapper/ResultWrapper'

const initial_values ={
  bill: 0,
  tip: 0,
  people: 1,
}
const initial_total_values ={
  total_tip: 0,
  total_amount: 0
}
export default function App() {

  const [data, setData] = useState(initial_values)
  const [totals, setTotals] = useState(initial_total_values)

  const handleTip = (e)=>{
    let target = e.target

    // console.log(target);
    if (target.tagName === 'BUTTON') {
      setData({...data, tip: parseFloat(target.value)})
      let custom_value = document.querySelector("#custom-percentage-button")
      custom_value.value = ""
    }

  }

  //resetear valores (boton)
  const reset =()=> {
    setData(initial_values)
    setTotals(initial_total_values)
  }

  useEffect(() => {
    const { bill, tip, people } = data
    if (bill > 0 && tip > 0 && people > 0) {
      let total_amount = (bill * (tip/100) + bill) / people
      let total_tip = (bill * (tip/100)) / people

      setTotals({ total_amount: total_amount, total_tip:total_tip })
    }
  }, [data])

  return (
    <>
      <header><img src="./images/logo.svg" alt=""/></header>
      <div className="general-wrapper">
        <DataWrapper 
        tipButton={handleTip} 
        dataTip={data.tip}
        custom={(e) => setData({ ...data, tip: parseInt(e.target.value)})}

        people={(e) => setData({ ...data, people: parseInt(e.target.value)})}
        peopleValue={data.people || 1}

        bill={(e) => setData({ ...data, bill: parseInt(e.target.value)})}
        billValue={data.bill || 0}/>

        <ResultWrapper reset={reset} 
        tipAmount={totals.total_tip}
        totalAmount={totals.total_amount}
        billR={data.bill}/>
      </div>
    </>
  )
}
