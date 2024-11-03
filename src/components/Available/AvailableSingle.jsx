/* eslint-disable react/prop-types */


const AvailableSingle = ({ player,handleSelected }) => {
     
    
    
    const {image, name,country, role,battingType,bowlingType,biddingPrice} = player;
  
    return (
        <div >
            <div className="">
                {/* <h1>Name:{player.name}</h1> */}
                <div className="card border p-5">
                    <div>
                        <img className="w-full h-[200px] rounded-2xl" src={image} alt="" />
                    </div>
                    <div className="">
                        <div className="flex mt-5 gap-3">
                            <i className="fa-solid fa-user"></i> <p className="text-[20px] font-semibold">{name}</p>
                        </div>
                        <div className="flex my-5 justify-between items-center">
                            <div className="flex gap-3">
                                <i className="fa-regular fa-flag"></i> <p className="text-[16px] font-normal text-[#131313]">{country}</p>
                            </div>
                            <div className="border-2 py-2 px-3 rounded-2xl bg-slate-100">
                                <p className="text-[16px] font-normal text-[#131313]">{role}</p>
                            </div>
                        </div>
                        <hr />
                        <h4 className="mt-5 text-[18px] font-semibold">Rating</h4>
                        <div className="flex my-5 justify-between items-center">
                            <div className="flex gap-3">
                                <p className="text-[16px] font-semibold text-[#131313]">{battingType}</p>
                            </div>
                            <div className="">
                                <p className="text-[16px] font-normal text-[#131313]">{bowlingType}</p>
                            </div>
                        </div>
                        <div className="flex my-5 justify-between items-center">
                            <div className="flex gap-3">
                                <p className="text-[16px] font-semibold text-[#131313]">${biddingPrice}</p>
                            </div>
                            <div>
                                <button onClick={()=>handleSelected(player)} className="btn text-[16px] font-normal text-[#131313]">Choose Player</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AvailableSingle;