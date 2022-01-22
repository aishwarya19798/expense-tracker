import { useState } from "react";
import AddTransaction from "./component/AddTransaction";
import Balance from "./component/Balance";
import CashFlow from "./component/CashFlow";
import History from "./component/History";
import TransactionList from "./component/TransactionList";
import './index.css';
import * as _ from 'lodash'; 


function App() {
  const[transactions, setTransactions] = useState(
    [{
      id:1,
      text:"flower",
      amount:200
    },
    {
      id:2,
      text:"books",
      amount:500
    },
    {
      id:3,
      text:"stove",
      amount:-350
    },
    {
      id:4,
      text:"glove",
      amount:-100
    }]
  )

  const addTrans = (trans) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTrans = {id, ...trans}
    setTransactions([...transactions,newTrans])
  }

  return (
    <div className="App">
      <h2>Expense Tracker</h2>
      <Balance totalAmount={ _.sumBy(transactions, x=>x.amount)} />
      <CashFlow transactionList={transactions}/>
      <History transactionList={transactions}/>
      <AddTransaction addTrans={addTrans}/>
    </div>
  );
}

export default App;
