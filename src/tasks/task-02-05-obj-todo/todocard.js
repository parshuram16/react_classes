

import "./todo.css"


import React, { Component } from "react";





class TodoCompnentTask extends Component{

    state={

    

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

            <div className="todbg">

            <h1 className="todoheading">todo component</h1>
            <button className="addbtn" onClick={this.addTodos}>add todo</button>
            <button className="clrbtn" onClick={this.clearAllTodos}>clear all todos</button>

            {
                this.state.todos.map( (eachItem,index)=>{

                    const {name,id}=eachItem
                    console.log(id)

                    return(

                        <React.Fragment key={id}>

                        <h3 className="theading">{index+1} {name}</h3>
                        <button className="delbtn" onClick={()=>this.deleteSelectedTodo(index)}>delete todo</button>
                        <button className="updatebtn" onClick={()=>this.updateSelectedTodo(index)}>update todo</button>
                        
                        
                        </React.Fragment>
                    )


                })
            }
            
            </div>
        )
    }
}

export default TodoCompnentTask