import { Component } from "react";

class Counter extends Component {
  state = {
    count: 10,
    issubscribe:false,
    subscribeText:"subscribe",
    subscribedText:"subscribed"
  };

  changeAction = (action) => {
    switch (action) {
      case "INCREMENT":
        this.setState({
          count: this.state.count + 1,
        });
        break;

      case "DECREMENT":
        if (this.state.count > 0) {
          this.setState({
            count: this.state.count - 1,
          });
        }

        break;

      case "RESET":
        this.setState({
          count: 0,
        });
        break;
      default:
        break;
    }

    console.log("increment action working", this.state.count);
  };

  subscribeAction = ()=>{

    this.setState({

        issubscribe:!this.state.issubscribe

    })

  }

  render() {

    const {issubscribe,subscribeText,subscribedText,count}=this.state
    return (
      <>
        <button onClick={this.subscribeAction}
        
        style={{

            backgroundColor:issubscribe?"green":"red"
        }}
        
        >{

            !issubscribe
            ?
            subscribeText:
            subscribedText
        }</button>

        {
            issubscribe && 
            <>
        <h4>{count}</h4>
        <button onClick={() => this.changeAction("INCREMENT")}>
          Increment
        </button>
        <button onClick={() => this.changeAction("DECREMENT")}>
          Decrement
        </button>
        <button onClick={() => this.changeAction("RESET")}>Reset</button>
      </>

        }
        </>
    );
  }
}

export default Counter;
