

import ButtonComponent from "./components/functional/button/button.js"
import ImageComponent from "./components/functional/image/image.js"
import TableComponent from "./components/functional/tables/tables.js"
import ListComponent from "./components/functional/lists/lists.js"
import FormComponent from "./components/functional/forms/forms.js"
import CardComponent from "./components/functional/cards/cards.js"
import ListnewComponent from "./components/functional/listnew/list-component.js"
import OrderList from "./components/functional/listnew/ordered.list.js"


const App = () => {

  return(
    <div>

      <h2>hello world</h2>
      <ListnewComponent/>
      <OrderList/>
      
    </div>


  )
}

export default App

