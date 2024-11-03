/* eslint-disable react/prop-types */
 
import { useEffect, useState } from "react";
import AvailableSingle from "./AvailableSingle";

const Available = ({handleSelected}) => {
    const [players, setPlayers] = useState([])
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])

    return (
        <div className="text-[25px] font-bold lg:-mt-[43px] mt-5">
            <h1 className="ml-5">Available Players</h1>

{/* <h1>players: {players.length}</h1> */}
            <div className="lg:mt-[80px] lg:grid lg:grid-cols-3 gap-5">
                
                {
                    players.map(player=><AvailableSingle className="grid grid-cols-3" key={player.playerId} player={player} handleSelected={handleSelected}></AvailableSingle>)
                }
            </div>
        </div>
    );
};

export default Available;