

import ButtonComponent from "./components/functional/button/button.js"
import ImageComponent from "./components/functional/image/image.js"
import TableComponent from "./components/functional/tables/tables.js"
import ListComponent from "./components/functional/lists/lists.js"
import FormComponent from "./components/functional/forms/forms.js"
import CardComponent from "./components/functional/cards/cards.js"
import ListnewComponent from "./components/functional/listnew/list-component.js"
import OrderList from "./components/functional/listnew/ordered.list.js"
import ListItems from "./components/functional/listnew/list-items.js"
import IplTeamListing from "./components/functional/listnew/ipl/ipl-listing.js"
import IplFilter from "./components/functional/listnew/ipl/ipl-filter.js"
// import Heading1,{Heading2,Heading3} from "./components/functional/heading/heading.js"

import Mainheading,{Heading2 as SubHeading,Heading3 as Miniheading} from "./components/functional/heading/heading.js"
import Button from "./components/class/button/button.js"
import Heading from "./components/class/button/heading1/heading1.js"

import "./App.css"
import NavBar from "./components/functional/navbar/navbar.js"
import CardNew from "./components/functional/cards/cardnew.js"
import TableNew from "./components/functional/tablenew/table.js"
import ModelComponent from "./components/functional/modal/modal.js"
import CircleSpinner from "./components/functional/spinners/circlespinner.js"
import ButtonNew from "./components/functional/button1/button1.js"
import GreetingComponent from "./components/functional/greeting/greeting.js"



// const App = () => {



//   return(
//     <div>

//       <ButtonNew text="LOGIN" bgColor="black" buttonProperties={{
//         width:100,
//         height:100
//       }}/>
//       <ButtonNew text="SIGNUP" bgColor="red" buttonProperties={{
//         width:100,
//         height:100
//       }}/>
//       <ButtonNew text="SUBMIT" bgColor="green" buttonProperties={{
//         width:100,
//         height:100
//       }}/>



      
//     </div>


//   )
// }

// export default App



// const App = () => {


//   const buttonArray=[
//     {

//       text:"sign up",
//       width:100,
//       height:100,
//       bgColor:"white",
//       id:1
//     },
//     {

//       text:"Login",
//       width:100,
//       height:100,
//       bgColor:"white",
//       id:2
//     },

//     {

//       text:"submit",
//       width:100,
//       height:100,
//       bgColor:"white",
//       id:3
//     },

//     {

//       text:"click me",
//       width:100,
//       height:100,
//       bgColor:"white",
//       id:4
//     }

// ]



//   return(
//     <div>

//       {
//         buttonArray.map( (eachbutton)=>{

//           const {text,width,height,bgColor,id}=eachbutton

//           return(

//             <ButtonNew 
//             key={id} 
            
//             text={text} bgColor={bgColor} buttonProperties={
//               {
//                 width:width,
//                 height:height
//               }
//             }/>
//           )

//         })
//       }
      
//     </div>


//   )
// }

// export default App



const App = () => {

  return(
    <div>

      <GreetingComponent>

        <>

        <ImageComponent

        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        
        />
        

        <h1>hello ravi good morning</h1>
        <h1>hello ravi how are you?</h1>
        </>
      </GreetingComponent>


      <GreetingComponent>

        <>

        <ImageComponent

      src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
        
        />
        <h1>hello sharath good morning</h1>
        <h1>hello sharath how are you?</h1>
        </>
      </GreetingComponent>

      
    </div>


  )
}

export default App









