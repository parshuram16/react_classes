import Counter from "./components/class/counter/counter"
import ButtonNew from "./components/functional/button1/button1"
import { buttonArray } from "./constants/buttonData"






// const App = () => {

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

     <Counter/> 
    </div>


  )
}

export default App













