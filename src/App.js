import React, { Component } from 'react'
import {ChooseBar, } from './components/choseBar';
import Sol from "./components/Sol";
import  NewChooseBar from './components/newChooseBar';




 class App extends Component {

  render(){
    return(
      <form>
<div className="wrapper">
<h1>App</h1>
<NewChooseBar/>


    </div>
    </form>
    )
  }
}
 

export default App 
