import logofooter from '../../assets/assets/logo-footer.png'

const Footer = () => {
    return (
        <div className='bg-[#060919] lg:h-[700px] h-[850px] pt-5 lg:mt-[-180px] lg:pt-[220px] z-0 relative px-10'>
            <div className='flex justify-center'>
                <img src={logofooter} alt="" />
            </div>
            <div className='max-w-screen-xl mx-auto lg:flex lg:justify-between'>
                <div className='text-white mt-10'>
                    <h4 className='text-[18px] font-semibold mb-5'>About Us</h4>
                    <p className='text-[12px] font-thin'>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                </div>

                <div className='text-white mt-10'>
                    <h4 className='text-[18px] font-semibold mb-5'>Quick Links</h4>
                    <ul className='space-y-2'>
                        <li className='text-[12px] font-thin'>Home</li>
                        <li className='text-[12px] font-thin'>Services</li>
                        <li className='text-[12px] font-thin'>About</li>
                        <li className='text-[12px] font-thin'>Contact</li>
                    </ul>
                </div>

                <div className='text-white mt-10'>
                    <h4 className='text-[18px] font-semibold mb-5'>Subscribe</h4>
                    <p className='text-[12px] font-thin mb-5'>Subscribe to our newsletter for the <br /> latest updates.</p>
                    <div className='flex  '>
                        <input type="text" placeholder="Enter your email" className="p-3 text-black rounded-l-lg input-bordered w-full max-w-xs" />
                        <button className='bg-gradient-to-r from-orange-300 to-pink-300 px-5 rounded-r-lg'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='my-10'>
                < hr />
            </div>
            <div className='flex justify-center'>
                <p className='text-white text-[18px] font-light'>@2024 Your Company All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;