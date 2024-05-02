

import CardFake from "./tasks/task-01-05-24/cardfake"
import { FakedataArray } from "./tasks/task-01-05-24/fakedata"



const App = () => {

  return(
    <div>

    {

  FakedataArray.map( (data)=>{

    const {title,price,image,id}=data

    return(

      <>

      <CardFake id={id} title={title} price={price} image={image}/>
      
      </>
    )

  })

    }

    </div>


  )
}

export default App













