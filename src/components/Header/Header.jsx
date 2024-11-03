/* eslint-disable react/prop-types */
import logo from '../../assets/assets/logo.png'
import './Header.css'

const Header = ({ coin }) => {
    return (
        <div className='header mb-20'>
            <div className='max-w-screen-xl mx-auto my-5'>
                <div className="navbar">
                    <div className="navbar-start">
                        <img className='w-[60px] h-[60px]' src={logo} alt="" />
                    </div>
                    <div className="navbar-end">
                        <ul className="menu lg:menu-horizontal px-1">
                            <li><a>Home</a></li>
                            <li><a>Fixture</a></li>
                            <li><a>Teams</a></li>
                            <li><a>Schedules</a></li>
                        </ul>
                        <a className="btn">{coin} Coin <i className="fa-solid fa-dollar-sign bg-yellow-400 w-5 h-5 flex justify-center items-center rounded-full"></i></a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;