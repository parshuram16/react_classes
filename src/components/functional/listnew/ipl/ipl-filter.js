



const IplFilter=()=>{

    const iplTeams = [
  
        {
          name:"hyd",
          winningCount:2,
          teamPlayers:[
            {
              name:"klasen"
            }
            
            ]
        },
        
        {
          name:"mumbai",
          winningCount:6,
          teamPlayers:[
            {
              name:"rohit"
            }
            
            ]
        },
        
        {
          name:"rcb",
          winningCount:6,
          teamPlayers:[
            {
              name:"kohli"
            }
            
            ]
        },
        
        {
          name:"chennai",
          winningCount:5,
          teamPlayers:[
            {
              name:"dhoni"
            }
            
            ]
        },
        ]
        

        const filterData=(iplTeams)=>{
    
            return iplTeams.filter( eachTeam=>eachTeam.winningCount>=5)
            
            
          }


          const winningCountSum=(iplTeams)=>{
    
    
            const result = iplTeams.reduce( (a,b)=>a+b.winningCount,0)
            
            return result
          }
        
        return(

            <>

            <h1>by using filter</h1>
            <h4>Total winningcounts {winningCountSum(iplTeams)}</h4>

            {

                filterData(iplTeams).map( (eachTeam)=>{

                    return(

                        <>

                        <h3>{eachTeam.name}</h3>

                        {
                            eachTeam.teamPlayers.map( (player)=>{

                                const {name}=player

                                return(

                                    <>

                                    <p>{name}</p>
                                    
                                    
                                    </>
                                )
                            })
                        }
                        
                        
                        </>
                    )

                })
            }
            
            
            </>
        )



}

export default IplFilter