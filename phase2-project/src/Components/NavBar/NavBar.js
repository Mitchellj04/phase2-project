import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
        <div className="navleft"><a href='https://www.instagram.com/live.lifeandtravel/?hl=en'><i className="fa-brands fa-instagram"></i></a></div>
        <div className='navcenter'>
            <ul className='navlist'>
                <li className='navlistitem'>HOME</li>
                <li className='navlistitem'>ABOUT</li>
                <li className='navlistitem'>CREATE</li>
                <li className='navlistitem'>CONTACT</li>
            </ul>
        </div>
        <div className='navright'>
            <i className=" navsearch fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default NavBar