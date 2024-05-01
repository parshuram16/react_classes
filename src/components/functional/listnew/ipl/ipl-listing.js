


const IplTeamListing = ()=>{


    const iplTeams=[
  
        {
          
          name:"SRH",
          teamPlayers:[
            
            {
              
              playerName:"head",
              playerImage:"",
              height:6
            },
            
            {
              
              playerName:"cummins",
              playerImage:"",
              height:7
            }
            
            
            ]
          
        },
        
        {
          
          name:"MI",
          teamPlayers:[
            
            {
              
              playerName:"rohit",
              playerImage:"",
              height:5
            },
            
            {
              
              playerName:"hardik",
              playerImage:"",
              height:6
            }
            
            
            ]
          
        }
        
        ]

        return(

          <>

          <h1>IPL 2024 TEAMS</h1>

          {
            iplTeams.map( (team)=>{
              return(

                <>

                <h2>{team.name}</h2>

                {
                  team.teamPlayers.map( (eachplayer)=>{

                    const {playerName,height,playerImage}=eachplayer

                    return(

                      <>

                      <p>{`${playerName} and his height is ${height}`}</p>

                      {/* <h3>{playerName}</h3>
                      <h3>{height}</h3>
                       */}
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

      export default IplTeamListing