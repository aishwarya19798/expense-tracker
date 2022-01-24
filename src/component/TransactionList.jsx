import '../index.css'

const TransactionList = ({eachTransaction, onDelete}) => {
  return <div>
      <div className="transactionList" style={eachTransaction.amount>0?{color:"green"}:{color:"red"}}>
          <div>
             <h5>{eachTransaction.text}</h5>
          </div>
          <div>
            <h5 style={eachTransaction.amount>0?{color:"green"}:{color:"red"}}>{eachTransaction.amount}</h5>
          </div>
          <div>
            <h5 className="deleteBtn" onClick={() => onDelete(eachTransaction.id)}>X</h5>
          </div>
      </div>
  </div>
};

export default TransactionList;
