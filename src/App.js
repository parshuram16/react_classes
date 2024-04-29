

import ButtonComponent from "./components/functional/button/button.js"
import ImageComponent from "./components/functional/image/image.js"
import TableComponent from "./components/functional/tables/tables.js"
import ListComponent from "./components/functional/lists/lists.js"
import FormComponent from "./components/functional/forms/forms.js"
import CardComponent from "./components/functional/cards/cards.js"

const App = () => {

  return(
    <div>

      <h2>hello world</h2>
      <ImageComponent/>
      <ButtonComponent/>
      <ImageComponent/>
      <ButtonComponent/>
      <ImageComponent/>
      <ButtonComponent/>
      <ImageComponent/>
      <ButtonComponent/>
      <br/><br/><br/><br/>
      <h4>Tables:</h4>
      <TableComponent/>

      <br/><br/><br/><br/>
      <h4>Lists:</h4>
      <ListComponent/>

      <br/><br/><br/><br/>
      <h4>Forms:</h4>
      <FormComponent/>


      <br/><br/><br/><br/>
      <h4>Cards:</h4>
      <CardComponent/>



    </div>


  )
}

export default App

