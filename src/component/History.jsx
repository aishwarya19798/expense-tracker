import '../index.css'
import TransactionList from './TransactionList';

const History = ({transactionList, onDelete}) => {
  return <div className='history'>
      <h4 style={{textAlign:"center"}}>History</h4>
      {transactionList.length > 0 ? transactionList.map((eachTransaction)=>(
        <TransactionList key={eachTransaction.id} eachTransaction={eachTransaction} onDelete={onDelete} />
      )): <div style={{textAlign:"center", color:"blue"}}>No Transactions to Show</div>}
  </div>
};

export default History;
