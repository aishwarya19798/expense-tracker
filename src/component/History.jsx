import '../index.css'
import TransactionList from './TransactionList';

const History = ({transactionList}) => {
  return <div className='history'>
      <h4 style={{textAlign:"center"}}>History</h4>
      {transactionList.map((eachTransaction)=>(
        <TransactionList key={eachTransaction.id} eachTransaction={eachTransaction}/>
      ))}
  </div>
};

export default History;
