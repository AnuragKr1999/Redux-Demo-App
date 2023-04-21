import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

const Shop = () => {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div>
      <h2>Deposit / Withdraw Money</h2>
      <h4>
        {/* <button onClick={() => dispatch(actionCreators.withdrawMoney(100))} className="btn btn-danger"> - </button> Update Balance{" "}
        <button onClick={() => dispatch(actionCreators.depositMoney(100))} className="btn btn-success"> + </button> */}
        <button onClick={() => withdrawMoney(100)} className="btn btn-danger">
         
          -
        </button>
        Update Balance
        <button onClick={() => depositMoney(100)} className="btn btn-success">
      
          +
        </button>
      </h4>
    </div>
  );
};

export default Shop;
