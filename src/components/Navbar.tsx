import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from "../assets/New-logo-png1.png"

const Navbar = () => {
  return (
    <div className='flex px-5 py-3 justify-between bg-[white]  ' >
      <div className=""> <img src={logo } className='w-[11em] ' alt="" /> </div>
      <div className=""> <FontAwesomeIcon icon={faBars } className=' text-[1.3em] mt-2 ' /></div>
    </div>
  )
}

export default Navbar
