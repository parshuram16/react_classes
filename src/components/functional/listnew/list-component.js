
import ListItems from "./list-items"


const ListnewComponent = ()=>{

    
    const IndianLeague="INDIAN PREMIER LEAGUE"
    const ImageUrl = "https://img.freepik.com/free-vector/red-ball-hitting-wicket-stumps-with-bat-black-abstract-splash-background-cricket-fever-concept_1302-5492.jpg?t=st=1714378888~exp=1714382488~hmac=cb61d1a178150dbe793fc1987ffba096a979468d2880f54b4d660a727f22a6c1&w=740"

    const dimensions={
        height:100,
        width:100

    }

    return(

        <div>
        <h3>{IndianLeague}</h3>

        <img src={ImageUrl} alt="img" height={dimensions.height} width={dimensions.width} ></img>
        <button onClick={()=>{}}>click me</button>

        <ul>
            <ListItems/>

            

        </ul>
        </div>
    )
}

export default ListnewComponent










