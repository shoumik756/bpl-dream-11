/* eslint-disable react/prop-types */
import banner from '../../assets/assets/banner-main.png'

const Banner = ({claimFreeCredit}) => {
    return (
        <div className='max-w-screen-xl mx-auto lg:mt-[120px] mt-[220px] lg:p-0 p-5'>
            <div
                className="hero min-h-[500px] bg-black rounded-2xl "
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/WVDJtN4/bg-shadow.png)",
                }}>
                <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="">
                        <div className='flex justify-center items-center' >
                            <img className='w-[200px] h-[200px] mb-5' src={banner} alt="" />
                        </div>
                        <h1 className='text-4xl font-bold mb-5'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="mb-5">
                            Beyond Boundaries Beyond Limits
                        </p>
                        <div className='flex justify-center items-center '>
                            <div className='border-2 p-2 w-[200px] border-[#E7FE29] flex justify-center items-center rounded-xl'>
                                <button onClick={()=>claimFreeCredit()} className="bg-[#E7FE29]  text-[#131313] font-bold w-[184px] h-[48px] rounded-xl">Claim Free Credit</button>
                            </div>
                        </div>
                        {/* <button className="bg-[#E7FE29] border-2 border-rose-500 text-[#131313] font-bold w-[184px] h-[48px] ">Claim Free Credit</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;