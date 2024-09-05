import { useState } from 'react'
import {InputBox} from './component'
import usecurrencyInfo from './hooks/useCurrencyInfo'
function App() {
      
      const [amount, setamount] = useState(0)
      const [form , setFrom] = useState("usd")
      const [to , setTo] = useState("inr")
      const[converetedammount , setconveryedAmount] = useState(0)
  return (
    <>
    <h1>yes react</h1>
    </>
  )
}

export default App
