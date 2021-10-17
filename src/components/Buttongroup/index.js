import React from "react";
import { setAmount } from "../../actions";
import { store } from "../../store";
import './styles.css'

const ButtonGroup = ({ amounts }) => (
  <div>
    {amounts.map((amount, i) => (
      <button
        data-text={amount}
        key={`btn-${i}`}
        className="hello-btn"
        onClick={dispatchBtnAction}
      >
        {amount}
      </button>
    ))}
  </div>
);

function dispatchBtnAction(e) {
    const balance = e.target.dataset.text;
    store.dispatch(setAmount(balance))
    
}

export default ButtonGroup;