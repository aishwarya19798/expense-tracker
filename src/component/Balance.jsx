import '../index.css';

const Balance = ({totalAmount}) => {
  return <div className="balance">
      <h4>Your Balance</h4>
      <h2 style={totalAmount>0?{color:"green"}:{color:"red"}}>{totalAmount} INR</h2>
  </div>
};

export default Balance;
