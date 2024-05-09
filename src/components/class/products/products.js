import axios from "axios";
import { Component } from "react";
import CardNew from "../../functional/cards/cardnew";
import CircleSpinner from "../../functional/spinners/circlespinner";




class ProductListing extends Component{

    state={
        products:[],
        categories:[],
        loading:false
    }


    componentDidMount(){

        this.fetchData()

        this.fetchCategories()

        
        
    }

    fetchData= async ()=>{

        try{

            this.setState({
                loading:true
            })

        const response= await axios.get("https://fakestoreapi.com/products")

        if(response.status === 200){

            this.setState({

                products:response.data,
                loading:false


            })

        }else{
            alert("something went wrong")
        }

    }catch(error){

        console.log(error)
    }
    }

    fetchCategories= async ()=>{

        const {data}= await axios.get("https://fakestoreapi.com/products/categories")

        const newResponse = [...data,"All"]


        this.setState({

            categories: newResponse
            
        })

    }

    filterButtons=async (selected)=>{

        this.setState({
            
            loading:true
        })

        if(selected === "All"){

            this.fetchData()

        }else{

            const response = await axios.get(`https://fakestoreapi.com/products/category/${selected}`) 

        console.log(response)

        this.setState({

            products:response.data,
            loading:false
        },()=>{})


        }


        

    }

    render(){

        return(
            <>

            <h1>products</h1>

            {

                this.state.categories.length>0 &&
                this.state.categories.map( (each)=>{

                        return(
                            <button onClick={()=>this.filterButtons(each)}>{each}</button>
                        )
                })
            }

            {/* <button onClick={()=>this.fetchData()}>All</button> */}

            <div style={{display:"flex", flexDirection:"row",flexWrap:"wrap"}}>

            {

                !this.state.loading ? (
                this.state.products.map( (eachProduct)=>{

                    return(
                        <>

                        <CardNew product={eachProduct}/>
                        
                        </>
                    )
                })
            ):(
                <CircleSpinner/>
            )
            }

            </div>

            </>

            


        )
    }
}

export default ProductListing