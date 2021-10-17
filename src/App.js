import React, { Component } from "react";
import ButtonGroup from "./ButtonGroup";
import HelloWorld from "./HelloWorld";
import { store } from './store';


class App extends Component {

  render() {
    return (
    <>  
    <HelloWorld tech={store.getState().tech}/>
    <ButtonGroup technologies={["React", "Redux", "Elm"]} />
    </>
    )
    }
}

export default App;