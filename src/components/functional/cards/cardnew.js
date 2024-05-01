import ImageComponent from "../image/image"



const CardNew=()=>{



    return(

    <div className="card" style={{ width: 400 }}>
      
      <ImageComponent/>
  
  <div className="card-body">
    <h4 className="card-title">John Doe</h4>
    <p className="card-text">Some example text.</p>
    <a href="#" className="btn btn-primary">
      See Profile
    </a>
  </div>
</div>

    )
}

export default CardNew