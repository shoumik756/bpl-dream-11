

const Newsletter = () => {
    return (
        <div className='max-w-screen-xl mx-auto mt-20 relative z-10 '>
            <div className="border-2 p-5 rounded-2xl ">
                <div className="bg-gradient-to-r from-blue-100 via-white-100 to-orange-100 space-y-5 lg:flex lg:justify-center lg:items-center grid lg:flex-col
                lg:py-[88px] lg:px-[200px] p-10 rounded-2xl">
                    <h2>Subscribe to our Newsletter</h2>
                    <p>Get the latest updates and news right in your inbox!</p>
                    <div className="flex gap-5">
                        <input type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
                        <button className='bg-gradient-to-r from-orange-300 to-pink-300 px-5 btn rounded-r-lg'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;