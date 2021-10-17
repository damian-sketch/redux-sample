import React, { Component } from "react";
import ButtonGroup from "./components/Buttongroup";
import HelloWorld from "./components/Helloworld";
import { store } from './store';


class App extends Component {

  render() {
    let display = store.getState().balance

     const upb = () => {
      if(display < 5000){ // minimum balance
        return 'you have no cash'
      }else{
        return display
      }
    }
    return (
    <>  
    <HelloWorld amount={upb()}/>
    <ButtonGroup amounts={[10000, 5000]} />
    </>
    )
    }
}

export default App;