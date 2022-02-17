import { useEffect, useState } from "react";
import AddTransaction from "./component/AddTransaction";
import Balance from "./component/Balance";
import CashFlow from "./component/CashFlow";
import History from "./component/History";
import TransactionList from "./component/TransactionList";
import "./index.css";
import * as _ from "lodash";
import { method } from "lodash";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // fetchData();
  }, []);

  // const fetchData = async() => {
  //   const fetchAllTransactions = await fetch('http://localhost:5000/transactions')
  //   const res = await fetchAllTransactions.json()
  //   setTransactions(res)
  // }

  const addTrans = async (trans) => {
    //   const res = await fetch('http://localhost:5000/transactions',{
    //    method : "POST",
    //    body : JSON.stringify(trans),
    //    headers: {
    //     "Content-type": "application/json; charset=UTF-8"
    //   }
    // })
    // fetchData()

    const id = Math.floor(Math.random() * 1000) + 1;
    const newTrans = { id, ...trans };
    setTransactions([...transactions, newTrans]);
  };

  const deleteTrans = async (id) => {
    // await fetch(`http://localhost:5000/transactions/${id}`,{
    //   method:'DELETE'
    // })

    setTransactions(transactions.filter((x) => x.id !== id));
  };

  return (
    <div className="App">
      <h2>Expense Tracker</h2>
      <Balance totalAmount={_.sumBy(transactions, (x) => x.amount)} />
      <CashFlow transactionList={transactions} />
      <History transactionList={transactions} onDelete={deleteTrans} />
      <AddTransaction addTrans={addTrans} />
    </div>
  );
}

export default App;

// DELETE TASK, GITHUB Update
