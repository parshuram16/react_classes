import { Component } from "react";
import ImageComponent from "../../../functional/image/image";






class Unmouting extends Component{

    state={
        isChildVisible:true
    }

    handler=()=>{

        this.setState({

            isChildVisible:!this.state.isChildVisible
        })
    }

    render(){
        return(

            <>
            <h1>unmounting phase</h1>

            {
                this.state.isChildVisible
                ?
                <Child/>
                :
                <h2>No child found</h2>
            }
            
            <button onClick={this.handler}>hide child</button>

            </>
        )
    }

}

export default Unmouting


class Child extends Component{

    componentWillUnmount(){

        console.log("componentWillUnmount")
    }

    render(){

        return(

            <>

            <h1>child visible</h1>
            <ImageComponent src={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}/>
            
            </>
        )
    }
}

