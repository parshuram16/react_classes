import { PureComponent } from "react";






class Child extends PureComponent{


    render(){
        console.log("child re-render")

        return(

            <>

            <h2>iam children to counter</h2>
            
            </>
        )
    }
}

export default Child