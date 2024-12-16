import Wrapper from "../assets/wrappers/Navbar"
import { FaAlignLeft } from 'react-icons/fa'
import Logo from "./Logo"
import { useDashbaordContext } from "../pages/DashboardLayout"

const Navbar = () => {
  const { toggleSidebar } = useDashbaordContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="butotn" className="toggle-btn"
          onClick={toggleSidebar}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className="logo-text">Dashboard</h4>
        </div>
        <div className="btn-container">
          Toggle/Logout
        </div>
      </div>
    </Wrapper>
  )
}
export default Navbar