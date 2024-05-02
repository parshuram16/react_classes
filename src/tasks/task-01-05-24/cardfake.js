



const CardFake=(props)=>{

    console.log(props)

    const {title,price,image}=props



    return(
        
        <div className="card-container">

        <div className="card" style={{width: 500}}>

      
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{price}</p>
        <img src={image} alt="img" height={100} width={100}/>
      </div>
    </div>

    </div>
    
        )



}

export default CardFake