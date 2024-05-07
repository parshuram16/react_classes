import ImageComponent from "../image/image"



const CardNew=(props)=>{

  console.log(props)

  const {title,description,image}=props.product


    return(

    <div className="card" style={{ width: 400 }}>
      
      <ImageComponent src={image}/>
  
  <div className="card-body">
    <h4 className="card-title">{title}</h4>
    <p className="card-text">{description}</p>
    
  </div>
</div>

    )
}

export default CardNew