import { Component } from "react";
import CircleSpinner from "../../../functional/spinners/circlespinner";
import CardNew from "../../../functional/cards/cardnew";
import axios from "axios";



class Mounting extends Component{

    constructor(){
        console.log("constructor")

        super()
        this.state={
            message:"GOOD MORNING",
            products: [],
            color:"red"
        }
    }

    componentDidMount(){
        console.log("componentDidMount",document)

        document.title=this.state.message
        



        this.fectchData()

        


    }

  
    fectchData = async ()=>{

        try{

        const response = await axios.get("https://fakestoreapi.com/products")
    

        if(response.status === 200){

            this.setState({

                products:response.data

            })
        }else{
            alert("something went wrong")
        }
    }catch(err){
        console.log(err)
    }

        
    }

    static getDerivedStateFromProps(props,state){

        console.log(props)

       //it changes the state based on the props over the time.

        console.log("getDerivedStateFromProps",props)

        return{
            color:props.color
        }


    }

    render(){
        console.log("render")

        return(

            <>

            <h1 style={{color:this.state.color}}>Mounting phase</h1>

            <div style={{display:"flex", flexDirection:"row",flexWrap:"wrap"}}>
            {

                this.state.products.length>0
                ?
                this.state.products.map(eachProduct=>{


                    return(

                        <>
                        <CardNew product={eachProduct} />
                        </>
                    )
                })
                :
                <CircleSpinner/>
            }
            </div>
            
            </>
        )
    }
}

export default Mounting