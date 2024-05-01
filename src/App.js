

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



const App = () => {

  return(
    <div>


      <NavBar/>
      <ModelComponent/>
      <CardNew/>
      <TableNew/>

      <CircleSpinner/>

      {/* <Mainheading/>
      <SubHeading/>
      <Miniheading/> */}


      {/* <IplTeamListing/>

      <IplFilter/> */}

      {/* <h2>hello world</h2>
      <ListItems/> */}

      {/* <ListnewComponent/>
      <OrderList/> */}

      {/* <ButtonComponent/> */}

      {/* <Button/>

      <Heading/> */}


      
    </div>


  )
}

export default App



