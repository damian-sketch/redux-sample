import React from "react";
import { setTechnologies } from "./actions";
import { store } from "./store";

const ButtonGroup = ({ technologies }) => (
  <div>
    {technologies.map((tech, i) => (
      <button
        data-tech={tech}
        key={`btn-${i}`}
        className="hello-btn"
        onClick={dispatchBtnAction}
      >
        {tech}
      </button>
    ))}
  </div>
);

function dispatchBtnAction(e) {
    const text = e.target.dataset.tech;
    store.dispatch(setTechnologies(text))
    
}

export default ButtonGroup;