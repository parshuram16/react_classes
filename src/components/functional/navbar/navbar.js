import { useContext } from "react"
import { Link } from "react-router-dom"
import { themeInfo, userInfo } from "../../../navigations/navigations-stack"
import { useSelector } from "react-redux"



const NavBar=()=>{

  const {name} =useContext(userInfo)

  const {
    darkMode,
    count,
    currentState

  } = useContext(themeInfo)

  const {cart} = useSelector(state=>state.cart)
  console.log("currentState" , currentState)
  

  const linkStyle={

    textDecoration: "none",
    color:darkMode?"white":"black"

  }


    return(

    <nav  
    class={darkMode ?"navbar navbar-expand-sm bg-dark navbar-dark":"navbar navbar-expand-sm bg-light navbar-light"}
    
    >
  <div className="container-fluid">
    
    <ul className="navbar-nav">

      <li className="nav-item nav-link">

        <Link to={"/"}  style={linkStyle} >
        {currentState.name}
        </Link>
        
      </li>

      <li className="nav-item nav-link">

      <Link to={"/about"}  style={linkStyle} >
        About
        </Link>
        
      </li>

      <li className="nav-item nav-link">

      <Link to={"/settings"} style={linkStyle} >
      Settings
        </Link>
        
      </li>

      <li className="nav-item nav-link">


      <Link to={"/blog"} style={linkStyle} >
       cart {cart.length} {" "}
        </Link>
      
        
      </li>

    </ul>
    
  </div>
</nav>

    )
}

export default NavBar