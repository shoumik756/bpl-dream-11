/* eslint-disable react/jsx-key */

/* eslint-disable react/prop-types */


const Selected = ({ selected,handleIsActiveState,handleDelete }) => {


    return (
        <div className="text-[25px] font-bold lg:-mt-[43px] mt-5 ">
            <h1 className="ml-5">Selected Player ({selected.length}/6)</h1>


            <div className="mt-20 space-y-5 p-5">
                {
                    selected.map((player) => (
                        <div className="border-2 rounded-2xl p-5 flex justify-between">
                            <div className="flex items-center gap-5">
                                <div>
                                    <img className="w-[80px] h-[80px] rounded-2xl" src={player.image} alt="" />
                                </div>
                                <div>
                                    <h2 className="text-[24px] font-semibold">{player.name}</h2>
                                    <div className="flex gap-5">
                                        <p className="text-[16px] font-normal">{player.role}</p>
                                        <p className="text-[16px] font-normal">$ {player.biddingPrice}</p>
                                    </div>
                                </div>
                            </div>
                            <button onClick={()=> handleDelete(player.playerId)}><i className="fa-solid fa-trash text-red-600"></i></button>
                        </div>
                    ))
                }
                <div>
                    <div className='border-2 p-2 w-[300px] border-[#E7FE29] flex justify-center mt-10 items-center rounded-xl'>
                        <button onClick={()=> handleIsActiveState('available')} className="bg-[#E7FE29] text-[#131313] font-bold w-[284px] h-[48px] rounded-xl">Add More Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Selected;