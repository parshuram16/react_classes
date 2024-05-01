





// const ListItems=()=>{

//     const iplTeams=["RCB","SRH","CSK"]

//     const iplHistory=[

//         {
//             name:"Rcbians",
//             winningHistory:[],
//             teamPlayers:["vk","dk"]
//         },
//         {
//             name:"hyderabad",
//             winningHistory:[2006,2009],
//             teamPlayers:["klassen","abhishek"]
//         }
//     ]

//     return(

//         <>
//             <li className="listItem">{iplHistory[0].name}</li>
//             <li className="listItem">{iplTeams[1]}</li>
//             <li className="listItem">{iplTeams[2]}</li>
        
//         </>
//     )
// }

// export default ListItems


//map

// import React from "react"


// const ListItems=()=>{

//     const iplTeams=["RCB","SRH","CSK"]

//     return(

//         <React.Fragment>

//             {
//                 iplTeams.map( (value)=>{

//                     return(

//                         <>

//                         <h3>{value}</h3>

//                         </>
//                     )

//                 })
//             }       
//         </React.Fragment>
//     )
// }

// export default ListItems


//map

// import React from "react"


// const ListItems=()=>{

//     const iplTeams=["RCB","SRH","CSK"]

//     return(

//         <React.Fragment>

//             {
//                 iplTeams.map( value=><>
//                         <h3>{value}</h3>
//                         </>
                

//                 )
//             }       
//         </React.Fragment>
//     )
// }

// export default ListItems


// import React from "react"


// const ListItems=()=>{

//     const iplHistory=[

//                 {
//                     name:"Rcbians",
//                     winningHistory:[],
//                     teamPlayers:["vk","dk"]
//                 },
//                 {
//                     name:"hyderabad",
//                     winningHistory:[2006,2009],
//                     teamPlayers:["klassen","abhishek"]
//                 }
//             ]

//     return(

//         <React.Fragment>

//             {
//                 iplHistory.map( value=><>
//                         <h3>{value.name}</h3>

//                         {
//                             value.teamPlayers.map( (player)=>{

//                                 return(
//                                 <>

//                                 <h4>{player}</h4>
                                
//                                 </>

//                                 )


//                             })
//                         }
//                         </>
                

//                 )
//             }       
//         </React.Fragment>
//     )
// }

// export default ListItems


// import React from "react"


// const ListItems=()=>{

//     const iplHistory=[

//                 {
//                     name:"Rcbians",
//                     winningHistory:[],
//                     teamPlayers:["vk","dk"]
//                 },
//                 {
//                     name:"hyderabad",
//                     winningHistory:[2006,2009],
//                     teamPlayers:["klassen","abhishek"]
//                 },
//                 {
//                     name:"CSK",
//                     winningHistory:[2006,2009],
//                     teamPlayers:["klassen","abhishek"]
//                 },
//                 {
//                     name:"GT",
//                     winningHistory:[2006,2009],
//                     teamPlayers:["klassen","abhishek"]
//                 }
//             ]

//     return(

//         <React.Fragment>

//             {
//                 iplHistory.map( (value,index)=><>
//                         <h3>{index+1} . {value.name}</h3>

//                         {
//                             value.teamPlayers.map( player=><>
//                             <p>{player}</p>
//                                 </>


//                             )
//                         }
//                         </>
                

//                 )
//             }       
//         </React.Fragment>
//     )
// }

// export default ListItems




// import React from "react"


// const ListItems=()=>{

//     const iplHistory=[

//                 {
//                     name:"Rcbians",
//                     totalScore:1000,
//                     winningHistory:[],
//                     teamPlayers:["vk","dk"]
//                 },
//                 {
//                     name:"hyderabad",
//                     totalScore:500,
//                     winningHistory:[2006,2009],
//                     teamPlayers:["klassen","abhishek"]
//                 }
                
//             ]

//     return(

//         <React.Fragment>

//             {
//                 iplHistory.map( (value,index)=><>
//                         {value.totalScore>800 && <><h3>{index+1} . {value.name}</h3>

//                         {
//                             value.teamPlayers.map( player=><>
//                             <p>{player}</p>
//                                 </>
//                             )
//                         }
//                         </>
//                     }
//                         </>
                
//                 )
//             }       
//         </React.Fragment>
//     )
// }

// export default ListItems



// import React from "react"


// const ListItems=()=>{

//     const iplHistory=[

//                 {
//                     name:"Rcbians",
//                     totalScore:1000,
//                     winningHistory:[],
//                     teamPlayers:["vk","dk"]
//                 },
//                 {
//                     name:"hyderabad",
//                     totalScore:900,
//                     winningHistory:[2006,2009],
//                     teamPlayers:["klassen","abhishek"]
//                 }
                
//             ]

//     return(

//         <React.Fragment>

//             {
//                 iplHistory.map( (value,index)=><>
//                         {value.totalScore>800 ? <><h3>{index+1} . {value.name}</h3>

//                         {
//                             value.teamPlayers.map( player=><>
//                             <p>{player}</p>
//                                 </>
//                             )
//                         }
//                         </>
//                         :null
//                     }
//                         </>
                
//                 )
//             }       
//         </React.Fragment>
//     )
// }

// export default ListItems


import React from "react"


const ListItems=()=>{

    const iplHistory=[

                {
                    name:"Rcbians",
                    totalScore:1000,
                    winningHistory:[],
                    teamPlayers:["vk","dk"]
                },
                {
                    name:"hyderabad",
                    totalScore:900,
                    winningHistory:[2006,2009],
                    teamPlayers:["klassen","abhishek"]
                }
                
            ]

    return(

        <React.Fragment>

            {
                iplHistory.map( (value,index)=>
                
                {
                    const {totalScore,name,teamPlayers}=value
                    
                    return(<>
                        {totalScore>800 ? <><h3>{index+1} . {name}</h3>

                        {
                            teamPlayers.map( player=><>
                            <p>{player}</p>
                                </>
                            )
                        }
                        </>
                        :null
                    }
                        </>
                )
            }
                
                )
            }       
        </React.Fragment>
    )
}

export default ListItems












