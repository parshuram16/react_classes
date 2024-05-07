
import { Component } from "react"
import UpdatingPhase from "./components/class/life cycle/updating phase/updating.js"
import Unmouting from "./components/class/life cycle/unmounting/unmounting.js"



class App extends Component{

  // state={
  //   color:"red"
  // }

  // changeColor=()=>{

  //   this.setState({

  //     color:"blue"
  //   })
  // }


  render(){

  return(
    <div>

      {/* <UpdatingPhase color={this.state.color}/>

      <button onClick={this.changeColor}>change color</button> */}

      <Unmouting/>
  
    </div>


  )
}




}

export default App













