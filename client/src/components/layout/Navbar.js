import React from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../actions/auth';
import '../../styles/Sidebar.css'
// icon imports
import { FiMenu, FiHome, FiBox, FiShoppingCart, FiDollarSign, FiBarChart2, FiSettings, FiLogOut, FiLogIn, FiUserPlus, FiPlusCircle } from 'react-icons/fi';

// simple set of menu items; adjust paths/icons as needed
const menuItems = [
  { to: '/', label: 'Bảng điều khiển', icon: <FiHome /> },
  { to: '/warehouse', label: 'Kho hàng', icon: <FiBox /> },
  { to: '/pos', label: 'Điểm bán hàng (POS)', icon: <FiShoppingCart /> },
  { to: '/purchases', label: 'Thu mua', icon: <FiDollarSign /> },
  { to: '/reports', label: 'Báo cáo', icon: <FiBarChart2 /> },
  { to: '/settings', label: 'Cài đặt', icon: <FiSettings /> },
];

const Navbar = () => {
    const dispatch = useDispatch()
    const {isAuthenticated, loading} = useSelector(state => state.auth)

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const toggleMobile = () => setMobileOpen(!mobileOpen);

    const handleLogout = () => {
        dispatch(logout())
    }

    const authLinks = (
        <ul>
            <li>
              <button onClick={handleLogout}><span className="icon"><FiLogOut /></span>Đăng xuất</button>
            </li>
        </ul>
    );
    const guestLinks = (
        <ul>
            <li><NavLink to='/register' className={({isActive})=>isActive? 'active' : ''}><span className="icon"><FiUserPlus /></span>Đăng ký</NavLink></li>
            <li><NavLink to='/login' className={({isActive})=>isActive? 'active' : ''}><span className="icon"><FiLogIn /></span>Đăng nhập</NavLink></li>
        </ul>
    );

    return (
        <>
          <button className="mobile-toggle" onClick={toggleMobile} aria-label="Toggle menu">
            <FiMenu />
          </button>
          <nav className={"sidebar" + (mobileOpen ? " open" : "")}>
              <div className="brand">
                <div className="brand-icon"><FiPlusCircle /></div>
                <div className="brand-text">
                  <p className="logo">MedicCare</p>
                  <p>Quản trị viên</p>
                </div>
              </div>
              <ul>
                {menuItems.map(item => (
                  <li key={item.to}>
                    <NavLink to={item.to} className={({isActive})=>isActive? 'active' : ''} onClick={()=>setMobileOpen(false)}>
                      <span className="icon">{item.icon}</span>
                      <span className="label">{item.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
              {!loading && (
                  <div className="auth-section">
                      {isAuthenticated ? authLinks : guestLinks}
                  </div>
              )}
          </nav>
        </>
    )
}

export default Navbar
