const ExponentFive = (props) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{props.count}⁵</p>
    <p className="exponent-result">{props.count} * {props.count} * {props.count} * {props.count} * {props.count} = <span className="total">{props.count**5}</span></p>
  </div>
);

export default ExponentFive;