





const ListItems=()=>{

    const iplTeams=["RCB","SRH","CSK"]

    const iplHistory=[

        {
            name:"Rcbians",
            winningHistory:[],
            teamPlayers:["vk","dk"]
        },
        {
            name:"hyderabad",
            winningHistory:[2006,2009],
            teamPlayers:["klassen","abhishek"]
        }
    ]

    return(

        <>
            <li className="listItem">{iplHistory[0].name}</li>
            <li className="listItem">{iplTeams[1]}</li>
            <li className="listItem">{iplTeams[2]}</li>
        
        </>
    )
}

export default ListItems