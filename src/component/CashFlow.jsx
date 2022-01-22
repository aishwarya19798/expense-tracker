import '../index.css';

import * as _ from 'lodash'

const CashFlow = ({transactionList}) => {

    const incomeTotal = _.sumBy(transactionList.filter((x)=>x.amount>0), x=>x.amount)
    const expenseTotal = _.sumBy(transactionList.filter((x)=>x.amount<0), x=>x.amount)

  return <div className='cashFlow'>
      <div className="income">
          <h4>Income</h4>
          <h2>{incomeTotal} INR</h2>
      </div>
      <div className="expense">
          <h4>Expense</h4>
          <h2>{-expenseTotal} INR</h2>
      </div>
  </div>;
};

export default CashFlow;
