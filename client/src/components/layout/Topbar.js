import React from 'react';
import '../../styles/Topbar.css';
import { FiSearch, FiBell, FiUser } from 'react-icons/fi';

const Topbar = () => {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <div className="topbar-search">
          <FiSearch />
          <input type="text" placeholder="Tìm kiếm thuốc, đơn hàng..." />
        </div>
      </div>
      <div className="topbar-right">
        <button className="topbar-icon">
          <FiBell />
        </button>
        <div className="topbar-shop-name"> 
          <p className='name'>Cua hang so 1</p>
          <p>Đang hoạt động</p>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
