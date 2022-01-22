import { useState } from "react";

const AddTransaction = ({addTrans}) => {

  const[addText, setAddText] = useState('')
  const[addAmount, setAddAmount] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {text: addText, amount: Number.parseFloat(addAmount)}
    
    addTrans(newTransaction)

    setAddText('')
    setAddAmount('')
  }

  return <div className="addTransaction">
      <div>  
        <h4>Add New Transaction</h4>
      </div>
      <form onSubmit={onSubmit}>
        <div className="addTransText">
            <label htmlFor="enterText">Text</label>
            <input type="text" placeholder="Enter Text..." value={addText} onChange={(e)=> setAddText(e.target.value)} required/>
        </div>
      <div className="addAmount">
          <label htmlFor="enterAmount">Amount</label>
          <input type="number" placeholder="Enter Amount..." value={addAmount} onChange={(e)=> setAddAmount(e.target.value)} required/>
      </div>
      <div>
          <p>negative-expense, positive-income</p>
      </div>
      <div>
          <input type="submit" value="Add Transaction"/>
      </div>
    </form>
  </div>
};

export default AddTransaction;
