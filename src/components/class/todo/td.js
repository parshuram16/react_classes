import React, { Component } from "react";





class TdCompnent extends Component{

    state={

        // todos:["apple","banana"]

        todos:[
            {
                id:1,
                name:"apple"
        
            },

            {
                id:2,
                name:"banana"
            },

            {
                id:3,
                name:"water melon"
            }

    ]
    }


    addTodos=()=>{

        const newState=[...this.state.todos,{name:"mango"}]

        this.setState({

            todos:newState

        })


    }

    clearAllTodos=()=>{

        const newState=[]

        this.setState({

            todos:newState

        })
    }

    deleteSelectedTodo=(index)=>{

        const deleteTodo=this.state.todos.filter((item,i)=>i!==index)

        this.setState({

            todos:deleteTodo
        })

    }

    updateSelectedTodo=(index)=>{

    const updatedArray = this.state.todos.map( (eachFruit,i)=>{

    if(i===index){

        return {name:"kiwi"}
    }else{

    return eachFruit
    
    }
    
    
    })

    this.setState({
    
    todos:updatedArray

    })


    
    }




    render(){

        return(

            <>

            <h1>todo component</h1>
            <button onClick={this.addTodos}>add todo</button>
            <button onClick={this.clearAllTodos}>clear all todos</button>

            {
                this.state.todos.map( (eachItem,index)=>{

                    const {name,id}=eachItem
                    console.log(id)

                    return(

                        <React.Fragment key={id}>

                        <h3>{index+1} {name}</h3>
                        <button onClick={()=>this.deleteSelectedTodo(index)}>delete todo</button>
                        <button onClick={()=>this.updateSelectedTodo(index)}>update todo</button>
                        
                        
                        </React.Fragment>
                    )


                })
            }
            
            </>
        )
    }
}

export default TdCompnent